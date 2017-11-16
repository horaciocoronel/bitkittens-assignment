document.addEventListener("DOMContentLoaded", function() {
  var summonCatsBtn = document.querySelector('.summon-cats');
  var url = 'http://bitkittens.herokuapp.com/cats.json';
  var catBox = document.querySelectorAll('.cat-box');
  // var catb
  var ulCatBook =  document.querySelector('#ulcatbook');
  var catsVisited = {};
  var catCounter = 0;
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
        var catName = catsList[i].name
        console.log(catsVisited[catName]);

        if (catsVisited[catName] != 'undefined') {
          catsVisited[catName] = 1;
        } else {
          catsVisited[catsList[i].name] = 2
        }
        console.log(catsVisited);
        var catsKeys = Object.keys(catsVisited)
        var liCatBook = document.createElement('li');
        liCatBook.innerText = catsList[i].name + ' | visited ' + catsVisited[catsList[i].name] + ' time/s';
        ulCatBook.append(liCatBook);
        // if (catsList[i].name in catsKeys) {
        //   // console.log('test');
        //   catsVisited[catsList[i].name] = (catsVisited[catsList[i].name])+1;
        //   liCatBook.innerText = catsList[i].name + ' | visited ' + catCounter + ' time/s';
        //   ulCatBook.append(liCatBook);
        // } else {
        //   // catCounter = 1
        //   liCatBook.innerText = catsList[i].name + ' | visited ' +  ' 1 time';
        //   ulCatBook.append(liCatBook);
        // }

      }
    })// ending of Done
  }) // ending button addEventListener



}); //ending of DOMContentLoaded
