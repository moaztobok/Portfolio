import gsap from "gsap";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

export const animatePageIn = () => {
  const animateNav = (tl: GSAPTimeline) => {
    const nav = document.getElementById("nav");
    const windowInnerWidth = window.innerWidth;
    function handleMobileAnimation(nav: HTMLElement, tl: GSAPTimeline) {
      tl.set([nav], {
        yPercent: 0,
        opacity: 0,
      }).to([nav], {
        yPercent: -100,
        opacity: 1,
        duration: 0.3,
        onComplete: () => animatTopNav(tl),
      });
    }

    function handleTabletDesktopAnimation(nav: HTMLElement, tl: GSAPTimeline) {
      tl.set([nav], {
        xPercent: 0,
        opacity: 0,
      })
        .to([nav], {
          xPercent: -150,
          opacity: 1,
          duration: 0.2,
          onComplete: () => animatTopNav(tl),
        })
        .to([nav], {
          xPercent: -110,
          duration: 0.2,
        });
    }
    if (nav) {
      if (windowInnerWidth < 768) {
        handleMobileAnimation(nav, tl);
      } else {
        handleTabletDesktopAnimation(nav, tl);
      }
    }
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
        duration: 0.3,
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
