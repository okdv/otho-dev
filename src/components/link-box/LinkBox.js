import React, {useEffect} from 'react'
import Modal from 'react-modal'

import Amplify, { API, graphqlOperation } from 'aws-amplify'
import awsExports from "../../aws-exports"
import { sidebarByNameExpanded } from "../../graphql/custom"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

Amplify.configure(awsExports)

const customStyles = {
    content: {
        backgroundColor: "#0A0013",
        color: "white",

    }
}

const SidebarItem = (props) => {

    const icons = props.data.iconItems.items || []

    return (
        <div className="sidebar-item">
            <h5>{props.data.title}</h5>
            <div className="content-box">
                {
                    icons.map((icon, i) => {
                        console.log(icon)
                        return icon.icon.link != null ? (
                            <a href={icon.icon.link} key={i}>
                                <FontAwesomeIcon className="lightblue-txt" size={"2x"} icon={['fab', icon.icon.faIcon]} />
                            </a>
                        ) : (<span key={i}><FontAwesomeIcon className="lightblue-txt" size={"2x"} icon={['fab', icon.icon.faIcon]} /></span>)
                    })
                }
            </div>
        </div>
    )
}

const ModalContent = (props) => {
    const [sidebarData, setSidebarData] = React.useState({
        tools: null,
        code: null,
        sidebarPresent: false
    })

    const toolsName = (props.modalData.name) + "-tools"
    const codeName = (props.modalData.name) + "-code"

    useEffect(() => {
        fetchSidebarData()
    }, [])

    async function fetchSidebarData() {
        try {
            const apiResponseTools = await API.graphql(graphqlOperation(sidebarByNameExpanded, {name: toolsName}))
            const apiResponseCode = await API.graphql(graphqlOperation(sidebarByNameExpanded, {name: codeName}))
            const toolsUsed = apiResponseTools.data.sidebarByName.items
            const codeUsed = apiResponseCode.data.sidebarByName.items
            const setMe = {
                tools: toolsUsed.length > 0 ? toolsUsed[0] : null,
                code: codeUsed.length > 0 ? codeUsed[0] : null,
                sidebarPresent: toolsUsed.length > 0 || codeUsed.length > 0 ? true : false
            }
            setSidebarData(setMe)
        } catch (err) {
            console.log("Error in fetchSidebarData: ", err)
        }
    }

    return (
        <div className={
            sidebarData.sidebarPresent === true ? "flex-between modal-content" : "modal-content"
        }>
            <div className="para-box">
                {
                    props.modalData.paras && props.modalData.paras.length > 0 ? (
                        props.modalData.paras.map((para, i) => {
                            return <p key={i}>{para}</p> 
                        })
                    ) : ""
                }
            </div>
            {
                sidebarData.sidebarPresent === true ? (
                    <div className="sidebar lightpink-txt center">
                        {
                            sidebarData.code != null ? (
                                <SidebarItem data={sidebarData.code} />
                            ) : ""
                        }
                        {
                            sidebarData.tools != null ? (
                                <SidebarItem data={sidebarData.tools} />
                            ) : ""
                        }
                    </div>
                ) : ""
            }
        </div>
    )
}

const LinkBox = (props) => {
    const [modalIsOpen, setIsOpen] = React.useState(false)

    function openModal() {
        setIsOpen(true)
    }

    function closeModal() {
        setIsOpen(false)
    }

    console.log(props)

    return (
        <div className="link-box">
            <img onClick={openModal} src={props.data.image != null ? props.data.image : "https://via.placeholder.com/150"} alt={props.data.title} className="clickable center logo" />
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
                appElement={document.getElementById('App')}
            >
                <div className="flex-between">
                    <div><h4 className="lightpink-txt">{props.data.title}</h4></div>
                    <div id="exit-btn" className="clickable">
                        <FontAwesomeIcon 
                            style={{color:"red",fontSize:"1.5em"}} 
                            onClick={closeModal} 
                            icon="times-circle" 
                        />
                    </div>
                    
                </div>
                <br />
                <ModalContent modalData={props.data} />
                <br />
                <div className="center">
                    <a href={props.data.link}>
                        <button className="white-txt btn">{props.data.cta && props.data.cta != null ? props.data.cta : "See more"}</button>
                    </a>
                </div>
            </Modal>
        </div>
    )
}

export default LinkBox