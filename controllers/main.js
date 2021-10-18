//authentication to check if password has been provided

const jwt = require('jsonwebtoken')
const {BadRequestError} = require("../errors")

const login = async (req, res) => {
  const{username, password} = req.body

  if(!username || !password) {
    throw new BadRequestError('Please provide username and Password', 400)
  }
  //for demo
  const id = new Date().getDate()

  //for demo, keep payload small, for production use long, complex and unguessable string value
  const token = jwt.sign({id, username}, process.env.JWT_SECRET, {expiresIn:'30d'})
  console.log(username, password)
  res.status(200).json({msg:"user created", token})
}

const dashboard = async (req, res) => {
  console.log(req.user)
  const luckyNumber = Math.floor(Math.random() * 100)
  res.status(200).json({
    msg: `Hello,${req.user.username}`,
    secret: `Here is your authorized data, your lucky number is ${luckyNumber}`,
  })
  }


//   ${req.user.username}


module.exports = {login, dashboard}