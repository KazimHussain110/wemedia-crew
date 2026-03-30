import Hero from "@/components/Hero";
import Introduction from "@/components/Introduction";
import Services from "@/components/Services";
import Principles from "@/components/Principles";
import Awards from "@/components/Awards";
import Team from "@/components/Team";
import Testimonials from "@/components/Testimonials";
import Clients from "@/components/Clients";
import Blog from "@/components/Blog";
import Portfolio from "@/components/Portfolio";


export default function Home() {
  return (
    <>
      <Hero />
      <Clients />
      <Introduction />
      <Services />|
       <Portfolio />
      <Principles />
      {/* <Awards /> */}
      {/* <Team /> */}
      <Testimonials />
      <Blog />
    </>
  );
}
