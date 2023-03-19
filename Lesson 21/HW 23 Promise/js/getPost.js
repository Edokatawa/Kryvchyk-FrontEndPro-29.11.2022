"use strict";

const getPost = () => {
    const inputValue = document.querySelector(".input-id-user").value;
    const postContainerElem = document.querySelector(".post");

    if (validateInput(inputValue)) {
        fetch(`${API_URL}/posts/${inputValue}`)
            .then(response => (response.ok ? response.json() : Promise.reject(response)))
            .then(json => {
                const {id, title, body} = json;
                createElement("h2", null, null, title, postContainerElem);
                createElement("span", null, null, body, postContainerElem);
                createElement(
                    "button",
                    {"data-post-id": id},
                    {click: getComments},
                    "Переглянути коментарі до посту",
                    postContainerElem
                );
            })
            .catch(err => showErrorFetch(err, postContainerElem));
    }
};
