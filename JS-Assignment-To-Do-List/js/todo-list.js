window.onload = () => {
    var formSelector = document.querySelector("#addForm");
    var items = document.getElementById("items");
    formSelector.addEventListener("submit", addItem);
    items.addEventListener("click", removeItem);
};

function addItem(e) {
    e.preventDefault();

    if (submit.value != "Submit") {

        editItem.target.parentNode.childNodes[0].data
            = document.getElementById("item").value;

        submit.value = "Submit";
        document.getElementById("item").value = "";

        return false;
    }

    var newItem = document.getElementById("item").value;
    if (newItem.trim() == "" || newItem.trim() == null) {
        alert("Please Enter some text in the TO-DO list.");
        return false;
    }
    else
        document.getElementById("item").value = "";

    var li = document.createElement("li");
    li.className = "list-group-item";

    var deleteButton = document.createElement("button");

    deleteButton.className = "btn-delete";

    deleteButton.appendChild(document.createTextNode("Delete"));

    var editButton = document.createElement("button");

    editButton.className = "btn-edit";

    editButton.appendChild(document.createTextNode("Edit"));

    li.appendChild(document.createTextNode(newItem));
    li.appendChild(deleteButton);
    li.appendChild(editButton);

    items.appendChild(li);
}

function removeItem(e) {
    e.preventDefault();
    if (e.target.classList.contains("btn-delete")) {
        if (confirm("Do you want to Delete this item ?")) {
            var li = e.target.parentNode;
            items.removeChild(li);
        }
    }
    if (e.target.classList.contains("btn-edit")) {
        document.getElementById("item").value =
            e.target.parentNode.childNodes[0].data;
        submit.value = "EDIT";
        editItem = e;
    }
}

function toggleButton(ref, btnID) {
    document.getElementById(btnID).disabled = false;
}