const github = new Github();
const ui = new UI();

const searchString = document.getElementById("searchUser");

searchString.addEventListener("keyup", (e) => {
  const userText = e.target.value;
  if (userText !== "") {
    github.getUser(userText).then((data) => {
      //   console.log(data);
      if (data.profile.message === "Not Found") {
        //alert
        ui.showAlert("User Not Found", "alert alert-danger");
      } else {
        //profile
        ui.showProfile(data.profile);
      }
    });
  } else {
    //clear profile
    ui.clearProfile();
  }
});
