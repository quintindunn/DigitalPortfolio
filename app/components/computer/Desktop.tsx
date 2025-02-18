import styles from "@/app/components/computer/Desktop.module.css"
import React, {useEffect} from "react";
import {useComputer} from "@/app/components/computer/Computer";

export default function Desktop(props: { children: React.ReactNode}) {
    const { setStartMenu, startMenuState } = useComputer();

    useEffect(() => {
        const handleClick = (event: MouseEvent) => {
            const startMenu = document.getElementById("startmenu");
            const startMenuBTN = document.getElementById("startmenu-btn");

            if (!event.target) return;

            if (!startMenuBTN) return;
            if (startMenuBTN.contains(event.target as Node)) {
                setStartMenu(!startMenuState);
                return;
            }
            if (!startMenu) return;
            if (!startMenu.contains(event.target as Node)) {
                setStartMenu(false);
            }
        };

        window.addEventListener("mouseup", handleClick);
        return () => {
            window.removeEventListener("mouseup", handleClick);
        }

    }, [startMenuState, setStartMenu])

    return (
        <div className={styles.Desktop}>
            {props.children}
        </div>
    );
}