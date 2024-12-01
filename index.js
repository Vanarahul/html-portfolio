// Smooth scrolling for navigation links
document.querySelectorAll('nav ul li a').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const targetId = this.getAttribute('href').substring(1);
    const targetSection = document.getElementById(targetId);
    targetSection.scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Typing effect for greeting text
const textElement = document.getElementById('greet');
const message = "Hello!";
let index = 0;

function typeText() {
  if (index < message.length) {
    textElement.textContent += message[index];
    index++;
    setTimeout(typeText, 200); // Adjust the delay for typing speed
  } else {
    setTimeout(() => {
      textElement.textContent = '';  // Clear the text
      index = 0;                     // Reset index
      typeText();                     // Start typing again
    }, 1000); // Delay before resetting and typing again
  }
}

typeText();

// Function to display skills one by one

// projects
const projects = [
  {
    title: "E-commerce Website",
    description: "An interactive landing page for an online store.",
    image: "./i1.png", // Replace with your project image URL
    liveLink: "https://vanarahul.github.io/html-ecom/#", // Replace with your live project URL
  },
  {
    title: "Sign-in page",
    description: "A modern front-end sign-in page.",
    image: "./i2.png", // Replace with your project image URL
    liveLink: "https://vanarahul.github.io/html-login2/", // Replace with your live project URL
    
  },
  {
    title: "Login page",
    description: "A responsive, simple Login page",
    image: "./i3.png", // Replace with your project image URL
    liveLink: "https://vanarahul.github.io/html-login/", // Replace with your live project URL
  },
];

const container = document.getElementById("projects-container");

projects.forEach((project) => {
  const card = document.createElement("div");
  card.classList.add("project-card");

  card.innerHTML = `
    <img src="${project.image}" alt="${project.title}" class="project-image">
    <div class="project-content">
      <h3 class="project-title">${project.title}</h3>
      <p class="project-description">${project.description}</p>
      <div class="project-links">
        <a href="${project.liveLink}" target="_blank">Live Demo</a>
      </div>
    </div>
  `;

  container.appendChild(card);
});