import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const IconText = (props) => {
    return(
        <div className="center">
            <span className={props.style ? props.style : ""}>
                {
                    props.data.map((item) => {
                        return item.text && item.text !== null ?
                        (
                            <span className={item.style ? item.style : ""}>{item.text}</span>
                        )
                        : 
                        (
                            <FontAwesomeIcon 
                                className={item.style ? item.style : ""}
                                icon={item.icon ? item.icon : ""}
                            />
                        )
                    })
                }
            </span>
        </div>
    )
}

export default IconText