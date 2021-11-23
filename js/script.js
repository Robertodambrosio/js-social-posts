

// *************array object post
const posts = [
    {
        "id": 1,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/300?image=171",
        "author": {
            "name": "Phil Mangione",
            "image": "https://unsplash.it/300/300?image=15"
        },
        "likes": 80,
        "created": "2021-06-25"
    },
    {
        "id": 2,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=112",
        "author": {
            "name": "Sofia Perlari",
            "image": "https://unsplash.it/300/300?image=10"
        },
        "likes": 120,
        "created": "2021-09-03"
    },
    {
        "id": 3,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=234",
        "author": {
            "name": "Chiara Passaro",
            "image": "https://unsplash.it/300/300?image=20"
        },
        "likes": 78,
        "created": "2021-05-15"
    },
    {
        "id": 4,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=24",
        "author": {
            "name": "Luca Formicola",
            "image": null
        },
        "likes": 56,
        "created": "2021-04-03"
    },
    {
        "id": 5,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=534",
        "author": {
            "name": "Alessandro Sainato",
            "image": "https://unsplash.it/300/300?image=29"
        },
        "likes": 95,
        "created": "2021-03-05"
    }
];

console.log(posts);

constructPost();

//========================== funzione che riempie la card con i dati dell'array object
function constructPost () {
    for(let i = 0; i < posts.length; i++) {
        addPost(posts[i])
        buttonClick();
    }
}

//========================== creazione della card dinamica 
function addPost (iPost) {
    const container = document.getElementById('container');
    container.innerHTML +=            
       ` <div class="post">
            <div class="post__header">
                <div class="post-meta">                    
                    <div class="post-meta__icon">
                        <img class="profile-pic" src=${iPost.media} alt=${iPost.author["name"]}>                    
                    </div>
                    <div class="post-meta__data">
                        <div class="post-meta__author">${iPost.author["name"]}</div>
                        <div class="post-meta__time">${invertDate(iPost.created)}</div>
                    </div>                    
                </div>
            </div>
            <div class="post__text">${iPost.content}</div>
            <div class="post__image">
                <img src=${iPost.author["image"]} alt="">
            </div>
            <div class="post__footer">
                <div class="likes js-likes">
                    <div class="likes__cta">
                        <a class="like-button  js-like-button" data-postid="1">
                            <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
                            <span class="like-button__label">Mi Piace</span>
                        </a>
                    </div>
                    <div class="likes__counter">
                        Piace a <b id="like-counter-${iPost.id}" class="js-likes-counter">${iPost.likes}</b> persone
                    </div>
                </div> 
            </div>            
        </div>`

}


function buttonClick() {
    let button = [];
    button = document.getElementsByClassName('like-button');
    for (let i = 0; i < button.length; i++) {
        button[i].addEventListener('click', function () {
            const likeCounter = document.getElementById(`like-counter-${i + 1}`);
            let likeInt = parseInt(likeCounter.innerHTML);

            if (!(this.classList.contains("like-button--liked"))) {
                this.classList.add("like-button--liked");
                likeInt += 1;
            } else {
                this.classList.remove("like-button--liked");
                likeInt -= 1;
            }

            likeCounter.innerHTML = likeInt;
        });
    }
}


function invertDate(myDate) {
    return myDate.split("-").reverse().join('/');
}
