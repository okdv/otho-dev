import React from 'react'

const Section = (props) => {
    const data = props.data || {}
    return(
        <div className={data.sectionClass || "section"}>
            {
                data.title && data.title !== null ? 
                    (<h2 className={data.titleClass || "title"}>{data.title}</h2>) : ""
            }
            <div className={data.contentClass || "content"}>
                {
                    data.paras && data.paras.length > 0 ? 
                        (data.paras.map((para, i) => {
                            return <p key={i} className={data.parasClass || "para"}>{para}</p>
                        })) : ""
                }
                {
                    props.children ? props.children : ""
                }
            </div>
            {
                data.subtitle && data.subtitle !== null ?
                    (<p className={data.subtitleClass || "subtitle"}>{data.subtitle}</p>) : ""
            }
        </div>
    )
}

export default Section