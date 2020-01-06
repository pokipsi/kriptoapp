require('dotenv').config();
const express = require('express');
const mongodb = require('mongodb');

const router = express.Router();

// GET

router.get('/', async (req, res) => {

    const alerts = await getAlerts();
    res.send(await alerts.find({}).toArray());

});

// POST

router.post('/', async (req, res) => {

    const alerts = await getAlerts();
    await alerts.insertOne({
        value: req.body.value,
        type: req.body.type,
        status: false
    });

    res.status(201).send({
        msg: "saved"
    });

});

// PUT

router.put('/:id', async (req, res) => {

    const alerts = await getAlerts();
    await alerts.updateOne({
        "_id": new mongodb.ObjectID(req.params.id)
        }, {
            $set: {
                "value": req.body.value,
                "type": req.body.type,
                "status": false
            }
        }, {
            upsert: false
        });

    res.status(200).send({
        msg: "updated"
    });

});

// DELETE

router.delete('/:id', async (req, res) => {
    const alerts = await getAlerts();
    await alerts.deleteOne({ _id: new mongodb.ObjectID(req.params.id) });
    res.status(200).send({
        msg: "deleted"
    });
});

async function getAlerts(){
    const client = await mongodb.MongoClient.connect(process.env.DB_CONN_STRING);
    return client.db('kriptoapp').collection('alerts');
}

module.exports = router;