function myfunction(){
    alert("Thanks for purchasing")
}

function changeImage(){
     let image =   document.getElementById("bulbimage");
     image.src="./Assets/bulbon.jpg"
}


function changeImage2(){
     let image =   document.getElementById("bulbimage");
     image.src="./Assets/bulboff.jpg"
}


function deleteRow(r) {
    var i = r.parentNode.parentNode.owIndex;r
    document.getElementById("myTable").deleteRow(i);
  }


  var clicks = 0;

  function onClick() {
    clicks += 1;
    document.getElementById("clicks").innerHTML = clicks;
  };

  function onClick2() {
    clicks -= 1;
    document.getElementById("clicks").innerHTML = clicks;
  };