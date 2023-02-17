console.log("läuft"); 

const gallery = document.getElementById("gallery");
console.log(gallery);

gallery.innerHTML = "<figure><img src='https://unsplash.it/300/300' alt='random img'/><figcaption>Fig. 1</figcaption></figure>";

gallery.innerHTML += "<figure><img src='https://unsplash.it/300/300' alt='random img'/><figcaption>Fig. 2</figcaption></figure>";

gallery.innerHTML += "<figure><img src='https://unsplash.it/300/300' alt='random img'/><figcaption>Fig. 3</figcaption></figure>";

