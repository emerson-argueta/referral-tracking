/* eslint-disable no-console */
import express from "express";
import { v1Router } from "./api/v1";


const app = express();

app.use(express.json())

app.use('/api/v1', v1Router)

const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log(`[App]: Listening on port ${port}`)
})