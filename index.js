function addEventListenerOnce(target, type, listener) {
    target.addEventListener(type, function fn(event) {
        target.removeEventListener(type, fn);
        listener(event);
    });
}

addEventListenerOnce(document.getElementById("myelement"), "click", function (event) {
    alert("You'll only see this once!");
});
