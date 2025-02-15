import React from "react";
import ComputerWindow from "@/app/components/computer/Window";
import styles from "@/app/components/computer/apps/NetworkNeighborhood.module.css";

interface NetworkNeighborhoodProps {
    ref_id: string;
    internal_app_code: string;
}

interface NetworkNeighborhoodState {
    active: boolean;
}

function Social(props: {prefix: string, link: string, img_src: string, alt: string}) {
    return (
        <div className={styles.social}>
            <img src={props.img_src} alt={props.alt} />
            <p>{props.prefix}<span><a href={props.link} target={"_blank"}>{props.link}</a> </span></p>
        </div>
    );
}

export default class NetworkNeighborhood extends React.Component<NetworkNeighborhoodProps, NetworkNeighborhoodState> {
    render() {
        return (
            <>
                <ComputerWindow ref_id={this.props.ref_id} title={"Network Neighborhood"} icon_src={"/computer/apps/networkneighborhood.png"} width={"35vw"} height={"35vh"}>
                    <div className={styles.Body}>
                        <div className={styles.AppBody}>
                            <h2 className={"text-center font-bold"}>Contact Me</h2>
                            <hr />
                            <Social prefix={"My GitHub: "} link={"https://github.com/quintindunn"} img_src={"/socialmedia/github-142-svgrepo-com.svg"} alt={"gh"} />
                            <Social prefix={"My LinkedIn: "} link={"https://www.linkedin.com/in/quintin-dunn-52a7892a1/"} img_src={"/socialmedia/linkedin-svgrepo-com.svg"} alt={"li"} />
                            <Social prefix={"My YouTube: "} link={"https://www.youtube.com/@QuintinDunnTinkers"} img_src={"/socialmedia/youtube-play-svgrepo-com.svg"} alt={"yt"} />
                            <Social prefix={"My Gmail: "} link={"mailto:dunnquintin07@gmail.com"} img_src={"/socialmedia/gmail-envelope-svgrepo-com.svg"} alt={"gm"} />
                        </div>
                    </div>
                </ComputerWindow>
            </>
        );
    }
}