
import About from "@/components/About";
import Cta from "@/components/Cta";
import Hero from "@/components/Hero";
import Reviews from "@/components/Reviews";
import Services from "@/components/Services";
import Work from "@/components/ui/Work";
import Schedulemeeting from "@/components/Schedulemeeting";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Services />
      <Work />
      <Schedulemeeting />
      <Cta />
      <Reviews />
      
      
    </main>
  );
}
