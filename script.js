var tabs = document.querySelectorAll(".tab-icon");
contents = document.querySelectorAll(".tab-content");

function addShowOnClick() {
    var id = this.dataset.id;
    for (let i = 0; i < contents.length; i++) {
        if (contents[i].dataset.id && contents[i].dataset.id === id) {
            contents[i].classList.add("show");
        } else {
            contents[i].classList.remove("show");
        }
    }
}

$()