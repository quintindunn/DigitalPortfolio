import React, {BaseSyntheticEvent} from "react";
import styles from "@/app/components/computer/Window.module.css"

interface TaskBarStartProps {
    title: string;
    icon_src: string;
    width: string;
    height: string;
    active: boolean;
}

export default class ComputerWindow extends React.Component<any, any> {
    constructor (props: TaskBarStartProps) {
        super(props);
        this.state = {
            moving: false,

        }
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick = (e: BaseSyntheticEvent) => {
        console.log(e);
    }

    render() {
        const content = <>
            <div style={{zIndex: 1000, width: this.props.width, height: this.props.height}} onClick={this.handleClick}
                 className={styles.ComputerWindow} data-active={this.props.active}>
                <div className={styles.WindowControls}>
                    <div className={styles.WindowControlsLeft}>
                        <img src={this.props.icon_src} alt={this.props.title}/>
                        <p>{this.props.title}</p>
                    </div>
                    <div className={styles.WindowControlsRight}>
                        <button type={"button"}>X</button>
                        <button type={"button"}>Y</button>
                        <button type={"button"}>Z</button>
                    </div>
                </div>
                <div className={styles.WindowBody}>
                    {/*<h1>Window Body</h1>*/}
                </div>
            </div>
        </>;
        return content;
    }
}