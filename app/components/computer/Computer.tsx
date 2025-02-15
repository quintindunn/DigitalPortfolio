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
}

export type WindowStateContextType = [never[], React.Dispatch<React.SetStateAction<never[]>>];

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

function Apps(props: {window_state_ctx: WindowStateContextType}) {
    return (<>
        <App window_state_ctx={props.window_state_ctx} internal_app_code={"mycomputer"} name={"My Computer"} img_src={"/computer/apps/mycomputer.png"} />
        <App window_state_ctx={props.window_state_ctx} internal_app_code={"networkneighborhood"} name={"Network Neighborhood"} img_src={"/computer/apps/networkneighborhood.png"} />
        <App window_state_ctx={props.window_state_ctx} internal_app_code={"inbox"} name={"Inbox"} img_src={"/computer/apps/inbox.png"} />
        <App window_state_ctx={props.window_state_ctx} internal_app_code={"recyclebin"} name={"Recycle Bin"} img_src={"/computer/apps/recyclebin.png"} />
        <App window_state_ctx={props.window_state_ctx} internal_app_code={"themicrosoftnetwork"} name={"The Microsoft Network"} img_src={"/computer/apps/themicrosoftnetwork.png"} />
        <App window_state_ctx={props.window_state_ctx} internal_app_code={"mybriefcase"} name={"My Briefcase"} img_src={"/computer/apps/mybriefcase.png"} />
        <App window_state_ctx={props.window_state_ctx} internal_app_code={"python3"} name={"Python3"} img_src={"/skills/python.png"} />
    </>);
}

function Windows(props: { window_state_ctx: WindowStateContextType }) {
    return (
        <>
            {props.window_state_ctx[0].map((window: React.ReactNode, index: number) => (
                <div key={index}>
                    {window}
                </div>
            ))}
        </>
    );
}

export default function Computer() {
    const ctx = useComputer();
    const [windowState, setWindowState] = useState([]);
    const windowStateCtx: WindowStateContextType = [windowState, setWindowState];

    function close() {
        ctx.setOpen(false);
    }

    const content = (
        <div className={styles.computer} id={"computer"}>
            <div id="close">
                <button type="button" onClick={close}>X</button>
            </div>
            <div>
                <Desktop window_state_ctx={windowStateCtx} >
                    <Apps window_state_ctx={windowStateCtx} />
                    <Windows window_state_ctx={windowStateCtx} />
                </Desktop>
                <TaskBar />
            </div>
        </div>
    );

    return (
        ctx.open ? content : (<> </>)
    );
}
