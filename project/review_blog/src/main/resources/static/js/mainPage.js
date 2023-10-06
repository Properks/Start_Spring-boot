const userInfo =  document.querySelector('.user-info-btn');
const userNickname = userInfo.textContent.replace("Username: ", "");

const deleteButton = document.getElementById('article-view-delete-article-btn');

if (deleteButton) {
    deleteButton.addEventListener('click', event => {
        if (isSameAuthor(userNickname)) {
            if (confirm('Delete this article?')) {
                let articleId = document.getElementById('article-view-id').value;
                fetch('/api/article/' + articleId, {method: 'DELETE'})
                    .then(() => {
                        alert('Delete article successfully');
                        location.replace('/home');
                    })
            }
        } else {alert("Cannot delete someone else's");}
    })
}

const modifyButtonInArticleView = document.getElementById('article-view-modify-article-btn');
modifyButtonInArticleView.addEventListener('click', event => {
    if(isSameAuthor(userNickname)) {
        let articleId = document.getElementById('article-view-id').value;
        location.replace('/new-article?id=' + articleId);
    } else {alert("Cannot modify someone else's")}
})

const modifyButton = document.getElementById('new-article-modify-btn');

if (modifyButton) {
    modifyButton.addEventListener('click', event => {
        let articleId = document.getElementById('new-article-id').value;
        let articleTitle = document.getElementById('new-article-title').value;
        let articleContent = document.getElementById('new-article-content').value;

        fetch('/api/article/' + articleId, {
            method : 'PUT',
            headers : {
                'Content-type' : 'application/json'
            },
            body : JSON.stringify({
                title: articleTitle,
                content: articleContent
            })
        })
            .then(() => {
                alert('Modify article successfully');
                location.replace('/article/' + articleId);
            })
    })
}

const createButton = document.getElementById('new-article-create-btn');

// TODO:Have to implement author on body after implementing user
if (createButton) {
    createButton.addEventListener('click', event => {
        let title = document.getElementById('new-article-title').value;
        let content = document.getElementById('new-article-content').value;

        fetch('/api/article', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify({
                title: title,
                content: content
            })
        })
            .then(() => {
                alert('Create article successfully');
                location.replace('/home');
            })
    })
}


const userOriginalNickname = userInfo.textContent;
userInfo.addEventListener('mouseover', event => {
    userInfo.textContent = 'Username: ' + userInfo.getAttribute('hover-text');
})
userInfo.addEventListener('mouseout', event => {
    userInfo.textContent = userOriginalNickname;
})

function isSameAuthor(nickname) {
    let author = document.getElementById('article-view-author').textContent.replace("Writer: ", "");
    return author === nickname;
}