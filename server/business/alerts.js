require('dotenv').config();
const mongodb = require('mongodb');

function Alerts(){
    this.getData = async function () {
        const client = await mongodb.MongoClient.connect(process.env.DB_CONN_STRING);
        const alerts = client.db('kriptoapp').collection('alerts');
        return alerts;
    }
    this.get = async function () {
        const alerts = await this.getData();
        return await alerts.find({}).toArray();
    }
    this.insert = async function (alert) {
        const alerts = await this.getData();
        await alerts.insertOne({
            value: alert.value,
            type: alert.type,
            status: true
        });
        return {
            msg: "saved"
        }
    }
    this.update = async function (alert) {
        const alerts = await this.getData();
        await alerts.updateOne({
            "_id": new mongodb.ObjectID(alert._id)
        }, {
            $set: {
                "value": alert.value,
                "type": alert.type,
                "status": alert.status
            }
        }, {
            upsert: false
        });
        return {
            msg: "updated"
        }
    }
    this.delete = async function (alert) {
        const alerts = await this.getData();
        await alerts.deleteOne({
            _id: new mongodb.ObjectID(alert._id)
        });
        return {
            msg: "deleted"
        }
    }
}

module.exports = Alerts;