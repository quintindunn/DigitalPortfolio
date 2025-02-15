import styles from "@/app/components/computer/Desktop.module.css"
import React from "react";

export default function Desktop(props: { children: React.ReactNode}) {
    return (
        <div className={styles.Desktop}>
            {props.children}
        </div>
    );
}