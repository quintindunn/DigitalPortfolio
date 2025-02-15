"use client";

import React, { useState, useEffect, useRef } from "react";
import styles from "@/app/components/computer/Window.module.css";

const COMPUTER_WIDTH_VW: number = 92.5;
const COMPUTER_HEIGHT_VW: number = 92.5;
const TASKBAR_HEIGHT_VW: number = 4;
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
    active: boolean;
    ref_id: string;
    children?: React.ReactNode;
}

export default function ComputerWindow(props: ComputerWindowProps) {
    const [moving, setMoving] = useState(false);
    const [x, setX] = useState(0);
    const [y, setY] = useState(0);
    const [moveStartX, setMoveStartX] = useState(0);
    const [moveStartY, setMoveStartY] = useState(0);

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
            handleMoveWindow(event);
        };

        const handleMouseUp = (event: MouseEvent) => {
            if (event.button === 0) {
                setMoving(false);
            }
            handleCloseWindow(event);
        };

        const handleMouseMove = (event: MouseEvent) => {
            const computer = document.getElementById("computer");

            if (!computer) return;
            const computerBoundingRect = computer.getBoundingClientRect();

            if (moving && computerBoundingRect !== null) {
                let newX = event.clientX - moveStartX;
                let newY = event.clientY - moveStartY;

                const xLimitRight = computerBoundingRect.right - vpToPx((100 - COMPUTER_WIDTH_VW) / 2 + +props.width.slice(0, props.width.length - 2), client_width);
                const xLimitLeft = computerBoundingRect.left - vpToPx((100 - COMPUTER_WIDTH_VW) / 2, client_width);

                const yLimitUpper = computerBoundingRect.top - vpToPx((100 - COMPUTER_HEIGHT_VW) / 2, client_height);
                const yLimitBottom = computerBoundingRect.bottom - vpToPx((100 - COMPUTER_HEIGHT_VW) / 2 + +props.height.slice(0, props.height.length - 2) + TASKBAR_HEIGHT_VW, client_height);

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
                console.log(newX, newY);
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
            // Add functionality for closing the window
        };

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
    }, [width, height, moving, x, y, moveStartX, moveStartY, props.ref_id, props.width, props.height]);

    return (
        <div
            style={{
                zIndex: 101,
                width: width,
                height: height,
                top: y,
                left: x,
            }}
            className={styles.ComputerWindow}
            data-active={props.active}
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
                    <button type="button" id={`#${props.ref_id}-WINDOW-CONTROLS-MINIMIZE`}>🗕</button>
                </div>
            </div>
            <div className={styles.WindowBody}>{props.children}</div>
        </div>
    );
}
