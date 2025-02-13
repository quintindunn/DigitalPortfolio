import Heading from "@/app/components/Heading"
import SocialLinks from "@/app/components/SocialLinks"
import Projects from "@/app/components/Projects"
import Spacer from "@/app/components/Spacer"
import Skills from "@/app/components/Skills"
import Hobbies from "@/app/components/Hobbies"
import Contact from "@/app/components/Contact"

import lang from "@/app/lang"

export default function Home() {
  return (
    <div className="scrollbar-hide grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
          <Heading name={lang.heading.name}/>
          <Spacer size={500} />

          <Skills />
          <Spacer size={100} />
          <Projects />
          <Spacer size={100} />
          {/*<Experience />*/}
          <Spacer size={100} />
          <Hobbies />
          <Spacer size={100} />
          <Contact />
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
          <SocialLinks />
      </footer>
    </div>
  );
}
