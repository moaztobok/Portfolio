import gsap from "gsap";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { MutableRefObject } from "react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
export const animateHeroItems = () => {
  const item1 = document.getElementById("item-1");
  const item2 = document.getElementById("item-2");
  const item3 = document.getElementById("item-3");
  if (item1 && item2 && item3) {
    const tl = gsap.timeline();
    tl.set([item1, item2, item3], {
      yPercent: 100,
      opacity: 0,
    }).to([item1, item2, item3], {
      yPercent: 0,
      opacity: 1,
      stagger: 0.2,
    });
  }
};
export const animatePageIn = () => {
  const animateNav = (tl: GSAPTimeline) => {
    const desktop_nav = document.getElementById("nav-table-desktop");
    const mobile_nav = document.getElementById("nav-mobile");

    const windowInnerWidth = window.innerWidth;
    function handleMobileAnimation(nav: HTMLElement, tl: GSAPTimeline) {
      tl.set([nav], {
        yPercent: 0,
        opacity: 0,
      }).to([nav], {
        yPercent: -100,
        opacity: 1,
        duration: 0.2,
        onComplete: () => animatTopNav(tl),
      });
    }

    function handleTabletDesktopAnimation(nav: HTMLElement, tl: GSAPTimeline) {
      tl.set([nav], {
        xPercent: 0,
        opacity: 0,
      })
        .to([nav], {
          xPercent: -160,
          opacity: 1,
          duration: 0.1,
        })
        .to([nav], {
          xPercent: -120,
          duration: 0.1,
          onComplete: () => animateHeroItems(),
        });
    }
    if (desktop_nav) handleTabletDesktopAnimation(desktop_nav, tl);
    if (mobile_nav) handleMobileAnimation(mobile_nav, tl);
    // if (nav) {
    //   if (windowInnerWidth < 768) {
    //     handleMobileAnimation(nav, tl);
    //   } else {
    //     handleTabletDesktopAnimation(nav, tl);
    //   }
    // }
  };
  const animatTopNav = (tl: GSAPTimeline) => {
    const topNav = document.getElementById("top-nav");
    if (topNav) {
      tl.set([topNav], {
        yPercent: 0,
        opacity: 0,
      }).to([topNav], {
        yPercent: 100,
        opacity: 1,
        duration: 0.2,
      });
    }
    //   t1.to(topNav, {
    //     yPercent: -100,
    //     duration: 0.3,
    //   });
    // }
  };
  const bannnerOne = document.getElementById("banner-1");
  const bannnerTwo = document.getElementById("banner-2");
  const bannnerThree = document.getElementById("banner-3");
  const bannnerFour = document.getElementById("banner-4");

  if (bannnerOne && bannnerTwo && bannnerThree && bannnerFour) {
    const tl = gsap.timeline();
    tl.set([bannnerOne, bannnerTwo, bannnerThree, bannnerFour], {
      yPercent: 0,
    }).to([bannnerOne, bannnerTwo, bannnerThree, bannnerFour], {
      yPercent: 100,
      stagger: 0.2,
      onComplete: () => animateNav(tl),
    });
  }
};

export const animatePageOut = (href: string, router: AppRouterInstance) => {
  const bannnerOne = document.getElementById("banner-1");
  const bannnerTwo = document.getElementById("banner-2");
  const bannnerThree = document.getElementById("banner-3");
  const bannnerFour = document.getElementById("banner-4");
  if (bannnerOne && bannnerTwo && bannnerThree && bannnerFour) {
    const tl = gsap.timeline();
    tl.set([bannnerOne, bannnerTwo, bannnerThree, bannnerFour], {
      yPercent: -100,
    }).to([bannnerOne, bannnerTwo, bannnerThree, bannnerFour], {
      yPercent: 0,
      stagger: 0.2,
      onComplete: () => router.push(href),
    });
  }
};
gsap.registerPlugin(ScrollTrigger);

export const animateInElements = (
  el: HTMLElement[],
  trigger: MutableRefObject<null>
) => {
  return gsap.fromTo(
    el,
    { translateX: -200, opacity: 0 },
    {
      translateX: 0,
      opacity: 1,
      stagger: 0.2,
      duration: 0.6,
      scrollTrigger: {
        trigger: trigger.current,
        start: "top 80%",
      },
    }
  );
};
