import styles from "@/app/components/computer/Taskbar.module.css";
import React, {useEffect, useRef, useState} from "react";
import Image from "next/image";
import StartMenu from "@/app/components/computer/StartMenu";
import {useComputer} from "@/app/components/computer/Computer";
import {internal_name_to_app_icon, internal_name_to_displayed_name} from "@/app/components/computer/apps/app_mapper";

function TaskBarTime() {
    const [formattedTime, setFormattedTime] = useState(() =>
        new Date().toLocaleTimeString('en-US', {
            hour: 'numeric',
            minute: '2-digit',
            hour12: true
        })
    );

    useEffect(() => {
        const interval = setInterval(() => {
            setFormattedTime(new Date().toLocaleTimeString('en-US', {
                hour: 'numeric',
                minute: '2-digit',
                hour12: true
            }));
        }, 2000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className={styles.taskbarItem}>
            <div className={styles.taskbarTime}>
                <p>{formattedTime}</p>
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

function TaskBarStatus() {
    const {activeWindowName} = useComputer();

    return (
        <div className={`${styles.taskbarItem} ${styles.taskbarStatusParent}`}>
            <div className={styles.taskbarStatus}>
                <p>{activeWindowName}</p>
            </div>
        </div>
    );
}

function TaskBarWindow(props: {internal_app_code: string, ref_id: string}) {
    const ref = useRef<HTMLDivElement>(null);
    const appName = internal_name_to_displayed_name(props.internal_app_code);
    const appImg = internal_name_to_app_icon(props.internal_app_code);

    const { setActiveRefId, setActiveWindowName, minimizedRefIds, setMinimizedRefIds } = useComputer();

    useEffect(() => {
        const handle_click = (event: MouseEvent) => {
            if (!ref.current) return;

            const target = event.target as Node;

            if (!ref.current.contains(target)) return;

            setActiveRefId(props.ref_id);
            setActiveWindowName(internal_name_to_displayed_name(props.internal_app_code));
            setMinimizedRefIds(minimizedRefIds.filter(id => id !== props.ref_id));

            const real_item = document.querySelector(`[data-refid="${props.ref_id}"]`);
            if (!real_item) return;

            const real_start_time = real_item.getAttribute("data-start-time");
            if (!real_start_time) return;

            // @ts-expect-error - It does exist.
            real_item.style.zIndex = `${((Date.now() / 200) - (+real_start_time)) + 20000}`;

        }

        window.addEventListener("click", handle_click);

        return () => {
            window.removeEventListener("click", handle_click);
        }
    }, [minimizedRefIds, props.internal_app_code, props.ref_id, setActiveRefId, setActiveWindowName, setMinimizedRefIds])

    return (
        <div className={`${styles.taskbarItem} ${styles.taskbarWindow}`} ref={ref}>
            <img src={appImg}  alt={appName}/>
            <p>{appName}</p>
        </div>
    );

}

function window_to_internal_app_code(window: React.ReactNode) {
    // @ts-expect-error - Does have props, it's just angry.
    return window.props.internal_app_code;
}

function window_to_ref_id(window: React.ReactNode) {
    // @ts-expect-error - Does have props, it's just angry.
    return window.props.ref_id;
}

export default function TaskBar() {
    const { openWindows } = useComputer();
    const [startMenuState, setStartMenu] = React.useState<boolean>(false);

    const tbWindows = (
        <>
            {openWindows.slice(0, 9).map((window: React.ReactNode, index: number) => (
                <TaskBarWindow key={index} internal_app_code={window && window_to_internal_app_code(window)} ref_id={window_to_ref_id(window)} />
            ))}
        </>
    );

    return (
        <div>
            {startMenuState && <StartMenu/>}
            <div className={styles.taskbar}>
                <div className={styles.taskbarLeft}>
                    <TaskBarStart setter={setStartMenu} />
                    <TaskBarStatus />
                    <div className={styles.taskbarWindows}>
                        {tbWindows}
                    </div>
                </div>


                <div className={styles.taskbarRight}>
                    <TaskBarTime/>
                </div>
            </div>
        </div>
    );
}