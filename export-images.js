require("dotenv").config();

const axios = require("axios");
const { createObjectCsvWriter } = require("csv-writer");

const ACCOUNT_ID = process.env.ACCOUNT_ID;
const API_TOKEN = process.env.API_TOKEN;

if (!ACCOUNT_ID || !API_TOKEN) {
    console.error("❌ ACCOUNT_ID or API_TOKEN missing in .env");
    process.exit(1);
}

const csvWriter = createObjectCsvWriter({
    path: "cloudflare-images.csv",
    header: [
        { id: "id", title: "id" },
        { id: "name", title: "name" },
        { id: "url", title: "url" },
        { id: "original_file_name", title: "original_file_name" }
    ]
});

async function fetchAllImages() {

    let page = 1;
    const perPage = 100;

    const rows = [];

    while (true) {

        console.log(`📦 Fetching page ${page}...`);

        const response = await axios.get(
            `https://api.cloudflare.com/client/v4/accounts/${ACCOUNT_ID}/images/v1`,
            {
                headers: {
                    Authorization: `Bearer ${API_TOKEN}`
                },
                params: {
                    page,
                    per_page: perPage
                },
                timeout: 30000
            }
        );

        if (!response.data.success) {
            throw new Error(JSON.stringify(response.data.errors));
        }

        const images = response.data.result.images || [];

        if (images.length === 0)
            break;

        for (const img of images) {

            rows.push({

                id: img.id || "",

                name:
                    img.filename ||
                    img.meta?.filename ||
                    img.meta?.name ||
                    "",

                url:
                    Array.isArray(img.variants) && img.variants.length
                        ? img.variants[0]
                        : "",

                original_file_name:
                    img.meta?.original_filename ||
                    img.meta?.filename ||
                    img.filename ||
                    ""

            });

        }

        if (images.length < perPage)
            break;

        page++;
    }

    return rows;
}

(async () => {

    console.log("");
    console.log("==================================");
    console.log("Cloudflare Images CSV Export");
    console.log("==================================");
    console.log("");

    try {

        const rows = await fetchAllImages();

        await csvWriter.writeRecords(rows);

        console.log("");
        console.log("✅ Export Complete");
        console.log("-----------------------------");
        console.log(`Images Exported : ${rows.length}`);
        console.log(`Output File     : cloudflare-images.csv`);
        console.log("-----------------------------");

    } catch (err) {

        console.error("");
        console.error("❌ Export Failed");

        if (err.response) {
            console.error(err.response.data);
        } else {
            console.error(err.message);
        }

    }

})();