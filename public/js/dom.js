function request(url, cb) {
  fetch(url)
    .then(response => {
      return response.json();
    })
    .then(data => {
      console.log(data);
      cb(data);
    })
    .catch(error => {
      console.log(error);
    });
}

function translate(input, cb) {
  request(
    "https://translate.yandex.net/api/v1.5/tr.json/translate?key=trnsl.1.1.20190703T060408Z.9a2c739ed70efe69.b5f4e317e79bd07c2d4923694f9c82b15c2aea60&text=" +
      input +
      "&lang=ar-en",
    result => {
      document.querySelector("p").innerText = result.text[0];
      var meaning = result.text[0];
      cb(meaning);
    }
  );
}

document.getElementById("submit").addEventListener("click", function() {
  var div = document.querySelector(".container");
  div.innerText = "";
  var word = document.getElementById("word").value;
  translate(word, result => {
    console.log("result", result);
    request(
      "http://api.giphy.com/v1/gifs/search?q=" +
        result +
        "&api_key=p0FMwmf9fytJSZw4DQgJq6Vurt4S8oHv&limit=4",
      data => {
        
        for (var i = 0; i < 4; i++) {
          var img = document.createElement("img");
          img.setAttribute("class", "image");

          div.appendChild(img);

          img.src = `https://media.giphy.com/media/${
            data.data[i].id
          }/giphy.gif`;
        }
      }
    );
  });
});

// document.getElementById("submit").addEventListener("click", function() {
// var word = document.querySelector("#word").value;

// translation(word,request(url,
//     finalData =>{
//      var img = document.createElement("img");
//      img.setAttribute("class","image");
//      img.src(`https://media.giphy.com/media/${
//       finalData.data[0].id
//     }/giphy.gif`);
//     div.appendChild(img);
//     }
//   ));
// });