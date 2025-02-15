import React from "react";
import ComputerWindow from "@/app/components/computer/Window";

import styles from "@/app/components/computer/apps/Resume.module.css"

interface ResumeProps {
    ref_id: string;
}

interface ResumeState {
    active: boolean;
}

export default class Resume extends React.Component<ResumeProps, ResumeState> {
    constructor(props: ResumeProps) {
        super(props);
    }

    render() {
        return (
            <>
                <ComputerWindow ref_id={this.props.ref_id} title={"My Resume"} icon_src={"/computer/apps/resume.png"} width={"45vw"} height={"50vh"}>
                    <div className={styles.Body}>
                        <div className={styles.resume}>
                            <div className={`${styles.resumeHeader} text-center`}>
                                <h1 className={"text-4xl font-bold"}>Quintin Dunn</h1>
                                <p>dunnquintin07@gmail.com</p>
                                <a className={"block text-blue-700 hover:cursor-pointer"} href={"https://github.com/quintindunn"} target={"_blank"}>https://github.com/quintindunn</a>
                                <a className={"block text-blue-700 hover:cursor-pointer"} href={"https://portfolio.quintindev.com"} target={"_blank"}>https://portfolio.quintindev.com</a>
                            </div>
                            <div className={styles.resumeSubheading}>
                                <h2 className={"font-bold italic"}>Education</h2>
                                <hr />
                                <p className={"font-bold"}>Westhampton Beach High School</p>
                                <p>Senior, Graduating June 2025</p>

                                <p className={"pt-4 font-bold"}>Notable Classes:</p>
                                <ul className={styles.list}>
                                    <li>AP Computer Science A</li>
                                    <li>AP Computer Science Principles</li>
                                    <li>AP Biology</li>
                                    <li>AP Chemistry</li>
                                    <li>AP Physics 1</li>
                                    <li>AP Statistics</li>
                                    <li>AP Macroeconomics</li>
                                </ul>
                            </div>
                            <div className={styles.resumeSubheading}>
                                <h2 className={"font-bold italic pt-4"}>EXPERIENCE</h2>
                                <hr />
                                <p><span className={"font-bold"}>Robotics Team Developer | Westhampton Beach High School:</span> September 2022 - June 2025</p>
                                <ul className={styles.list}>
                                    <li>Helped design and program a robot to compete in the 2023, 2024 First Robotics Competition.</li>
                                    <li>Created an interface for our team to use to scout other teams to easily determine their strengths, and weaknesses.</li>
                                    <li>Continuing in the year of 2025.</li>
                                </ul>
                            </div>
                            <div className={styles.resumeSubheading}>
                                <h2 className={"font-bold italic pt-4"}>FAVORITE PROJECTS</h2>
                                <hr />

                                <p><span className={"font-bold mt-4"}>Portfolio (NextJS, React, HTML, CSS, TypeScript)</span></p>
                                <ul className={styles.list}>
                                    <li>Created my digital portfolio using NextJS, which incorporates a simulated Windows95 computer.</li>
                                </ul>

                                <p><span className={"font-bold mt-4"}>Mosart (Django, HTML, CSS, JS)</span></p>
                                <ul className={styles.list}>
                                    <li>Created a social-media type site that can turn any photo into a story of your past.</li>
                                </ul>

                                <p><span className={"font-bold mt-4"}>LapsePy (Python3, HTTP requests, GraphQL</span></p>
                                <ul className={styles.list}>
                                    <li>Created an API wrapper for the social media app Lapse.</li>
                                    <li>Created a tool to help you get your authentication token.</li>
                                </ul>
                            </div>
                            <div className={styles.resumeSubheading}>
                                <h2 className={"font-bold italic pt-4"}>LANGUAGES AND TECHNOLOGIES</h2>
                                <hr />
                                <ul className={styles.list}>
                                    <li>Python - 6 years</li>

                                    <li>JavaScript - 5 years</li>
                                    <li>TypeScript - 5 months</li>
                                    <li>HTML - 5 years</li>
                                    <li>CSS - 4 years</li>

                                    <li>Java - 3 years</li>

                                    <div style={{height: "1rem"}}></div>
                                    <li>Linux - 3 years</li>
                                    <li>Django - 3 years</li>
                                    <li>Flask - 3 years</li>
                                    <li>Git - 4 years</li>
                                    <li>REST APIs - 5 years</li>
                                    <li>PyTorch - 1.5 years</li>
                                    <li>React - 1 month</li>
                                </ul>
                            </div>
                            <div className={styles.resumeSubheading}>
                                <h2 className={"font-bold italic pt-4"}>OTHER SKILLS</h2>
                                <hr />
                                <ul className={styles.list}>
                                    <li>Deployed servers on Unix based systems.</li>
                                    <li>Thorough knowledge on the components of HTTP requests.</li>
                                    <li>Understands importance of concise code & commits.</li>
                                    <li>Can adapt to new technologies, and ecosystems quickly.</li>
                                    <li>Understands the concepts behind machine learning, and has implemented machine learning models.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </ComputerWindow>
            </>
        );
    }

}