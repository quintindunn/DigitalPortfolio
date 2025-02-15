import React from "react";
import ComputerWindow from "@/app/components/computer/Window";

import styles from "@/app/components/computer/apps/MyComputer.module.css"
import App from "@/app/components/computer/App";

interface MyComputerProps {
    ref_id: string;
    internal_app_code: string;
}

interface MyComputerState {
    active: boolean;
}

function MenuItem(props: {text: string, id: string}) {
    return (
        <>
            <p id={props.id} className={styles.MenuItem}><span>{props.text[0]}</span>{props.text.slice(1)}</p>
        </>
    );
}

export default class MyComputer extends React.Component<MyComputerProps, MyComputerState> {
    constructor(props: MyComputerProps) {
        super(props);
        this.state = {
            active: true,
        }
    }

    render() {
        return (
            <>
                <ComputerWindow ref_id={this.props.ref_id} title={"My Computer"} icon_src={"/computer/apps/mycomputer.png"} width={"30vw"} height={"35vh"}>
                    <div className={styles.Menu}>
                        <MenuItem text={"File"} id={"file"} />
                        <MenuItem text={"Edit"} id={"edit"} />
                        <MenuItem text={"View"} id={"view"} />
                        <MenuItem text={"Help"} id={"help"} />
                    </div>
                    <div className={styles.Body}>
                        <App color={"black"} name={"Resume"} id={"resume"} internal_app_code={"resume"} img_src={"/computer/apps/mycomputer.png"} />
                    </div>
                </ComputerWindow>
            </>
        );
    }

}