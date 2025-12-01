// Blog Page JavaScript

let currentPage = 1;
const articlesPerPage = 6;
let filteredArticles = [];
let currentCategory = 'all';
let currentSort = 'date-desc';

document.addEventListener('DOMContentLoaded', function() {
    // Check for URL parameters
    const urlCategory = getUrlParameter('category');
    const urlSearch = getUrlParameter('search');

    if (urlCategory) {
        currentCategory = urlCategory;
        updateActiveFilter(urlCategory);
    }

    if (urlSearch) {
        document.getElementById('searchInput').value = urlSearch;
        filteredArticles = searchArticles(urlSearch);
    } else {
        filteredArticles = getArticlesByCategory(currentCategory);
    }

    // Sort articles
    filteredArticles = sortArticles(filteredArticles, currentSort);

    // Display articles
    displayArticles();
    setupPagination();

    // Category Filter
    const filterButtons = document.querySelectorAll('.filter-btn');
    filterButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            currentCategory = this.getAttribute('data-category');
            currentPage = 1;
            
            // Update active button
            filterButtons.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            
            // Filter articles
            filteredArticles = getArticlesByCategory(currentCategory);
            filteredArticles = sortArticles(filteredArticles, currentSort);
            
            // Display
            displayArticles();
            setupPagination();
        });
    });

    // Sort Dropdown
    const sortDropdown = document.getElementById('sortDropdown');
    sortDropdown.addEventListener('change', function() {
        currentSort = this.value;
        currentPage = 1;
        
        filteredArticles = sortArticles(filteredArticles, currentSort);
        displayArticles();
        setupPagination();
    });
});

function displayArticles() {
    const container = document.getElementById('articlesContainer');
    const noResults = document.getElementById('noResults');
    
    if (filteredArticles.length === 0) {
        container.innerHTML = '';
        noResults.style.display = 'block';
        document.getElementById('pagination').style.display = 'none';
        return;
    }
    
    noResults.style.display = 'none';
    document.getElementById('pagination').style.display = 'flex';
    
    const startIndex = (currentPage - 1) * articlesPerPage;
    const endIndex = startIndex + articlesPerPage;
    const articlesToShow = filteredArticles.slice(startIndex, endIndex);
    
    container.innerHTML = articlesToShow.map(article => createArticleCard(article)).join('');
    
    // Add click handlers
    container.querySelectorAll('.article-card').forEach(card => {
        card.addEventListener('click', function(e) {
            if (!e.target.closest('.read-more')) {
                const articleId = this.getAttribute('data-id');
                window.location.href = `article.html?id=${articleId}`;
            }
        });
    });
    
    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function setupPagination() {
    const pagination = document.getElementById('pagination');
    const totalPages = Math.ceil(filteredArticles.length / articlesPerPage);
    
    if (totalPages <= 1) {
        pagination.innerHTML = '';
        return;
    }
    
    let paginationHTML = '';
    
    // Previous button
    paginationHTML += `<button ${currentPage === 1 ? 'disabled' : ''} onclick="changePage(${currentPage - 1})">
        <i class="fas fa-chevron-left"></i> Previous
    </button>`;
    
    // Page numbers
    for (let i = 1; i <= totalPages; i++) {
        if (
            i === 1 || 
            i === totalPages || 
            (i >= currentPage - 1 && i <= currentPage + 1)
        ) {
            paginationHTML += `<button class="${i === currentPage ? 'active' : ''}" onclick="changePage(${i})">${i}</button>`;
        } else if (i === currentPage - 2 || i === currentPage + 2) {
            paginationHTML += `<span>...</span>`;
        }
    }
    
    // Next button
    paginationHTML += `<button ${currentPage === totalPages ? 'disabled' : ''} onclick="changePage(${currentPage + 1})">
        Next <i class="fas fa-chevron-right"></i>
    </button>`;
    
    pagination.innerHTML = paginationHTML;
}

function changePage(page) {
    const totalPages = Math.ceil(filteredArticles.length / articlesPerPage);
    if (page < 1 || page > totalPages) return;
    
    currentPage = page;
    displayArticles();
    setupPagination();
}

function updateActiveFilter(category) {
    const filterButtons = document.querySelectorAll('.filter-btn');
    filterButtons.forEach(btn => {
        btn.classList.remove('active');
        if (btn.getAttribute('data-category') === category) {
            btn.classList.add('active');
        }
    });
}


