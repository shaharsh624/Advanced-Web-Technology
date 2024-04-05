const mongoose = require("mongoose");
mongoose
    .connect("mongodb://localhost/mydb")
    .then(() => console.log("Connected to MongoDB successfully!"))
    .catch((error) => console.error("Error connecting to MongoDB", error));

const schema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    age: {
        type: Number,
        default: 0,
    },
    deregistered: {
        type: Date,
        default: Date.now,
    },
});

const obj = mongoose.model("subsription", schema);

const newobj = new obj({
    name: "Harsh Shah",
    email: "harsh.sce21@sot.pdpu.ac.in",
    age: 20,
});

// // CREATE
// newobj
//     .save()
//     .then((kri) => console.log("User created:", kri))
//     .catch((err) => console.error(err));

// // FIND without query
// obj.find({})
//     .then((doc) => {
//         console.log(doc);
//     })
//     .catch((err) => {
//         console.log(err);
//     });

// // FIND with query
// obj.find({ name: "dev" })
//     .then((doc) => {
//         console.log(doc);
//     })
//     .catch((err) => {
//         console.log(err);
//     });

// INSERTONE
// const Newuser = new obj({ name: "krish", email: "ky@gmail.com", age: 20 });

// obj.collection
//     .insertOne(Newuser)
//     .then((data) => {
//         console.log(data);
//     })
//     .catch((err) => {
//         console.log(err);
//     });

// // INSER MANY
// const Newuser = new obj({ name: "krishna", email: "ku@gmail.com", age: 20 });
// const Newuser1 = new obj({ name: "kriti", email: "kr@gmail.com", age: 21 });
// const Newuser2 = new obj({ name: "dev", email: "dev@gmail.com", age: 20 });

// obj.collection
//     .insertMany([Newuser2])
//     .then((data) => {
//         console.log(data);
//     })
//     .catch((err) => {
//         console.log(err);
//     });

// // UPDATE ONE
// obj.updateOne({ name: "krishna" }, { $set: { name: "madhav" } })
//     .then((docs) => {
//         if (docs) {
//             console.log(docs);
//         } else {
//             console.log("no such user exist");
//         }
//     })
//     .catch((err) => {
//         console.log(err);
//     });

// // UPDATE MANY
// obj.updateMany({ age: 20 }, { $set: { age: 15 } })
//     .then((docs) => {
//         if (docs) {
//             console.log(docs);
//         } else {
//             console.log("no such user exist");
//         }
//     })
//     .catch((err) => {
//         console.log(err);
//     });

// // DELETE ONE
// obj.deleteOne({ name: "kriti" })
//     .then((docs) => {
//         if (docs) {
//             console.log(docs);
//         } else {
//             console.log("no such user exist");
//         }
//     })
//     .catch((err) => {
//         console.log(err);
//     });

// // DELETE MANY
// obj.deleteMany({ age: 15 })
//     .then((docs) => {
//         if (docs) {
//             console.log(docs);
//         } else {
//             console.log("no such user exist");
//         }
//     })
//     .catch((err) => {
//         console.log(err);
//     });
