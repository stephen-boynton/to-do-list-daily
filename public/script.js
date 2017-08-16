const listParent = document.querySelector(".new-list");

function deleteItem(item) {
	return fetch(`/${item}`, { method: "DELETE" }).then(function(response) {
		return response.json().then(function() {
			location.relaod();
		});
	});
}

listParent.addEventListener("click", function(e) {
	console.log(e);
	console.log(e.target.getAttribute("class"));
	if (e.target.getAttribute("class") === "todo-item") {
		const itemID = e.target.getAttribute("data-id");
		console.log(itemID);
		deleteItem(itemID);
	}
});
