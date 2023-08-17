document.addEventListener("DOMContentLoaded", function () {
  const postList = document.getElementById("post-list");

  fetch("https://jsonplaceholder.typicode.com/posts")
      .then(response => response.json())
      .then(data => {
          data.forEach(post => {
              const postDiv = document.createElement("div");
              postDiv.classList.add("post");
              postDiv.innerHTML = `
                  <h3>${post.title}</h3>
                  <p>${post.body}</p>
              `;
              postList.appendChild(postDiv);
          });
      })
      .catch(error => {
          console.error("Error fetching data:", error);
      });
});
