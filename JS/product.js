fetch('products.json').then(response => response.json()).then(data => {
    const Cart = JSON.parse(localStorage.getItem('Cart')) || []

    const products = document.querySelector(".products")
    const electronics = document.querySelector(".electronics")
    const appliances = document.querySelector(".appliances")
    const phones = document.querySelector(".phones")
    






    

    data.forEach(element => {
           
        const isInCart = Cart.some(CartItem => CartItem.id === element.id)
        let promo = Math.floor(((element.old_price - element.price)/element.old_price)*100)
        if(element.old_price){

            products.innerHTML += `


            <div class="cardy swiper-slide">
            <span>${promo}%</span>
            <a href=""><img src=${element.img} alt=""></a> 
            <div class="stars">
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
             </div>
            
            <a href=""><p>${element.name}</p></a>
            <div class="price">
                <h3>${element.price}$</h3>
                <h4>${element.old_price}$</h4>
            </div>
            
            
             <div class="btns">
                <button id="buy">Buy Now</button>
                <button 
                        id="tocart" 
                        class="tocart ${isInCart ? 'active' : ''}" 
                        data-id="${element.id}">
                        ${isInCart ? 'Item Added' : 'Add To Cart'}  
                        <i class="fa-solid fa-cart-shopping"></i>
                    </button>
             </div>
        
        
        
        </div>
            
            `
        }

       
        
    });

    data.forEach(element => {
        const isInCart = Cart.some(CartItem => CartItem.id === element.id)

        let promo = Math.floor(((element.old_price - element.price)/element.old_price)*100)
        if(element.catetory === "electronics"){

            if(!element.old_price){

               electronics.innerHTML += `
               
                  <div class="cardy swiper-slide">
            
            <a href=""><img src=${element.img} alt=""></a> 
            <div class="stars">
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
             </div>
            
            <a href=""><p>${element.name}</p></a>
            <div class="price">
                <h3>${element.price}$</h3>
                
            </div>
            
            
             <div class="btns">
                <button id="buy">Buy Now</button>
                <button 
                        id="tocart" 
                        class="tocart ${isInCart ? 'active' : ''}" 
                        data-id="${element.id}">
                        ${isInCart ? 'Item Added' : 'Add To Cart'}  
                        <i class="fa-solid fa-cart-shopping"></i>
                    </button>
             </div>
        
        
        
        </div>
            
               
               `
            }

            else {

                electronics.innerHTML += `


                <div class="cardy swiper-slide">
                <span>${promo}%</span>
                <a href=""><img src=${element.img} alt=""></a> 
                <div class="stars">
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                 </div>
                
                <a href=""><p>${element.name}</p></a>
                <div class="price">
                    <h3>${element.price}$</h3>
                    <h4>${element.old_price}$</h4>
                </div>
                
                
                 <div class="btns">
                    <button id="buy">Buy Now</button>
                    <button 
                        id="tocart" 
                        class="tocart ${isInCart ? 'active' : ''}" 
                        data-id="${element.id}">
                        ${isInCart ? 'Item Added' : 'Add To Cart'}  
                        <i class="fa-solid fa-cart-shopping"></i>
                    </button>
                 </div>
            
            
            
            </div>
                
                `

            }

           
        }

       
        
    });

    data.forEach(element => {
        const isInCart = Cart.some(CartItem => CartItem.id === element.id)

        let promo = Math.floor(((element.old_price - element.price)/element.old_price)*100)
        if(element.catetory === "appliances"){

            if(!element.old_price){

                appliances.innerHTML += `
               
                  <div class="cardy swiper-slide">
            
            <a href=""><img src=${element.img} alt=""></a> 
            <div class="stars">
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
             </div>
            
            <a href=""><p>${element.name}</p></a>
            <div class="price">
                <h3>${element.price}$</h3>
                
            </div>
            
            
             <div class="btns">
                <button id="buy">Buy Now</button>
                <button 
                        id="tocart" 
                        class="tocart ${isInCart ? 'active' : ''}" 
                        data-id="${element.id}">
                        ${isInCart ? 'Item Added' : 'Add To Cart'}  
                        <i class="fa-solid fa-cart-shopping"></i>
                    </button>
             </div>
        
        
        
        </div>
            
               
               `
            }

            else {

                appliances.innerHTML += `


                <div class="cardy swiper-slide">
                <span>${promo}%</span>
                <a href=""><img src=${element.img} alt=""></a> 
                <div class="stars">
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                 </div>
                
                <a href=""><p>${element.name}</p></a>
                <div class="price">
                    <h3>${element.price}$</h3>
                    <h4>${element.old_price}$</h4>
                </div>
                
                
                 <div class="btns">
                    <button id="buy">Buy Now</button>
                    <button 
                        id="tocart" 
                        class="tocart ${isInCart ? 'active' : ''}" 
                        data-id="${element.id}">
                        ${isInCart ? 'Item Added' : 'Add To Cart'}  
                        <i class="fa-solid fa-cart-shopping"></i>
                    </button>
                 </div>
            
            
            
            </div>
                
                `

            }

           
        }

       
        
    });

    data.forEach(element => {
        const isInCart = Cart.some(CartItem => CartItem.id === element.id)
 
        let promo = Math.floor(((element.old_price - element.price)/element.old_price)*100)
        if(element.catetory === "mobiles"){

            if(!element.old_price){

                phones.innerHTML += `
               
                  <div class="cardy swiper-slide">
            
            <a href=""><img src=${element.img} alt=""></a> 
            <div class="stars">
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
             </div>
            
            <a href=""><p>${element.name}</p></a>
            <div class="price">
                <h3>${element.price}$</h3>
                
            </div>
            
            
             <div class="btns">
                <button id="buy">Buy Now</button>
                <button 
                        id="tocart" 
                        class="tocart ${isInCart ? 'active' : ''}" 
                        data-id="${element.id}">
                        ${isInCart ? 'Item Added' : 'Add To Cart'}  
                        <i class="fa-solid fa-cart-shopping"></i>
                    </button>
             </div>
        
        
        
        </div>
            
               
               `
            }

            else {

                phones.innerHTML += `


                <div class="cardy swiper-slide">
                <span>${promo}%</span>
                <a href=""><img src=${element.img} alt=""></a> 
                <div class="stars">
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                 </div>
                
                <a href=""><p>${element.name}</p></a>
                <div class="price">
                    <h3>${element.price}$</h3>
                    <h4>${element.old_price}$</h4>
                </div>
                
                
                 <div class="btns">
                    <button id="buy">Buy Now</button>
                    <button 
                        id="tocart" 
                        class="tocart ${isInCart ? 'active' : ''}" 
                        data-id="${element.id}">
                        ${isInCart ? 'Item Added' : 'Add To Cart'}  
                        <i class="fa-solid fa-cart-shopping"></i>
                    </button>
                 </div>
            
            
            
            </div>
                
                `

            }

           
        }

       
        
    });


})

