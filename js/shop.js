// shop.js

// Lista de produtos (simulação)
const products = [
    { id: 1, name: "Produto 1", price: "R$ 99,99", image: "assets/arte.png", category: "arte-digital" },
    { id: 2, name: "Produto 2", price: "R$ 149,99", image: "images/product2.jpg", category: "pintura" },
    { id: 3, name: "Produto 3", price: "R$ 199,99", image: "images/product3.jpg", category: "fotografia" },
    { id: 4, name: "Produto 4", price: "R$ 249,99", image: "images/product4.jpg", category: "escultura" },
    { id: 5, name: "Produto 5", price: "R$ 99,99", image: "assets/arte.png", category: "arte-digital" },
    { id: 6, name: "Produto 6", price: "R$ 149,99", image: "images/product2.jpg", category: "pintura" },
    { id: 7, name: "Produto 7", price: "R$ 199,99", image: "images/product3.jpg", category: "fotografia" },
    { id: 8, name: "Produto 8", price: "R$ 249,99", image: "images/product4.jpg", category: "escultura" },
    { id: 9, name: "Produto 9", price: "R$ 99,99", image: "assets/arte.png", category: "arte-digital" },
    { id: 10, name: "Produto 10", price: "R$ 149,99", image: "images/product2.jpg", category: "pintura" },
    { id: 11, name: "Produto 11", price: "R$ 199,99", image: "images/product3.jpg", category: "fotografia" },
    { id: 12, name: "Produto 12", price: "R$ 249,99", image: "images/product4.jpg", category: "escultura" },
    { id: 13, name: "Produto 13", price: "R$ 99,99", image: "assets/arte.png", category: "arte-digital" },
    { id: 14, name: "Produto 14", price: "R$ 149,99", image: "images/product2.jpg", category: "pintura" },
    { id: 15, name: "Produto 15", price: "R$ 199,99", image: "images/product3.jpg", category: "fotografia" },
    { id: 16, name: "Produto 16", price: "R$ 249,99", image: "images/product4.jpg", category: "escultura" },
    { id: 17, name: "Produto 17", price: "R$ 99,99", image: "assets/arte.png", category: "arte-digital" },
    { id: 18, name: "Produto 18", price: "R$ 149,99", image: "images/product2.jpg", category: "pintura" },
    { id: 19, name: "Produto 19", price: "R$ 199,99", image: "images/product3.jpg", category: "fotografia" },
    { id: 20, name: "Produto 20", price: "R$ 249,99", image: "images/product4.jpg", category: "escultura" },
    // Adicione mais produtos conforme necessário...
];

// Configurações de paginação
const productsPerPage = 16; // 4 linhas de 4 colunas
let currentPage = 1;

// Elementos do DOM
const productsGrid = document.getElementById("productsGrid");
const prevPageBtn = document.getElementById("prevPage");
const nextPageBtn = document.getElementById("nextPage");
const pageInfo = document.getElementById("pageInfo");
const filterSelect = document.getElementById("filterSelect");

// Função para exibir os produtos da página atual
function displayProducts(page, category = "todos") {
    const start = (page - 1) * productsPerPage;
    const end = start + productsPerPage;

    // Filtra os produtos com base na categoria selecionada
    const filteredProducts = category === "todos"
        ? products
        : products.filter(product => product.category === category);

    const productsToShow = filteredProducts.slice(start, end);

    // Limpa o grid de produtos
    productsGrid.innerHTML = "";

    // Adiciona os produtos ao grid com animação
    productsToShow.forEach((product, index) => {
        const productCard = `
            <div class="product__card">
                <img src="${product.image}" alt="${product.name}">
                <h3>${product.name}</h3>
                <p class="product__price">${product.price}</p>
                <button class="btn">Adicionar ao Carrinho</button>
            </div>
        `;
        productsGrid.innerHTML += productCard;

        // Adiciona um delay para a animação de cada card
        setTimeout(() => {
            const cards = document.querySelectorAll(".product__card");
            cards[index].classList.add("visible");
        }, index * 100); // Delay de 100ms entre cada card
    });

    // Atualiza o texto da página
    pageInfo.textContent = `Página ${page}`;

    // Habilita/desabilita os botões de paginação
    prevPageBtn.disabled = page === 1;
    nextPageBtn.disabled = end >= filteredProducts.length;
}

// Evento para mudar o filtro
filterSelect.addEventListener("change", () => {
    const selectedCategory = filterSelect.value;
    currentPage = 1; // Volta para a primeira página ao mudar o filtro
    displayProducts(currentPage, selectedCategory);
});

// Evento para avançar para a próxima página
nextPageBtn.addEventListener("click", () => {
    currentPage++;
    displayProducts(currentPage, filterSelect.value);
});

// Evento para voltar para a página anterior
prevPageBtn.addEventListener("click", () => {
    currentPage--;
    displayProducts(currentPage, filterSelect.value);
});

// Exibe os produtos da primeira página ao carregar o site
displayProducts(currentPage);

// Mostrar/ocultar o menu de filtro (caso ainda exista)
const filterBtn = document.getElementById("filterBtn");
const filterMenu = document.getElementById("filterMenu");

if (filterBtn && filterMenu) {
    filterBtn.addEventListener("click", () => {
        filterMenu.style.display = filterMenu.style.display === "block" ? "none" : "block";
    });
}

// Aplicar filtro (simulação)
const applyFilterBtn = document.getElementById("applyFilter");

if (applyFilterBtn) {
    applyFilterBtn.addEventListener("click", () => {
        const selectedCategories = [];
        document.querySelectorAll('input[name="category"]:checked').forEach(checkbox => {
            selectedCategories.push(checkbox.value);
        });

        alert(`Filtros aplicados: ${selectedCategories.join(", ")}`);
        filterMenu.style.display = "none"; // Oculta o menu após aplicar o filtro
    });
}