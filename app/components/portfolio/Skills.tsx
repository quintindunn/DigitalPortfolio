"use client"

import Image from "next/image";

import Subheading from "@/app/components/portfolio/Subheading";

import lang from "@/app/lang"
import styles from "@/app/components/portfolio/Skills.module.css";
import {useEffect, useState} from "react";


function Skill(props: {alt: string, img_src: string, needs_inversion_on_dark_mode?: boolean}) {
    const [isDark, setIsDark] = useState(false);

    useEffect(() => {
        const darkModeQuery = window.matchMedia('(prefers-color-scheme: dark)');
        setIsDark(darkModeQuery.matches);

        const handleChange = (e: MediaQueryListEvent) => setIsDark(e.matches);
        darkModeQuery.addEventListener('change', handleChange);

        return () => darkModeQuery.removeEventListener('change', handleChange);
    }, []);

    return (
        <div className={styles.skill}>
            <div className={styles.flipCard}>
                <div className={styles.flipCardInner}>
                    <div className={styles.flipCardFront}>
                        <Image className={`${!isDark && props.needs_inversion_on_dark_mode ? 'invert' : ''}`} src={props.img_src} alt={props.alt} width={86} height={86} />
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
                <Skill needs_inversion_on_dark_mode={true} alt={lang.skills.flask} img_src={"/skills/flask.png"}/>
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