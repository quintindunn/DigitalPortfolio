import styles from "./Card.module.css";
import Image from "next/image";

export default function Card(props: {name: string, link?: string, img_src: string, description: string}) {
    const content = (
        <>
            <div className={"flex justify-center"}>
                <Image
                    src={props.img_src}
                    alt={props.name}
                    width={256}
                    height={256}
                />
            </div>
            <div className={"pl-5 pr-5"}>
                <p className={"font-semibold pt-2.5"}>{props.name}</p>
                <p className={"indent-5"}>{props.description}</p>
            </div>
        </>
    );

    return (
        <div className={styles.projectCard}>
            {props.link ? (
                <a href={props.link} target="_blank" rel="noopener noreferrer">
                    {content}
                </a>
            ) : (
                content
            )}
        </div>
    );
}