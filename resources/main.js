
/* Taken from "https://www.w3schools.com/howto/howto_js_read_more.asp" */

function hide1() {
    var dots = document.getElementById("dots-1");
    var moreText = document.getElementById("more-1");
    var btnText = document.getElementById("myBtn-1");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "More >>";
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Less <<";
      moreText.style.display = "inline";
    }
  }

  function hide2() {
    var dots = document.getElementById("dots-2");
    var moreText = document.getElementById("more-2");
    var btnText = document.getElementById("myBtn-2");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "More >>";
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Less <<";
      moreText.style.display = "inline";
    }
  }