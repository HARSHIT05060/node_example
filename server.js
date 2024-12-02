const express = require('express')
const app = express()
const db = require('./db')

const bodyParser = require('body-parser');
app.use(bodyParser.json());   // it store data in ==> req.body()

app.get('/', (req, res) =>{
  res.send("Welcome to our Hotel!");
})

//Import router files 
const personRoutes = require('./routes/personRoutes');
const menuRoutes = require('./routes/menuRoutes');

// Use the routes 
app.use('/person', personRoutes);
app.use('/menu', menuRoutes);

app.listen(3000, () => {
  console.log('server listening on 3000')
})




// this method is callback but this is not used in this we use async and await


// POST route to add a person
// app.post('/person', (req, res) => {

// const data = req.body      // Assuming the request body contains the person data

// // Create a new person document using the Mongoose Model
// const newPerson = new person(data);

// // Save the new person to the database
// newPerson.save((error, savedPerson) => {
//   if (error) {
//     console.log('Error saving person', error);
//     res.status(500).json({error: 'Internal Server ERROR'})
//   }else {
//     console.log('data saved successfully');
//     res.status(200).json(savedPerson)
//   }
// });
// })



// this code before we apply express routes



// app.get('/', function (req, res) {
//   res.send('Hello I am harshit')
// })

// // Get the person information
// app.get('/person', async (req, res) => {
//   try {
//     const data = await person.find();
//     console.log('data fetched');
//     res.status(200).json(data);
//   } catch (err) {
//     console.log(err);
//     res.status(500).json({ error: 'Internal Server Error' });
//   }
// })

// // POST route to add a person
// app.post('/person', async (req, res) => {
//   try {
//     const data = req.body      // Assuming the request body contains the person data

//     // Create a new person document using the Mongoose Model
//     const newPerson = new person(data);

//     // Save the new person to the database
//     const response = await newPerson.save();
//     console.log('data saved', response);
//     res.status(200).json(response);
//   }
//   catch (err) {
//     console.log(err);
//     res.status(500).json({ error: 'Internal Server Error' });
//   }
// })

// app.get('/person/:workType', async (req, res) => {
//   try {
//     const workType = req.params.workType;  // Extract the work type from url parameter
//     if (workType == 'chef' || workType == 'manager' || workType == 'waiter') {
//       const response = await person.find({ work: workType })
//       console.log('Response fetched');
//       res.status(200).json(response);
//     }
//     else {
//       res.status(404).json({ error: 'Invalid work type' });
//     }
//   } catch (err) {
//     console.log(err);
//     res.status(500).json({ error: 'Internal Server Error' });
//   }
// })


// app.get('/menu', async (req, res) => {
//   try {
//     const menuList = await MenuItem.find();
//     console.log('data fetched');
//     res.status(200).json(menuList);
//   } catch (err) {
//     console.log(err);
//     res.status(500).json({ error: 'Internal Server Error' });
//   }
// })

// app.post('/menu', async (req, res) => {
//   try {
//     const menuData = req.body
//     const NewMenuItem = new MenuItem(menuData);
//     const response = await NewMenuItem.save();
//     console.log('data saved', response);
//     res.status(200).json(response);
//   }
//   catch (err) {
//     console.log(err);
//     res.status(500).json({ error: 'Internal Server Error' });
//   }
// })
