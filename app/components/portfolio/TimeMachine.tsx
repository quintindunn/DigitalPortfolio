"use client"

import Subheading from "@/app/components/portfolio/Subheading";
import { useComputer } from "@/app/components/computer/Computer";
import {BrowserView, MobileView} from "react-device-detect";

export default function TimeMachine() {
    const { setOpen } = useComputer();

    function openComputer() {
        setOpen(true);
    }

    return (
        <div>
            <Subheading name={"Time Machine"} />
            <BrowserView>
                <p>
                    Go <a href={"#timemachine"} className={"text-blue-400"} onClick={openComputer}>back in time</a>, before I was even born.
                </p>
            </BrowserView>
            <MobileView>
                <p>
                    Use a desktop browser on your computer to use the time machine! (It&#39;s worth it!)
                </p>
            </MobileView>
        </div>
    );
}