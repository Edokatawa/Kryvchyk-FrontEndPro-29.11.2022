"use strict";

const showForm = (formElem, user = "") => {
    for (let value of FORM_CONFIG) {
        const textFieldBlockElem = createElement("div", {className: "text-field-block"}, null, null, formElem);
        if (value.title) {
            createElement("label", {for: value.attributes.name}, null, value.title, textFieldBlockElem);
        }
        createElement(
            value.tagName,
            {...value.attributes, value: user[value.attributes.name] || ""},
            value.handlers,
            value.content,
            textFieldBlockElem
        );
    }
};
