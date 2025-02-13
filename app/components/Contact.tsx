import Subheading from "./Subheading";
import styles from "./Contact.module.css"

import lang from "@/app/lang"

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