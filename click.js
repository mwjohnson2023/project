const showText = () => {
	console.log("testing click");
    var x = document.querySelector('#credittext');
    if (x.style.display == "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  };

document.querySelector("#btn").onclick = showText;

