const clientHeightElement = document.querySelector("#card-container-client-height");
const offsetHeightElement = document.querySelector("#card-container-offset-height");
const scrollHeightElement = document.querySelector("#card-container-scroll-height");

const pageChangeElement = document.querySelector("#page-change");

const cardContainerElement = document.querySelector("#card-container");
const pageNumberElement = document.querySelector("#page-number");

const displayedCardsElement = document.querySelector("#displayed-cards");
const totalCardsElement = document.querySelector("#total-cards");

const cardLoadLimit = 9, totalCards = 40;
let currentPage = 1, displayedCards = 0;

let activeTimeoutFlag = false;
window.onload = () => renderCards(currentPage++);

cardContainerElement.addEventListener("scroll", () => {
        
        clientHeightElement.innerText = "Client Height: " + cardContainerElement.clientHeight + "px";
        offsetHeightElement.innerText = "Offset Height: " + cardContainerElement.scrollTop + "px";
        scrollHeightElement.innerText = "Scroll Height: " + cardContainerElement.scrollHeight + "px";
        
        const pageEnd = (cardContainerElement.clientHeight + cardContainerElement.scrollTop) >= cardContainerElement.scrollHeight;
        
        if(pageEnd){

            if(((currentPage - 1) * cardLoadLimit) >= totalCards)
                hideLoader();

            else if(!activeTimeoutFlag){

                showLoader();
                activeTimeoutFlag = true;

                setTimeout(() => {

                    renderCards(currentPage++);
                    activeTimeoutFlag = false;
    
                }, 2500)
            }

            pageChangeElement.innerText = "Scrolled to the end!";
        }

        else
            pageChangeElement.innerText = "Scrollable";
    }   
);

function renderCards(pageNumber){

    if(pageNumber > 1)
        hideLoader();
    
    totalCardsElement.innerText = totalCards;
    pageNumberElement.innerText = pageNumber;

    const genStartIndex = (pageNumber - 1) * cardLoadLimit;
    const genEndIndex = (pageNumber * cardLoadLimit) < totalCards ? (pageNumber * cardLoadLimit) : totalCards;

    for(let i=genStartIndex; i<genEndIndex; i++){

        const cardElement = document.createElement("div");
        
        cardElement.classList.add("card");
        cardElement.innerText = "Card " + (i + 1);

        cardContainerElement.appendChild(cardElement);
        displayedCards++;
    }

    displayedCardsElement.innerText = displayedCards;
}

function showLoader(){

    const loaderElement = document.createElement("div");
    loaderElement.classList.add("loader");

    for(let i=0; i<3; i++){

        const skeletonCardElement = document.createElement("div");
        skeletonCardElement.classList.add("skeleton-card");
        
        loaderElement.appendChild(skeletonCardElement);
    }

    cardContainerElement.appendChild(loaderElement);
}

function hideLoader(){

    const loaderElement = document.querySelector(".loader");
    cardContainerElement.removeChild(loaderElement);
}