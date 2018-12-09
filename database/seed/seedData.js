const db = require("../index.js");

const newData = [
    {
        task: "Go for a run"
    },
    {
        task: "Study React"
    }, 
    {
        task: "Build a todo list"
    }
];

// let insertData = function(){
//     db.insertMany(
//         newData
//     );
// };

// insertData();

(()=>{
    db.insertMany(newData);
})();