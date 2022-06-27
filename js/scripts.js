
function newItem(){

  //javascript
  //1. Adding a new item to the list of items:
  let inputValue = $('#input').val();
  let li = $('<li>'+inputValue+'</li>');

  if (inputValue === '') {
    alert("You must write something!");
  } else {
    let list = $('#list');
    list.append(li);
  }
}
