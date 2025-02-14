import styles from "@/app/components/computer/Desktop.module.css"
import React from "react";

export default function Desktop({ children }: { children: React.ReactNode }) {
    return (
        <div className={styles.Desktop}>
            {children}
        </div>
    );
}