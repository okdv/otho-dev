import React from 'react'
import Modal from 'react-modal'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const customStyles = {
    content: {
        backgroundColor: "#0A0013",
        color: "white",

    }
}

const ProjectModal = (props) => {
    return (
        <div className="flex-between">
            <p>This is a paragraph</p>
            <div className="lightpink-txt center">
                <div>
                    <h5 className="lightblue-txt">Languages</h5>
                    <div>
                        <FontAwesomeIcon icon={['fab','html5']} />
                        <FontAwesomeIcon icon={['fab','css3-alt']} />
                        <FontAwesomeIcon icon={['fab','js']} />
                    </div>
                </div>
                <div>
                    <h5 className="lightblue-txt">Tools</h5>
                    <div>
                        <FontAwesomeIcon icon={['fab','aws']} />
                        <FontAwesomeIcon icon={['fab','wordpress']} />

                    </div>
                </div>
            </div>
        </div>
    )
}

const CharityModal = (props) => {
    return (
        <div>
            <p>
                This is a charity modal
            </p>
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

    return (
        <div>
            <img onClick={openModal} src="https://via.placeholder.com/150" alt="" className="clickable center logo" />
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
            >
                <div className="flex-between">
                    <div><h4 className="lightpink-txt">This is the modal title</h4></div>
                    <div id="exit-btn" className="clickable">
                        <FontAwesomeIcon 
                            style={{color:"red",fontSize:"1.5em"}} 
                            onClick={closeModal} 
                            icon="times-circle" 
                        />
                    </div>
                    
                </div>
                {
                    props.row && props.row === 1 ? <CharityModal /> : <ProjectModal /> 
                }
                <div className="center">
                    <a href="#">
                        <button>Visit</button>
                    </a>
                </div>
            </Modal>
        </div>
    )
}

export default LinkBox