import MyComputer from "@/app/components/computer/apps/MyComputer";

export default function app_mapper(internal_name: string) {
    if (internal_name === "mycomputer") {
        return MyComputer;
    }

    return null;
}