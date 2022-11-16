const form = document.getElementById("form");
const search = document.getElementById("search__input");
const result = document.querySelector(".github__profile");
const searchButton = document.getElementById("serch__button");
const errorSearch = document.querySelector('.error-search') 
//
const userName = document.getElementById("userName");
//

result.style.display = "none";
errorSearch.style.display = "none"
//
const createUser = (user) => {
  let vaqt = user.created_at.slice(0, user.created_at.length - 10)
  const time = vaqt.split("-");
  
 switch(time[1]){
      case '01': time[1] = "Jan"
      break;
      case '02': time[1] = "Feb"
      break;
      case '03': time[1] = "March"
      break;
      case '04': time[1] = "Apr"
      break;
      case '05': time[1] = "May"
      break;
      case '06': time[1] = "June"
      break;
      case '07': time[1] = "July"
      break;
      case '08': time[1] = "Augh"
      break;
      case '09': time[1] = "Sept"
      break;
      case '10': time[1] = "Oct"
      break;
      case '11': time[1] = "Nov"
      break;
      case '12': time[1] = "Dec"
      break;
      default:
        time[1] = "0"
      }
      
 
  const cardHtml = `
  <div class="github__profile--account row">

    <div class="profileImg col-lg-3 col-md-3 col-sm-4 col-5 ">
      <div class="profile__img ">
        <img id="profileImgId" src=${user.avatar_url} />
      </div>
    </div>
    
    <div class="profile__about--home row col-lg-9 col-md-9 col-sm-9 col-7  ">
      <div class="profile__about col-lg-6 col-md-12 col-sm-12 col-12 ">
        <b id="userName">${(user.name === "" || user.name === null) ? "No Name" : user.name}</b>
        <a target="_blank" href="${user.html_url}">@${user.login}</a>
      </div>

      <div class="profile__date--time col-lg-6 col-md-12 col-sm-12 col-12 ">
      
              <p>Joined ${time.join(' ')}</p>
      </div>
    </div>
  </div>

  <section class="content__about row  ">
    <!--  n1  -->
    <div class="content__about--space col-3  "></div>
    <!--  n2  -->
    <div class="content__about--page  row col-lg-9 col-md-12 col-12">
      <!--  m1  -->
      <div class="profileAbout col-lg-12 col-md-12 col-sm-12 col-12">
        <p>
        ${(user.bio === "" || user.bio === null) ? "This profile has no bio" : user.bio} 
        </p>
      </div>
      <!--  m2  -->
      <div class="about__followers row ">
        
        <!--  k1  -->
        <div class="follow__followers col-md-4 col-sm-4 col-4">
          <p>Repos</p>
          <b>${user.public_repos}</b>
        </div>

        <!--  k2  -->
        <div class="follow__followers col-md-4 col-sm-4 col-4">
          <p>Followers</p>
          <b>${user.followers}</b>
        </div>

        <!--  k3  -->
        <div class="follow__followers col-md-4 col-sm-4 col-4">
          <p>Following</p>
          <b>${user.following}</b>
        </div>

      </div>
      <!--  m3  -->
      <div class="footer__link row ">

        
           <div class="link__left--1 col-lg-6 col-md-6 col-sm-6   ">
           <i class="fa-solid fa-location-dot"></i>
           <a href="#">${(user.location === "" || user.location === null) ? "No Location" : user.location}</a>
           </div>
          
           <div class="link__left--1 col-lg-6 col-md-6 col-sm-6  ">
           <i class="fa-brands fa-twitter"></i>
           <a target="_blank" href="https://twitter.com/${user.twitter_username === "" || user.twitter_username === null ? "No Twitter" : user.twitter_username}"> ${(user.twitter_username === "" || user.twitter_username === null) ? "No Twitter" : user.twitter_username}</a>
           </div>
           <div class="link__left--1 col-lg-6 col-md-6 col-sm-6   ">
           <i class="fa-solid fa-link"></i>
           <a target="_blank"  href="${(user.blog === "" || user.blog === null) ? "No Websites" : user.blog}">${(user.blog === "" || user.blog === null) ? "No Websites" : user.blog}</a>
           </div>
           <div class="link__left--1 col-lg-6 col-md-6 col-sm-6  ">
           <i class="fa-solid fa-city"></i>
           <a  href="#" >${(user.company === "" || user.company === null) ? "No Company" : user.company}</a>
           </div>
        

      </div>



    </div>
  </section>

  `;
// no if else


result.innerHTML = cardHtml;
};

searchButton.addEventListener("click", (e) => {
  const API_URL = `https://api.github.com/users/${search.value.trim()}`;
  if (search.value != "") {
    result.style.display = "block";
    errorSearch.style.display = "none";
  } 
  
  const getUser = async () => {
    const response = await fetch(API_URL);
    const resData = await response.json();
     console.log(resData);

    if(resData.login === undefined){
      result.style.display = "none";
      errorSearch.style.display = "block";
    }
  
     

    createUser(resData);
  };
  getUser();

  form.reset();
  e.preventDefault();
});
