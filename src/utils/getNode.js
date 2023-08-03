const getNode = (selectors, all = false) => {
  if (all) {
    return selectors.map((selector) => {
      return document.querySelectorAll(selector);
    });
  } else {
    return selectors.map((selector) => {
      return document.querySelector(selector);
    });
  }
};

export default getNode;
