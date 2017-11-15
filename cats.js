document.addEventListener("DOMContentLoaded", function() {
  var summonCatsBtn = document.querySelector('.summon-cats');
  var url = 'http://bitkittens.herokuapp.com/cats.json';

  summonCatsBtn.addEventListener('click', function(){
    $.ajax({
      url: url,
      method: 'GET',
      dataType: 'json'
    })
  })



}); //ending of DOMContentLoaded
