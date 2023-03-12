$(function () {
  $(".menu-link").click(function () {
    $(".menu-link").removeClass("is-active");
    $(this).addClass("is-active");
  });
});

$(function () {
  $(".main-header-link").click(function () {
    $(".main-header-link").removeClass("is-active");
    $(this).addClass("is-active");
  });
});

const dropdowns = document.querySelectorAll(".dropdown");
dropdowns.forEach((dropdown) => {
  dropdown.addEventListener("click", (e) => {
    e.stopPropagation();
    dropdowns.forEach((c) => c.classList.remove("is-active"));
    dropdown.classList.add("is-active");
  });
});

$(".search-bar input")
  .focus(function () {
    $(".header").addClass("wide");
  })
  .blur(function () {
    $(".header").removeClass("wide");
  });

$(document).click(function (e) {
  var container = $(".status-button");
  var dd = $(".dropdown");
  if (!container.is(e.target) && container.has(e.target).length === 0) {
    dd.removeClass("is-active");
  }
});

$(function () {
  $(".dropdown").on("click", function (e) {
    $(".content-wrapper").addClass("overlay");
    e.stopPropagation();
  });
  $(document).on("click", function (e) {
    if ($(e.target).is(".dropdown") === false) {
      $(".content-wrapper").removeClass("overlay");
    }
  });
});

$(function () {
  $(".status-button:not(.open)").on("click", function (e) {
    $(".overlay-app").addClass("is-active");
  });
  $(".pop-up .close").click(function () {
    $(".overlay-app").removeClass("is-active");
  });
});

$(".status-button:not(.open)").click(function () {
  $(".pop-up").addClass("visible");
});

$(".pop-up .close").click(function () {
  $(".pop-up").removeClass("visible");
});


/* light system */
const toggleButton = document.querySelector('.dark-light');

toggleButton.addEventListener('click', () => {
  document.body.classList.toggle('light-mode');
});



/* GRID SYSTEM */
var elements = document.getElementsByClassName("column");
var i;

// Full-width images
function one() {
    for (i = 0; i < elements.length; i++) {
    elements[i].style.msFlex = "100%";  // IE10
    elements[i].style.flex = "100%";
  }
}

// Two images side by side
function two() {
  for (i = 0; i < elements.length; i++) {
    elements[i].style.msFlex = "50%";  // IE10
    elements[i].style.flex = "50%";
  }
}

// Four images side by side
function four() {
  for (i = 0; i < elements.length; i++) {
    elements[i].style.msFlex = "25%";  // IE10
    elements[i].style.flex = "25%";
  }
}

// Add active class to the current button (highlight it)
var header = document.getElementById("myHeader");
var btns = header.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}
$(document).ready(function(){
  $("#comment-section").hide();
});
/* Trying to make the grid system work with comment section */
var elements = document.getElementsByClassName("column");
var i;
var status="close";
function comment() {
  if (status === "close"){
    document.querySelector(".content-wrapper").style.width = "50vw";
    two();
    $(document).ready(function(){
      $("#comment-section").show();
      $("#remove").hide();
    });
    status="open";
  } else if (status === "open"){
    document.querySelector(".content-wrapper").style.width = "98.35vw";
    $(document).ready(function(){
      $("#comment-section").hide();
      $("#remove").show();
    });
    status="close";
  }
}

$(function () {
  $(".button").click(function () {
    $(this).addClass("is-active");
  });
});

$(document).ready(function(){
  $(".comment-text-under").hide();
}); 

function commentExpand() {

  var dots = document.getElementById("dots");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    document.getElementById("myBtn").style.transform = "rotate(0deg)";

    $(document).ready(function(){
      $(".comment-text-under").hide();
    }); 
  } else{
    dots.style.display = "none";
    document.getElementById("myBtn").style.transform = "rotate(180deg)"; 

    $(document).ready(function(){
      $(".comment-text-under").show();
    }); 
  }
}

for (i = 0; i < elements.length; i++) {
  slider = document.querySelector('.comment-under');
  let mouseDown = false;
  let startX, scrollLeft;

  let startDragging = function (e) {
    mouseDown = true;
    startX = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
  };
  let stopDragging = function (event) {
    mouseDown = false;
  };

  slider.addEventListener('mousemove', (e) => {
    e.preventDefault();
    if(!mouseDown) { return; }
    const x = e.pageX - slider.offsetLeft;
    const scroll = x - startX;
    slider.scrollLeft = scrollLeft - scroll*2.8;
  });

  // Add the event listeners
  slider.addEventListener('mousedown', startDragging, false);
  slider.addEventListener('mouseup', stopDragging, false);
  slider.addEventListener('mouseleave', stopDragging, false);
}

/*
$apps_card=$('.apps-card');

$app_card = $apps_card.find('.app-card');

for (var i = 40; i <= 50; i++) {
  var $newItem = $app_card.clone();
  $apps_card.append($newItem);
}
*/

