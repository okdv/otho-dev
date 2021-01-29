import React from 'react'
import LinkBox from '../link-box/LinkBox'

// Add react-spring trails to these

const ModalRow = (props) => {
    return (
        <div className="section">
            <h2 className="title">{props.title}</h2>
            <div className="flex-evenly">
                <LinkBox row={props.rowId} />
                <LinkBox row={props.rowId} />
                <LinkBox row={props.rowId} />
            </div>
            {
                props.subtitle && props.subtitle != null ? 
                (<p className="para center">{props.subtitle}</p>) : null
            }
        </div>
    )
}

export default ModalRow