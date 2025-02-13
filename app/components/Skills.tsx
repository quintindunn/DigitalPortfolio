import Image from "next/image";

import Subheading from "@/app/components/Subheading";

import lang from "@/app/lang"
import styles from "@/app/components/Skills.module.css";

function Skill(props: {alt: string, img_src: string}) {
    return (
        <div className={styles.skill}>
            <div className={styles.flipCard}>
                <div className={styles.flipCardInner}>
                    <div className={styles.flipCardFront}>
                        <Image src={props.img_src} alt={props.alt} width={86} height={86} />
                    </div>
                    <div className={styles.flipCardBack}>
                        <h1 className={"font-semibold"}>{props.alt}</h1>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default function Skills() {
    return (
        <div id={"skills"}>
            <Subheading name={lang.skills.subheading}/>
            <div className="grid grid-cols-3 sm:grid-cols-6 gap-4">
                <Skill alt={lang.skills.python} img_src={"/skills/python.png"}/>
                <Skill alt={lang.skills.django} img_src={"/skills/django.png"}/>
                <Skill alt={lang.skills.flask} img_src={"/skills/flask.png"}/>
                <Skill alt={lang.skills.selenium} img_src={"/skills/selenium.png"}/>
                <Skill alt={lang.skills.pygame} img_src={"/skills/pygame.png"}/>
                <Skill alt={lang.skills.postgresql} img_src={"/skills/postgres.png"}/>
                <Skill alt={lang.skills.javascript} img_src={"/skills/javascript.png"}/>
                <Skill alt={lang.skills.typescript} img_src={"/skills/typescript.png"}/>
                <Skill alt={lang.skills.c} img_src={"/skills/c.png"}/>
                <Skill alt={lang.skills.cpp} img_src={"/skills/cpp.png"}/>
                <Skill alt={lang.skills.java} img_src={"/skills/java.png"}/>
                <Skill alt={lang.skills.linux} img_src={"/skills/linux.png"}/>
            </div>
        </div>
    );
}