import Heading from "@/app/components/portfolio/Heading"
import SocialLinks from "@/app/components/portfolio/SocialLinks"
import Projects from "@/app/components/portfolio/Projects"
import Spacer from "@/app/components/portfolio/Spacer"
import Skills from "@/app/components/portfolio/Skills"
import Hobbies from "@/app/components/portfolio/Hobbies"
import Contact from "@/app/components/portfolio/Contact"
import About from "@/app/components/portfolio/About"

import lang from "@/app/lang"
import TimeMachine from "@/app/components/portfolio/TimeMachine";
import Computer, {ComputerProvider} from "@/app/components/computer/Computer";

export default function Home() {
  return (
    <div className="scrollbar-hide grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
          <div style={{display: "flex", justifyContent: "space-between", flexDirection: "column", alignItems: "center"}}>
              <Heading name={lang.heading.name}/>
              <Spacer size={500} />

              <About />
              <Spacer size={100} />
              <Skills />
              <Spacer size={100} />
              <Projects />
              <Spacer size={100} />
              {/*<Experience />*/}
              <Spacer size={100} />
              <Hobbies />
              <Spacer size={100} />
              <ComputerProvider>
                <TimeMachine />
                <Spacer size={100} />
                <Contact />
                <Computer />
              </ComputerProvider>
          </div>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
          <SocialLinks />
      </footer>
    </div>
  );
}
