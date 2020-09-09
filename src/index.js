console.log('%c HI', 'color: firebrick')

const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
const imgContainer =document.getElementById("dog-image-container");
document.addEventListener("DOMContentLoaded", function() {
  fetchImgUrl()
})

function fetchImgUrl()
{
  fetch(imgUrl)
  .then(response => response.json())
  .then(data => somImages(data))
}

function somImages(data) {
    data.message.forEach(image => {
    const img = document.createElement('img')
    img.src = image;
    img.style.width="500px";
    imgContainer.appendChild(img)
    })
  }
  
  function fetchBreeds(){
    fetch('https://dog.ceo/api/breeds/list/all')
      .then(response => response.json())
      .then(response => somBreeds(response))
  }


