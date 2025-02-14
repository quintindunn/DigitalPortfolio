"use client";

import React from "react";
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

        client_width = document.documentElement.clientWidth;
        client_height = document.documentElement.clientHeight;
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
            let y = event.clientY - this.state.move_start_y;

            const x_limit_right = this.state.computer_bounding_rect.right - vpToPx((100-COMPUTER_WIDTH_VW)/2 + +this.props.width.slice(0, this.props.width.length - 2), client_width)
            const x_limit_left = this.state.computer_bounding_rect.left - vpToPx((100-COMPUTER_WIDTH_VW)/2, client_width);

            const y_limit_upper = this.state.computer_bounding_rect.top - vpToPx((100-COMPUTER_HEIGHT_VW)/2, client_height);
            const y_limit_bottom = this.state.computer_bounding_rect.bottom - vpToPx((100-COMPUTER_HEIGHT_VW)/2 + +this.props.height.slice(0, this.props.height.length - 2) + TASKBAR_HEIGHT_VW, client_height);


            if (x < x_limit_left) {
                x = x_limit_left;
            } else if (x > x_limit_right) {
                x = x_limit_right;
            }

            if (y < y_limit_upper) {
                y = y_limit_upper;

            } else if (y > y_limit_bottom) {
                y = y_limit_bottom;
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
            const x = event.clientX - rect.left + vpToPx((100-COMPUTER_WIDTH_VW)/2, client_width);
            const y = event.clientY - rect.top + vpToPx((100-COMPUTER_HEIGHT_VW)/2, client_height);
            this.setState({
                moving: true,
                move_start_x: x,
                move_start_y: y,
                target_bounding_rect: rect
            });
        }
    }

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    handleResize(_event: Event) {
        client_width = document.documentElement.clientWidth;
        client_height = document.documentElement.clientHeight;
    }

    componentDidMount() {
        window.addEventListener("mousedown", this.handleMouseDown);
        window.addEventListener("mouseup", this.handleMouseUp);
        window.addEventListener("mousemove", this.handleMouseMove);
        window.addEventListener("resize", this.handleResize);
        this.onLoad();
    }

    componentWillUnmount() {
        window.removeEventListener("mousedown", this.handleMouseDown);
        window.removeEventListener("mouseup", this.handleMouseUp);
        window.removeEventListener("mousemove", this.handleMouseMove);
        window.removeEventListener("resize", this.handleResize);
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
