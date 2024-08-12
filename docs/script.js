// navigation

//adding mode button
const nav_bar = document.querySelector(".link").parentNode;

const mode_button = document.createElement("div");
const icon = document.createElement("i");
nav_bar.append(mode_button);

mode_button.append(icon);

mode_button.style.backgroundColor = "#84B3ED";
mode_button.style.borderRadius = "15px";
mode_button.style.paddingRight = "45px";
mode_button.style.paddingLeft = "5px";
mode_button.style.width = "50px";
mode_button.style.height = "35px";
mode_button.classList.add("mode");
mode_button.style.display = "flex";
mode_button.style.alignItems = "center";

//make sure for consistent theme accross pages
document.addEventListener("DOMContentLoaded", () => {
  icon.classList.add("fa-solid", localStorage.getItem("themeclass"));
  theme_change();
  if (icon.classList.contains("fa-sun")) {
    mode_button.style.paddingRight = "5px";
    mode_button.style.paddingLeft = "5px";
  } else {
    mode_button.style.paddingRight = "5px";
    mode_button.style.paddingLeft = "30px";
  }
});

// chainging the icons when click
mode_button.addEventListener("click", () => {
  //transtion only when toggle button is clicked
  mode_button.style.transition = "all 0.5s ease";
  if (icon.classList.contains("fa-sun")) {
    icon.classList.remove("fa-sun");
    icon.classList.toggle("fa-moon");
    mode_button.style.paddingRight = "5px";
    mode_button.style.paddingLeft = "30px";
    localStorage.setItem("themeclass", "fa-moon");
  } else {
    icon.classList.remove("fa-moon");
    icon.classList.add("fa-sun");
    mode_button.style.paddingRight = "15px";
    mode_button.style.paddingLeft = "5px";
    localStorage.setItem("themeclass", "fa-sun");
  }
});

//button listner to change theme
mode_button.addEventListener("click", () => {
  theme_change();
});

/// theme change function

const theme_change = () => {
  // default theme/////
  if (localStorage.getItem("themeclass") == "fa-sun") {
    //body background
    document.body.style.backgroundColor = "#fdfcdc";
    document.body.style.color = "";

    //logo name
    if (document.getElementById("dark-logo-name")) {
      document
        .getElementById("dark-logo-name")
        .classList.remove("logoname-dark");
      document.getElementById("dark-logo-name").classList.add("logoname-light");
      document.getElementById("dark-logo-name").id = "logo-name";
    }
    // logo surname
    if (document.querySelector("span")) {
      Array.from(document.getElementsByClassName("logo-surname")).forEach(
        (item) => {
          item.classList.remove("dark-logo-name");
        }
      );
    }

    //links
    if (document.getElementsByClassName("link")) {
      Array.from(document.getElementsByClassName("link")).forEach((items) => {
        items.classList.remove("link_dark");
        items.classList.remove("dark_theme");
      });
    }
    //skills
    if (document.getElementsByClassName("skills").length > 0) {
      //chainging h4 that is the first child
      document
        .getElementsByClassName("skills")[0]
        .classList.remove("skills_dark");
    }

    //resume
    if (document.getElementsByClassName("resume-button").length > 0) {
      document
        .getElementsByClassName("resume-button")[0]
        .classList.remove("resume-button-dark");
    }
    //input lables
    if (document.getElementsByClassName("part-group").length > 0) {
      Array.from(document.getElementsByClassName("part-group")).forEach((l) => {
        l.classList.remove("part-group-dark");
      });
    }

    //let's connect button
    if (document.getElementById("submit-button-dark")) {
      document.getElementById("submit-button-dark").id = "submit-button";
    }
    if (document.getElementsByClassName("text-field"))
      Array.from(document.getElementsByClassName("text-field")).forEach(
        (items) => {
          items.style.backgroundColor = "#fdfcdc";
        }
      );
    // Projects cards
    if (document.getElementsByClassName("card-body").length > 0) {
      Array.from(document.getElementsByClassName("card-body")).forEach(
        (items) => {
          items.style.backgroundColor = "#fdfcdc";
          items.style.color = "#22223b";
        }
      );
    }
    //cards shadow effect
    if (document.querySelectorAll(".card")) {
      document.querySelectorAll(".card").forEach((items) => {
        items.style.boxShadow = `-10px 4px 20px rgba(67, 127, 199, 0.7)`;
      });
    }
    //footer
    if (document.querySelector("footer")) {
      document.querySelector("footer").classList.remove("footer-dark");
    }
  } else if (localStorage.getItem("themeclass") == "fa-moon") {
    // Dark theme///////
    document.body.style.backgroundColor = "#2E2D1F";
    document.body.style.color = "#b9b9d9";

    //logo name
    if (document.getElementById("logo-name")) {
      document.getElementById("logo-name").classList.add("logoname-dark");
      document.getElementById("logo-name").id = "dark-logo-name";
    }

    // logo surname
    if (document.getElementsByClassName("logo-surname")) {
      Array.from(document.getElementsByClassName("logo-surname")).forEach(
        (item) => {
          item.classList.add("dark-logo-name");
        }
      );
    }
    // links
    if (document.getElementsByClassName("link")) {
      Array.from(document.getElementsByClassName("link")).forEach((items) => {
        items.classList.add("link_dark");
        items.classList.add("dark_theme");
      });
    }
    // skills
    if (document.getElementsByClassName("skills").length > 0) {
      //chainging h4 that is the first child
      document.getElementsByClassName("skills")[0].classList.add("skills_dark");
    }
    //resume
    if (document.getElementsByClassName("resume-button").length > 0) {
      document
        .getElementsByClassName("resume-button")[0]
        .classList.add("resume-button-dark");
    }
    //input lables
    if (document.getElementsByClassName("part-group").length > 0) {
      Array.from(document.getElementsByClassName("part-group")).forEach((l) => {
        l.classList.add("part-group-dark");
      });
    }
    //let's connect button
    if (document.getElementById("submit-button")) {
      document.getElementById("submit-button").id = "submit-button-dark";
    }

    //transforming html collections to array to use foreach method
    if (document.getElementsByClassName("text-field").length > 0)
      Array.from(document.getElementsByClassName("text-field")).forEach(
        (items) => {
          items.style.backgroundColor = "#2e2d1f";
        }
      );

    // Projects cards

    if (document.getElementsByClassName("card-body").length > 0) {
      Array.from(document.getElementsByClassName("card-body")).forEach(
        (items) => {
          items.style.backgroundColor = "#2e2d1f";
          items.style.color = "#b9b9d6";
        }
      );
    }
    //cards shadow effect
    if (document.querySelectorAll(".card")) {
      document.querySelectorAll(".card").forEach((items) => {
        items.style.boxShadow = `-10px 4px 20px rgba(185, 185, 214, 0.7)`;
      });
    }

    //footer
    if (document.querySelector("footer")) {
      document.querySelector("footer").classList.add("footer-dark");
    }
  }
};

//Blog page
// checking if blog-list class exist
if (document.getElementById("blog-list"))
  document.addEventListener("DOMContentLoaded", () => {
    const blogList = document.getElementById("blog-list");
    blogList.style.display = "flex";
    blogList.style.flexDirection = "column";
    blogList.style.rowGap = "60px";
    fetch("post.json")
      .then((response) => response.json())
      .then((posts) => {
        posts.forEach((post) => {
          const postElements = document.querySelector(".blog");
          console.log(post.blogPost);
          //adding the json data
          document.querySelector(".blog-title").innerHTML = post.blogPost;
          document.querySelector(".blog-text").innerHTML = post.explanation;
          //coloning
          const cloneElement = postElements.cloneNode(true);
          //adding new blog to the main container
          blogList.appendChild(cloneElement);
        });
        //remove the extra blog card
        document.querySelector(".blog").remove();
      })
      .catch((error) => {
        console.log("Error loading blog posts", error);
      });
  });
