import About from "./components/about";
import ContactCTA from "./components/contact-cta";
import Experience from "./components/experience";
import Hero from "./components/hero";
import Project from "./components/project";
import Service from "./components/service";
import TagScroller from "./components/tag-scroller";
import Testimonial from "./components/testimonial";

export default function Home() {
  return (
    <main>
      <Hero />
      <Service />
      <Experience />
      <About />
      <Project />
      <Testimonial />
      <ContactCTA />
      <TagScroller />
    </main>
  );
}
