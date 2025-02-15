import ComputerWindow from "@/app/components/computer/Window";
import React from "react";

export default function PlaceHolder(props: {ref_id: string}) {
    return (
        <>
            <ComputerWindow ref_id={props.ref_id} title={"Place Holder App"} icon_src={"/skills/python.png"} width={"20vw"} height={"35vh"} active={false}>
                <p>How did you get here?!</p>
            </ComputerWindow>
        </>
    );
}