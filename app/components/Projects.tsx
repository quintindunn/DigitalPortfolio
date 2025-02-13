import Card from "@/app/components/Card";
import Subheading from "@/app/components/Subheading";

import lang from "@/app/lang";

export default function Projects() {
    return (
        <div id={"projects"}>
            <Subheading name={lang.selected_work.subheading}/>
            <div style={{margin: "0 auto"}}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4" style={{wordWrap: "break-word"}}>
                    <Card name={lang.selected_work.lapsepy.name} link={"https://github.com/quintindunn/lapsepy"} img_src={"/projects/lapsepy.png"} description={lang.selected_work.lapsepy.description}/>
                    <Card name={lang.selected_work.quick_info.name} link={"https://github.com/quintindunn/quickinfo"} img_src={"/projects/quickinfo.png"} description={lang.selected_work.quick_info.description}/>
                    <Card name={lang.selected_work.thread_art.name} link={"https://github.com/quintindunn/threadart"} img_src={"/projects/threadart.png"} description={lang.selected_work.thread_art.description}/>
                    <Card name={lang.selected_work.mosart.name} img_src={"/projects/mosart.png"} description={lang.selected_work.mosart.description}/>
                </div>
            </div>
        </div>
    )
}