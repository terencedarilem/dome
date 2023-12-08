const product = [
    {
      id: 0,
      image: 'https://raw.githubusercontent.com/ROFINA96/checkpoint-dome/618ffcfd4843ec3cf8d28813939cd267d06f8c4f/image/img1.jpg',
      title: 'Airpods 2',
      price: 120,
    },
    {
      id: 1,
      image: 'https://keurarameinformatique.com/wp-content/uploads/2023/02/1.png',
      title: 'Samsung Galaxy S23 Ultra',
      price: 60,
    },
    {
      id: 2,
      image: 'https://www.cnet.com/a/img/resize/0f37c88c746b755a97f770500419522be6f1da43/hub/2023/09/18/c44256ef-e6c1-41bb-b77b-648792f47c6c/iphone15-pro-64.jpg?auto=webp&fit=crop&height=900&width=1200',
      title: 'Iphone 15 pro',
      price: 230,
    },
    {
      id: 3,
      image: 'https://upload.wikimedia.org/wikipedia/commons/9/99/Many_cameras.jpg',
      title: 'Appareil photo',
      price: 100,
    }
  ];
  const categories = [...new Set(product.map((item)=>
    {return item}))]
    let i=0;
document.getElementById('root').innerHTML = categories.map((item)=>
{
    var {image, title, price} = item;
    return(
        `<div class='box'>
            <div class='img-box'>
                <img class='images' src=${image}></img>
            </div>
        <div class='bottom'>
        <p>${title}</p>
        <h2> ${price}</h2>`+
        "<button onclick='addtocart("+(i++)+")'>Add to cart</button>"+
        `</div>
        </div>`
    )
}).join('')

var cart =[];

function addtocart(a){
    cart.push({...categories[a]});
    displaycart();
}
function delElement(a){
    cart.splice(a, 1);
    displaycart();
}
function displaycart(){
    let j = 0, total=0;
    document.getElementById("count").innerHTML= cart.length;
    if(cart.length==0){
        document.getElementById('cartItem').innerHTML = "Your cart is empty";
        document.getElementById("total").innerHTML = 0;
    }
    else{
        document.getElementById("cartItem").innerHTML = cart.map((items)=>
        {
            var {image, title, price} = items;
            total=total+parseInt(price);
            console.log(total);
            document.getElementById("total").innerHTML = total+" Fcfa";
            return(
                `<div class='cart-item'>
                <div class='row-img'>
                    <img class='rowimg' src=${image}>
                </div>
                <p style='font-size:12px;'>${title}</p>
                <h2 style='font-size: 15px;'> ${price}.00</h2>`+
                `<svg xmlns="http://www.w3.org/2000/svg" style="cursor: pointer;heigth:30px;width:30px;" viewBox="0 0 24 24" fill="red" onclick='delElement("+ (j++) +")' class="w-6 h-6">
  <path fill-rule="evenodd" d="M16.5 4.478v.227a48.816 48.816 0 013.878.512.75.75 0 11-.256 1.478l-.209-.035-1.005 13.07a3 3 0 01-2.991 2.77H8.084a3 3 0 01-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 01-.256-1.478A48.567 48.567 0 017.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 013.369 0c1.603.051 2.815 1.387 2.815 2.951zm-6.136-1.452a51.196 51.196 0 013.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 00-6 0v-.113c0-.794.609-1.428 1.364-1.452zm-.355 5.945a.75.75 0 10-1.5.058l.347 9a.75.75 0 101.499-.058l-.346-9zm5.48.058a.75.75 0 10-1.498-.058l-.347 9a.75.75 0 001.5.058l.345-9z" clip-rule="evenodd" />
</svg>
</div>`
            );
        }).join('');
    }

}
