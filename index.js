const api = "y-NC-J6pvdB513_htQ2KGtxUs_9wdjs0b-YfaQhzSpM";
const searchForm = document.getElementById("search-form");
const searchBox = document.getElementById("search-box");
const searchResult = document.getElementById("search-result");
const showMore = document.getElementById("show-more");

let keyword = "";
let page = 1;

async function searchImages() {
    document.querySelector(".misc").style.display="none";
    keyword = searchBox.value;
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${api}&per_page=12`;

    const response = await fetch(url);
    const data = await response.json();

    if(page ===1){
        searchResult.innerHTML = "";
    }
    
    const res = data.results;

    res.map((res)=>{
        const image = document.createElement("img");
        image.src = res.urls.small;
        const imageLink = document.createElement("a");
        imageLink.href = res.links.download;
        imageLink.appendChild(image);
        searchResult.appendChild(imageLink);
    })
    showMore.style.display="block";
}

searchForm.addEventListener("submit", (e) => {
    e.preventDefault();
    page = 1;
    searchImages();
});

showMore.addEventListener("click",()=>{
    page++;
    searchImages();
})