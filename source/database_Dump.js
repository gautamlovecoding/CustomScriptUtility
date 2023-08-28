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

        const sourceDB = await mongoose.createConnection(sourceConfig, options);
        console.log("🛸🛰 Source database connected 🛸🛩");

        const targetDB = await mongoose.createConnection(targetConfig, options);
        console.log("🛰🛸 Target database connected 🛸🛩");

        const collectionMappings = [
            { sourceCollectionName: 'categories', targetCollectionName: 'categories' },
            { sourceCollectionName: 'headers', targetCollectionName: 'headers' },
        ];

        for (const mapping of collectionMappings) {
            const sourceSchema = new mongoose.Schema({}, { strict: false });
            const targetSchema = new mongoose.Schema({}, { strict: false });

            const SourceModel = sourceDB.model(mapping.sourceCollectionName, sourceSchema);
            const TargetModel = targetDB.model(mapping.targetCollectionName, targetSchema);

            const dataToCopy = await SourceModel.find().lean();

            // Remove the data from the target collection before inserting new data.
            await TargetModel.deleteMany();
            console.log(`🔥🔥 Deleted previous data from ${mapping.targetCollectionName} successfully 🔥🔥`);

            await TargetModel.insertMany(dataToCopy);
            console.log(`⚡⚡⚡❄ Data copied to ${mapping.targetCollectionName} successfully ❄⚡⚡⚡`);
        }

        sourceDB.close();
        targetDB.close();
        return res.status(200).json({ status: true, message: "⚡⚡⚡❄ Data copied successfully ❄⚡⚡⚡" });
    } catch (error) {
        console.error("Error:", error);
        process.exit(1);
    }
}
