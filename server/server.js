const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();

const sessionMiddleware = require('./modules/session-middleware');
const passport = require('./strategies/user.strategy');

// Route includes
const userRouter = require('./routes/user.router');
const recipeRouter = require('./routes/recipe.router');
const ingredientRouter = require('./routes/ingredient.router');
const instructionRouter = require('./routes/instruction.router');
const postRouter = require('./routes/post.router');
const multerRouter = require('./routes/multer.router')

// Body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Passport Session Configuration //
app.use(sessionMiddleware);

// start up passport sessions
app.use(passport.initialize());
app.use(passport.session());

/* Routes */
app.use('/api/user', userRouter);
app.use('/api/recipe', recipeRouter);
app.use('/api/ing', ingredientRouter);
app.use('/api/ins', instructionRouter);
app.use('/api/post', postRouter);
// app.use('/multer', multerRouter);

// Serve static files
app.use(express.static('build'));

// App Set //
const PORT = process.env.PORT || 5000;

/** Listen * */
app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});

/** Multer **/ 
// const multer = require('multer');
// const path = require('path');

// //!set storage engine
// //where are images be stored
// //there are easier ways but not as flexible
// const storage = multer.diskStorage({
//     destination: './public/upload',
//     filename: function (req, file, cb) {
//         //don't want error so do null
//         //rename the file to avoid duplicate name
//         //adding timestamp with orginal name  
//         cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
//     }
// });

// //! Init upload
// const upload = multer({
//     storage: storage,
//     //to only allow image upload
//     limits: {filesize: 1000000},
//     fileFilter: function (req, file, cb) {
//         checkFileType(file, cb);
//     }
//     //identify how many images per load
//     //image variable as to be consistent with input lable name in index
// }).single('image');

// //! Check File Type to only allow images
// // also mime ext
// function checkFileType(file, cb) {
//     //expression of allowed file type
//     const filetype = /jpeg|jpg|png|gif/;
//     //check ext
//     const extname = filetype.test(path.extname(file.originalname).toLowerCase());
//     //check mime type
//     const mimetype = filetype.test(file.mimetype);

//     if (mimetype && extname) {
//         return cb(null, true);
//     } else {
//         //will be showcased where line 62 err is at
//         cb('Error: Images only!');
//     }
// }


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