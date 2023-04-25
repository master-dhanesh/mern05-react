import collection from "../../models/db";
export default async function homepage(req, res) {
    const u = await collection.insertOne({
        name: "John",
        password: "1234567890",
        email: "Johhn@emai.com",
    });

    res.status(200).json({
        message: "Hello",
    });
}
