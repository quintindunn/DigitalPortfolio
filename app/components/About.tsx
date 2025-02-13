import Subheading from "@/app/components/Subheading";

import lang from "@/app/lang"

export default function About() {
    return (
        <div>
            <Subheading name={lang.about.subheading}/>
            <p className={"indent-5 max-w-3xl"}>{lang.about.content}</p>
        </div>
    );
}