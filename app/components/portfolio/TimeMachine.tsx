"use client"

import Subheading from "@/app/components/portfolio/Subheading";
import { useComputer } from "@/app/components/computer/Computer";

export default function TimeMachine() {
    const { setOpen } = useComputer();

    function openComputer() {
        setOpen(true);
    }

    return (
        <div>
            <Subheading name={"Time Machine"} />
            <p>
                Go <a href={"#timemachine"} className={"text-blue-400"} onClick={openComputer}>back in time</a>, before I was even born.
            </p>
        </div>
    );
}