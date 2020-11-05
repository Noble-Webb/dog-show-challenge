//variables
const dogURL = `http://localhost:3000/dogs`
const dogContainer = document.getElementById("table-body")
const dogEdit = document.getElementById("dog-form") 
let dogArray;
//______________________________________________________________

function fetchDogs()  {
    fetch(dogURL).then(response => response.json()).then(dogArray => {
        renderDogs(dogArray)
    })
}

function renderDogs(dogArray) {
    dogArray.forEach(dog => {
        renderDog(dog);
    });
}

function renderDog(dog) {
    dogContainer.innerHTML += `<tr><td>${dog.name}</td> <td>${dog.breed}</td> <td>${dog.sex}</td> <td><button class="edit-btn" data-id=${dog.id}>Edit</button></td></tr>`
}

const handleEdits = (target) => {
    // grabbing the dog's id through the button click
    const dogId = target.dataset.id;
    
    const dogSex = dogId.previousElementSibling.innerText;

    debugger

}
//______________________________________________________________

fetchDogs()

//________________________________________________________________________________

document.addEventListener('click', (e) => {

    if (e.target.className === "edit-btn"){
        // debugger 
        handleEdits(e.target)
    }
})