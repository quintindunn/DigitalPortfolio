import Card from "./Card";
import Subheading from "./Subheading";

export default function Hobbies() {
    return (
        <div id={"hobbies"}>
            <Subheading name={"Hobbies"}/>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Card name={"3D Modeling"} description={"Both aesthetical and functional 3D models."} img_src={"/hobbies/3dmodeling.png"}/>
                <Card name={"Electronics"} description={"Arduino, & RaspberryPI projects built from the ground up."} img_src={"/hobbies/electronics.png"}/>
            </div>
        </div>

    );
}