const app = require("./app");

app.get("/", (req, res) => {
    const { data } = req.body;
    res.send(`Hello ${ data }`);
});

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});