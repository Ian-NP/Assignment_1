// Navigation Javascript -----------------------------------------------------------------------

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


// Mobile Menu Button Functions --------------------------------------------------------------
const sidebar = document.querySelector('.sidebar');
const mainContainer = document.querySelector(".main-container")

function showSidebar(){
    sidebar.style.display = 'flex';
}

function hideSidebar(){
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = 'none';
}
// ----------------------------------------------------------------------------------------------

// Logo Change on Hover -------------------------------------------------------------------------
function changeLogoWhite(){
    logo.src = "Media/LogoFinal(white).png";
}

window.addEventListener("mousemove",(e)=>{
    let y = e.clientY
    let x = e.clientX
    let logopos = (window.innerWidth-logo.clientWidth)/2
    if (y>dropdown.scrollHeight){
        dropdown.style.maxHeight = null;
    }
})

// ----------------------------------------------------------------------------------------------