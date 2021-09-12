var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/cat_app");

var catSchema = new mongoose.Schema({
    name: String,
    age: Number,
    temperament: String
});

var Cat = mongoose.model("Cat", catSchema);
// add cats to db 

// var george = new Cat({
//     name: "Mrs. Norris",
//     age: 7,
//     temperament: "Evil"
// });

// george.save(function(err, cat) {
//     if (err) {
//         console.log("err");
//     } else {
//         console.log("Cat added to DB");
//         console.log(cat)
//     }
// });




//another way of adding cats 

Cat.create({
    name: "Lucy",
    age: 4,
    temperament: "Cute"
}, function(err, cat) {
    if (err) {
        console.log("Something went wrong");
        console.log(err);
    } else {
        console.log("Cat added to database");
        console.log(cat);
    }
});
// retrive cats from db
Cat.find({}, function(err, cats) {
    if (err) {
        console.log("errrorr");
        console.log(err);
    } else {
        console.log("Results:");
        console.log(cats);
    }
});