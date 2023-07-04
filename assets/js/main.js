// DOM Elements
const prevBtn = document.querySelector("#prev-btn");
const nextBtn = document.querySelector("#next-btn");
const profile = document.querySelector("#profile");

// Profile Pages
const page1 = document.querySelector("#p1");
const page2 = document.querySelector("#p2");
const page3 = document.querySelector("#p3");

// Event Listener

prevBtn.addEventListener("click", goPrevPage);
nextBtn.addEventListener("click", goNextPage);

//Profile Logic

let currentLocation = 1;
let numOfPages = 3;
let maxLocation = numOfPages + 1;


function openProfile() {
  profile.style.transform = "translateX(50%)";
  prevBtn.style.transform = "translateX(-180px)";
  nextBtn.style.transform = "translateX(180px)";
}

function closeProfile() {

}

function goNextPage() {
    if(currentLocation < maxLocation) {
        switch(currentLocation) {

          case 1:
            openProfile();
            page1.classList.add("flipped");
            page1.style.zIndex = 1;
            break;

          case 2:
            page2.classList.add("flipped");
            page2.style.zIndex = 2;
            break;

          case 3:
            page3.classList.add("flipped");
            page3.style.zIndex = 3;
            closeProfile();
            break;

          default:
            throw new Error("unkown state");
        }
        currentLocation++;
    }
}

function goPrevPage() {
  if(currentLocation > 1) {
    switch(currentLocation) {
      case 2:
        closeProfile();
        page1.classList.remove("flipped");
        page1.style.zIndex = 3;
        break;

        case 3:
          page2.classList.remove("flipped");
          page2.style.zIndex = 2;
          break;

        case 4:
          page3.classList.remove("flipped");
          page3.style.zIndex = 1;
          break;
        
        default:
          throw new Error("unkown state");
    }

    currentLocation--;
  }  
}