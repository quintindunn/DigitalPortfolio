import Image from "next/image";
import Subheading from "./Subheading";
import styles from "./Skills.module.css"

function Skill(props: {alt: string, img_src: string}) {
    return (
        <div className={styles.skill}>
            <Image src={props.img_src} alt={props.alt} width={86} height={86} />
        </div>
    );
}

export default function Skills() {
    return (
        <div id={"skills"}>
                <Subheading name={"Skills"}/>
                <div className="grid grid-cols-3 sm:grid-cols-6 gap-4">
                        <Skill alt={"Python 3"} img_src={"/skills/python.png"} />
                        <Skill alt={"Django"} img_src={"/skills/django.png"}/>
                        <Skill alt={"Flask"} img_src={"/skills/flask.png"}/>
                        <Skill alt={"Selenium"} img_src={"/skills/selenium.png"}/>
                        <Skill alt={"PyGame"} img_src={"/skills/pygame.png"}/>
                        <Skill alt={"Postgres"} img_src={"/skills/postgres.png"}/>
                        <Skill alt={"JavaScript"} img_src={"/skills/javascript.png"}/>
                        <Skill alt={"TypeScript"} img_src={"/skills/typescript.png"}/>
                        <Skill alt={"C"} img_src={"/skills/c.png"}/>
                        <Skill alt={"C++"} img_src={"/skills/cpp.png"}/>
                        <Skill alt={"Java"} img_src={"/skills/java.png"}/>
                        <Skill alt={"Linux"} img_src={"/skills/linux.png"}/>
                </div>
        </div>
    );
}