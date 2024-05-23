const animateHelper = (classString) => {
  const classcb = classString;
  return () => {
    let ticking = false;
    const animateObjects = document.querySelectorAll(classcb);
    const elementIsVisibleInViewport = (el, partiallyVisible = false) => {
      const {
        top, left, bottom, right,
      } = el.getBoundingClientRect();
      const { innerHeight, innerWidth } = window;
      return partiallyVisible
        ? ((top > 0 && top < innerHeight)
                    || (bottom > 0 && bottom < innerHeight))
                && ((left > 0 && left < innerWidth) || (right > 0 && right < innerWidth))
        : top >= 0 && left >= 0 && bottom <= innerHeight && right <= innerWidth;
    };
    const scrollEvents = () => {
      for (let i = 0; i < animateObjects.length; i++) {
        if (elementIsVisibleInViewport(animateObjects[i])) {
          if (animateObjects[i].classList.contains("notvisible")) animateObjects[i].classList.remove("notvisible");
        } else {
          animateObjects[i].classList.add("notvisible");
        }
      }
    };

    window.addEventListener("load", () => {
      for (let i = 0; i < animateObjects.length; i++) {
        animateObjects[i].classList.add("notvisible");
      }
      scrollEvents();
      document.addEventListener("scroll", (_event) => {
        if (!ticking) {
          ticking = true;
          scrollEvents();
          setTimeout(() => {
            ticking = false;
          }, 100);
        }
      });
    });
  };
};
export default animateHelper;
