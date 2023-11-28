const logo = document.getElementById("logo_img");
const menu = document.getElementsByClassName("menu")[0];
const dropdown = document.getElementsByClassName("navigation-dropdown")[0];
const header = document.getElementsByClassName("header")[0];
const blank = document.getElementById("blankspace_logo");
const blankspace = header.clientHeight;
var status_logo = true;
blank.style.height = `${blankspace}px`;

logo.addEventListener("mouseenter",() =>{
    dropdown.style.maxHeight = dropdown.scrollHeight + "px";
})


// Menu Button --------------------------------------------------------------
const sidebar = document.querySelector('.sidebar');
const contentTop = document.querySelector('.contentTop');
const contentMiddle = document.querySelector('.contentMiddle');
// const contentBottom = document.querySelector('.contentBottom');

function showSidebar(){
    sidebar.style.display = 'flex';
    contentTop.style.display = 'none';
    contentMiddle.style.display = 'none';
    // contentBottom.style.display = 'none';
}

function hideSidebar(){
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = 'none';
    contentTop.style.display = 'block';
    contentMiddle.style.display = 'block';
    // contentBottom.style.display = 'Write your code here';
}
// --------------------------------------------------------------


function changeLogoWhite(){
    logo.src = "Media/LogoFinal(white).png";
}

let mouseStatus = false;
window.addEventListener("mousemove",(e)=>{
    let y = e.clientY
    let x = e.clientX
    let logopos = (window.innerWidth-logo.clientWidth)/2
    if (y>dropdown.scrollHeight){
        dropdown.style.maxHeight = null;
        if (mouseStatus && status_logo){
            setTimeout(changeLogoWhite, 250);
        }
        mouseStatus = false;
    }
    if (y<header.clientHeight-10 && logopos<x&& x<logopos+logo.clientWidth && status_logo){
        logo.src = "Media/LogoFinal(black).png";
        setTimeout(()=>{mouseStatus = true;},600)
    }
})


// To make logo change to black after scrolling down a certain point 
// const navigation = document.querySelector(".navigation");
// const backgroundClip = document.querySelector(".background-clip")
// const backgroundClipOptions = {
//     rootMargin: "-300px 0px 0px 0px"
// };

// const backgroundClipObserver = new IntersectionObserver(function(
//     entries, 
//     backgroundClipObserver
// ) {
//     entries.forEach(entry => {
//         if (!entry.isIntersecting) {
//             logo.src = "Media/LogoFinal(white).png";
//             status_logo = false;
//         } else{
//             logo.src = "Media/LogoFinal(black).png";
//             status_logo = true;
//         }
//     });
// },
// backgroundClipOptions);

// backgroundClipObserver.observe(backgroundClip)


// Might delete----------------------------------------------------------------------------------------
// const containerBottom = document.querySelector(".containerBottom")
// const containerMiddle = document.querySelector(".containerMiddle")
// const overallContainer = document.querySelector(".overallContainer")
// const footer = document.getElementsByTagName("footer");


// // If user touches or mouse over containerBottom, scroll-snap-type will be disabled;
// containerBottom.addEventListener("mouseenter",() =>{
//     overallContainer.style.scrollSnapType = "none";
//     console.log("SNAPPING STOPPED!");
// })
// containerBottom.addEventListener("touchmove",() =>{
//     overallContainer.style.scrollSnapType = "none";
//     console.log("SNAPPING STOPPED!");
// })

// // If user touches or mouse over containerMiddle, scroll-snap-type will be enabled;
// containerBottom.addEventListener("mouseleave",() =>{
//     if (containerBottom.addEventListener("mouseenter", () =>{return true})){
//         ;
//     }
//     else{
//         overallContainer.style.scrollSnapType = "y mandatory";
//         console.log("SNAPPING ENABLED!");
//     }
// })
// containerBottom.addEventListener("touchmove",() =>{
//     overallContainer.style.scrollSnapType = "y mandatory";
//     console.log("SNAPPING ENABLED!");
// })
//--------------------------------------------------------------------------------


// 
let touchstartX = 0;
let touchendX = 0;
let currenthref = 1;

function checkDirection() {
  if (touchendX < touchstartX && currenthref < 4){
    //left
currenthref += 1
}
  if (touchendX > touchstartX && currenthref > 1){
currenthref -= 1}

window.location.href = `#slide-${currenthref}`;
}

var bb = document.getElementsByClassName("slider")[0];

bb.addEventListener("touchstart", (e) => {
  touchstartX = e.changedTouches[0].screenX;
});

bb.addEventListener("touchend", (e) => {
  touchendX = e.changedTouches[0].screenX;
  checkDirection();
});

bb.addEventListener("mousedown", (e) => {
    console.log("down")
    touchstartX = e.clientX;
  });
  
bb.addEventListener("mouseup", (e) => {
    console.log("up")
    touchendX = e.clientX;
    checkDirection();
});

//set auto scroll (incomplete code)
// window.location.href = "#slide-1"

// function autochange(){
//     window.location.href = `#slide-${currenthref}`;
//     setTimeout(autochange,1000)
// }


