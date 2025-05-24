const mongo = require("mongoose")

const conn = mongo.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log('MongoDB connected✅✔✓☑')).catch((err) => console.error(err));

module.exports = { conn }