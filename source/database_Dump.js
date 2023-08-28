const mongoose = require('mongoose');

module.exports.connectAndCopyData = async (req, res, next) => {
    let options = {
        useCreateIndex: true,
        useNewUrlParser: true,
        useUnifiedTopology: true,
    };

    try {
        const sourceConfig = process.env.SOURCEDATABASE;
        const targetConfig = process.env.DESTINATIONDATABASE;
        const allCollections = req.query.allCollection === 'true';

        const sourceDB = await mongoose.createConnection(sourceConfig, options);
        console.log("🛸🛰 Source database connected 🛸🛩");

        const targetDB = await mongoose.createConnection(targetConfig, options);
        console.log("🛰🛸 Target database connected 🛸🛩");

        const sourceCollectionNames = await sourceDB.db.listCollections().toArray();

        const collectionsToCopy = allCollections
            ? sourceCollectionNames.map(collection => collection.name)
            : ['actionplans', 'amrutprojects']; // Add more collections as needed

        for (const collectionName of collectionsToCopy) {
            const sourceSchema = new mongoose.Schema({}, { strict: false });
            const targetSchema = new mongoose.Schema({}, { strict: false });

            const SourceModel = sourceDB.model(collectionName, sourceSchema);
            const TargetModel = targetDB.model(collectionName, targetSchema);

            const dataToCopy = await SourceModel.find().lean();

            // Remove the data from the target collection before inserting new data.
            await TargetModel.deleteMany();
            console.log(`🔥🔥 Deleted previous data from ${collectionName} successfully 🔥🔥`);

            await TargetModel.insertMany(dataToCopy);
            console.log(`⚡⚡⚡❄ Data copied to ${collectionName} successfully ❄⚡⚡⚡`);
        }

        sourceDB.close();
        targetDB.close();
        return res.status(200).json({ status: true, message: "⚡⚡⚡❄ Data copied successfully ❄⚡⚡⚡" });
    } catch (error) {
        console.error("Error:", error);
        process.exit(1);
    }
}
