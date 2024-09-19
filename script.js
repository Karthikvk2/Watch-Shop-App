// send watch data to db

document
  .getElementById("watch-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    const formdata = new FormData(this);
    fetch("https://karthikvk02.pythonanywhere.com/api/watches/create/", {
      method: "POST",
      body: formdata,
    })
      .then((response) => response.json())
      .then((data) => {
        alert("Watch added successfully!");
        displayWatches();
      })
      .catch((error) => console.error("Error", error));
  });

//To get all the list of Watches
const baseUrl = "https://karthikvk02.pythonanywhere.com";

function displayWatches() {
  fetch("https://karthikvk02.pythonanywhere.com/api/watches/")
    .then((response) => response.json())
    .then((data) => {
      const container = document.getElementById("watches-container");
      container.innerHTML = "";
      data.forEach((watch) => {
        const imageUrl = baseUrl + watch.image;
        const watchCard = `
            <div class="card_container" id="watch-list">
                <div class="card" style="width: 18rem">
                    <img src="${imageUrl}" class="card-img-top" alt="image" />
                    <div class="card-body">
                        <p class="card-text">
                            <h5 class="watch-name" style="text-align:center;">Watch Name: ${watch.name}</h5>
                            <p class="watch-model" style="text-align:center;">Watch Brand: ${watch.brand}</p>
                            <h6><p class="watch-price" style="text-align:center;">₹ ${watch.price}</p></h6>
                        </p>
                    </div>
                </div>
            </div>
            `;
        container.innerHTML += watchCard;
      });
    });
}

document.addEventListener("DOMContentLoaded", displayWatches);

document.addEventListener("DOMContentLoaded", function () {
    const currentPage = window.location.pathname.split("/").pop();
    if (currentPage === "watches.html" || currentPage === "index.html") {
      displayWatches();
    }
  });

