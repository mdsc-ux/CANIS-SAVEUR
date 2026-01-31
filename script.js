let cart = [];

function toggleCart() {
    document.getElementById('cart').classList.toggle('translate-x-full');
}

// Adicionar produtos
function addToCart(name, price) {
    const existingItem = cart.find(item => item.name === name);
    if (existingItem) existingItem.qty++;
    else cart.push({ name, price, qty: 1 });
    updateCart();
}

// Atualiza o carrinho
function updateCart() {
    const list = document.getElementById('cart-items');
    const count = document.getElementById('cart-count');
    const totalEl = document.getElementById('cart-total');

    list.innerHTML = '';
    let total = 0, items = 0;

    cart.forEach((item, index) => {
        const subtotal = item.price * item.qty;
        total += subtotal;
        items += item.qty;

        list.innerHTML += `
            <li class="flex justify-between items-center gap-3">
                <div>
                    <strong>${item.name}</strong><br>
                    <span class="text-sm text-gray-500">Qtd: ${item.qty}</span>
                </div>
                <div class="flex items-center gap-2">
                    <button onclick="decreaseQty(${index}); event.stopPropagation();" class="text-gray-400 hover:text-rose-deep">
                        <i class="fas fa-minus-circle"></i>
                    </button>
                    <button onclick="increaseQty(${index}); event.stopPropagation();" class="text-gray-400 hover:text-rose-deep">
                        <i class="fas fa-plus-circle"></i>
                    </button>
                    <button onclick="removeItem(${index}); event.stopPropagation();" class="text-red-400 hover:text-red-600">
                        <i class="fas fa-trash"></i>
                    </button>
                </div>
            </li>
        `;
    });

    count.textContent = items;
    totalEl.textContent = `R$ ${total.toFixed(2)}`;
}

function increaseQty(index) { cart[index].qty++; updateCart(); }
function decreaseQty(index) { cart[index].qty--; if(cart[index].qty <= 0) cart.splice(index,1); updateCart(); }
function removeItem(index) { cart.splice(index,1); updateCart(); }

function checkoutWhatsApp() {
    if (cart.length === 0) return;
    let msg = 'Olá! Gostaria de fazer o pedido:%0A%0A';
    let total = 0;
    cart.forEach(item => { const subtotal = item.price * item.qty; msg += `- ${item.name} (Qtd: ${item.qty}) – R$ ${subtotal.toFixed(2)}%0A`; total += subtotal; });
    msg += `%0A🧾 Total: R$ ${total.toFixed(2)}`;
    window.open(`https://wa.me/5511999999999?text=${msg}`, '_blank');
}

// Fecha o carrinho apenas se clicar fora
document.addEventListener('click', function(event) {
    const cartEl = document.getElementById('cart');
    const cartButton = document.querySelector('.fa-shopping-cart')?.parentElement;
    const cartIsOpen = !cartEl.classList.contains('translate-x-full');

    if (cartIsOpen) {
        // Se clicou fora do carrinho e fora do botão do carrinho, fecha
        if (!cartEl.contains(event.target) && !cartButton.contains(event.target)) {
            cartEl.classList.add('translate-x-full');
        }
    }
});



    let currentSlide = 0;

    function updateCarousel() {
        const carousel = document.getElementById('carousel');
        carousel.style.transform = `translateX(-${currentSlide * 100}%)`;
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % 2;
        updateCarousel();
    }

    function prevSlide() {
        currentSlide = (currentSlide - 1 + 2) % 2;
        updateCarousel();
    }



    