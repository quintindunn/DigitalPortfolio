"use client";

import React from "react";
import styles from "@/app/components/computer/Window.module.css";

const COMPUTER_WIDTH_VW: number = 92.5;
const COMPUTER_HEIGHT_VW: number = 92.5;
const TASKBAR_HEIGHT_VW: number = 4;
const client_width = document.documentElement.clientWidth;
const client_height = document.documentElement.clientHeight;

function vpToPx(vp: number, client_size: number) {
    return (vp * client_size) / 100;
}

interface ComputerWindowProps {
    title: string;
    icon_src: string;
    width: string;
    height: string;
    active: boolean;
    children?: React.ReactNode;
}

interface ComputerWindowState {
    moving: boolean;
    x: number;
    y: number;
    move_start_x: number;
    move_start_y: number;
    target_bounding_rect: DOMRect | null;
    computer_bounding_rect: DOMRect | null;
}

export default class ComputerWindow extends React.Component<ComputerWindowProps, ComputerWindowState> {
    constructor(props: ComputerWindowProps) {
        super(props);
        this.state = {
            moving: false,
            x: 0,
            y: 0,
            move_start_x: 0,
            move_start_y: 0,
            target_bounding_rect: null,
            computer_bounding_rect: null,
        };
    }

    onLoad = () => {
        const computer = document.getElementById("computer");

        if (computer === null) {
            return;
        }

        this.setState({computer_bounding_rect: computer.getBoundingClientRect()});

    }

    handleMouseDown = (event: MouseEvent) => {
        this.handleMoveWindow(event);
    };

    handleMouseUp = (event: MouseEvent) => {
        if (event.button === 0) {
            this.setState({ moving: false });
        }
    };

    handleMouseMove = (event: MouseEvent) => {
        if (this.state.moving && this.state.computer_bounding_rect !== null) {
            let x = event.clientX - this.state.move_start_x;
            if (x < this.state.computer_bounding_rect.left - 70) {
                x = this.state.computer_bounding_rect.left - 70;
            }
            const x_limit = this.state.computer_bounding_rect.right - vpToPx((100-COMPUTER_WIDTH_VW)/2, client_width) - vpToPx(+this.props.width.slice(0, this.props.width.length - 2), client_width)
            if (x > x_limit) {
                x = x_limit;
            }

            let y = event.clientY - this.state.move_start_y;
            if (y < this.state.computer_bounding_rect.top - 35) {
                y = this.state.computer_bounding_rect.top - 35;
            }

            const y_limit = this.state.computer_bounding_rect.bottom - vpToPx((100-COMPUTER_HEIGHT_VW)/2, client_height) - vpToPx(+this.props.height.slice(0, this.props.height.length - 2), client_height) - vpToPx(TASKBAR_HEIGHT_VW, client_height);
            if (y > y_limit) {
                y = y_limit;
            }

            this.setState({
                x: x,
                y: y
            });
        }
    };

    handleMoveWindow(event: MouseEvent) {
        const target = event.target as HTMLElement;
        if (!target) return;

        if (target.id === "#WINDOW-CONTROLS" && event.buttons === 1) {
            const rect = target.getBoundingClientRect();
            const x = event.clientX - rect.left + 110;
            const y = event.clientY - rect.top + 40;
            this.setState({
                moving: true,
                move_start_x: x,
                move_start_y: y,
                target_bounding_rect: rect
            });
        }
    }

    componentDidMount() {
        window.addEventListener("mousedown", this.handleMouseDown);
        window.addEventListener("mouseup", this.handleMouseUp);
        window.addEventListener("mousemove", this.handleMouseMove);
        this.onLoad();
    }

    componentWillUnmount() {
        window.removeEventListener("mousedown", this.handleMouseDown);
        window.removeEventListener("mouseup", this.handleMouseUp);
        window.removeEventListener("mousemove", this.handleMouseMove);
    }

    render() {
        return (
            <div
                style={{
                    zIndex: 101,
                    width: this.props.width,
                    height: this.props.height,
                    top: this.state.y,
                    left: this.state.x
                }}
                className={styles.ComputerWindow}
                data-active={this.props.active}
            >
                <div className={styles.WindowControls} id="#WINDOW-CONTROLS">
                    <div className={styles.WindowControlsLeft} id={"#WINDOW-CONTROLS"}>
                        <img src={this.props.icon_src} alt={this.props.title} id={"#WINDOW-CONTROLS"}/>
                        <p id={"#WINDOW-CONTROLS"}>{this.props.title}</p>
                    </div>
                    <div className={styles.WindowControlsRight} id={"#WINDOW-CONTROLS"}>
                        <button type="button" id="#WINDOW-CONTROLS-CLOSE">X</button>
                        <button type="button" id="#WINDOW-CONTROLS-MAXIMIZE">🗖</button>
                        <button type="button" id="#WINDOW-CONTROLS-MINIMIZE">🗕</button>
                    </div>
                </div>
                <div className={styles.WindowBody}>
                    {this.props.children}
                </div>
            </div>
        );
    }
}
