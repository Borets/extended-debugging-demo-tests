const express = require('express')
const cors = require('cors')

const app = express()
app.use(cors())

const PORT = process.env.PORT || 8080

app.get('/v1/login', function (req, res) {
    if (Math.random() > 0.60) {
        res.status(500)
        return res.json({ error: 'INTERNAL SERVER ERROR' })
    }

    return res.json({ message: 'some server response' })
})

app.listen(PORT, () => console.log(`Demo app listening on port ${PORT}!`))