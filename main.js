// Search function
function searchImages(query) {
  const sections = document.querySelectorAll("section");

  sections.forEach(section => {
    const lis = section.querySelectorAll("li");
    let hasMatchingLi = false;

    lis.forEach(li => {
      const img = li.querySelector(`img[data-keywords*="${query}"]`);

      li.style.display = (img || !query) ? "block" : "none";
      if (img || !query) hasMatchingLi = true;
    });

    section.style.display = hasMatchingLi ? "block" : "none";
  });
}

// Add event listener for input field
const searchInput = document.getElementById("searchInput");

searchInput.addEventListener("input", function() {
  const query = this.value.trim().toLowerCase();

  searchImages(query);
});

// Filtration function
function filterLinks(category) {
  const sections = document.querySelectorAll('section');

  sections.forEach(section => {
    section.style.display = (category === 'all' || category === section.id) ? 'block' : 'none';
  });
}

// Add event listener for select menu
const filterElement = document.getElementById('categorySelect');

filterElement.addEventListener('change', function() {

  filterLinks(this.value);
});