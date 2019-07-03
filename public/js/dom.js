document.getElementById("submit").addEventListener("click", function() {
  var word = document.getElementById("word").value;
  fetch(
    "https://translate.yandex.net/api/v1.5/tr.json/translate?key=trnsl.1.1.20190703T060408Z.9a2c739ed70efe69.b5f4e317e79bd07c2d4923694f9c82b15c2aea60&text=" +
      word +
      "&lang=ar-en"
  )
    .then(response => {
      // here we're turning the response into JSON.
      return response.json();
      console.log(response.json);
    })
    .then(data => {
      console.log(data);
      document.querySelector("p").innerText = data.text[0];
    })
    .catch(error => {
      console.log(error);
    });

  // Here's a list of repos!
});
