//Programmed by Chris Barber June 6 2024
const MAX_NUMBER_OF_IMAGES = 5;
const checkIfNextEmpty = function(id, itemImageIndex) {
  //index +1 to see the next one, mod MAX_NUMBER_OF_IMAGES to wrap, + 1 to get -image 
  itemImageIndex = ((itemImageIndex + 1) % MAX_NUMBER_OF_IMAGES) + 1;
  const itemImage = document.querySelector(".item" + id + "-image" + itemImageIndex);
  if(itemImage == null) {
    return true;
  }
  else {
    return false;
  }
}

const checkIfPrevEmpty = function(id, itemImageIndex) {
  // index +MAX_NUMBER_OF_IMAGES because js doesn't like mod negative, index -1 to see the previous one, mod MAX_NUMBER_OF_IMAGES to wrap, + 1 to get -image 
  itemImageIndex = ((itemImageIndex + MAX_NUMBER_OF_IMAGES - 1) % MAX_NUMBER_OF_IMAGES) + 1;
  const itemImage = document.querySelector(".item" + id + "-image" + itemImageIndex);
  if(itemImage == null) {
    return true;
  }
  else {
    return false;
  }
}
const indexTester = function(id, itemImageIndex) {
  if(itemImageIndex === 0) {
    const itemImage1 = document.querySelector(".item" + id + "-image1");
    if(itemImage1 != null) {
      itemImage1.style.display = "none";
    }
    if(checkIfNextEmpty(id, itemImageIndex)){
      //if the next one is empty just increment to the next one
      itemImageIndex = itemImageIndex +1;
    }else {
      const itemImage2 = document.querySelector(".item" + id + "-image2");
      itemImage2.style.display = "block";
    }
  }
  if(itemImageIndex === 1){
    const itemImage2 = document.querySelector(".item" + id + "-image2");
    if(itemImage2 != null) {
      itemImage2.style.display = "none";
    }
    if(checkIfNextEmpty(id, itemImageIndex)){
      //if the next one is empty just increment to the next one
      itemImageIndex = itemImageIndex +1;
    }else {
      const itemImage3 = document.querySelector(".item" + id + "-image3");
      itemImage3.style.display = "block";
    }
  }
  if(itemImageIndex === 2){
    const itemImage3 = document.querySelector(".item" + id + "-image3");
    if(itemImage3 != null) {
      itemImage3.style.display = "none";
    }
    if(checkIfNextEmpty(id, itemImageIndex)){
      //if the next one is empty just increment to the next one
      itemImageIndex = itemImageIndex +1;
    }else {
      const itemImage4 = document.querySelector(".item" + id + "-image4");
      itemImage4.style.display = "block";
    }
  }
  if(itemImageIndex === 3){
    const itemImage4 = document.querySelector(".item" + id + "-image4");
    if(itemImage4 != null) {
      itemImage4.style.display = "none";
    }
    if(checkIfNextEmpty(id, itemImageIndex)){
      //if the next one is empty just increment to the next one
      itemImageIndex = itemImageIndex +1;
    }else {
      const itemImage5 = document.querySelector(".item" + id + "-image5");
      itemImage5.style.display = "block";
    }
  }
  if(itemImageIndex === 4){
    const itemImage5 = document.querySelector(".item" + id + "-image5");
    if(itemImage5 != null) {
      itemImage5.style.display = "none";
    }
    if(checkIfNextEmpty(id, itemImageIndex)){
      //if the next one is empty just increment to the next one
      itemImageIndex = itemImageIndex +1;
      itemImageIndex = itemImageIndex % MAX_NUMBER_OF_IMAGES;
      indexTester(id, itemImageIndex);
    }else {
      const itemImage1 = document.querySelector(".item" + id + "-image1");
      itemImage1.style.display = "block";
    }
  }
  return itemImageIndex;
}

const nextSlide = function(id) {
  const thisItemImages = document.querySelector(".item" + id + "-images");
  //There is an alt variable that contains the picture index attached to item$id-images
  let itemImageIndex = thisItemImages.getAttribute("alt");
  itemImageIndex = parseInt(itemImageIndex);
  itemImageIndex = indexTester(id, itemImageIndex);
  itemImageIndex = itemImageIndex + 1;
  // modulus 4 to keep it from going over
  itemImageIndex = itemImageIndex % MAX_NUMBER_OF_IMAGES;
  thisItemImages.setAttribute("alt", itemImageIndex);
}


const prevSlide = function(id) {
  const thisItemImages = document.querySelector(".item" + id + "-images");
  //There is an alt variable that contains the picture index attached to item$id-images
  let itemImageIndex = thisItemImages.getAttribute("alt");
  itemImageIndex = parseInt(itemImageIndex);     
   if(itemImageIndex === 4){
    const itemImage5 = document.querySelector(".item" + id + "-image5");
    if(itemImage5 != null) {
      itemImage5.style.display = "none";
    }
    if(checkIfPrevEmpty(id, itemImageIndex)) {
      itemImageIndex = itemImageIndex - 1;
    }else {
      const itemImage4 = document.querySelector(".item" + id + "-image4");
      itemImage4.style.display = "block";
    }
  }
  if(itemImageIndex === 3){
    const itemImage4 = document.querySelector(".item" + id + "-image4");
    if(itemImage4 != null) {
      itemImage4.style.display = "none";
    }
    if(checkIfPrevEmpty(id, itemImageIndex)) {
      itemImageIndex = itemImageIndex - 1;
    }else {
      const itemImage3 = document.querySelector(".item" + id + "-image3");
      itemImage3.style.display = "block";
    }
  }
  if(itemImageIndex === 2){
    const itemImage3 = document.querySelector(".item" + id + "-image3");
    if(itemImage3 != null) {
      itemImage3.style.display = "none";
    }    
    if(checkIfPrevEmpty(id, itemImageIndex)) {
      itemImageIndex = itemImageIndex - 1;
    }else {
      const itemImage2 = document.querySelector(".item" + id + "-image2");
      itemImage2.style.display = "block";
    }
  }
  if(itemImageIndex === 1){
    const itemImage2 = document.querySelector(".item" + id + "-image2");
    if(itemImage2 != null) {
      itemImage2.style.display = "none";
    }    
    if(checkIfPrevEmpty(id, itemImageIndex)) {
      itemImageIndex = itemImageIndex - 1;
    }else {
      const itemImage1 = document.querySelector(".item" + id + "-image1");
      itemImage1.style.display = "block";
    }
  }
  if(itemImageIndex === 0) {
    const itemImage1 = document.querySelector(".item" + id + "-image1");
    if(itemImage1 != null) {
      itemImage1.style.display = "none";
    }    
    if(checkIfPrevEmpty(id, itemImageIndex)) {
      itemImageIndex = itemImageIndex - 1;
    }else {
      const itemImage5 = document.querySelector(".item" + id + "-image5");
      itemImage5.style.display = "block";
    }    
  }
  itemImageIndex = itemImageIndex + MAX_NUMBER_OF_IMAGES - 1;
  // modulus 4 to keep it from going over
  itemImageIndex = itemImageIndex % MAX_NUMBER_OF_IMAGES;
  thisItemImages.setAttribute("alt", itemImageIndex);
}

//on initial load of website displays first image in each item
window.onload = function() {
    const allItems = document.querySelectorAll(".item");
    console.log(allItems.length);
    for(let i = 0; i < allItems.length; i++) {
      console.log(allItems[i]);
      
    }
};