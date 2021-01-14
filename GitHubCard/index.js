import axios from 'axios'
/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/

function githubCard(name) {
  axios.get('https://api.github.com/users/' + name)
    .then(res => {
      const gitData = res.data;
      const card = cardMaker(gitData)
      document.querySelector('.cards').appendChild(card)
    })
    .catch(drama => {
      console.log(drama.res)
    })
}
githubCard('apfeif12');


/*
  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function

    Skip to STEP 3.
*/

/*
  STEP 4: Pass the data received from Github into your function,
    and append the returned markup to the DOM as a child of .cards
*/

/*
  STEP 5: Now that you have your own card getting added to the DOM, either
    follow this link in your browser https://api.github.com/users/<Your github name>/followers,
    manually find some other users' github handles, or use the list found at the
    bottom of the page. Get at least 5 different Github usernames and add them as
    Individual strings to the friendsArray below.

    Using that array, iterate over it, requesting data for each user, creating a new card for each
    user, and adding that card to the DOM.
*/

const followersArray = ["tetondan",
  "dustinmyers",
  "justsml",
  "luishrd",
  "bigknell",
];


followersArray.forEach(item => {
  axios.get('https://api.github.com/users/' + item)
    .then(res => {
      const gitData = res.data;
      const card = cardMaker(gitData)
      document.querySelector('.cards').appendChild(card)
    })
    .catch(drama => {
      console.log(drama.res)
    })
})





function cardMaker(data) {
  const cardDiv = document.createElement('div');
  const img = document.createElement('img')
  const infoDiv = document.createElement('div');
  const h3 = document.createElement('h3');
  const usernameP = document.createElement('p');
  const locationP = document.createElement('p');
  const profileP = document.createElement('p');
  const followersP = document.createElement('p');
  const followingP = document.createElement('p');
  const bioP = document.createElement('p');
  const a = document.createElement('a');

  cardDiv.appendChild(img);
  cardDiv.appendChild(infoDiv);
  infoDiv.appendChild(h3);
  infoDiv.appendChild(usernameP);
  infoDiv.appendChild(locationP);
  infoDiv.appendChild(profileP);
  infoDiv.appendChild(followersP);
  infoDiv.appendChild(followingP);
  infoDiv.appendChild(bioP);
  profileP.appendChild(a);

  cardDiv.classList.add("card");
  infoDiv.classList.add("card-info");
  h3.classList.add("name");
  usernameP.classList.add("username");

  img.src = data.avatar_url;
  h3.textContent = data.name;
  usernameP.textContent = data.login;
  locationP.textContent = "Location: " + data.location;
  profileP.textContent = "Profile: ";
  a.textContent = data.html_url;
  a.href = data.html_url;
  followersP.textContent = "Followers: " + data.followers;
  followingP.textContent = "Following: " + data.following;
  bioP.textContent = data.bio;

  return cardDiv
}

/*
  STEP 3: Create a function that accepts a single object as its only argument.
    Using DOM methods and properties, create and return the following markup:

    <div class="card">
      <img src={image url of user} />
      <div class="card-info">
        <h3 class="name">{users name}</h3>
        <p class="username">{users user name}</p>
        <p>Location: {users location}</p>
        <p>Profile:
          <a href={address to users github page}>{address to users github page}</a>
        </p>
        <p>Followers: {users followers count}</p>
        <p>Following: {users following count}</p>
        <p>Bio: {users bio}</p>
      </div>
    </div>
*/

/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/