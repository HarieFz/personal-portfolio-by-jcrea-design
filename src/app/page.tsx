import About from "./components/About";
import Blog from "./components/Blog";
import ContactCTA from "./components/ContactCTA";
import Experience from "./components/Experience";
import Hero from "./components/Hero";
import Project from "./components/Project";
import Service from "./components/Service";
import TagScroller from "./components/TagScroller";
import Testimonial from "./components/Testimonial";

export default function Home() {
  return (
    <>
      <Hero />
      <Service />
      <Experience />
      <About />
      <Project />
      <Testimonial />
      <ContactCTA />
      <TagScroller />
      <Blog />
    </>
  );
}
