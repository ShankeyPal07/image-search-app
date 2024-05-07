const srchBtnEl = document.getElementById("srchBtn");
const inputEL = document.getElementById("input");
const imageConatiner = document.getElementById("image-conatiner");

const fetchApi = async () => {
  try {
    const res = await fetch(
      `https://api.unsplash.com/search/photos?query=${inputEL.value}&per_page=28&client_id=8kq8jyhRwrvRrdu3ojnX5OeVUeWnenRZBdzB5pgRHYE`
    );

    const data = await res.json();
    console.log(data);

    if (!inputEL.value) {
      imageConatiner.innerHTML = `<h1>Enter Text to find Images</h1>`;
    } else {
      imageConatiner.innerHTML = "";
      data.results.forEach((element) => {
        const divEl = document.createElement("div");
        divEl.classList.add("images");
        divEl.innerHTML = `
      
        <img src="${element.urls.regular}" alt="" />
    
        `;
        imageConatiner.appendChild(divEl);
      });
    }
  } catch (error) {
    // Handle any errors that occur during the fetch
    console.error("Error fetching data:", error);
    throw error; // Re-throw the error for the caller to handle
  }
};

srchBtnEl.addEventListener("click", fetchApi);
