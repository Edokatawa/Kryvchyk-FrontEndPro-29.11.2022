"use strict";

const getComments = ({target}) => {
    clearElements(["comments"]);
    const {postId} = target.dataset;
    const commentsContainerElem = document.querySelector(".comments");
    createElement("h3", null, null, "Коментарі", commentsContainerElem);

    fetch(`${API_URL}/posts/${postId}/comments`)
        .then(response => (response.ok ? response.json() : Promise.reject(response)))
        .then(json => {
            for (const value of json) {
                const {name, email, body} = value;
                const commentBlockElem = createElement("div", {className: "comment-block"}, null, null, commentsContainerElem);
                const titleCommentElem = createElement("div", {className: "title-comment"}, null, null, commentBlockElem);
                createElement("h5", null, null, `Ім'я: ${name}`, titleCommentElem);
                createElement("h5", null, null, `Пошта: ${email}`, titleCommentElem);
                createElement("span", null, null, body, commentBlockElem);
            }
        })
        .catch(err => showErrorFetch(err, commentsContainerElem));
};
