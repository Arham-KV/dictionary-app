const url = "https://api.dictionaryapi.dev/api/v2/entries/en/";
const result = document.getElementById("result");
const sound = document.getElementById("sound");
const btn = document.getElementById("search-btn");
let inpWord = document.getElementById("inp-word")
let suggestionsList = document.getElementById("suggestions");

// inpWord.addEventListener("input", () => {
//     let userInput = inpWord.value.trim();
//     if (userInput.length > 0) {
//         // Suggestions fetch karen aur suggestions list ko update karen
//         fetch(url + userInput)
//             .then(response => response.json())
//             .then(data => {
//                 let words = data.words;
//                 suggestionsList.innerHTML = ""; // Clear previous suggestions
//                 if (words) {
//                     words.forEach(words => {
//                         let listItem = document.createElement("li");
//                         listItem.textContent = words.strWords;
//                         suggestionsList.appendChild(listItem);

//                         // Click event listener to set selected suggestion in input field
//                         listItem.addEventListener("click", () => {
//                             inpWord.value = words.strWords;
//                             suggestionsList.innerHTML = ""; // Clear suggestions after selection
//                         });
//                     });
//                 }
//             })

//             .catch(() => {
//                 console.error("Error fetching suggestions");
//             });
//     } else {
//         suggestionsList.innerHTML = ""; // Clear suggestions when input is empty
//     }
// });


btn.addEventListener("click", () => {
    let inpWord = document.getElementById("inp-word").value;
    fetch(`${url}${inpWord}`)
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            result.innerHTML = `
            <div class="word">
                    <h3>${inpWord}</h3>
                    <button onclick="playSound()">
                        <i class="fas fa-volume-up"></i>
                    </button>
                </div>
                <div class="details">
                    <p>${data[0].meanings[0].partOfSpeech}</p>
                    <p>/${data[0].phonetic}/</p>
                </div>
                <p class="word-meaning">
                   ${data[0].meanings[0].definitions[0].definition}
                </p>
                <p class="word-example">
                    ${data[0].meanings[0].definitions[0].example || ""}
                </p>`;
            // sound.setAttribute("src", `https:${data[0].phonetics[0].audio}`);
        })
        .catch(() => {
            result.innerHTML = `<h3 class="error">Couldn't Find The Word</h3>`;
        });
});






