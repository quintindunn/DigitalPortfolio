import Subheading from "@/app/components/portfolio/Subheading";

import lang from "@/app/lang";
import styles from "@/app/components/portfolio/Contact.module.css";

function Email(props: {email: string}) {
    return (
        <span className={styles.email}>
            <a href={`mailto:${props.email}`} target="_blank" rel="noopener noreferrer">
                {props.email}
            </a>
        </span>
    );
}

export default function Contact() {
    return (
        <div>
            <Subheading name={lang.contact.subheading} />
            <p>{lang.contact.message} <Email email={lang.contact.email} /></p>
        </div>
    );
}