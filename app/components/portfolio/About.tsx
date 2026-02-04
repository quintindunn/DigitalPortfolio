import Subheading from "@/app/components/portfolio/Subheading";

import lang from "@/app/lang"

export default function About() {
    const birthday = new Date("February 4, 2007");
    const today = new Date();

    let age = today.getFullYear() - birthday.getFullYear();
    const hasHadBirthdayThisYear = today.getMonth() > birthday.getMonth() || (today.getMonth() === birthday.getMonth() && today.getDate() >= birthday.getDate());

    if (!hasHadBirthdayThisYear) {
        age--;
    }

    const str = lang.about.content.replace("<AGE>", age.toString());
    return (
        <div>
            <Subheading name={lang.about.subheading}/>
            <p className={"indent-5 max-w-3xl"}>{str}</p>
        </div>
    );
}