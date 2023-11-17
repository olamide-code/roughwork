
const items = document.querySelectorAll('li');
items.forEach(items => {

  items.addEventListener('click', ()=> {
    items.classList.toggle('complete')
  });
});


document.getElementById('btn').style.background = 'blue';
 let like = document.querySelector('.fa');
 like.addEventListener('click', (e)=> {
  let like = document.querySelector('.fa');
  e.target.classList.toggle("fa fa-thumbs-down");

 });




