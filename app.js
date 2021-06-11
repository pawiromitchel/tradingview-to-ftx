const express = require("express")
const app = express()
const PORT = 3000

app.use(express.urlencoded({ extended: true }))
app.use(express.json()) // To parse the incoming requests with JSON payloads

app.get("/", (req, res) => {
    res.status(200).send('silence is golden').end()
})

app.post("/hook", (req, res) => {
    console.log(req.body)
    res.status(200).end()
})

// Start express on the defined port
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`))