const fs = require("fs");
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
	fs.writeFileSync("data.js", "module.exports =" + JSON.stringify(list));
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
	fs.writeFileSync("completed.js", "module.exports =" + JSON.stringify(old));
	list.splice(index - 1, 1);
	fs.writeFileSync("data.js", "module.exports =" + JSON.stringify(list));
	console.log(list);
}

module.exports = {
	getList: getList,
	getCompleted: getCompleted,
	newToDo: newToDo,
	completeItem: completeItem
};
