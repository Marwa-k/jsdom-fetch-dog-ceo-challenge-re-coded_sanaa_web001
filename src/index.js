console.log('%c HI', 'color: firebrick')

const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
const imgContainer =document.getElementById("dog-image-container");
const listDogs =document.getElementById("dog-breeds");
const  dropDown =document.getElementById("breed-dropdown");

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


function somBreeds(response){
    const listOfBreed= response.message;

    for (let breed in listOfBreed) {
        let newLi = document.createElement("li");
        newLi.innerText = breed;
        newLi.setAttribute("letter", newLi.innerText.charAt(0))
         listDogs.append(newLi);
        }
}

