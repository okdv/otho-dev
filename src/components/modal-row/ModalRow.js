import React from 'react'
import LinkBox from '../link-box/LinkBox'

// Add react-spring trails to these

const ModalRow = (props) => {
    return (
        <div className="section">
            <h2 className="title">This is a header</h2>
            <div className="flex-evenly">
                <LinkBox row={props.rowId} />
                <LinkBox row={props.rowId} />
                <LinkBox row={props.rowId} />
            </div>
            <p className="para center">This is a subtitle</p>
        </div>
    )
}

export default ModalRow