import Image from "next/image";

function SocialLink({ name, img_src, link, scale = 1 }: { name: string; img_src: string; link: string; scale?: number }) {
    return (
        <div>
            <div style={{ width: "2rem", height: "2rem", position: "relative" }}>
                <a href={link} target="_blank" rel="noopener noreferrer">
                    <Image
                        className={"dark:invert"}
                        src={img_src} alt={name}
                        width={256}
                        height={256}
                        style={{ transform: `scale(${scale})` }}
                    />
                </a>
            </div>
        </div>
    );
}

export default function SocialLinks () {
    return (
        // Display left-right same line
        <div className="flex flex-row space-x-4">
            <SocialLink name={"Github"} img_src={"socialmedia/github-142-svgrepo-com.svg"} link={"https://github.com/quintindunn"} />
            <SocialLink name={"LinkedIn"} img_src={"socialmedia/linkedin-svgrepo-com.svg"} link={"https://www.linkedin.com/in/quintin-dunn-52a7892a1/"} />
            <SocialLink scale={1.5} name={"YouTube"} img_src={"socialmedia/youtube-play-svgrepo-com.svg"} link={"https://www.youtube.com/@QuintinDunnTinkers"} />
        </div>
    );
}