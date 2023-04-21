export default function homepage(req, res) {
    if (req.method === "GET") {
        res.status(200).json({ message: "Hello from Api GET" });
    } else if (req.method === "POST") {
        res.status(200).json({ message: "Hello from Api POST" });
    }
}
