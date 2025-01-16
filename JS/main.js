
let btn = document.getElementById("btn")
let nav_links = document.querySelector(".nav_links")
let cartboxes = document.querySelector(".cartboxes")
let closy = document.getElementById("close")
let carty = document.getElementById("carty")
let back = document.getElementById("back")
let valy = document.querySelector(".valy")
let finalPrice = document.querySelector(".finalPrice")
let spany = document.querySelector(".spany")


closy.addEventListener("click",()=>{

     cartboxes.classList.toggle("active")


})

carty.addEventListener("click",()=>{

  cartboxes.classList.toggle("active")


})

back.addEventListener("click",()=>{

  cartboxes.classList.toggle("active")


})




btn.addEventListener("click",()=>{

   nav_links.classList.toggle("active")


})


var swiper = new Swiper(".myCard", {
    pagination: {
      el: ".swiper-pagination",
      dynamicBullets: true,
    },
    autoplay :{
     
        delay : 2500

    },loop :true,
    
  });

  var swiper = new Swiper(".slidePro", {
    slidesPerView: 5,
    spaceBetween: 30,
    freeMode: true,
    autoplay :{
     
      delay : 1500

  },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },loop :true,
    breakpoints: {

      1200:{
        slidesPerView :5,
        spaceBetween: 30,


      },

      1000:{
        slidesPerView :4,
        spaceBetween: 20,


      },

      800:{

        slidesPerView :3,
        spaceBetween: 20,
      },
      600:{

        slidesPerView :3,
        spaceBetween: 10,
      },

      400:{

        slidesPerView :2,
        spaceBetween: 10,
      },

      200:{

        slidesPerView :1,
        spaceBetween: 10,
      }
    }
  });


  fetch('products.json').then(response => response.json()).then(data => {

      
    const addToCart = document.querySelectorAll(".tocart")

    addToCart.forEach(btn => {

      btn.addEventListener("click",(event) => {

        const proId = event.target.getAttribute('data-id')
        const selectedPro = data.find(product => 

          product.id == proId) 

        addProduct(selectedPro)

        const allbtns = document.querySelectorAll(".tocart")

        allbtns.forEach(btn => {

          btn.addEventListener("click",()=>{

            btn.classList.add("active")
            btn.innerHTML = 'Item Added <i class="fa-solid fa-cart-shopping"></i>'
          })
        })
        

      




      })

      
       
       
       

    })


   
    

  })

  function addProduct(product) {
    let Cart = JSON.parse(localStorage.getItem('Cart')) || [];
    
    

    Cart.push({ ...product, quantity: 1 });

    localStorage.setItem('Cart', JSON.stringify(Cart));
    console.log(product)

    updateCart(product)
}


function updateCart(){
  
  const Cart = JSON.parse(localStorage.getItem('Cart')) || [];
  const productAdd = document.querySelector(".middle")
  productAdd.innerHTML = ""
  var counter = 0
  var Price = 0
  
  Cart.forEach((product,index) => {
    
    counter +=product.quantity
    const pricy = product.price*product.quantity
    Price +=pricy
    productAdd.innerHTML += `
      
     <div class="product">
                <img src=${product.img} alt="">
                <div class="infos">
                    <p>${product.name}</p>
                    <h5>${pricy}$</h5>
                    <div class="quantity">
                        <button id="minusy" class="minus" indexId="${index}">-</button>
                        <p id="quantity">${product.quantity}</p>
                        <button id="plusy" class="plus" indexId="${index}">+</button>
        
                    </div>
                </div>
        
                <button id="delete" class="delete" del-id="${index}"><i class="bi bi-trash3-fill"></i></button>
            </div>
    
    
    `
  })

  valy.innerHTML = `${counter}`
  finalPrice.innerHTML = `${Price}$`
  spany.innerHTML = `${counter}`

  delety()
  const Add = document.querySelectorAll(".plus")

  Add.forEach(btn => {

    btn.addEventListener("click",(event) => {
      
      const itemId = event.target.getAttribute('indexId')

      AddQuantity(itemId)


    })
  })
   
  const Minus = document.querySelectorAll(".minus")

  Minus.forEach(btn => {

    btn.addEventListener("click",(event)=> {

      const idSelected = event.target.getAttribute('indexId')

      MinusQuantity(idSelected)

    })
  })


}

function MinusQuantity(index){

  const Cart = JSON.parse(localStorage.getItem('Cart'))
  
  if(Cart[index].quantity> 1){

    Cart[index].quantity -=1


  }

  localStorage.setItem('Cart', JSON.stringify(Cart))
  updateCart()
}


function AddQuantity(index){

  const Cart = JSON.parse(localStorage.getItem('Cart')) || []

  Cart[index].quantity +=1
  localStorage.setItem('Cart',JSON.stringify(Cart))
  updateCart()


  
}

function delety() {

  const del = document.querySelectorAll(".delete")

  del.forEach(btn => {
  
    btn.addEventListener("click",(event)=> {
  
      const deletedItem = event.target.getAttribute('del-id')
      
      RemoveFromCart(deletedItem)
      

    })
  })

}



function RemoveFromCart(index){

  const Cart = JSON.parse(localStorage.getItem('Cart'))

  const deletedItem = Cart.splice(index ,1)[0]
  localStorage.setItem('Cart',JSON.stringify(Cart))
  updateCart()
  activateBtn(deletedItem.id)



}

function activateBtn(proId){

  const matchingBtns = document.querySelectorAll(`.tocart[data-id='${proId}']`);

  

  matchingBtns.forEach(btn => {
      btn.classList.remove("active");
      btn.innerHTML = `Add To Cart <i class="fa-solid fa-cart-shopping"></i>`;
  });
}

updateCart()

