"use client";

import React, {useEffect, useRef, useState} from "react";
import styles from "@/app/components/computer/Window.module.css";
import {useComputer} from "@/app/components/computer/Computer";

const COMPUTER_WIDTH_VW: number = 92.5;
const COMPUTER_HEIGHT_VW: number = 92.5;
const TASKBAR_HEIGHT_VW: number = 4;
const START_TIME = Date.now() / 200;
let client_width: number = 0;
let client_height: number = 0;

function vpToPx(vp: number, client_size: number) {
    return (vp * client_size) / 100;
}

interface ComputerWindowProps {
    title: string;
    icon_src: string;
    width: string;
    height: string;
    ref_id: string;
    children?: React.ReactNode;
}

export default function ComputerWindow(props: ComputerWindowProps) {
    const { openWindows, setOpenWindows, activeRefId, setActiveRefId, setActiveWindowName, minimizedRefIds, setMinimizedRefIds } = useComputer();

    const [moving, setMoving] = useState(false);
    const [x, setX] = useState(0);
    const [y, setY] = useState(0);
    const [moveStartX, setMoveStartX] = useState(0);
    const [moveStartY, setMoveStartY] = useState(0);
    const [maximized, setMaximized] = useState(false);
    const [maximizedX, setMaximizedX] = useState(0);
    const [maximizedY, setMaximizedY] = useState(0);

    const ref = useRef<HTMLDivElement>(null);

    const { width, height } = props;

    useEffect(() => {
        const onLoad = () => {
            const computer = document.getElementById("computer");
            if (computer === null) {
                console.warn("Computer not found");
                return;
            }

            client_width = document.documentElement.clientWidth;
            client_height = document.documentElement.clientHeight;
        };

        const handleMouseDown = (event: MouseEvent) => {
            handleFocusWindow(event);
            handleMoveWindow(event);
            handleMinimizeWindow(event);
            handleMaximizeWindow(event);
        };

        const handleMouseUp = (event: MouseEvent) => {
            if (event.button === 0) {
                setMoving(false);
            }
            handleCloseWindow(event);
        };

        const handleMouseMove = (event: MouseEvent) => {
            const computer = document.getElementById("computer");

            if (!ref.current) return;

            if (!computer) return;
            const computerBoundingRect = computer.getBoundingClientRect();

            if (moving && computerBoundingRect !== null) {
                if (ref.current) {
                    ref.current.style.zIndex = `${((Date.now() / 200) - START_TIME) + 20000}`;
                }
                let newX = event.clientX - moveStartX;
                let newY = event.clientY - moveStartY;

                const xLimitRight = computerBoundingRect.right - vpToPx((100 - COMPUTER_WIDTH_VW) / 2, client_width) - ref.current.clientWidth - 4;
                const xLimitLeft = computerBoundingRect.left - vpToPx((100 - COMPUTER_WIDTH_VW) / 2, client_width);

                const yLimitUpper = computerBoundingRect.top - vpToPx((100 - COMPUTER_HEIGHT_VW) / 2, client_height);
                const yLimitBottom = computerBoundingRect.bottom - vpToPx((100 - COMPUTER_HEIGHT_VW) / 2 + TASKBAR_HEIGHT_VW, client_height) - ref.current.clientHeight - 4;

                if (newX < xLimitLeft) {
                    newX = xLimitLeft;
                } else if (newX > xLimitRight) {
                    newX = xLimitRight;
                }

                if (newY < yLimitUpper) {
                    newY = yLimitUpper;
                } else if (newY > yLimitBottom) {
                    newY = yLimitBottom;
                }
                setX(newX);
                setY(newY);
            }
        };

        const handleMoveWindow = (event: MouseEvent) => {
            const target = event.target as HTMLElement;
            if (!target) return;

            if (target.id === `#${props.ref_id}-WINDOW-CONTROLS` && event.buttons === 1) {
                const rect = target.getBoundingClientRect();
                const newX = event.clientX - rect.left + vpToPx((100 - COMPUTER_WIDTH_VW) / 2, client_width);
                const newY = event.clientY - rect.top + vpToPx((100 - COMPUTER_HEIGHT_VW) / 2, client_height);
                setMoving(true);
                setMoveStartX(newX);
                setMoveStartY(newY);
            }
        };

        const handleFocusWindow = (event: MouseEvent) => {
            if (event.target && ref.current && ref.current.contains(event.target as HTMLElement)) {
                setActiveRefId(props.ref_id);
                ref.current.style.zIndex = `${((Date.now() / 200) - START_TIME) + 20000}`;
            }
            setActiveWindowName(props.title);
        };

        const handleCloseWindow = (event: MouseEvent) => {
            if (event.button !== 0) {
                return;
            }

            if (!(event.target instanceof HTMLElement)) {
                return;
            }

            if (event.target.id !== `#${props.ref_id}-WINDOW-CONTROLS-CLOSE`) {
                return;
            }

            // @ts-expect-error - It's just being stupid
            const updatedWindows = openWindows.filter((window) => window.props.ref_id !== props.ref_id);
            setOpenWindows(updatedWindows);
            setActiveWindowName("Welcome!");
        };

        const handleMinimizeWindow = (event: MouseEvent) => {
            if (event.button !== 0) {
                return;
            }

            if (!(event.target instanceof HTMLElement)) {
                return;
            }

            if (event.target.id !== `#${props.ref_id}-WINDOW-CONTROLS-MINIMIZE`) {
                return;
            }

            setMinimizedRefIds([...minimizedRefIds, props.ref_id]);
        }

        const handleMaximizeWindow = (event: MouseEvent) => {
            if (event.button !== 0) {
                return;
            }

            if (!(event.target instanceof HTMLElement)) {
                return;
            }

            if (event.target.id !== `#${props.ref_id}-WINDOW-CONTROLS-MAXIMIZE`) {
                return;
            }

            if (!ref.current) return;

            const ref_style = ref.current.style;
            if (!maximized) {
                setMaximizedX(+ref_style.left.slice(0, ref_style.left.length-2));
                setMaximizedY(+ref_style.top.slice(0, ref_style.top.length-2));
                ref_style.width = `${COMPUTER_WIDTH_VW}vw`;
                ref_style.height = `${COMPUTER_HEIGHT_VW-TASKBAR_HEIGHT_VW}vh`;
                ref_style.top = `0`;
                ref_style.left = `0`;
                setMaximized(true);
            } else {
                ref_style.width = props.width;
                ref_style.height = props.height;
                ref_style.top = `${maximizedY}px`;
                ref_style.left = `${maximizedX}px`;
                setMaximized(false);
            }

        }

        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const handleResize = (_event: Event) => {
            client_width = document.documentElement.clientWidth;
            client_height = document.documentElement.clientHeight;
        };

        onLoad();
        window.addEventListener("mousedown", handleMouseDown);
        window.addEventListener("mouseup", handleMouseUp)
        window.addEventListener("mousemove", handleMouseMove);
        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("mousedown", handleMouseDown);
            window.removeEventListener("mouseup", handleMouseUp);
            window.removeEventListener("mousemove", handleMouseMove);
            window.removeEventListener("resize", handleResize);
        };
    }, [width, height, moving, x, y, moveStartX, moveStartY, props.ref_id, props.width, props.height, openWindows,
        setOpenWindows, setActiveRefId, setActiveWindowName, props.title, setMinimizedRefIds, minimizedRefIds,
        maximized, setMaximized, maximizedX, setMaximizedX, maximizedY, setMaximizedY]);
    return !(minimizedRefIds.includes(props.ref_id)) ? (
        <div style={{
                zIndex: (Date.now() / 200 - START_TIME) + 20000,
                width: width,
                height: height,
                top: y,
                left: x,
            }}
            className={styles.ComputerWindow}
            data-active={props.ref_id === activeRefId}
            data-refid={props.ref_id}
            data-start-time={`${Date.now()}`}
            ref={ref}
        >
            <div className={styles.WindowControls} id={`#${props.ref_id}-WINDOW-CONTROLS`}>
                <div className={styles.WindowControlsLeft} id={`#${props.ref_id}-WINDOW-CONTROLS`}>
                    <img src={props.icon_src} alt={props.title} id={`#${props.ref_id}-WINDOW-CONTROLS`} />
                    <p id={`#${props.ref_id}-WINDOW-CONTROLS`}>{props.title}</p>
                </div>
                <div className={styles.WindowControlsRight} id={`#${props.ref_id}-WINDOW-CONTROLS`}>
                    <button type="button" id={`#${props.ref_id}-WINDOW-CONTROLS-CLOSE`}>X</button>
                    <button type="button" id={`#${props.ref_id}-WINDOW-CONTROLS-MAXIMIZE`}>🗖</button>
                    <button type="button" id={`#${props.ref_id}-WINDOW-CONTROLS-MINIMIZE`}>_</button>
                </div>
            </div>
            <div className={styles.WindowBody}>{props.children}</div>
        </div>
    ) : (<> </>);
}
