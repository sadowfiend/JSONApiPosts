const root = document.getElementById('root');
const todoList = document.createElement('div');
todoList.classList.add('todo-list');
root.appendChild(todoList);



fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(function (data) {
            for (let i = 0; i < data.length; i++) {
                const post = createPost(data[i].title);
                post.addEventListener('click',function () {
                    fetch(`https://jsonplaceholder.typicode.com/posts/${data[i].id}`)
                        .then(res => res.json())
                        .then(function (postData) {
                            const modalPost = createPost(postData.title,postData.body);
                            const modal = createModal(modalPost);
                            root.appendChild(modal)
                        })
                });
                todoList.appendChild(post)
            }
        }
    );


