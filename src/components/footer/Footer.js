
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Footer = (props) => {
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
          by Otho
        </p>
        <p>
          2021
          <FontAwesomeIcon
            className="margin-sm lightpink-txt"
            icon="copyright"
          />{" "}
          Otho DuBois
        </p>
        <div style={{ textAlign: "center" }}>
          <span>Follow me!</span>
          <div className="margin-sm flex-evenly">
            <a 
              className="clickable margin-sm"
              href="#"
            >
              <FontAwesomeIcon
                className="lightpink-txt"
                icon={['fab', 'github']}
                size="2x"
              />
            </a>
            <a 
              className="clickable margin-sm"
              href="#"
            >
              <FontAwesomeIcon
                className="lightpink-txt"
                icon={['fab', 'twitter']}
                size="2x"
              />
            </a>
            <a 
              className="clickable margin-sm"
              href="#"
            >
              <FontAwesomeIcon
                className="lightpink-txt"
                icon={['fab', 'instagram']}
                size="2x"
              />
            </a>
          </div>
        </div>
      </footer>
    )
}

export default Footer