
let meals = [];
let rowCard =document. getElementById('rowCard')
let btns =document.querySelectorAll('.nav-link')

async function getData(id) {
    let data = await fetch(
        `https://forkify-api.herokuapp.com/api/search?q=${id ? id : "pasta"}`);
    let res =await data.json();
    meals = res.recipes;
display() ;
    console.log(meals)
}
getData()

function display(){

    let box = '';
    for(let i=0 ; i < meals.length ; i++){
box += `      <div class="col-md-3">
          <div class="card" >
            <img
              src="${meals[i].image_url}"
              class="w-100"
              alt="..."
            />
            <div class="card-body">
              <p class="card-text">
              ${meals[i].title}
              </p>
            </div>
          </div>
        </div>`

    }
    rowCard.innerHTML = box;

}





btns.forEach(function(btn){
    btn.addEventListener('click',function(){
    getData(btn.innerHTML)
    })
})

