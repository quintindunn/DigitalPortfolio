import Card from "./Card"
import Subheading from "./Subheading"

export default function Projects() {
    return (
        <div id={"projects"}>
            <Subheading name={"Selected Works"}/>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Card name={"LapsePy"} link={"https://github.com/quintindunn/lapsepy"} img_src={"/projects/lapsepy.png"} description={"A Python3 API Wrapper for the social media app Lapse."}/>
                <Card name={"Quick Info"} link={"https://github.com/quintindunn/quickinfo"} img_src={"/projects/quickinfo.png"} description={"A Windows desktop tool to make it easier to find network info for developers"}/>
                <Card name={"Thread Art"} link={"https://github.com/quintindunn/lapsepy"} img_src={"/projects/threadart.png"} description={"An implementation of an algorithm to convert an input image into thread art"}/>
            </div>
        </div>
    )
}