const express = require("express")
const app = express()
// To parse the incoming requests with JSON payloads
app.use(express.urlencoded({extended: true}))
app.use(express.text())
app.use(express.json())

/**
 * Made possible by forwarding port 80 from node to the server
 * https://www.digitalocean.com/community/tutorials/how-to-use-pm2-to-setup-a-node-js-production-environment-on-an-ubuntu-vps
 */
const PORT = 80

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