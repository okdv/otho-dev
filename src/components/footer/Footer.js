
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Footer = (props) => {
  const data = props.data || {}
  const socials = data.socials || props.data.socials || []
    return(
        <footer className="white-txt flex-evenly">
        <p>
          Made with{" "}
          <FontAwesomeIcon
            className="margin-sm lightpink-txt"
            icon="heart"
          />
          &amp;{" "}
          <FontAwesomeIcon
            className="margin-sm lightpink-txt"
            icon="headphones-alt"
          />{" "}
          {
            data.ownerCasual && data.ownerCasual !== null ?
            (<span>by {data.ownerCasual}</span>) : " "
          }
        </p>
        <p>
          {
            data.year || new Date().getFullYear()
          }
          <FontAwesomeIcon
            className="margin-sm lightpink-txt"
            icon="copyright"
          />{" "}
          {
            data.ownerFormal || " "
          }
        </p>
        {
          socials.length > 0 ? 
          (
            <div style={{ textAlign: "center" }}>
              <span>Follow me!</span>
              <div className="margin-sm flex-evenly">
                {
                  socials.map((social,i) => {
                    return(
                      <a 
                        key={i}
                        className="clickable margin-sm"
                        href={social.link && social.link !== null ? social.link : "#"}
                      >
                      <FontAwesomeIcon
                        className="lightpink-txt"
                        icon={social.faIcon && social.faIcon !== null ? (['fab',social.faIcon]) : " "}
                        size="2x"
                      />
                    </a>
                    )
                  })
                }
              </div>
            </div>
          ) : ""
        }
      </footer>
    )
}

export default Footer