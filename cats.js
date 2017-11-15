document.addEventListener("DOMContentLoaded", function() {
  var summonCatsBtn = document.querySelector('.summon-cats');
  var url = 'http://bitkittens.herokuapp.com/cats.json';
  var catBox = document.querySelectorAll('.cat-box');
  var catb
  var ulCatBook =  document.querySelector('#ulcatbook');
  summonCatsBtn.addEventListener('click', function(){
    $.ajax({
      url: url,
      method: 'GET',
      data: {number: 4},
      dataType: 'json'
    }).done(function(data){
      var catsList = data["cats"];
      for (var i = 0; i < catsList.length; i++) {
        catBox[i].innerHTML = "";
        var newImg = document.createElement('img');
        newImg.src = catsList[i].photo;
        newImg.alt = catsList[i].name;
        catBox[i].append(newImg);
        var liCatBook = document.createElement('li');
        liCatBook.innerText = catsList[i].name;
        ulCatBook.append(liCatBook);
      }
    })// ending of Done
  })



}); //ending of DOMContentLoaded
