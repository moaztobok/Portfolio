import { TransitionLink } from "./TransitionLink";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHomeUser,
  faImage,
  faAddressCard,
  faSquareRss,
} from "@fortawesome/free-solid-svg-icons";
const Navigation = () => {
  return (
    <nav
      className="w-full md:w-fit md:h-full h-fit flex justify-center  z-40 items-center md:left-full bottom-0 top-full md:top-0 fixed "
      id="nav"
    >
      <div className="lg:w-fit w-full  h-fit md:py-6 md:px-2 py-4 px-10 bg-primary/25 backdrop-blur-md md:rounded-full rounded-t-3xl ">
        <div className="flex md:flex-col gap-5 w-full md:w-fit justify-between">
          <TransitionLink
            href="/"
            icon={
              <FontAwesomeIcon
                icon={faHomeUser}
                width={24}
                height={24}
                className="w-6 h-6"
              />
            }
          />
          <TransitionLink
            href="/gallary"
            icon={
              <FontAwesomeIcon
                icon={faImage}
                width={24}
                height={24}
                className="w-6 h-6"
              />
            }
          />
          <TransitionLink
            href="/blog"
            icon={
              <FontAwesomeIcon
                icon={faSquareRss}
                width={24}
                height={24}
                className="w-6 h-6"
              />
            }
          />
          <TransitionLink
            href="#contact"
            icon={
              <FontAwesomeIcon
                icon={faAddressCard}
                width={24}
                height={24}
                className="w-6 h-6"
              />
            }
          />
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
