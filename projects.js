const projects = [
{
    title: "Spotify Clone",
    description: "Spotify Clone created using Vanilla JS, Tailwind CSS, Vite",
    coverUrl: "https://screenshot-proxy.netlify.app/f_jpg,w_400/https://d33wubrfki0l68.cloudfront.net/6364b8ef2b514000096450a7/screenshot_2022-11-04-07-02-55-0000.png",
    demoLink: "https://spotify-best-clone.netlify.app/login/login.html",
    sourceLink: "https://github.com/RaviYadav369/spotify-clone.git"
},
{
    title: "Weather App",
    description: "Uses geolocaiton and open weather api. Created using JS, HTML, CSS",
    coverUrl: "https://screenshot-proxy.netlify.app/f_jpg,w_400/https://d33wubrfki0l68.cloudfront.net/6364b8ef2b514000096450a7/screenshot_2022-11-04-07-02-55-0000.png",
    demoLink: "https://github.com/RaviYadav369/weather-forecast.github.io.git",
    sourceLink: "https://github.com/RaviYadav369/weather-forecast.github.io.git"
},
{
  title:"Todo List Maker",
  description:"Use localStorage for maintaining the list",
  coverUrl:"https://screenshot-proxy.netlify.app/f_jpg,w_400/https://d33wubrfki0l68.cloudfront.net/6364b8ef2b514000096450a7/screenshot_2022-11-04-07-02-55-0000.png",
  demoLink:"https://raviyadav369.github.io/todo-list-maker.github.io/",
  sourceLink:"https://github.com/RaviYadav369/todo-list-maker.git"
},
{
  title:"Book My Show Clone",
  description:"Use BookMyShow Api for getting the information about the website",
  coverUrl:"https://screenshot-proxy.netlify.app/f_jpg,w_400/https://d33wubrfki0l68.cloudfront.net/6364b8ef2b514000096450a7/screenshot_2022-11-04-07-02-55-0000.png",
  demoLink:"https://book-my-show-practice-clone-js48qd221-raviyadav369.vercel.app/",
  sourceLink:"https://github.com/RaviYadav369/book-my-show.git"
},
];


function loadProjects() {
    const projectsList = document.querySelector("#projects .projects-list");

    let innerHTML = "";
    for (const { title, description, coverUrl, demoLink, sourceLink } of projects) {
        innerHTML += `
        <section class="project shadow move-y">
            <section class="image-container">
              <img loading="lazy" src="${coverUrl}" alt="">
            </section>
            <h3>${title}</h3>
            <p>${description}</p>
            <ul class="links">
              <li><a href="${demoLink}" target="_blank">Demo</a></li>
              <li><a href="${sourceLink}" target="_blank"><img width="30" height="30" src="github.svg" alt="octocat iamge"> Source Code</a></li>
            </ul>
          </section >

        `
    }
    projectsList.innerHTML = innerHTML;


    // </section >
}

document.addEventListener("DOMContentLoaded", () => {
    loadProjects();
})