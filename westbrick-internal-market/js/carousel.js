// let slideIndex2 = 1;
// showSlides2(slideIndex2);

// // Next/previous controls
// function plusSlides2(n) {
//   showSlides2(slideIndex2 += n);
// }

// // Thumbnail image controls
// function currentSlide2(n) {
//   showSlides2(slideIndex2 = n);
// }

// function showSlides2(n) {
//   let i;
//   let slides2 = document.getElementsByClassName("mySlides2");  
//   if (n > slides2.length) {slideIndex2 = 1}
//   if (n < 1) {slideIndex2 = slides2.length}
//   for (i = 0; i < slides2.length; i++) {
//     slides2[i].style.display = "none";
//   }  
//   slides2[slideIndex2-1].style.display = "block";  
// }

const checkIfNextEmpty = function(id, itemImageIndex) {
  //index +1 to see the next one, mod 5 to wrap, + 1 to get -image 
  itemImageIndex = ((itemImageIndex + 1) % 5) + 1;
  const itemImage = document.querySelector(".item" + id + "-image" + itemImageIndex);
  if(itemImage == null) {
    return true;
  }
  else {
    return false;
  }
}

const checkIfPrevEmpty = function(id, itemImageIndex) {
  // index +5 because js doesn't like mod negative, index -1 to see the previous one, mod 5 to wrap, + 1 to get -image 
  itemImageIndex = ((itemImageIndex + 5 - 1) % 5) + 1;
  const itemImage = document.querySelector(".item" + id + "-image" + itemImageIndex);
  if(itemImage == null) {
    return true;
  }
  else {
    return false;
  }
}

const nextSlide = function(id) {
  const thisItemImages = document.querySelector(".item" + id + "-images");
  //There is an alt variable that contains the picture index attached to item$id-images
  let itemImageIndex = thisItemImages.getAttribute("alt");
  itemImageIndex = parseInt(itemImageIndex);
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
    }else {
      const itemImage1 = document.querySelector(".item" + id + "-image1");
      itemImage1.style.display = "block";
    }
  }
  itemImageIndex = itemImageIndex + 1;
  // modulus 4 to keep it from going over
  itemImageIndex = itemImageIndex % 5;
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
  itemImageIndex = itemImageIndex + 5 - 1;
  // modulus 4 to keep it from going over
  itemImageIndex = itemImageIndex % 5;
  thisItemImages.setAttribute("alt", itemImageIndex);
}