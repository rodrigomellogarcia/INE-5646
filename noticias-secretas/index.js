const USERS = [
    {login:"garcia",password:"1234",name:"Rodrigo Garcia"},
]

const POSTS = [
    {title: "Post 1", content: "Lorem Ipsum"},
    {title: "Post 2", content: "Dolor Sit"},
    {title: "Post 3", content: "Amet"}
]

const loginInput = document.getElementById("login");
loginInput.addEventListener("click",eraseText);

function eraseText(event) {
    const target = event.target;
    target.value = "";
}

function validaLogin() {
    const loginInput = document.getElementById("login");
    const passwordInput = document.getElementById("pass");

    let success = false;

    for (user of USERS) {
        if (loginInput.value === user.login && passwordInput.value === user.password) {
            success = true;
        }
    }

    if (success) {
        alert("Bem-vindo!");
        showPosts();
    } else {
        alert("Usuário ou senha inválidos!");
    }
}

function showPosts() {
    const contentDiv = document.querySelector("#content-area");
    contentDiv.innerHTML = "";

    for (post of POSTS) {
        const postDiv = document.createElement("DIV");
        const postH1 = document.createElement("H1");
        const postP = document.createElement("P");

        postP.innerHTML = post.content;
        postH1.innerHTML = post.title;

        postDiv.appendChild(postH1);
        postDiv.appendChild(postP);
        postDiv.setAttribute('class', "post");

        contentDiv.appendChild(postDiv);
    }
}