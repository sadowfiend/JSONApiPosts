

function createPost(title, content) {
    const post = document.createElement('article');
    post.classList.add('todo');

    const postTitle = document.createElement('h1');
    postTitle.classList.add('todo__title');
    postTitle.textContent = title;
    post.appendChild(postTitle);

    if (content) {
        const postContent = document.createElement('p');
        postContent.textContent = content;
        post.appendChild(postContent);
    }


    return post;
}

function createModal(node) {
    const modal = document.createElement('div');
    modal.classList.add('modal');
    const modalContent = document.createElement('div');
    modalContent.classList.add('modal__content');
    if (node) {
        modalContent.appendChild(node)
    }
    modal.addEventListener('click',function () {
        modal.remove()
    })
    modal.appendChild(modalContent);

    return modal
}
