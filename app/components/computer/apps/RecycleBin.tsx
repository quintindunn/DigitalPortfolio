import React from "react";
import ComputerWindow from "@/app/components/computer/Window";
import styles from "@/app/components/computer/apps/RecycleBin.module.css";

interface RecycleBinProps {
    ref_id: string;
    internal_app_code: string;
}

interface RecycleBinState {
    active: boolean;
}

function RecycleBinItem(props: {name: string, link: string, img_src: string}) {
    return (
        <div className={styles.RecycleBinItem}>
            <a href={props.link} target={"_blank"}>
                <div>
                    <img src={props.img_src} alt={props.name} />
                    <p>{props.name}</p>
                </div>
            </a>
        </div>
    );
}

export default class RecycleBin extends React.Component<RecycleBinProps, RecycleBinState> {
    constructor(props: RecycleBinProps) {
        super(props);
        this.state = {
            active: true,
        }
    }

    render() {
        return (
            <>
                <ComputerWindow ref_id={this.props.ref_id} title={"Recycle Bin"} icon_src={"/computer/apps/recyclebin.png"} width={"35vw"} height={"35vh"}>
                    <div className={styles.Body}>
                        <div className={styles.AppBody}>
                            <h2 className={"text-center font-bold"}>Recycling Bin</h2>
                            <hr />
                            <div className={styles.RecycleBin}>
                                <RecycleBinItem name={"Old Portfolio.html"} link={"https://sites.google.com/view/quintin-dunn/home"} img_src={"/computer/apps/html-2.png"} />
                            </div>

                        </div>
                    </div>
                </ComputerWindow>
            </>
        );
    }
}