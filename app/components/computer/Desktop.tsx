import styles from "@/app/components/computer/Desktop.module.css"
import React from "react";
import {WindowStateContextType} from "@/app/components/computer/Computer";

export default function Desktop(props: {window_state_ctx: WindowStateContextType, children: React.ReactNode}) {
    return (
        <div className={styles.Desktop}>
            {props.children}
        </div>
    );
}