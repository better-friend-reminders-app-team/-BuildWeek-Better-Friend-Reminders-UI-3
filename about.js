const aboutCon = document.querySelector('.about-container');
const teamUrl = './assets/team.json';
let members = '';

async function fetchTeam() {
  return fetch(teamUrl)
    .then(res => res.json())
    .then(data => (team = data))
    .catch(err => console.log(err));
}

async function renderTeam() {
  const team = await fetchTeam();
  team.forEach(member => {
    const member$ = `<article>
            <div class="image-con">
                <img src="${member.pic_url}" alt="Profile picture">
            </div>
            <div class="body-con">
                <p class="name">${member.name}</p>
                <p class="role">${member.position}</p>
                <a href="${member.github}" target="_blank">Github</a>
            </div>
        </article>`;
    members += member$;
  });
  aboutCon.innerHTML = members;
}

renderTeam();
