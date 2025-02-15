import MyComputer from "@/app/components/computer/apps/MyComputer";
import PlaceHolder from "@/app/components/computer/apps/PlaceHolder";
import Resume from "@/app/components/computer/apps/Resume";

export function internal_name_to_displayed_name(internal_name: string) {
    const NAMES: { [key: string]: string } = {
        "mycomputer": "My Computer",
        "resume": "My Resume",
    }

    return NAMES[internal_name];
}

export default function app_mapper(internal_name: string) {
    if (internal_name === "mycomputer") {
        return MyComputer;
    } else if (internal_name === "resume") {
        return Resume;
    }
    return PlaceHolder;
}