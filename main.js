const courses = [
    {
        url: "#",
        title: "Drawing Essentials for Begginers",
        category: "Art",
        thumbnail: "images/color-pencils-8127500_640.webp",
        description: "Learn to draw and color with this extensive course.",
        price: "299.99",
        duration: "12",
    },

    {
        url: "#",
        title: "Design Masterclass",
        category: "Design",
        thumbnail: "images/abstract-6305605_640.webp",
        description: "Learn the basic theories behind excellent designs.",
        price: "199.99",
        duration: "4",
    },

    {
        url: "#",
        title: "How AI Works?",
        category: "Technology",
        thumbnail: "images/ai-generated-8838074_640.jpg",
        description: "This course is for those who are interested in getting started with AI.",
        price: "120.99",
        duration: "10",
    },

    {
        url: "#",
        title: "Adobe XD - The Crash Course",
        category: "Design",
        thumbnail: "images/business-5475661_640.jpg",
        description: "Learn how to use Adobe XD to create stunning websites.",
        price: "299.99",
        duration: "10",
    },
];

const coursesContainer = document.querySelector(".courses-container");

const displayCourse = (
    urlValue,
    titleValue,
    categoryValue,
    thumbnailValue,
    descriptionValue,
    priceValue,
    durationValue
) => {

    const card = document.createElement("div");
    card.classList.add("card");

    const a = document.createElement("a");
    a.setAttribute("href", urlValue);


    const category = document.createElement("div");
    category.classList.add("category");
    category.innerHTML = categoryValue;

    const img = document.createElement("img");
    img.setAttribute("src", thumbnailValue);

    const title = document.createElement("h2");
    title.classList.add("title");
    title.innerHTML = titleValue;

    const description = document.createElement("div");
    description.classList.add("description");
    description.innerHTML = descriptionValue

    const info = document.createElement("div");
    info.classList.add("info");

    const price = document.createElement("div");
    price.classList.add("price");
    price.innerHTML = priceValue

    const duration = document.createElement("div");
    duration.classList.add("duration");

    const timeIcon = document.createElement("div");
    timeIcone.classList.add("time-Icone");
    timeIcone.innerHTML = `
     <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                stroke="currentColor" class="size-6">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                            </svg>
    `

    const value = document.createElement("div");
    value.classList.add("value");
    value.innerHTML = durationValue;

    // Appending elements

    coursesContainer.appendChild(card);
    card.appendChild(a);
    a.appendChild(category);
    a.appendChild(img);
    a.appendChild(title);
    a.appendChild(description);
    a.appendChild(info);

    info.appendChild(price);
    info.appendChild(duration);

    duration.appendChild(timeIcon);
    duration.appendChild(value);
};

const generateCourseData = () => {
    courses.forEach((c) => {
        displayCourse(
            c.url, 
            c.title, 
            c.category, 
            c.thumbnail, 
            c.description, 
            c.price, 
            c.duration
        );
    });
};

generateCourseData(); 