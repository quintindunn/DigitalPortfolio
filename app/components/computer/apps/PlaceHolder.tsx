import ComputerWindow from "@/app/components/computer/Window";
import React from "react";

interface PlaceHolderProps {
    ref_id: string;
}

export default function PlaceHolder(props: PlaceHolderProps) {
    return (
        <>
            <ComputerWindow ref_id={props.ref_id} title={"Place Holder App"} icon_src={"/skills/python.png"} width={"20vw"} height={"35vh"}>
                <p>How did you get here?!</p>
            </ComputerWindow>
        </>
    );
}