const express = require('express');
const router = express.Router();
const MenuItem = require('../models/MenuItem')

router.get('/', async (req, res) => {
    try {
        const menuList = await MenuItem.find();
        console.log('data fetched');
        res.status(200).json(menuList);
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
})
router.post('/', async (req, res) => {
    try {
        const menuData = req.body
        const NewMenuItem = new MenuItem(menuData);
        const response = await NewMenuItem.save();
        console.log('data saved', response);
        res.status(200).json(response);
    }
    catch (err) {
        console.log(err);
        res.status(500).json({ error: 'Internal Server Error ' });
    }
})

router.get('/:tasteType', async (req, res) => {
    try {
        const tasteType = req.params.tasteType;  // Extract the work type from url parameter
        if (tasteType == 'sweet' || tasteType == 'spicy' || tasteType == 'sour') {
            const response = await MenuItem.find({ taste: tasteType })
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

router.put('/:id', async (req, res) => {
    try {
        const itemId = req.params.id;         // Extract the id from the URL parameter
        const updatedItem = req.body;     // Updated data for the person

        const response = await MenuItem.findByIdAndUpdate(itemId, updatedItem, {
            new: true,  // return the updated document
            runValidators: true,    // run mongoose validation
        });

        if (!response) {
            return res.status(404).json({ error: 'Item not found' });
        }

        console.log('Data updated successfully');
        res.status(200).json(response);

    } catch (error) {
        console.log(err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
})

router.delete('/:id', async (req, res) => {
    try {
        const itemId = req.params.id;  // Extract the id from the URL parameter

        // Assuming you have a Person Model
        const response = await MenuItem.findByIdAndDelete(itemId);
        if (!response) {
            return res.status(404).json({ error: 'Item not found' });
        }
        console.log('Data deleted successfully');
        res.status(200).json({ message: 'Item deleted successfully' });
    } catch (error) {
        console.log(err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
})

module.exports = router;