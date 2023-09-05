const menu=[
    {
        title: "Burger La Donal Trump",
        img: "https://dummyimage.com/150x150/000/fff",
        price: 3600,
        category: "burgers",
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum, sapiente?"
    },
    {
        title: "Burger La Titanic",
        img: "https://dummyimage.com/150x150/000/fff",
        price: 4150,
        category: "burgers",
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum, sapiente?"
    },
    {
        title: "Burger La Minimal",
        img: "https://dummyimage.com/150x150/000/fff",
        price: 3400,
        category: "burgers",
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum, sapiente?"
    },
    {
        title: "Burger La Jijiji",
        img: "https://dummyimage.com/150x150/000/fff",
        price: 4150,
        category: "burgers",
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum, sapiente?"
    },
    {
        title: "Burger Doble Cuarto de Libra",
        img: "https://dummyimage.com/150x150/000/fff",
        price: 3400,
        category: "burgers",
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum, sapiente?"
    },
    {
        title: "Burger Bacon Crispy",
        img: "https://dummyimage.com/150x150/000/fff",
        price: 3000,
        category: "burgers",
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum, sapiente?"
    },
    {
        title: "Papas Fritas",
        img: "https://dummyimage.com/150x150/000/fff",
        price: 1500,
        category: "extras",
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum, sapiente?"
    },
    {
        title: "Aros de Cebolla",
        img: "https://dummyimage.com/150x150/000/fff",
        price: 2000,
        category: "extras",
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum, sapiente?"
    },
    {
        title: "Coca Cola 500ml",
        img: "https://dummyimage.com/150x150/000/fff",
        price: 700,
        category: "bebidas",
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum, sapiente?"
    },
    {
        title: "Sprite 500ml",
        img: "https://dummyimage.com/150x150/000/fff",
        price: 700,
        category: "bebidas",
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum, sapiente?"
    },
    {
        title: "Fanta 500ml",
        img: "https://dummyimage.com/150x150/000/fff",
        price: 700,
        category: "bebidas",
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum, sapiente?"
    },
    {
        title: "Imperial 470ml",
        img: "https://dummyimage.com/150x150/000/fff",
        price: 700,
        category: "bebidas",
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum, sapiente?"
    },
    
]

const seccionCentro=document.querySelector(".contain")
const buttons=document.querySelectorAll(".btn")



// pagina de inicio
window.addEventListener("DOMContentLoaded", function(){
    showMenu(menu);
})


// filtrado de los botones
buttons.forEach((button)=>{
    button.addEventListener("click", function(e){
      const category= e.currentTarget.dataset.id;  
      const menuCategory= menu.filter((arr)=>{
        if (arr.category === category){
            return arr
          }
         
      })
      if(category === "all"){
        showMenu(menu)
      }else{
        showMenu(menuCategory)
      }
    })
})


function showMenu(arr){
    let carta= arr.map((prod)=>{
        return `<article class="card">
                 <img src="${prod.img}" alt="">
                 <div class="right-card">
                     <div class="right-card-title">
                         <h2>${prod.title}</h2>
                         <h2>${prod.price}</h2>
                     </div>
                     <div class="underline"></div>
                     <p>${prod.description}</p>
                 </div>
                 </article>`
     })
     carta= carta.join("")
     seccionCentro.innerHTML= carta
}
// const buttons= document.getElementsByTagName("button")
// const buttonAll= buttons[0],
// buttonBurgers= buttons[1],
// buttonExtras=buttons[2],
// buttonBebidas=buttons[3]
// const card= document.querySelector(".contain")



// function de filtrar el array por categoria
// function filter(category){
//     return menu.filter((el)=>{
//         return el.category === category
//         })
// }

// function showCard(array){
//     let html;
//     for (const prod of array) {
//         html= ` <article class="card">
//                 <img src="${prod.img}" alt="">
//                 <div class="right-card">
//                     <div class="right-card-title">
//                         <h2>${prod.title}</h2>
//                         <h2>${prod.price}</h2>
//                     </div>
//                     <div class="underline"></div>
//                     <p>${prod.description}</p>
//                 </div>
//                 </article>` 
//         card.innerHTML += html 
//     }
    
// }


// buttonBurgers.addEventListener("click", function(){
//     const burgerArray= filter("burgers")
//     showCard(burgerArray)
// })

// buttonExtras.addEventListener("click", function(){
//     const extrasArray= filter("extras")
//     showCard(extrasArray)
// })