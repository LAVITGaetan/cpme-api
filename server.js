const express = require('express');
const cors = require('cors');
const services = require('./services/render.js')
const app = express();

var corsOptions = {
    origin: "https://localhost:8060"
}

// middleware

app.use(cors(corsOptions))

app.use(express.json());

app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {
    res.json({ message: 'Hello there' })
})

// router
const router = require('./routes/userRouter.js')
app.use('/api/users', router)

//client views
app.get('/accueil', services.index)

// setting view engine
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

// linking assets
app.use(express.static(__dirname + '/assets'));

// port 
const PORT = process.env.PORT || 8060

// server
app.listen(PORT, () => { console.log(`server is running on http://localhost:${PORT}`); })

