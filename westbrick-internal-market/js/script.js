// const itemImage = document.querySelectorAll(".item-image");


// const linkToImage = function() {
//     var imageURL = itemImage.src;
//     window.location.href = imageURL;
//     console.log("works ", itemImage.src);
// }

// for(i = 0; i < itemImage.length ; i++) {
//     itemImage[i].addEventListener("click", linkToImage);
// }

const deleteItem = function(date, time, title){
    console.log(date,time,title);
    if(confirm("Are you sure you want to delete this item?")) {
        window.location.href = "../PHP/delete_item.php?date=" + date + "time=" + time + "title=" + title;
    }
}