const list = require("./data");
const old = require("./completed");

function getList() {
	return list;
}

function getCompleted() {
	return old;
}

function newToDo(item) {
	const count = list.length;
	list.push({
		id: count,
		todo: item
	});
	console.log("Successfully added " + item);
	return list;
}

function completeItem(id) {
	const count = old.length;
	let item = list.find((elm, ind, arr) => {
		if (id == elm.id) {
			return elm.todo;
		}
	});
	let index = list.find((elm, ind, arr) => {
		if (id == elm.id) {
			return ind;
		}
	});
	console.log(item);
	old.push({
		id: count,
		todo: item.todo
	});
	list.splice(index - 1, 1);
	console.log(list);
}

module.exports = {
	getList: getList,
	getCompleted: getCompleted,
	newToDo: newToDo,
	completeItem: completeItem
};
