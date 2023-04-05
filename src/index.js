const express = require('express')
const app = express()

const routes = require('./routes')

app.use(express.json())

app.use(routes)

const PORT = 3456
app.listen(PORT, () => {
    console.log(`server is running at http://localhost:${PORT}`);
})