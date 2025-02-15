import styles from "@/app/components/portfolio/MagicText.module.css";

export default function MagicText(props: {text: string}) {
    return (
        <span className={styles.magic}>{props.text}</span>
    );
}