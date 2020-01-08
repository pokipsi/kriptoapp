require('dotenv').config();
const express = require('express');

const Alerts = require('../../business/alerts');

const alerts = new Alerts();

const router = express.Router();

// GET

router.get('/', async (req, res) => {
    const data = await alerts.get();
    res.send(data);
});

// POST

router.post('/', async (req, res) => {
    const data = await alerts.insert({
        value: req.body.value,
        type: req.body.type
    });
    res.status(201).send(data);
});

// PUT

router.put('/:id', async (req, res) => {
    const data = await alerts.update({
        _id: req.params.id,
        value: req.body.value,
        type: req.body.type,
        status: req.body.status
    });
    res.status(200).send(data);
});

// DELETE

router.delete('/:id', async (req, res) => {
    const data = await alerts.delete({
        _id: req.params.id
    });
    res.status(200).send(data);
});

module.exports = router;