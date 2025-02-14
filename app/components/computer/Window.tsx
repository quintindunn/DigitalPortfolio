"use client";

import React from "react";
import styles from "@/app/components/computer/Window.module.css";

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
            target_bounding_rect: null
        };
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
        if (this.state.moving) {
            this.setState({
                x: event.clientX - this.state.move_start_x,
                y: event.clientY - this.state.move_start_y
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
