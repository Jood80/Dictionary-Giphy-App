fetch('https://translate.yandex.net/api/v1.5/tr.json/translate?key=trnsl.1.1.20190703T060408Z.9a2c739ed70efe69.b5f4e317e79bd07c2d4923694f9c82b15c2aea60&text='+word+'&lang=ar-en')
  .then(response => {
    // here we're turning the response into JSON.
    return response.json();
  })
  .then(data => {

      
      document.getElementById("submit").addEventListener("click", function(){
       var word= document.getElementById("add").value;
        document.querySelector("p").innerText= data.text[0];


        
      });
      
    // Here's a list of repos!
    console.log(data);
  })
    .catch(error => {
    console.log(error);
  });