// Offer tab 

document.getElementById("close").addEventListener("click", function () {
    document.getElementById("offerTab").style.display = "none";
  });

// Sample product data
function toggleMobileMenu() {
  const menu = document.getElementById("mobileMenu");
  menu.classList.toggle("translate-x-full");
}

const products = [
  {
    name: "Red Summer Dress",
    category: "Summer",
    color: "Red",
    arrival: "New",
    image: "f1.jpg",
  },
  {
    name: "Blue Party Shirt",
    category: "Party",
    color: "Blue",
    arrival: "Old",
    image: "f2.jpg",
  },
  {
    name: "Green Beach Shorts",
    category: "Beach",
    color: "Green",
    arrival: "New",
    image: "f3.jpg",
  },
  {
    name: "White Party Gown",
    category: "Party",
    color: "White",
    arrival: "Old",
    image: "f4.jpg",
  },
    {
    name: "White Party Gown",
    category: "Party",
    color: "White",
    arrival: "Old",
    image: "f5.jpg",
  },  {
    name: "White Party Gown",
    category: "Party",
    color: "White",
    arrival: "Old",
    image: "f6 (1).jpg",
  },  {
    name: "White Party Gown",
    category: "Party",
    color: "White",
    arrival: "Old",
    image: "f6.jpg",
  },  {
    name: "White Party Gown",
    category: "Party",
    color: "White",
    arrival: "Old",
    image: "f7.jpg",
  },  {
    name: "White Party Gown",
    category: "Party",
    color: "White",
    arrival: "Old",
    image: "n1.jpg",
  },
   {
    name: "White Party Gown",
    category: "Party",
    color: "White",
    arrival: "Old",
    image: "n3.jpg",
  }, {
    name: "White Party Gown",
    category: "Party",
    color: "White",
    arrival: "Old",
    image: "n7.jpg",
  }, {
    name: "White Party Gown",
    category: "Party",
    color: "White",
    arrival: "Old",
    image: "n8.jpg",
  },
];

// Get Elements
const productContainer = document.getElementById("productContainer");
const searchInput = document.querySelector("input[type='text']");
const checkboxes = document.querySelectorAll("aside input[type='checkbox']");

// Render products
function renderProducts(filtered) {
  productContainer.innerHTML = "";
  if (filtered.length === 0) {
    productContainer.innerHTML = "<p>No products found</p>";
    return;
  }

  filtered.forEach((product) => {
    const div = document.createElement("div");
    div.className =
      "bg-white shadow-md rounded-lg overflow-hidden hover:shadow-xl transition";
    div.innerHTML = `
      <img src="${product.image}" alt="${product.name}" class="w-full h-64 object-cover" />
      <div class="p-4">
        <h3 class="text-xl font-semibold mb-2">${product.name}</h3>
        <p class="text-gray-600">${product.category} - ${product.color} - ${product.arrival}</p>
      </div>
    `;
    productContainer.appendChild(div);
  });
}

// Filter function
function filterProducts() {
  const searchTerm = searchInput.value.toLowerCase();

  const selectedFilters = {
    category: [],
    color: [],
    arrival: [],
  };

  checkboxes.forEach((checkbox) => {
    if (checkbox.checked) {
      const id = checkbox.id;
      if (["summer", "party", "beach"].includes(id)) {
        selectedFilters.category.push(capitalize(id));
      } else if (["red", "blue", "white", "green"].includes(id)) {
        selectedFilters.color.push(capitalize(id));
      } else if (["new", "old"].includes(id)) {
        selectedFilters.arrival.push(capitalize(id));
      }
    }
  });

  const result = products.filter((product) => {
    const matchSearch = product.name.toLowerCase().includes(searchTerm);

    const matchCategory =
      selectedFilters.category.length === 0 ||
      selectedFilters.category.includes(product.category);
    const matchColor =
      selectedFilters.color.length === 0 ||
      selectedFilters.color.includes(product.color);
    const matchArrival =
      selectedFilters.arrival.length === 0 ||
      selectedFilters.arrival.includes(product.arrival);

    return matchSearch && matchCategory && matchColor && matchArrival;
  });

  renderProducts(result);
}

// Capitalize first letter helper
function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

// Initial Render
renderProducts(products);

// Events
checkboxes.forEach((box) => box.addEventListener("change", filterProducts));
searchInput.addEventListener("input", filterProducts);
