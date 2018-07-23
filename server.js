require('dotenv').config()
const
	express = require('express'),
	app = express(),
	logger = require('morgan'),
	mongoose = require('mongoose'),
	MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/react-express-jwt',
	PORT = process.env.PORT || 3001,
	usersRoutes = require('./routes/users.js')

mongoose.connect(MONGODB_URI, { useNewUrlParser: true }, (err) => {
	console.log(err || `Connected to MongoDB.`)
})

//Commented code for static build laster on
// app.use(express.static(`${__dirname}/client/build`))
app.use(logger('dev'))
app.use(express.json())

app.get('/api', (req, res) => {
	res.json({message: "API root."})
})

app.use('/api/users', usersRoutes)


//Commented out for getting to build on final build
// app.get('*', (req, res) => {
// 	res.sendFile(`${__dirname}/client/build/index.html`)
// })

app.listen(PORT, (err) => {
	console.log(err || `Server running on port ${PORT}.`)
})