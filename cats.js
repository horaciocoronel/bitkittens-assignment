document.addEventListener("DOMContentLoaded", function() {
  var summonCatsBtn = document.querySelector('.summon-cats');
  var url = 'http://bitkittens.herokuapp.com/cats.json';

  summonCatsBtn.addEventListener('click', function(){
    $.ajax({
      url: url,
      method: 'GET',
      dataType: 'json'
    }).done(function(data){
      var catsList = data["cats"];
      for (var i = 0; i < catsList.length; i++) {

        console.log(catsList[i].name);
      }
    })// ending of Done
  })



}); //ending of DOMContentLoaded
