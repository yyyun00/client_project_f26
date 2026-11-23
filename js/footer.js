// Sticky footer code from the article:
// "How to Make a Sticky Footer Using JavaScript" by [AUTHOR NAME], Medium, [DATE]
// https://rvunabandi.medium.com/how-to-make-a-sticky-footer-using-javascript-2445d899d7b4
//

window.addEventListener("load", activateStickyFooter);

function activateStickyFooter() {
  adjustFooterCssTopToSticky();
  window.addEventListener("resize", adjustFooterCssTopToSticky);
}

function adjustFooterCssTopToSticky() {
  const footer = document.querySelector(".site-footer");
  const bounding_box = footer.getBoundingClientRect();
  const footer_height = bounding_box.height;
  const window_height = window.innerHeight;
  const above_footer_height = bounding_box.top - getCssTopAttribute(footer);
  if (above_footer_height + footer_height <= window_height) {
    const new_footer_top =
      window_height - (above_footer_height + footer_height);
    footer.style.top = new_footer_top + "px";
  } else if (above_footer_height + footer_height > window_height) {
    footer.style.top = null;
  }
}

function getCssTopAttribute(htmlElement) {
  const top_string = htmlElement.style.top;
  if (top_string === null || top_string.length === 0) {
    return 0;
  }
  const extracted_top_pixels = top_string.substring(0, top_string.length - 2);
  return parseFloat(extracted_top_pixels);
}
