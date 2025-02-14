import styles from "@/app/components/computer/Taskbar.module.css";
import React from "react";
import Image from "next/image";

function TaskBarTime() {
    return (
        <div className={styles.taskbarItem}>
            <div className={styles.taskbarTime}>
                <p>2:38 PM</p>
            </div>
        </div>
    );
}

function TaskBarStart() {
    return (
        <div className={styles.taskbarItem}>
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

function TaskBarStatus(props: {data: string}) {
    return (
        <div className={`${styles.taskbarItem} ${styles.taskbarStatusParent}`}>
            <div className={styles.taskbarStatus}>
                <p>{props.data}</p>
            </div>
        </div>
    );
}

export default function TaskBar() {
    return (
        <div className={styles.taskbar}>
            <div className={styles.taskbarLeft}>
                <TaskBarStart />
                <TaskBarStatus data={"Welcome"}/>
            </div>

            <div className={styles.taskbarRight}>
                <TaskBarTime />
            </div>
        </div>
    );
}