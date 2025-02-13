import Heading from "./components/Heading"
import SocialLinks from "./components/SocialLinks"
import Projects from "./components/Projects"
import Spacer from "./components/Spacer"
import Skills from "./components/Skills"
import Hobbies from "./components/Hobbies"

export default function Home() {
  return (
    <div className="scrollbar-hide grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
          <Heading name={"Quintin Dunn"}/>
          <SocialLinks />
          <Spacer size={500} />

          <Skills />
          <Spacer size={100} />
          <Projects />
          <Spacer size={100} />
          {/*<Experience />*/}
          <Spacer size={100} />
          <Hobbies />
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
          <SocialLinks />
      </footer>
    </div>
  );
}
