class UI {
  constructor() {
    this.profile = document.getElementById("profile");
  }

  showProfile(user) {
    this.profile.innerHTML = `
    <div class="card card-body mb-3">
    <div class="row">
    <div class="col-md-3">
    <img class="img-fluid mb-2" src="${user.avatar_url}">
    <a href ="${user.html_url}" target="_blank" class="btn btn-primary btn-block mb-4">View profile</a>
    </div>
    <div class="col-md-9">
    <span class="badge badge-primary">Public Repos: ${user.public_repos}</span>
    <span class="badge badge-secondary">Public Gists: ${user.public_gists}</span>
    <span class="badge badge-success">Followers: ${user.followers}</span>
    <span class="badge badge-info">Following: ${user.following}</span>
    <br>
    <ul class="list-group mt-2">
    <li class="list-group-item">Company: ${user.company}</li>
    <li class="list-group-item">Website/Blog: ${user.blog}</li>
    <li class="list-group-item">Location: ${user.location}</li>
    <li class="list-group-item">Member Since: ${user.created_at}</li>
    </ul>
    </div>
    </div>
    </div>
    <h3 class="page-heading m-3">Latest Repos</h3>
    <div id="repos"></div>
    `;
  }

  showRepos() {
    let repos = [];
    repos.forEach(function (repo) {
      output += `
      <div class='card card-body mb-2'>
      <div class="row">
      <div class="col-md-6">
      <a href="${repo.html_url}" target="_blank">${repo.full_name}</a>
      </div>
      <div class="col-md-6">
      <span class="badge badge-secondary">Stars: ${repo.stargazers_count}</span>
      <span class="badge badge-success">Watchers: ${repo.watchers_count}</span>
      <span class="badge badge-info">Forks: ${repo.forks_count}</span>
      </div>
      </div>
      </div>
      `;
    });
    //output
    document.querySelector("#repos").innerHTML = output;
  }

  clearProfile() {
    this.profile.innerHTML = "";
  }

  showAlert(errorMsg, className) {
    this.clearAlert();
    const div = document.createElement("div");
    div.className = className;
    div.appendChild(document.createTextNode(errorMsg));
    const container = document.querySelector(".searchContainer");
    const search = document.querySelector(".search");
    container.insertBefore(div, search);
    setTimeout(() => {
      this.clearAlert();
    }, 3000);
  }

  clearAlert() {
    const currentAlert = document.querySelector(".alert");
    if (currentAlert) {
      currentAlert.remove();
    }
  }
}
