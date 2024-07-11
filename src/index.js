console.log('%c HI', 'color: firebrick')
document.addEventListener('DOMContentLoaded',() => {

    const imageContainer = document.getElementById('dog-image-container')
    const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
    const breedUrl = "https://dog.ceo/api/breeds/list/all";
    const ul = document.getElementById('dog-breeds')
    const select = document.getElementById('breed-dropdown')
    const value = document.getElementsByTagName('value')
  function loadImages (){
    fetch( "https://dog.ceo/api/breeds/image/random/4")
    .then((response) => response.json())
    .then((data) => {
        data.message.forEach((imgUrl) =>  {
            const img = document.createElement('img')
            img.src = imgUrl
            imageContainer.appendChild(img)
            
            
            
            

        })
        console.log(data)
    })
    .catch

}
loadImages()
function  loadbreeds (){
    fetch("https://dog.ceo/api/breeds/list/all")
    .then(response => response.json())
    .then(data => {
        Object.keys(data.message).forEach((breedUrl) => {
            const li = document.createElement('li')
            li.innerHTML = breedUrl
            ul.appendChild(li);

            li.addEventListener('click', (e) =>{
                li.style.color = 'green'

              


            } )

        })
        console.log(data)
    })
    .catch(error => console.error('Error','An error has occurred'))
}
loadbreeds();

function filterBreeds(letter){
    const listItems = ul.getElementsByTagName('li');

    for(const item of listItems){
        if (letter === "" || item.textContent.startsWith(letter)){
            item.style.display = "";
        }else{
            item.style.display = 'none'
        }
    }
}
 select.addEventListener('change', (e) => {
            const selectedLetter = e.target.value;
            filterBreeds(selectedLetter);
 });
})