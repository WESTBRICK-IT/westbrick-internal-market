const garbageBin = document.querySelector(".item-garbage-button");

const garbageBinClick = function(){
    let userResponse = confirm("Are you sure you want to delete this item?");
    console.log("garbage button click");
    console.log(garbageBin.getAttribute("alt"));
    if (userResponse) {
        console.log("Item selected for deletion.");
        // Add code here to delete the item from the list or perform any other actions
    } else {
        console.log("Deletion cancelled.");
    }
}

garbageBin.addEventListener("click", garbageBinClick);