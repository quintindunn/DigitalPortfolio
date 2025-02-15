import Image from "next/image";

import MagicText from "@/app/components/portfolio/MagicText";
import SocialLinks from "@/app/components/portfolio/SocialLinks";
import Spacer from "@/app/components/portfolio/Spacer";

import lang from "@/app/lang";
import styles from "@/app/components/portfolio/Heading.module.css"

export default function Heading(props: { name: string }) {
    return (
        <div>
            <div style={{ width: "4rem", height: "4rem", position: "relative" }}>
                <Image
                    className={`inline ${styles.wave}`}
                    src={"waving-hand-svgrepo-com.svg"}
                    alt={"👋"}
                    fill
                    style={{ objectFit: "cover" }}
                />
            </div>
            <h1 className={"inline font-bold text-8xl"}>{lang.heading.intro} {props.name}</h1>
            <div className={"grid grid-cols-1 sm:grid-cols-2 gap-8 lg:gap-16"}>
                <div className={"text-4xl indent-5 font-light"}>
                    <p>{lang.heading.s1}</p>
                    <p>{lang.heading.s2} <MagicText text={lang.heading.s3}/></p>
                    <Spacer size={20} />
                    <SocialLinks />
                </div>
                <div className={styles.profilePicture}>
                    <Image src={"/threadart.png"} alt={"👋"} width={256} height={256}/>
                </div>
            </div>

        </div>
    );
}