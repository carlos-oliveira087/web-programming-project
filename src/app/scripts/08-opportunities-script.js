
const jsonData = {
    "programs": [
      {
        "title": "AI Research Exchange in Canada",
        "description": "Conduct AI research and collaborate with Canadian tech leaders. A unique opportunity for students passionate about AI.",
        "type": "Exchange",
        "email": "contact@airesearchcanada.com"
      },
      {
        "title": "Sustainable Energy Course in Denmark",
        "description": "Study sustainable energy solutions in Denmark. Join a network of innovators focused on renewable technology.",
        "type": "Course",
        "email": "info@sustainableenergy.dk"
      },
      {
        "title": "Bioinformatics Exchange in Japan",
        "description": "Learn bioinformatics in Japan, working alongside industry experts. Ideal for students in biology and data science.",
        "type": "Exchange",
        "email": "bioinfo@exchangejapan.jp"
      },
      {
        "title": "Space Technology Workshop in the USA",
        "description": "Engage in hands-on space technology projects with top aerospace experts in the USA. A must for future aerospace innovators.",
        "type": "Workshop",
        "email": "spacetech@workshopusa.com"
      }
    ]
  };

const cardsContainer = document.getElementById('cards-container');

function createCard(title, description, email) {
const card = document.createElement('div');
card.className = 'card';

card.innerHTML = `
    <h3>${title}</h3>
    <p>${description}</p>
    <br>
    <p>Contact Us: ${email}</p>
`;

return card;
}

jsonData.programs.forEach(item => {
const cardElement = createCard(item.title, item.description, item.email);
cardsContainer.appendChild(cardElement);
});



const jsonData2 = {
    "internships": [
      {
        "title": "Software Engineering Intern",
        "description": "Join our team to build and optimize software applications. Ideal for those passionate about coding and problem-solving. Apply today!",
        "type": "Internship",
        "email": "contact@softwareengineeringintern.com"
      },
      {
        "title": "Data Science Internship",
        "description": "Analyze real-world data and develop insights with our data science team. A perfect fit for students interested in big data and analytics.",
        "type": "Internship",
        "email": "contact@datascienceintern.com"
      },
      {
        "title": "Cybersecurity Specialist",
        "description": "Help protect digital assets and implement advanced security measures. Ideal for professionals with a strong interest in cybersecurity.",
        "type": "Full-time Job",
        "email": "careers@cybersecurityspecialist.com"
      },
      {
        "title": "AI & Machine Learning Developer",
        "description": "Develop machine learning models and AI applications for real-world challenges. Perfect for those skilled in AI technologies.",
        "type": "Full-time Job",
        "email": "careers@aimachinelearningdeveloper.com"
      }
    ]
  };
  

const cardsContainer2 = document.getElementById('cards-container-2');

function createCard2(title, description, email) {
const card2 = document.createElement('div');
card2.className = 'card2';

card2.innerHTML = `
    <h3>${title}</h3>
    <p>${description}</p>
    <br>
    <p>Contact Us: ${email}</p>
`;

return card2;
}

jsonData2.internships.forEach(item => {
const cardElement = createCard(item.title, item.description, item.email);
cardsContainer2.appendChild(cardElement);
});



