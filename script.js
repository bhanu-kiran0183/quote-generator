const newQuoteBtn = document.getElementById("new-quote");
const loader = document.getElementById("loader");
const quoteContainer = document.getElementById("quote-container");

//show loading function
function loading() {
  loader.style.display = "inline";
  loader.hidden = false;
  quoteContainer.hidden = true;
}
//show container//hide loading
function complete() {
  loader.hidden = true;
  quoteContainer.hidden = false;
  loader.style.display = "none";
}

// get quotes from API
let apiQuotes, randomNo;
async function getQuotes() {
  //loading();
  const apiURL = "https://type.fit/api/quotes";
  randomNo = Math.floor(Math.random() * 200);
  try {
    const response = await fetch(apiURL);
    apiQuotes = await response.json();
    console.log(apiQuotes[randomNo].text);
    console.log(apiQuotes[randomNo].author);
    console.log(randomNo);
    //document.getElementById("quote").textcontent = apiQuotes[randomNo].text;
    complete();
    document.getElementById("quote").innerHTML = apiQuotes[randomNo].text;
    document.getElementById(
      "author"
    ).innerHTML = `Author: ${apiQuotes[randomNo].author}`;
  } catch (error) {
    //Catch error Here
    console.log(error);
  }
}

newQuoteBtn.addEventListener("click", function () {
  getQuotes();
  loading();
  //loading();
});
