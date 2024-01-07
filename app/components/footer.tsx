import Container from "./container";
import { DateTime } from "luxon";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode, faCoffee, faHeart } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <footer className="bg-neutral-50 border-t border-neutral-200">
      <Container>
        <div className="py-5 flex flex-col lg:flex-row items-center">
          <h3 className="text-center lg:text-left mb-10 lg:mb-0 lg:pr-4 lg:w-1/2">
            Made with <FontAwesomeIcon icon={faCoffee} />,{" "}
            <FontAwesomeIcon icon={faCode} />, and lots of{" "}
            <FontAwesomeIcon icon={faHeart} />.
          </h3>
          <div className="flex flex-col lg:flex-row justify-center lg:justify-end text-center lg:text-right lg:pl-4 lg:w-1/2">
            &#169; 2019&ndash;{DateTime.now().year} Stefanie Molin
            {/* on small screens, reduce the distance between this line and the one above */}
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
