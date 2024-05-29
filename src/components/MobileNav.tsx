import {
  faAddressCard,
  faHomeUser,
  faImage,
  faSquareRss,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { TransitionLink } from './TransitionLink';
const MobileNav = () => {
  return (
    <nav
      className="fixed bottom-0 top-full z-40 flex h-full w-full  items-end justify-center md:invisible md:left-full md:top-0 md:h-full md:w-fit"
      id="nav-mobile"
    >
      <div className="h-fit w-full  rounded-t-3xl bg-primary/25 px-10 py-4 backdrop-blur-md md:rounded-full md:px-2 md:py-6 lg:w-fit ">
        <div className="flex w-full justify-between gap-5 md:w-fit md:flex-col">
          <TransitionLink
            href="/"
            icon={
              <FontAwesomeIcon
                icon={faHomeUser}
                width={24}
                height={24}
                className="h-6 w-6"
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
                className="h-6 w-6"
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
                className="h-6 w-6"
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
                className="h-6 w-6"
              />
            }
          />
        </div>
      </div>
    </nav>
  );
};

export default MobileNav;
