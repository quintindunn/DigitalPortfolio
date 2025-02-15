import styles from "@/app/components/computer/App.module.css"
import React, {useRef} from "react";
import app_mapper, {internal_name_to_displayed_name} from "@/app/components/computer/apps/app_mapper";
import {useComputer} from "@/app/components/computer/Computer";

interface AppProps {
    name: string;
    img_src: string;
    internal_app_code: string;
    color?: string
    id?: string;
}


export default function App(props: AppProps) {
    const ref = useRef<HTMLDivElement>(null);
    const { openWindows, setOpenWindows, setActiveRefId, setActiveWindowName } = useComputer();

    React.useEffect(() => {
        const handleClick = (event: MouseEvent) => {
            if (!ref.current) return;

            const target = event.target as Node;

            if (!ref.current.contains(target)) {
                return;
            }

            const WindowType = app_mapper(props.internal_app_code);
            const WindowName = internal_name_to_displayed_name(props.internal_app_code);
            setActiveWindowName(WindowName);

            if (WindowType === null) {
                return;
            }

            const new_ref_id = `${Math.floor(Math.random() * (99999999 - 10000000 + 1)) + 10000000}`;
            const newWindow = React.createElement(WindowType, { ref_id: new_ref_id });
            setActiveRefId(new_ref_id);
            setOpenWindows([...openWindows, newWindow]);
        };

        window.addEventListener("click", handleClick);
        return () => {
            window.removeEventListener("click", handleClick);
        };
    }, [openWindows, props.internal_app_code, setOpenWindows]);

    return (
        <div className={styles.App} ref={ref} id={props.id} style={{color: !!props.color ? props.color : "white"}}>
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