import React from "react";
import ComputerWindow from "@/app/components/computer/Window";

import styles from "@/app/components/computer/apps/MyComputer.module.css"

type MyComputerProps = object

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

function Item(props: {name: string, id: string, img_src: string}) {
    return (
        <div className={styles.Item} id={props.id}>
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
                <ComputerWindow title={"My Computer"} icon_src={"/computer/apps/mycomputer.png"} width={"30vw"} height={"35vh"} active={this.state.active}>
                    <div className={styles.Menu}>
                        <MenuItem text={"File"} id={"file"} />
                        <MenuItem text={"Edit"} id={"edit"} />
                        <MenuItem text={"View"} id={"view"} />
                        <MenuItem text={"Help"} id={"help"} />
                    </div>
                    <div className={styles.Body}>
                        <Item name={"Resume"} id={"resume"} img_src={"/computer/apps/mycomputer.png"}></Item>
                        <Item name={"Resume"} id={"resume"} img_src={"/computer/apps/mycomputer.png"}></Item>
                        <Item name={"Resume"} id={"resume"} img_src={"/computer/apps/mycomputer.png"}></Item>
                    </div>
                </ComputerWindow>
            </>
        );
    }

}