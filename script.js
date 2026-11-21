const tags = ["spicy", "organic", "authentic", "fresh"];

const prices = [4.5, 7, 4.5, 3];

console.log("Tags:", tags);
console.log("Prices:", prices);

const tagText = document.querySelector("#tags");
tagText.textContent = "";
for (let i = 0; i < tags.length; i++) {
  tagText.textContent = tagText.textContent + tags[i] + " . ";
}
