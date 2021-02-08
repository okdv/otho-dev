import React from 'react'
import { Parallax, ParallaxLayer } from "react-spring/renderprops-addons";

import Footer from "../footer/Footer"

import { ReactComponent as TreeLineOne } from "../../assets/tree-line-01.svg";
import { ReactComponent as TreeLineTwo } from "../../assets/tree-line-02.svg";
import { ReactComponent as MountainRangeOne } from "../../assets/mountain-range-01.svg";
import { ReactComponent as MountainRangeTwo } from "../../assets/mountain-range-02.svg";
import { ReactComponent as CloudsOne } from "../../assets/clouds-01.svg";

const ParallaxBackground = (props) => {

    const pageTitle = props.data.pageTitle.split(" ") || []

    return(
        <Parallax pages={2}>
            <ParallaxLayer factor={1} offset={0} speed={1}>
                <div id="sky"></div>
            </ParallaxLayer>
            <ParallaxLayer factor={1} offset={.05} speed={0}>
                <CloudsOne className="svg-bg" />
            </ParallaxLayer>
            <ParallaxLayer factor={1} offset={.1} speed={.2}>
                <MountainRangeTwo className="svg-bg" />
            </ParallaxLayer>
            <ParallaxLayer factor={1} offset={.1} speed={.5}>
                <MountainRangeOne className="svg-bg" />
            </ParallaxLayer>
            { // Insert title
            }
            <ParallaxLayer factor={1} offset={.05} speed={-.25}>
                {
                    pageTitle.length > 0 ? 
                        (<h1 className="title">{
                            pageTitle.map((str,i) => {
                                return <span key={i}>{str}<br /></span>
                            })
                        }</h1>)
                        : " "
                }
            </ParallaxLayer>
            <ParallaxLayer factor={1} offset={.25}  speed={.75}>
                <TreeLineOne className="svg-bg" />
            </ParallaxLayer>
            <ParallaxLayer factor={1} offset={.25} speed={1.25}>
                <div>
                    <TreeLineTwo style={{marginBottom: "-1em"}} className="svg-bg" />
                    <main>
                        {props.children ? props.children : " "}
                    </main>
                    <Footer data={props.data} />
                </div>
            </ParallaxLayer>
        </Parallax>
    )
}

export default ParallaxBackground