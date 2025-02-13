import Image from "next/image";

import MagicText from "@/app/components/MagicText";
import SocialLinks from "@/app/components/SocialLinks";
import Spacer from "@/app/components/Spacer";

import lang from "@/app/lang";

export default function Heading(props: { name: string }) {
    return (
        <div>
            <div style={{ width: "4rem", height: "4rem", position: "relative" }}>
                <Image
                    className={"inline"}
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
                <div>
                    <Image src={"/threadart.png"} alt={"👋"} width={256} height={256}/>
                </div>
            </div>

        </div>
    );
}