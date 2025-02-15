import styles from "@/app/components/computer/App.module.css"
import React from "react";
import app_mapper from "@/app/components/computer/apps/app_mapper";
import {WindowStateContextType} from "@/app/components/computer/Computer";

interface AppProps {
    window_state_ctx: WindowStateContextType;
    name: string;
    img_src: string;
    internal_app_code: string;
}

type AppState = object;

export default class App extends React.Component<AppProps, AppState> {
    private ref = React.createRef<HTMLDivElement>();

    constructor(props: AppProps) {
        super(props);
        this.state = { count: 0 };
    }

    handleClick = (event: MouseEvent) => {
        if (!this.ref.current) return;

        const target = event.target as Node;

        if (!this.ref.current.contains(target)) {
            return;
        }
        const [openWindows, setOpenWindows] = this.props.window_state_ctx;
        const WindowType = app_mapper(this.props.internal_app_code);

        if (WindowType === null) {
            return;
        }

        // @ts-expect-error Type hell
        const newWindow = React.createElement(WindowType, {ref_id: openWindows.length});

        // @ts-expect-error Type hell
        setOpenWindows([...openWindows, newWindow]);
    };

    componentDidMount() {
        window.addEventListener("click", this.handleClick);
    }

    componentWillUnmount() {
        window.removeEventListener("click", this.handleClick);
    }

    render() {
        return (
            <div className={styles.App} ref={this.ref}>
                <div>
                    <img
                        src={this.props.img_src}
                        alt={this.props.name}
                    />
                    <p>{this.props.name}</p>
                </div>
            </div>
        );
    }
}