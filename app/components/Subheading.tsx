import styles from "@/app/components/Subheading.module.css"

export default function Subheading(props: {name: string}) {
    return (
        <a href={`#${props.name}`}>
            <div id={props.name}>
                <p className={`${styles.subheading} text-4xl font-semibold pb-2`}>{props.name}</p>
            </div>
        </a>
    );
}