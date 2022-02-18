// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************
/* global $ */



$(".search-button").click(function() {
  
 
  let userInput = $(".search-term").val();
  let url = "https://api.giphy.com/v1/gifs/search?q=" + userInput + "&rating=pg&api_key=dc6zaTOxFJmzC";
  
  
  fetch(url)
    .then(function(response) {
      return response.json();
    })

    .then(function(data) {
      console.log(data);
      let randomVariable = Math.floor(Math.random() * data.data.length);
      $(".introText").html(`<img src="${data.data[randomVariable].images.original.url}">`);
      randomVariable = Math.floor(Math.random() * data.data.length);
      $(".pictureOne").html(`<img src="${data.data[randomVariable].images.original.url}">`);
      randomVariable = Math.floor(Math.random() * data.data.length);
      $(".pictureTwo").html(`<img src="${data.data[randomVariable].images.original.url}">`);
    });

});
