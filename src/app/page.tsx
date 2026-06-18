// import Awards from "@/components/Awards";
// import Team from "@/components/Team";
import Hero from "../components/Hero";
import Introduction from "../components/Introduction";
import Services from "../components/Services";
import Clients from "../components/Clients";
import Principles from "../components/Principles";
import Portfolio from "../components/Portfolio";
import Testimonials from "../components/Testimonials";
import Blog from "../components/Blog";


export default function Home() {
  return (
    <>
      <Hero />
      <Clients />
      <Introduction />
      <Services />
      <Portfolio />
      <Principles />
      {/* <Awards /> */}
      {/* <Team /> */}
      <Testimonials />
      <Blog />
    </>
  );
}
