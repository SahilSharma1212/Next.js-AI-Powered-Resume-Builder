import mongoose from "mongoose";

export async function connect() {
    if (mongoose.connection.readyState >= 1) {
        console.log("Already connected to the database.");
        return;
    }

    try {
        await mongoose.connect(process.env.MONGODB_URI!);
        console.log("Database connected successfully.");

        mongoose.connection.on("error", (err) => {
            console.log("An error occurred: " + err);
            process.exit(1);
        });
    } catch (error) {
        console.log("Make sure the database is up and running. Error:", error);
    }
}
