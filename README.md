# BloomWellness

A comprehensive lifestyle blog website featuring articles across six main categories: Fashion & Accessories, Health & Beauty, Home & Garden, Travel & Accommodation, Finance & Insurance, and Food & Beverage.

## Features

- **Modern, Clean Design**: Simple and elegant design with smooth animations and transitions
- **6 Content Categories**: Organized content across fashion, beauty, home, travel, finance, and food
- **Blog Articles**: 6 medium-length articles with matching images (dates from January 2025 - August 2025)
- **Product Reviews**: Detailed product recommendations with images, ratings, and descriptions
- **Search Functionality**: Search articles by title, excerpt, or content
- **Category Filtering**: Filter articles by category
- **Pagination**: Easy navigation through multiple articles
- **Individual Article Pages**: Dedicated pages for each article with full content and product recommendations
- **About Page**: Information about BloomWellness and its mission
- **Contact Page**: Contact form and FAQ section
- **Responsive Design**: Fully optimized for mobile, tablet, and desktop devices
- **Social Media Integration**: Social media icons with links in footer
- **Smooth Animations**: Fade-in effects, hover animations, and smooth transitions throughout
- **Newsletter Subscription**: Email subscription form in footer

## File Structure

```
BloomWellness/
│
├── index.html              # Homepage
├── blog.html               # Blog listing page
├── article.html            # Article detail page template
├── about.html              # About us page
├── contact.html            # Contact page
├── README.md              # This file
│
├── css/
│   └── style.css          # Main stylesheet with responsive design
│
└── js/
    ├── main.js            # Main JavaScript file
    ├── articles.js        # Articles database and utility functions
    ├── blog.js            # Blog page functionality
    └── article.js         # Article detail page functionality
```

## Technologies Used

- **HTML5**: Semantic markup
- **CSS3**: Modern styling with Flexbox and Grid
- **JavaScript (ES6)**: Interactive functionality
- **Font Awesome 6.4.0**: Icons
- **Unsplash**: High-quality stock images

## Articles Included

1. **Top 10 Sustainable Fashion Brands You Should Know in 2025** (Fashion & Accessories)
   - Date: January 15, 2025
   - 3 product recommendations

2. **Essential Kitchen Gadgets and Appliances Every Home Chef Needs** (Food & Beverage)
   - Date: February 28, 2025
   - 3 product recommendations

3. **Best Natural Skincare Products for Glowing Skin in 2025** (Health & Beauty)
   - Date: March 22, 2025
   - 3 product recommendations

4. **Smart Home Devices That Will Transform Your Living Space** (Home & Garden)
   - Date: May 10, 2025
   - 3 product recommendations

5. **Hidden Gems: 10 Underrated Travel Destinations for 2025** (Travel & Accommodation)
   - Date: June 18, 2025
   - 3 product recommendations

6. **Best Credit Cards for Rewards and Cash Back in 2025** (Finance & Insurance)
   - Date: August 5, 2025
   - 3 product recommendations

## Features Breakdown

### Homepage
- Hero section with call-to-action
- Category cards with icons
- Featured articles grid
- Footer with newsletter subscription

### Blog Page
- Category filter buttons
- Sort dropdown (by date and title)
- Articles grid with pagination
- Search integration

### Article Detail Page
- Full article content with images
- Product recommendations section
- Author and date information
- Back to blog navigation

### About Page
- Company introduction
- Core values with icons
- Category descriptions
- Team mission statement

### Contact Page
- Contact form with validation
- Contact information
- Social media links
- FAQ section

### Responsive Design
- Mobile menu with hamburger icon
- Flexible grid layouts
- Touch-friendly buttons
- Optimized images
- Breakpoints at 768px and 480px

### Animations
- Fade-in effects on page load
- Hover effects on cards and buttons
- Smooth scrolling for anchor links
- Slide-down header animation
- Category icon rotation on hover
- Image zoom on hover

## How to Use

1. Open `index.html` in a web browser to view the homepage
2. Navigate through different pages using the navigation menu
3. Click on article cards to read full articles
4. Use the search bar to find specific content
5. Filter articles by category on the blog page
6. Use pagination to browse through all articles

## Browser Compatibility

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Customization

### Adding New Articles

Edit `js/articles.js` and add new article objects following this structure:

```javascript
{
    id: 6,
    title: "Article Title",
    category: "category-slug",
    categoryName: "Category Display Name",
    date: "2025-MM-DD",
    author: "Author Name",
    excerpt: "Short description...",
    featuredImage: "image-url",
    content: `HTML content...`,
    products: [
        {
            name: "Product Name",
            description: "Description",
            image: "image-url",
            price: "$XX.XX",
            rating: 4.5,
            link: "#"
        }
    ]
}
```

### Changing Colors

Edit CSS variables in `css/style.css`:

```css
:root {
    --primary-color: #4CAF50;
    --secondary-color: #2E7D32;
    --accent-color: #81C784;
    /* ... */
}
```

## Credits

- Design & Development: BloomWellness Team
- Images: Unsplash
- Icons: Font Awesome
- Fonts: System fonts (Segoe UI, etc.)

## License

© 2025 BloomWellness. All rights reserved.

## Contact

For questions or support, visit the Contact page or email hello@bloomwellness.com

