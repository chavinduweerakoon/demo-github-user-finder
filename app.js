const github = new Github();

const searchString = document.getElementById("searchUser");

searchString.addEventListener("keyup", (e) => {
  const userText = e.target.value;
  if (userText !== "") {
    github.getUser(userText).then((data) => {
      console.log(data);
      if (data.profile.message === "Not Found") {
        //alert
      } else {
        //profile
      }
    });
  } else {
    //clear profile
  }
});
