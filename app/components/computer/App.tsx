import styles from "@/app/components/computer/App.module.css"

export default function App (props: {name: string, img_src: string}) {
    return (
        <div className={styles.App}>
            <div>
                <img
                    src={props.img_src}
                    alt={props.name}
                />
                <p>{props.name}</p>
            </div>
        </div>
    );
}