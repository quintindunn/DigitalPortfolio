import Subheading from "./Subheading";
import styles from "./Contact.module.css"

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
            <Subheading name={"Contact"} />
            <p>You can contact me at <Email email={"dunnquintin07@gmail.com"} /></p>
        </div>
    );
}