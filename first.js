window.onload = function() {
    var fullimgBox = document.getElementById("fullimgBox");
    var fullimg = document.getElementById("fullimg");

    function openFullImg(pic) {
        fullimgBox.style.display = "flex";
        fullimg.src = pic;
    }

    function closeFullImg() {
        fullimgBox.style.display = "none";
    }

    // Attach these functions to the window object so they can be accessed by the onclick event in the HTML
    window.openFullImg = openFullImg;
    window.closeFullImg = closeFullImg;
};