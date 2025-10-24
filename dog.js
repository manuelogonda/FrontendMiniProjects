const getAnotherDogBtn = document.getElementById("getAnotherDogBtn");
const dogImageContainer = document.getElementById("dogImageContainer");

async function fetchRandomDogImage() {
    try {
        dogImageContainer.innerHTML = "<p class='loading'>Loading dog image...</p>";
        const response = await fetch("https://dog.ceo/api/breeds/image/random");
        if (!response.ok){
            throw new Error("Failed to fetch dog image.");
        }
        const data = await response.json();

        const imageUrl = data.message;
        const breedMatch = imageUrl.match(/breeds\/([^/]+)/);
        let breed = "Unknown Breed";

        if (breedMatch){
            breed = breedMatch[1].replace(/-/, " ").toUpperCase();
            breed = breed.split(" ").map(word => 
                word.charAt(0).toUpperCase() + word.slice(1)).join(" ");

        }
        dogImageContainer.innerHTML = `
        <img src="${data.message}" alt="Random cute Dog Image" class="dog-image">
        <p class="breed">Breed: ${breed}</p>
        <p class="source">Source: <a href="${data.message}" target="_blank">Dog Url</a></p>
        <p class="note">Click the button to fetch another random dog image.</p>
        `;
    }catch (error) {
        dogImageContainer.innerHTML = `<p class='error'>${error.message}</p>`;
    }
}
    
getAnotherDogBtn.addEventListener("click", fetchRandomDogImage);

