const temples = [
    {
        name: "Salt Lake Temple",
        location: "Salt Lake City, Utah",
        dedication: "April 6, 1893",
        area: 210000,
        image: "salt-lake.jpg",
        lazy: "lazy"
    },
    {
        name: "Las Vegas Nevada Temple",
        location: "Las Vegas, Nevada",
        dedication: "December 16, 2001",
        area: 76000,
        image: "las-vegas.jpg",
        lazy: "lazy"
    },
    {
        name: "Bogota Colombia Temple",
        location: "Bogota, Colombia",
        dedication: "August 15, 2010",
        area: 34000,
        image: "bogota.jpg",
        lazy: "lazy"
    },
    {
        name: "Tokyo Japan Temple",
        location: "Tokyo, Japan",
        dedication: "December 27, 1980",
        area: 61000,
        image: "tokyo.jpg",
        lazy: "lazy"
    },
    {
        name: "London England Temple",
        location: "London, England",
        dedication: "September 15, 1958",
        area: 39000,
        image: "london.jpg",
        lazy: "lazy"
    },
    {
        name: "Sydney Australia Temple",
        location: "Sydney, Australia",
        dedication: "August 20, 1984",
        area: 50000,
        image: "sydney.jpg",
        lazy: "lazy"
    },
    {
        name: "Paris France Temple",
        location: "Paris, France",
        dedication: "May 20, 2017",
        area: 15000,
        image: "paris.jpg",
        lazy: "lazy"
    },
    {
        name: "Rome Italy Temple",
        location: "Rome, Italy",
        dedication: "March 10, 2019",
        area: 17000,
        image: "rome.jpg",
        lazy: "lazy"
    },
    {
        name: "Seoul South Korea Temple",
        location: "Seoul, South Korea",
        dedication: "December 14, 1985",
        area: 65000,
        image: "seoul.jpg",
        lazy: "lazy"
    },
    {
        name: "Tegucigalpa Honduras Temple",
        location: "Tegucigalpa, Honduras",
        dedication: "2013",
        area: 32000,
        image: "tegucigalpa.jpg",
        lazy: "lazy"
    }
];
function displayTemples(templesToDisplay) {
    const container = document.getElementById('temple-cards');
    container.innerHTML = '';

    templesToDisplay.forEach(temple => {
        const card = document.createElement('article');
        card.classList.add('temple-card');

        card.innerHTML = `
      <img src="images/${temple.image}" alt="${temple.name} Temple" loading="${temple.lazy}">
      <div class="temple-info">
        <h2>${temple.name}</h2>
        <p><strong>Location:</strong> ${temple.location}</p>
        <p><strong>Dedication:</strong> ${temple.dedication}</p>
        <p><strong>Area:</strong> ${temple.area.toLocaleString()} sq ft</p>
      </div>
    `;

        container.appendChild(card);
    });
}
function getYearFromDedication(dedication) {
    const yearStr = dedication.split(',').pop().trim();
    return parseInt(yearStr);
}

// Función de filtrado
function filterTemples(filter) {
    let filteredTemples = temples;

    if (filter === 'old') {
        filteredTemples = temples.filter(temple => {
            const year = getYearFromDedication(temple.dedication);
            return year < 1900;
        });
    } else if (filter === 'new') {
        filteredTemples = temples.filter(temple => {
            const year = getYearFromDedication(temple.dedication);
            return year > 2000;
        });
    } else if (filter === 'large') {
        filteredTemples = temples.filter(temple => temple.area > 90000);
    } else if (filter === 'small') {
        filteredTemples = temples.filter(temple => temple.area < 10000);
    } else if (filter === 'all') {
        filteredTemples = temples;
    }

    displayTemples(filteredTemples);
}

document.addEventListener('DOMContentLoaded', () => {
    displayTemples(temples);
    const buttons = document.querySelectorAll('.filters button');
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const filter = button.getAttribute('data-filter');
            filterTemples(filter);
        });
    });
});