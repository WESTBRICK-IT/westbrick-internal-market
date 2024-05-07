const itemImage = document.querySelector(".item-image");
const linkToImage = function() {
    var imageURL = itemImage.src;
    window.location.href = imageURL;
    console.log("works ", itemImage.src);
}
itemImage.addEventListener("click", linkToImage);