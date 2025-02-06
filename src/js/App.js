import { products } from "./Products.js";
const path = require("path");


var scrollPosition = 0;

var productQuantity = 1;

var cardProductsQuantity = 0;

function HandleCarouselControlNextClick() {
    var carouselWidth = document.getElementById("carousel-inner").scrollWidth;
    var cardWidth = document.getElementsByClassName("carousel-item")[0].offsetWidth;
    if (scrollPosition < (carouselWidth - cardWidth * 4)) { //check if you can go any further
        scrollPosition += cardWidth;  //update scroll position
        document.getElementById("carousel-inner").scrollBy({
            left: scrollPosition,
            top: 0,
            behavior: 'smooth'
        })

    }
}

function HandleCarouselControlPreviousClick() {
    var cardWidth = document.getElementsByClassName("carousel-item")[0].offsetWidth;
    if (scrollPosition > 0) {
        scrollPosition -= cardWidth;
        document.getElementById("carousel-inner").scrollBy({
            left: (0 - scrollPosition),
            top: 0,
            behavior: 'smooth'
        })
    }
}
document.addEventListener("DOMContentLoaded", () => {
    LoadMenuItems();
    LoadFirstProduct();
});

const LoadMenuItems = () => {
    let menuHolder = document.getElementById("menu-items");

    let item1 = document.createElement("li");
    let link1 = document.createElement("a");
    link1.textContent = "Shop";
    link1.href = "#";
    item1.appendChild(link1);
    menuHolder.appendChild(item1);

    let item2 = document.createElement("li");
    let link2 = document.createElement("a");
    link2.textContent = "Science";
    link2.href = "#";
    item2.appendChild(link2);
    menuHolder.appendChild(item2);

    let item3 = document.createElement("li");
    let link3 = document.createElement("a");
    link3.textContent = "Press";
    link3.href = "#";
    item3.appendChild(link3);
    menuHolder.appendChild(item3);

    let item4 = document.createElement("li");
    let link4 = document.createElement("a");
    link4.textContent = "Blogs";
    link4.href = "#";
    item4.appendChild(link4);
    menuHolder.appendChild(item4);

    let item5 = document.createElement("li");
    let link5 = document.createElement("a");
    link5.textContent = "Tutorial";
    link5.href = "#";
    item5.appendChild(link5);
    menuHolder.appendChild(item5);

}

const LoadFirstProduct = () => {
    LoadYouMayAlsoLike();
    let firstProduct = products.find(x => x.id === 1);
    let contentDiv = document.getElementById("content-div");

    fetch(path.resolve("./src", "_productPartial.html"))
        .then(response => response.text())
        .then(html => {
            let result = document.createElement("div");
            result.className = "product-holder";
            result.innerHTML = html;

            let productImage = result.querySelector('.product-image');
            productImage.src = GetImagePath(firstProduct.imageSrc);

            // let productInfoDiv = result.querySelector('.product-info-div');
            let productBreadcrumbs = result.querySelector('.product-breadcrumbs');
            productBreadcrumbs.innerText = firstProduct.breadcrumbs;
            let productTitle = result.querySelector(".product-title");
            productTitle.innerText = firstProduct.title;
            let productSubtitle = result.querySelector(".product-subtitle");
            productSubtitle.innerText = firstProduct.subtitle;
            let productDescription = result.querySelector(".product-description");
            productDescription.innerText = firstProduct.description;
            let productBadges = result.querySelector(".product-badges");
            firstProduct.badges.forEach(item => {
                let badgeDiv = "<div class='badge-div'><img class='badge-image' src='" + GetImagePath(item.icon) + "' />" + item.text + "</div>";
                productBadges.innerHTML += badgeDiv;
            });
            let buyOnceLabel = result.querySelector(".buy-once-label");
            buyOnceLabel.innerText = "Buy once | $" + firstProduct.price;
            let subscribeLabel = result.querySelector(".subscribe-label");
            subscribeLabel.innerText = "Subscribe (save 20%) | $" + Math.round(firstProduct.price * 0.8);

            let decreaseQuantityButton = result.querySelector("#decreaseQuantity");
            let increaseQuantityButton = result.querySelector("#increaseQuantity");

            decreaseQuantityButton.onclick = () => {
                if (productQuantity > 1) {
                    let quantitiyValueDiv = result.querySelector("#quantity-value");
                    quantitiyValueDiv.innerText = --productQuantity;
                }
            }

            increaseQuantityButton.onclick = () => {
                let quantitiyValueDiv = result.querySelector("#quantity-value");
                quantitiyValueDiv.innerText = ++productQuantity;

            }

            let addToCardButton = result.querySelector("#add-to-cart-button");
            addToCardButton.addEventListener("click", function (event) {
                let cart = document.querySelector("#bag-menu-icon");
                let btn = event.target;

                // Create the flying element
                let flyingElement = document.createElement("div");
                flyingElement.className = "cart-animation";
                flyingElement.innerText = "+1";
                document.body.appendChild(flyingElement);

                // Get button position
                let btnRect = btn.getBoundingClientRect();
                let cartRect = cart.getBoundingClientRect();

                // Set initial position near the button
                flyingElement.style.left = `${btnRect.left + btnRect.width / 2}px`;
                flyingElement.style.top = `${btnRect.top}px`;
                flyingElement.style.display = "block";

                // Trigger animation
                flyingElement.animate([
                    { transform: "scale(1)", left: `${btnRect.left + btnRect.width / 2}px`, top: `${btnRect.top}px` },
                    { transform: "translate(50px, -50px) scale(1.2)", opacity: 0.8 },
                    { transform: "translate(100px, -100px) scale(0.8)", opacity: 0.5 },
                    { transform: `translate(${cartRect.left - btnRect.left}px, ${cartRect.top - btnRect.top}px) scale(0.5)`, opacity: 0 }
                ], {
                    duration: 1200,
                    easing: "ease-in-out",
                    fill: "forwards"
                });

                // Remove element after animation
                setTimeout(() => {
                    flyingElement.remove();

                    // Update cart count
                    let badge = document.querySelector("#cart-products-quantity");
                    badge.innerText = ++cardProductsQuantity;
                }, 1200);
            });


            let productDetailedDescriptionDiv = result.querySelector('.product-detailed-description-div');
            firstProduct.detailedDescription.forEach(item => {
                let detailDescriptionDiv = document.createElement("div");
                let detailDescriptionTitleDiv = document.createElement("div");
                detailDescriptionTitleDiv.className = "detail-description-title-div";
                let plusIconButton = document.createElement("button");
                plusIconButton.className = "expand-detailed-description-icon";
                plusIconButton.innerHTML = "<svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='currentColor' class='bi bi-plus' viewBox='0 0 16 16'><path d='M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4'/></svg>";

                let titleSpan = document.createElement("span");
                titleSpan.textContent = item.title;
                detailDescriptionTitleDiv.appendChild(titleSpan);
                detailDescriptionTitleDiv.appendChild(plusIconButton);

                let detailDescriptionAdditionalDiv = document.createElement("div");
                detailDescriptionAdditionalDiv.className = "detail-description-additional-div";
                detailDescriptionAdditionalDiv.textContent = item.description;
                detailDescriptionAdditionalDiv.hidden = true;

                detailDescriptionDiv.appendChild(detailDescriptionTitleDiv);
                detailDescriptionDiv.appendChild(detailDescriptionAdditionalDiv);

                productDetailedDescriptionDiv.appendChild(detailDescriptionDiv);

                plusIconButton.onclick = () => {
                    if (detailDescriptionAdditionalDiv.hidden) {
                        detailDescriptionAdditionalDiv.hidden = false;
                        plusIconButton.innerHTML = "<svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='currentColor' class='bi bi-dash' viewBox='0 0 16 16'> <path d='M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8'/></svg>";
                    }
                    else {
                        detailDescriptionAdditionalDiv.hidden = true;
                        plusIconButton.innerHTML = "<svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='currentColor' class='bi bi-plus' viewBox='0 0 16 16'><path d='M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4'/></svg>";
                    }
                }
            });

            contentDiv.appendChild(result);
        }).catch(error => console.error('Error loading the partial file:', error));

}



const LoadYouMayAlsoLike = () => {
    let contentDiv = document.getElementById("content-div");

    fetch(path.resolve("./src", "_youMayAlsoLikePartial.html"))
        .then(response => response.text())
        .then(html => {
            let result = document.createElement("div");
            result.innerHTML = html;

            let carouselInner = result.querySelector('.carousel-inner');

            products.forEach((item, index) => {
                let itemDiv = document.createElement("div");
                itemDiv.className = index === 0 ? "carousel-item active" : "carousel-item";

                let card = "<div class='card'><img class='d-block card-image' src='";
                card += GetImagePath(item.imageSrc)
                card += "'><div class='card-body'><h5 class='card-title'>"
                card += item.title;
                card += "</h5><p class='card-text'>";
                card += item.subtitle;
                card += "</p>";
                card += "<br />" + item.price + " $";
                card += "</div></div>";

                itemDiv.innerHTML = card;

                carouselInner.appendChild(itemDiv);
            });
            contentDiv.appendChild(result);

            let prevButton = result.querySelector("#carousel-control-prev");
            prevButton.addEventListener("click", HandleCarouselControlPreviousClick);

            let nextButton = result.querySelector("#carousel-control-next");
            nextButton.addEventListener("click", HandleCarouselControlNextClick);

        }).catch(error => console.error('Error loading the partial carousel file:', error));
}

const GetImagePath = imageFileName => {
    return path.resolve("./src", "img", imageFileName);
}





