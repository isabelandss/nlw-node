import express from 'express'
import { createServer } from 'http'
import { Server, Socket } from 'socket.io'
import path from 'path'
import './database'
import { routes } from './routes'

const app = express()
const http = createServer(app)
const io = new Server(http)

io.on('connection', (socket: Socket) => console.log('se conectou', socket.id))

app.use(express.static(path.join(__dirname, '..', 'public')))
app.set('views', path.join(__dirname, '..', 'public'))
app.engine('html', require('ejs').renderFile)
app.set('view engine', 'html')

app.use(express.json())
app.use(routes)

app.get('/', (req, res) => res.render('html/client.html'))

const PORT = process.env.PORT || 3000

http.listen(PORT, () => console.log(`server is running on port ${PORT}`))
