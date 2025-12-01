// Article Detail Page JavaScript

document.addEventListener('DOMContentLoaded', function() {
    const articleSlug = getUrlParameter('slug');
    
    if (!articleSlug) {
        window.location.href = 'blog.html';
        return;
    }
    
    const article = getArticleBySlug(articleSlug);
    
    if (!article) {
        window.location.href = 'blog.html';
        return;
    }
    
    loadArticle(article);
});

function loadArticle(article) {
    // Update page title
    document.title = `${article.title} - BloomWellness`;
    
    // Load header information
    document.getElementById('articleCategory').textContent = article.categoryName;
    document.getElementById('articleCategory').style.display = 'inline-block';
    document.getElementById('articleTitle').textContent = article.title;
    document.getElementById('articleDate').textContent = formatDate(article.date);
    document.getElementById('articleAuthor').textContent = article.author;
    
    // Load featured image
    const featuredImageContainer = document.getElementById('featuredImageContainer');
    featuredImageContainer.innerHTML = `<img src="${article.featuredImage}" alt="${article.title}">`;
    
    // Load article body
    document.getElementById('articleBody').innerHTML = article.content;
    
    // Load products if available
    if (article.products && article.products.length > 0) {
        loadProducts(article.products);
    }
}

function loadProducts(products) {
    const productsContainer = document.getElementById('productsContainer');
    
    const productsHTML = `
        <div class="products-section">
            <h2>Recommended Products</h2>
            <div class="products-grid">
                ${products.map(product => createProductCard(product)).join('')}
            </div>
        </div>
    `;
    
    productsContainer.innerHTML = productsHTML;
}

function createProductCard(product) {
    const stars = generateStars(product.rating);
    
    return `
        <div class="product-card">
            <div class="product-image">
                <img src="${product.image}" alt="${product.name}">
            </div>
            <div class="product-info">
                <h3>${product.name}</h3>
                <p>${product.description}</p>
                <div class="product-rating">
                    ${stars}
                    <span>${product.rating}</span>
                </div>
                <div class="product-price">${product.price}</div>
                <a href="${product.link}" class="product-link" target="_blank">
                    View Product <i class="fas fa-external-link-alt"></i>
                </a>
            </div>
        </div>
    `;
}

function generateStars(rating) {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
    
    let starsHTML = '';
    
    for (let i = 0; i < fullStars; i++) {
        starsHTML += '<i class="fas fa-star"></i>';
    }
    
    if (hasHalfStar) {
        starsHTML += '<i class="fas fa-star-half-alt"></i>';
    }
    
    for (let i = 0; i < emptyStars; i++) {
        starsHTML += '<i class="far fa-star"></i>';
    }
    
    return starsHTML;
}


