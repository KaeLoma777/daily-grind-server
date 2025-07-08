import express from 'express'
import path from 'path'
import url from 'url'

const fileName = url.fileURLToPath(import.meta.url)
const __dirname = path.dirname(fileName)
console.log(__dirname);

const app = express()
const PORT = 3000

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'))
})

app.get('/contact', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'contact.html'))
})

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`)
})
