import MyComputer from "@/app/components/computer/apps/MyComputer";
import PlaceHolder from "@/app/components/computer/apps/PlaceHolder";

export default function app_mapper(internal_name: string) {
    if (internal_name === "mycomputer") {
        return MyComputer;
    }
    return PlaceHolder;
}