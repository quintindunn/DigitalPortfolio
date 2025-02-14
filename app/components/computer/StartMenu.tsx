import styles from "@/app/components/computer/StartMenu.module.css"

function StartMenuSimpleItem(props: {name: string, img_src: string}) {
    return (
        <div className={styles.StartMenuItem}>
            <img src={props.img_src} alt={props.name} />
            <p><span>{props.name[0]}</span>{props.name.slice(1)}</p>
        </div>
    );
}

function ShutDownMenuItem(props: {name: string, img_src: string}) {
    return (
        <div className={styles.StartMenuItem}>
            <img src={props.img_src} alt={props.name} />
            <p>{props.name.slice(0, 2)}<span>{props.name[2]}</span>{props.name.slice(3)}</p>
        </div>
    );
}

export default function StartMenu() {
    return (
        <div className={styles.StartMenu}>
            <div className={styles.StartMenuSplash}>
                <p>Windows</p>
                <p>95</p>
            </div>
            <div className={styles.StartMenuItems}>
                <StartMenuSimpleItem name={"Programs"} img_src={"/computer/startmenuicons/programs.png"} />
                <StartMenuSimpleItem name={"Documents"} img_src={"/computer/startmenuicons/documents.png"} />
                <StartMenuSimpleItem name={"Settings"} img_src={"/computer/startmenuicons/settings.png"} />
                <StartMenuSimpleItem name={"Find"} img_src={"/computer/startmenuicons/find.png"} />
                <StartMenuSimpleItem name={"Help"} img_src={"/computer/startmenuicons/help.png"} />
                <StartMenuSimpleItem name={"Run..."} img_src={"/computer/startmenuicons/run.png"} />
                <ShutDownMenuItem name={"Shut Down..."} img_src={"/computer/startmenuicons/shutdown.png"} />
            </div>
        </div>
    );
}