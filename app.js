const express = require("express");
const app = express();
const mustacheExpress = require("mustache-express");
const bodyParser = require("body-parser");
const dal = require("./dal");
app.engine("mustache", mustacheExpress());
app.set("view engine", "mustache");
app.set("views", __dirname + "/views");

app.use(express.static("public"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/", (req, res) => {
	const list = dal.getList();
	const old = dal.getCompleted();
	res.render("todo", {
		list: list,
		old: old
	});
});

app.post("/new", (req, res) => {
	dal.newToDo(req.body.todo);
	const list = dal.getList();
	const old = dal.getCompleted();
	res.redirect("/");
});

app.delete("/:id", (req, res) => {
	dal.completeItem(req.params.id);
	const list = dal.getList();
	const old = dal.getCompleted();
	res.render(
		"todo",
		{
			list: list,
			old: old
		},
		() => {
			res.redirect("/");
		}
	);
});

app.set("port", 3000);

app.listen(app.get("port"), () => {
	console.log("Your app has started, sir.");
});
