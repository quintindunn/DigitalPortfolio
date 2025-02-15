import MyComputer from "@/app/components/computer/apps/MyComputer";
import PlaceHolder from "@/app/components/computer/apps/PlaceHolder";
import Resume from "@/app/components/computer/apps/Resume";
import NetworkNeighborhood from "@/app/components/computer/apps/NetworkNeighborhood";

export function internal_name_to_displayed_name(internal_name: string) {
    const NAMES: { [key: string]: string } = {
        "mycomputer": "My Computer",
        "resume": "My Resume",
        "networkneighborhood": "Network Neighborhood",
        "mybriefcase": "My Briefcase",
    }

    return NAMES[internal_name];
}

export function internal_name_to_app_icon(internal_name: string) {
    const NAMES: { [key: string]: string } = {
        "mycomputer": "/computer/apps/mycomputer.png",
        "resume": "/computer/apps/document.png",
        "networkneighborhood": "/computer/apps/networkneighborhood.png",
        "mybriefcase": "/computer/apps/mybriefcase.png",
    }

    return NAMES[internal_name];
}

export default function app_mapper(internal_name: string) {
    if (internal_name === "mycomputer") {
        return MyComputer;
    } else if (internal_name === "resume") {
        return Resume;
    } else if (internal_name === "networkneighborhood") {
        return NetworkNeighborhood;
    } else if (internal_name === "mybriefcase") {
        return MyComputer;
    }
    return PlaceHolder;
}