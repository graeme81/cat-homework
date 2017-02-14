var cats_array = [
  {name:"WhoDey", favfood:"Steelers", img:"http://prod.static.bengals.clubs.nfl.com/assets/images/marketing/Who_Dey_Banner.jpg" },
  {name:"Tony", favfood:"Frosties", img:"http://vignette4.wikia.nocookie.net/disneyfanon/images/e/e5/6d7d8522e18c4cc363dc9b0dcb101d5f.jpg/revision/latest?cb=20160411141238"}
];

var createCatList = function(){
  var catList = document.createElement('ul');
  catList.classList.add('cat');
  return catList;
};

var createCatName = function(name){
  var catName = document.createElement('li');
  catName.innerText = "Name: "+name;
  return catName;
};

var createCatFood = function(food){
  var catFood = document.createElement('li');
  catFood.innerText = "Favourite Food: "+food;
  return catFood;
};

var createCatImage = function(image){
  var catImage = document.createElement('img');
  catImage.src = image;
  return catImage;
};

var appendElements = function(catList, name, food, image){
  catList.appendChild(name);
  catList.appendChild(food);
  catList.appendChild(image);
  document.querySelector('#cats').appendChild(catList);

}

var addCat = function(name, food, image){
  var catList = createCatList();
  var name = createCatName(name);
  var food = createCatFood(food);
  var image = createCatImage(image);

  appendElements(catList, name, food, image);
};

var app = function(){
  for (var cat of cats_array){
    addCat(cat.name, cat.favfood, cat.img);
  }
};

window.onload = app;