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
        </div>
    );

    return (
        open ? content : (<> </>)
    );
}
