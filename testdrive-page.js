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


// Menu Button --------------------------------------------------------------
const sidebar = document.querySelector('.sidebar');
const mainContainer = document.querySelector(".main-container")

function showSidebar(){
    sidebar.style.display = 'flex';
}

function hideSidebar(){
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = 'none';
}
// --------------------------------------------------------------

// Changing Logo to white when mouse hovers over logo
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

// --------------------------------------------------------------------------------------------------------


// Making the filter buttons work -------------------------------------------------------------------------
const filterButtons = document.querySelectorAll(".filter_buttons button");
const filterableCards = document.querySelectorAll(".filterable_cards .card");

console.log(filterButtons,filterableCards);

const filterCards = (e) => {
    document.querySelector(".active").classList.remove("active");
    e.target.classList.add("active");

    filterableCards.forEach(card => {
        card.classList.add("hide");
        if (card.dataset.name === e.target.dataset.name || e.target.dataset.name === "all"){
            card.classList.remove("hide");
        }
    });
};

filterButtons.forEach(button => button.addEventListener("click", filterCards)); 

// ---------------------------------------------------------------------------------------------------------

function FormRedirect() { 
    location.replace("testdrive-form.html"); 
}