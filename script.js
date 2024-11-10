document.addEventListener("DOMContentLoaded" , () =>{
    fetchPosts();
})

let posts = [];
let currentPage = 1;
const postsPerPage = 10;

async function fetchPosts() {
    try {
        const resopnse = await fetch (`https://jsonplaceholder.typicode.com/posts`);
        posts = await resopnse.json();
        displayPosts();
    }
    catch (eror){
        console.log('Eroor fetching posts:', error);
        
    }
    
}

function displayPosts(){
    const postsContainer = document.getElementById('postsContainer');
    postsContainer.innerHTML = '';

    const startIndex = (currentPage -1) * postsPerPage;
    const endIndex = startIndex + postsPerPage;
    const currentPosts = posts.slice(startIndex,endIndex)
}