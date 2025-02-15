import styles from "@/app/components/computer/App.module.css"
import React, {useRef} from "react";
import app_mapper from "@/app/components/computer/apps/app_mapper";
import {useComputer} from "@/app/components/computer/Computer";

interface AppProps {
    name: string;
    img_src: string;
    internal_app_code: string;
}


export default function App(props: AppProps) {
    const ref = useRef<HTMLDivElement>(null);
    const { openWindows, setOpenWindows } = useComputer();

    React.useEffect(() => {
        const handleClick = (event: MouseEvent) => {
            if (!ref.current) return;

            const target = event.target as Node;

            if (!ref.current.contains(target)) {
                return;
            }

            const WindowType = app_mapper(props.internal_app_code);

            if (WindowType === null) {
                return;
            }

            const newWindow = React.createElement(WindowType, { ref_id: `${Math.floor(Math.random() * (99999999 - 10000000 + 1)) + 10000000}` });
            setOpenWindows([...openWindows, newWindow]);
        };

        window.addEventListener("click", handleClick);
        return () => {
            window.removeEventListener("click", handleClick);
        };
    }, [openWindows, props.internal_app_code, setOpenWindows]);

    return (
        <div className={styles.App} ref={ref}>
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