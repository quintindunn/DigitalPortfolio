"use client";

import styles from "@/app/components/computer/Computer.module.css";
import React, {createContext, useContext, useState} from "react";

interface ComputerContextType {
    open: boolean;
    setOpen: (value: boolean) => void;
    on: boolean;
    setOn: (value: boolean) => void;
}

export const ComputerContext = createContext<ComputerContextType | undefined>(undefined);

export function ComputerProvider({ children }: { children: React.ReactNode }) {
    const [open, setOpen] = useState(true);
    const [on, setOn] = useState(false);

    return (
        <ComputerContext.Provider value={{ open, setOpen, on, setOn }}>
            {children}
        </ComputerContext.Provider>
    );
}

export function useComputer() {
    const context = useContext(ComputerContext);
    if (!context) {
        throw new Error("useComputer must be used within a ComputerProvider");
    }
    return context;
}

function TaskBar() {
    return (
        <div className={styles.taskbar}>
            <div className={styles.taskbarLeft}>
                <div className={styles.taskbarStart}>
                    <span>IM</span>
                    <p>Start</p>
                </div>
                <div className={styles.taskbarStatus}>
                    <p>Welcome</p>
                </div>
            </div>
            <div className={styles.taskbarRight}>
                <div className={styles.taskbarTime}>
                    <p>2:38 PM</p>
                </div>
            </div>
        </div>
    );
}

export default function Computer() {
    const {open, setOpen} = useComputer();
    function close() {
        setOpen(false);
    }

    const content = (
        <div className={styles.computer}>
            <div id="close">
                <button type="button" onClick={close}>X</button>
            </div>
            <div>
                <TaskBar />
            </div>
        </div>
    );

    return (
        open ? content : (<> </>)
    );
}
