"use client";

import TaskBar from "@/app/components/computer/Taskbar"

import React, {createContext, useContext, useState} from "react";
import styles from "@/app/components/computer/Computer.module.css";
import Desktop from "@/app/components/computer/Desktop";
import App from "@/app/components/computer/App";
import MyComputer from "@/app/components/computer/apps/MyComputer";


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

function Apps() {
    return (<>
        <App name={"My Computer"} img_src={"/computer/apps/mycomputer.png"} />
        <App name={"Network Neighborhood"} img_src={"/computer/apps/networkneighborhood.png"} />
        <App name={"Inbox"} img_src={"/computer/apps/inbox.png"} />
        <App name={"Recycle Bin"} img_src={"/computer/apps/recyclebin.png"} />
        <App name={"The Microsoft Network"} img_src={"/computer/apps/themicrosoftnetwork.png"} />
        <App name={"My Briefcase"} img_src={"/computer/apps/mybriefcase.png"} />
        <App name={"Python3"} img_src={"/skills/python.png"} />
    </>);
}

function Windows() {
    return (
        <>
            <MyComputer />
        </>
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
                <Desktop>
                    <Apps/>
                    <Windows />
                </Desktop>
                <TaskBar />
            </div>
        </div>
    );

    return (
        open ? content : (<> </>)
    );
}
