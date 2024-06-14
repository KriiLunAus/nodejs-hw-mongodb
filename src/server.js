import express from "express";
import dotenv from "dotenv";

dotenv.config();

const PORT = Number(process.env.PORT);



export default function setupServer() {
    const app = express();

    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    });

};
