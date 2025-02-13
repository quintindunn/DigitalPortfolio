import styles from "./MagicText.module.css"

export default function MagicText(props: {text: string}) {
    return (
        <span className={styles.magic}>{props.text}</span>
    );
}