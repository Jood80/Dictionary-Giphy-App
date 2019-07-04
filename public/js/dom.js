function request(url, cb) {
  fetch(url)
    .then(response => {
      return response.json();
    })
    .then(data => {
      cb(data);
    })
    .catch(error => {
      console.log(error);
    });
}

function translate(input, cb) {
  if(input == ""){
    alert("there's no word to translate!");
  }
  request(
    "https://translate.yandex.net/api/v1.5/tr.json/translate?key=trnsl.1.1.20190703T060408Z.9a2c739ed70efe69.b5f4e317e79bd07c2d4923694f9c82b15c2aea60&text=" +
      input +
      "&lang=ar-en",
    result => {
      document.querySelector("p").textContent = result.text[0];
      const meaning = result.text[0];
      cb(meaning);
    }
  );
}

document.getElementById("submit").addEventListener("click", ()=> {
  const div = document.querySelector(".container");
  div.textContent = "";
  let word = document.getElementById("word").value;
  translate(word, result => {

    request(
      "http://api.giphy.com/v1/gifs/search?q=" +
        result +
        "&api_key=p0FMwmf9fytJSZw4DQgJq6Vurt4S8oHv&limit=4",
      data => {
          data.data.forEach(element => {
          const img = document.createElement("img");
          img.setAttribute("class", "image");
          div.appendChild(img);
          img.src = `https://media.giphy.com/media/${
            element.id
          }/giphy.gif`;
});
      }
    );
  });
});

