const express = require('express');
const router = express.Router();
const person = require('../models/person')

// POST route to add a person
router.post('/', async (req, res) => {
    try {
        const data = req.body      // Assuming the request body contains the person data

        // Create a new person document using the Mongoose Model
        const newPerson = new person(data);

        // Save the new person to the database
        const response = await newPerson.save();
        console.log('data saved', response);
        res.status(200).json(response);
    }
    catch (err) {
        console.log(err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
})

// Get the person information
router.get('/', async (req, res) => {
    try {
        const data = await person.find();
        console.log('data fetched');
        res.status(200).json(data);
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
})

router.get('/:workType', async (req, res) => {
    try {
        const workType = req.params.workType;  // Extract the work type from url parameter
        if (workType == 'chef' || workType == 'manager' || workType == 'waiter') {
            const response = await person.find({ work: workType })
            console.log('Response fetched');
            res.status(200).json(response);
        }
        else {
            res.status(404).json({ error: 'Invalid work type' });
        }
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
})

router.put('/:id', async(req,res) => {
    try {
        const personId = req.params.id;         // Extract the id from the URL parameter
        const updatedPersonData = req.body;     // Updated data for the person

        const response = await person.findByIdAndUpdate(personId, updatedPersonData,{
            new: true,  // return the updated document
            runValidators: true,    // run mongoose validation
        });

        if(!response) {
            return res.status(404).json({ error: 'Person not found' });
        }

        console.log('Data updated successfully');
        res.status(200).json(response);
        
    } catch (error) {
        console.log(err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
})

router.delete('/:id', async(req, res) => {
    try {
        const personId = req.params.id;  // Extract the id from the URL parameter

        // Assuming you have a Person Model
        const response = await person.findByIdAndDelete(personId);
        if(!response) {
            return res.status(404).json({ error: 'Person not found' });
        }
        console.log('Data deleted successfully');
        res.status(200).json({message: 'Person deleted successfully'});
    } catch (error) {
        console.log(err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
})

module.exports = router;