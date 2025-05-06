import About from "./components/about";
import Experience from "./components/experience";
import Hero from "./components/hero";
import Service from "./components/service";

export default function Home() {
  return (
    <main>
      <Hero />
      <Service />
      <Experience />
      <About />
    </main>
  );
}
