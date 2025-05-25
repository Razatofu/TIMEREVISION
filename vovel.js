let paragraph = prompt("Enter your paragraph to find the vowel");

let vowels = "aeiouAEIOU";  
let foundVowels = "";      


for (let i = 0; i < paragraph.length; i++) {
let Char = paragraph[i];


if (Char === 'a' || Char === 'e' || Char === 'i' || Char === 'o' || Char === 'u' || 
Char === 'A' || Char === 'E' || Char === 'I' || Char === 'O' || Char === 'U') {
foundVowels += Char;  
}
}

console.log("Vowels in the paragraph: " + foundVowels); 