document.addEventListener("DOMContentLoaded", function () {
  function animateSkills() {
      let skillsSection = document.getElementById("skills");
      let skillsBars = document.querySelectorAll(".progress");
      let sectionPosition = skillsSection.getBoundingClientRect().top;
      let screenPosition = window.innerHeight / 1.3;

      if (sectionPosition < screenPosition) {
          skillsBars.forEach((bar) => {
              let targetWidth = bar.getAttribute("data-width");
              bar.style.width = targetWidth;
          });
      }
  }

  window.addEventListener("scroll", animateSkills);
});

function updateStats() {
  document.getElementById("cgpa").innerText = "8.5";
  document.getElementById("project-count").innerText = "4";
  document.getElementById("skills-list").innerText = "HTML, CSS, JavaScript, Python, Django";
}

function addProject() {
  let projectInput = document.getElementById("new-project");
  let projectName = projectInput.value.trim();
  if (projectName) {
      let li = document.createElement("li");
      li.textContent = projectName;
      document.getElementById("project-list").appendChild(li);
      projectInput.value = "";
  }
}

function validateForm() {
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let message = document.getElementById("message").value;
  if (name === "" || email === "" || message === "") {
      alert("All fields are required!");
      return false;
  }
  alert("Message Sent Successfully!");
  return true;
}

