// Creamos una variable para almacenar el carrito en localStorage
let shoppingCart = JSON.parse(localStorage.getItem("shoppingCart"));
// Si el shoppingCart en localStorage no existe, entonces lo creamos como un array vacio
if (!shoppingCart) {
  shoppingCart = [];
}

// Capturamos el contenedor de productos de la vista del carrito
let productsContainer = document.querySelector(".cart-main");
let productCart = document.querySelector(".product-cart");

// CODIGO PARA MOSTRAR PRODUCTOS EN EL CARRITO
// Hacemos un condicional para agregar el addEventListener si es que el elemento existe
if (productsContainer) {
  if (productsContainer) {
    productsContainer.addEventListener("load", showProducts());
  }
}
//EVITA LA ELO RELOAD DE LOS PRODUCTOS MEDIANTE EL BORRADO DE HTML
function cleanHtml() {
  (productsContainer.innerHTML = ""), showProducts();
}
// Funcion para mostrar productos en el carrito
async function showProducts() {
  // Llamo el array "shoppingCart" del localStorage y declaro un array vacio llamado "arrayProducts"
  let shoppingCart = JSON.parse(localStorage.getItem("shoppingCart"));
  let arrayProducts = [];
  // Con un for of itero atravez de los elementos de shoppingCart y hago un Fetch a la API para buscar
  // el producto en la base de datos y pusheo los datos necesarios para el carrito como un objeto a "arrayProducts"
  for (let item of shoppingCart) {
    await fetch(`/cart/product/${item.id}`)
      .then((response) => response.json())
      .then((data) => {
        let { id, pics, product_name, price } = data;
        arrayProducts.push({
          id,
          pics,
          product_name,
          price,
          quantity: item.quantity,
        });
      })
      .catch((error) => console.log(error));
  }
  let subtotal = 0;
  let total = 0;
  // Apartir de aca lo que hago es renderizar los elementos de la vista del carrito con sus
  // respectivos datos, iterando atravez de "arrayProducts" y creando un product card por elemento
  for (let product of arrayProducts) {
    subtotal += product.price * product.quantity;
    total += product.price * product.quantity;
    let productHTML = `<div class="product-cart">
    <article>
      <img src="${product.pics}" alt="product_image">
      <h1 class="cart-name">${product.product_name}</h1>
      <div class="item-number-grid">
        <div class="item-number">
          <div class="minus-mark" onclick="removeUnitIn(${product.id})"> - </div>
          <div class="number">${product.quantity}</div>
          <div class="plus-mark" onclick="addUnitIn(${product.id})"> + </div>
        </div>
      </div>
      <div class="item-price">
        <div class="dollar-simbol"> $ </div>
        <div class="price-number"> ${product.price} </div>
      </div>
      <div class="xmark" productId=${product.id} onclick="removeFromCart(${product.id})"> X </div>
    </article>
    </div>`;
    productsContainer.innerHTML += productHTML;
  }

  // Aqui renderizo el final del carrito, el subtotal, precio de shipping, etc

  let finalInfo = `
  <div class="finally-purchase-container">
  <div class="subtotal">
    <h1> Subtotal: </h1>
    <h2> $${total.toFixed(2)} </h2>
  </div>

  <div class="shipping">
    <h1> Estimated Shipping: </h1>
    <h2> FREE </h2>
  </div>

  <div class="total">
    <h1> Estimated Total: </h1>
    <h2> $${Math.ceil(subtotal)} </h2>
  </div>
  </div>
  <button class="finally-shop-button"> CONTINUE </button>`;
  productsContainer.innerHTML += finalInfo;
}

// CODIGO PARA AGREGAR PRODUCTOS AL CARRITO

// Detectamos con un addEventListener en el documento que si se hace click en el documento y si dentro
// de ese elemento existe el atributo "addToCartId", entonces llama a la funcion "addToCart" si es que existe
let cartBotton = document.querySelectorAll(".cartBotton");

// Si el boton existe, entonces iteramos entre todos los que haya y le agregamos un addEventListener
// Asi cuando se hace click en el boton, se ejecuta la funcion addToCart con el productId como argumento
if (cartBotton) {
  for (let botton of cartBotton) {
    botton.addEventListener("click", function (e) {
      let productId = e.target.getAttribute("productId");
      if (productId) {
        addToCart(productId);
      }
    });
  }
}

// Función para añadir productos al carrito
function addToCart(productId) {
  // Comprobamos si el producto ya se encuentra en el carrito
  const existingProductIndex = shoppingCart.findIndex(
    (p) => p.id === productId
  );
  if (existingProductIndex >= 0) {
    // Si ya está en el carrito, solo aumentamos la cantidad
    shoppingCart[existingProductIndex].quantity += 1;
    console.log("unidad agregada a producto existente!");
  } else {
    // Si no está en el carrito, lo añadimos como un nuevo producto
    shoppingCart.push({
      id: productId,
      quantity: 1,
    });
    console.log("producto nuevo agregado!");
  }
  // Actualizamos el carrito en localStorage
  localStorage.setItem("shoppingCart", JSON.stringify(shoppingCart));
}

// Función para eliminar productos del carrito
function removeFromCart(productId) {
  // Encontramos el índice del producto en el carrito
  const existingProductIndex = shoppingCart.findIndex(
    (p) => +p.id === productId
  );
  // Si se encuentra el producto, lo eliminamos del carrito
  if (existingProductIndex >= 0) {
    shoppingCart.splice(existingProductIndex, 1);
    // Actualizamos el carrito en localStorage
    localStorage.setItem("shoppingCart", JSON.stringify(shoppingCart));
    // recargamos el carrito para que vuelva a cargar los productos del localStorage y se pueda ver el cambio
    // location.reload();
    cleanHtml();
  }
}

// Función para añadir una unidad a un producto en el carrito
function addUnitIn(productId) {
  // Obtenemos el index del producto en el carrito
  const productIndex = shoppingCart.findIndex((p) => +p.id === productId);
  // Aumentamos la cantidad
  shoppingCart[productIndex].quantity += 1;
  // Actualizamos el carrito en localStorage
  localStorage.setItem("shoppingCart", JSON.stringify(shoppingCart));
  // recargamos el carrito para que vuelva a cargar los productos del localStorage y se pueda ver el cambio
  // location.reload();
  cleanHtml();
}

// Función para quitar una unidad a un producto en el carrito
function removeUnitIn(productId) {
  // Obtenemos el index del producto en el carrito
  const productIndex = shoppingCart.findIndex((p) => +p.id === productId);
  // Disminuimos la cantidad
  shoppingCart[productIndex].quantity -= 1;
  // Si la cantidad del producto despues de disminuir en 1 la cantidad es menor o igual a 0,
  // entonces se borra el producto del localStorage con un splice
  if (shoppingCart[productIndex].quantity <= 0) {
    shoppingCart.splice(productIndex, 1);
  }
  // Actualizamos el carrito en localStorage
  localStorage.setItem("shoppingCart", JSON.stringify(shoppingCart));
  // recargamos el carrito para que vuelva a cargar los productos del localStorage y se pueda ver el cambio
  // location.reload();
  cleanHtml();
}
