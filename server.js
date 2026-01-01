const http = require("http");
const mongodb = require("mongodb");


let db;
const connectionString = "mongodb+srv://azizshokh_db_user:AZRXc8F3mn95zRUK@cluster0.nzaoaij.mongodb.net/Reja";

mongodb.connect(connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}, (err, client) => {
    if (err) console.log("Error on connection MongoDB");
    else {
        console.log("MongDB connection succed");
        // console.log(client); 
        module.exports = client;              
        const app = require("./app");
        const server = http.createServer(app);
        const PORT = 3000; // server shu portni eshitadi va o'qiydi
        server.listen(PORT, function () {
            console.log(`The server is running succesfully on port: ${PORT}, http://localhost:${PORT}`);
        });
    }

});


