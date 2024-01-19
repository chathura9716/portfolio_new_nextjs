import Encryption from "@/components/main/Encryption";
import Hero from "@/components/main/Hero";
import Projects from "@/components/main/Projects";
import Skills from "@/components/main/Skills";
import WorkExpereinnceMain from "@/components/main/WorkExpereinnceMain";

export default function Home() {
  return (
    <main className="h-full w-full">
      <div className="flex flex-col gap-10 ">
        <Hero />
        <WorkExpereinnceMain/>

        <Skills/>
        {/* <Encryption/> */}
        <Projects/>
      </div>
    </main>
  );
}
