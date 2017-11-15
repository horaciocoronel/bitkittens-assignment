document.addEventListener("DOMContentLoaded", function() {
  var summonCatsBtn = document.querySelector('.summon-cats');
  var url = 'http://bitkittens.herokuapp.com/cats.json';
  var catBox = document.querySelectorAll('.cat-box')
  summonCatsBtn.addEventListener('click', function(){
    $.ajax({
      url: url,
      method: 'GET',
      dataType: 'json'
    }).done(function(data){
      var catsList = data["cats"];
      for (var i = 0; i < catsList.length; i++) {
        catBox[i].innerHTML = "";
        var newImg = document.createElement('img');
        newImg.src = catsList[i].photo;
        newImg.alt = catsList[i].name;
        catBox[i].append(newImg);


      }
    })// ending of Done
  })



}); //ending of DOMContentLoaded
