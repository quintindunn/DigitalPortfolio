import Card from "@/app/components/Card";
import Subheading from "@/app/components/Subheading";

import lang from "@/app/lang";

export default function Hobbies() {
    return (
        <div id={"hobbies"}>
            <Subheading name={lang.hobbies.subheading}/>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Card name={lang.hobbies._3d_modeling.name} description={lang.hobbies._3d_modeling.description} img_src={"/hobbies/3dmodeling.png"}/>
                <Card name={lang.hobbies.electronics.name} description={lang.hobbies.electronics.description} img_src={"/hobbies/electronics.png"}/>
            </div>
        </div>

    );
}