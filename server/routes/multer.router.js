const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();


// //get route
// app.get('/', (req, res) => res.render('index'));

// //post route
// app.post('/upload', (req, res) => {
//     //call the upload method
//     upload(req, res, (err) => {
//         //check for error
//         //will lookout for msg output on index
//         if (err) {
//             //if there's an error will re-render DOM and show ERR on DOM
//             res.render('index', {
//                 msg: err
//             });
//         } else {
//             //if it was an empty submit
//             if(req.file === undefined){
//                 res.render('index', {
//                     msg: 'Error: No File Selected!'
//                 });
//             } else {
//                 //if there was a file submitted
//                 res.render('index', {
//                     msg: 'File Uploaded!',
//                     //variable with location name 
//                     //filename is the last and actual file name
//                     file:`upload/${req.file.filename}`
//                 });
//             }

//         }

//     })

// })


module.exports = router;