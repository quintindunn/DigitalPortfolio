import styles from "@/app/components/computer/Taskbar.module.css";
import React from "react";
import Image from "next/image";
import StartMenu from "@/app/components/computer/StartMenu";

function TaskBarTime() {
    return (
        <div className={styles.taskbarItem}>
            <div className={styles.taskbarTime}>
                <p>2:38 PM</p>
            </div>
        </div>
    );
}

interface TaskBarStartProps {
    setter: React.Dispatch<React.SetStateAction<boolean>>;
}

class TaskBarStart extends React.Component<TaskBarStartProps, { on: boolean }> {
    private setter: React.Dispatch<React.SetStateAction<boolean>>;
    constructor(props: TaskBarStartProps) {
        super(props);
        this.state = {on: false};
        this.setter = props.setter;

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setter(!this.state.on);
        this.setState((prevState: { on: boolean }) => ({
            on: !prevState.on
        }));
    }

    render() {
        return (
            <div className={styles.taskbarItem} onClick={this.handleClick}>
                <div className={styles.taskbarStart}>
                    <Image
                        src={"/computer/start-icon.png"}
                        alt={"tmp"}
                        width={40}
                        height={40}
                    />
                    <p>Start</p>
                </div>
            </div>
        );
    }
}

function TaskBarStatus(props: { data: string }) {
    return (
        <div className={`${styles.taskbarItem} ${styles.taskbarStatusParent}`}>
            <div className={styles.taskbarStatus}>
                <p>{props.data}</p>
            </div>
        </div>
    );
}

export default function TaskBar() {
    const [startMenuState, setStartMenu] = React.useState<boolean>(false);

    return (
        <div>
            {startMenuState && <StartMenu/>}
            <div className={styles.taskbar}>
                <div className={styles.taskbarLeft}>
                    <TaskBarStart setter={setStartMenu} />
                    <TaskBarStatus data={"Welcome"}/>
                </div>

                <div className={styles.taskbarRight}>
                    <TaskBarTime/>
                </div>
            </div>
        </div>
    );
}