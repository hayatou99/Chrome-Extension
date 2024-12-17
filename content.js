// Function to highlight sale information (e.g., 50% off, Sale)
function highlightSale() {
  const saleText = document.body.innerHTML;
  const saleRegex = /\b(\d{1,2}%\s+off|Sale|Discount)\b/g;
  const matches = saleText.match(saleRegex);

  if (matches) {
    // Highlight the sale text
    document.body.innerHTML = document.body.innerHTML.replace(saleRegex, '<span style="background-color: yellow; color: red;">$&</span>');
  }
}

// Function to extract and display popularity (e.g., number of reviews and rating)
function highlightPopularity() {
  // Example for Amazon product page: Find rating and review count
  const ratingElement = document.querySelector('[aria-label*="out of 5 stars"]');
  const reviewCountElement = document.querySelector('.a-size-base');
  
  if (ratingElement && reviewCountElement) {
    const rating = ratingElement.getAttribute('aria-label');
    const reviewCount = reviewCountElement.textContent;

    // Highlight the rating and review count
    const popularityDiv = document.createElement('div');
    popularityDiv.innerHTML = `
      <div style="position: fixed; top: 10px; left: 10px; background-color: #fff; padding: 10px; border: 2px solid #000; z-index: 9999;">
        <strong>Rating:</strong> ${rating} <br />
        <strong>Reviews:</strong> ${reviewCount}
      </div>
    `;
    document.body.appendChild(popularityDiv);
  }
}

// Run functions on page load
highlightSale();
highlightPopularity();
