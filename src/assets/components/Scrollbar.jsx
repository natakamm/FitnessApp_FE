const Scrollbar = () => {
  window.onscroll = function () {
    pageScroll();
  };

  const pageScroll = () => {
    //document.body.scrollTop and document.documentElement.scrollTop both return the number of pixels the page has been scrolled vertically.
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;

    //document.documentElement.scrollHeight gives the total height of the page, including content not visible on the screen (i.e., the entire scrollable area).
    //document.documentElement.clientHeight gives the height of the visible portion of the page (the viewport height).
    //Subtracting clientHeight from scrollHeight gives the maximum scrollable distance.
    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;

    //calculates the percentage  of the page that has been scrolled
    const scrolled = (winScroll / height) * 100;
    document.getElementById("proBar").style.width = scrolled + "%";
  };

  return (
    <div className="progress-container">
      <div className="progress-bar" id="proBar"></div>
    </div>
  );
};

export default Scrollbar;
