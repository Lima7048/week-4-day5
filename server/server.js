import express from "express"
import cors from "cors"
import Database from "better-sqlite3"

const db = new Database('database.db')
const app = express()
app.use(express.json())
app.use(cors())

const PORT = '7777'

app.post('/messages', (request, response) => {
    try {
        const name = req.body.name
        const icon = req.body.icon
        const imgUrl = req.body.imgURL
        const message = req.body.message
        const newMessage = db.prepare(`INSERT INTO messages (name, icon, imgURL, message) VALUES (?, ?, ?, ?) `)
            .run(name, icon, imgUrl, message)

    } catch (err) {
        res.status(500).json({ error: err })
    } response.status(200).json({ message: 'received', youSent: request.body })
})


app.listen(PORT, () => {
    console.log(` ✿ (ﾉ◕ヮ◕)ﾉ*:・ﾟ✧ Server started on PORT ✿: ${PORT}`)
})