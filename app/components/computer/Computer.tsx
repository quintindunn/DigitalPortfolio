"use client";

import TaskBar from "@/app/components/computer/Taskbar"

import React, {createContext, useContext, useState} from "react";
import styles from "@/app/components/computer/Computer.module.css";
import Desktop from "@/app/components/computer/Desktop";
import App from "@/app/components/computer/App";


interface ComputerContextType {
    open: boolean;
    setOpen: (value: boolean) => void;
    on: boolean;
    setOn: (value: boolean) => void;
    openWindows: React.ReactNode[];
    setOpenWindows: React.Dispatch<React.SetStateAction<React.ReactNode[]>>;
    activeRefId: string;
    setActiveRefId: (id: string) => void;
    activeWindowName: string;
    setActiveWindowName: (name: string) => void;
    minimizedRefIds: string[];
    setMinimizedRefIds: (ids: string[]) => void;
}

export const ComputerContext = createContext<ComputerContextType | undefined>(undefined);

export function ComputerProvider({ children }: { children: React.ReactNode }) {
    const [open, setOpen] = useState(false);
    const [on, setOn] = useState(false);
    const [openWindows, setOpenWindows] = useState<React.ReactNode[]>([]);
    const [activeRefId, setActiveRefId] = useState<string>("0");
    const [activeWindowName, setActiveWindowName] = useState<string>("Welcome");
    const [minimizedRefIds, setMinimizedRefIds] = useState<string[]>([]);

    return (
        <ComputerContext.Provider value={{ open, setOpen, on, setOn, openWindows, setOpenWindows, activeRefId, setActiveRefId, activeWindowName, setActiveWindowName, minimizedRefIds, setMinimizedRefIds }}>
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

function Apps() {
    return (<>
        <App internal_app_code={"mycomputer"} name={"My Computer"} img_src={"/computer/apps/mycomputer.png"} />
        <App internal_app_code={"networkneighborhood"} name={"Network Neighborhood"} img_src={"/computer/apps/networkneighborhood.png"} />
        <App internal_app_code={"mybriefcase"} name={"My Briefcase"} img_src={"/computer/apps/mybriefcase.png"} />
        <App internal_app_code={"resume"} name={"Resume"} img_src={"/computer/apps/document.png"} />
        <App internal_app_code={"recyclebin"} name={"Recycle Bin"} img_src={"/computer/apps/recyclebin.png"} />
    </>);
}

function Windows() {
    const { openWindows } = useComputer();
    return (
        <>
            {openWindows.map((window: React.ReactNode, index: number) => (
                <div key={index}>
                    {window}
                </div>
            ))}
        </>
    );
}

export default function Computer() {
    const ctx = useComputer();

    function close() {
        ctx.setOpen(false);
    }

    const content = (
        <div className={styles.computer} id={"computer"}>
            <div id="close">
                <button type="button" onClick={close}>X</button>
            </div>
            <div>
                <Desktop >
                    <Apps />
                    <Windows />
                </Desktop>
                <TaskBar />
            </div>
        </div>
    );

    return (
        ctx.open ? content : (<> </>)
    );
}
