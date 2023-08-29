const User = require('../../models/User');
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

function checkToken(req, res) {
  console.log('req.user', req.user);
  res.status(200).json(req.exp);
};

// login
const login = async(req, res) => {
  try {
    // Find the user by their email address... with their credentials in req.body
    const user = await User.findOne({ email: req.body.email });
    if (!user) throw new Error(); // This means that no user with those credentials were ever created... throw error
    const match = await bcrypt.compare(req.body.password, user.password);
    if (!match) throw new Error(); // Using bcrypt, we're gonna compare passwords (hash) from the user input and the database. If those two are the same, then match is true. If false, throw error.
    res.status(200).json( createJWT(user) ); // Once credentials true, then json the user for the entirity of the session, exprires in 24h
  } catch {
    res.status(400).json('Bad Credentials');
  }
}

// create
const create = async(req, res) => {
  // // Baby step...
  // // res.json(req.body)
  // res.json({
  //   user: {
  //     name: req.body.name,
  //     email: req.body.email,
  //   },
  // });
  // ********************************** actual code *****
  try {
    // Add the user to the database
    const user = await User.create(req.body);
    // token will be a string
    const token = createJWT(user);
    // Yes, we can use res.json to send back just a string
    // The client code needs to take this into consideration
    res.json(token); // returns to the front end - responding with our JWT
  } catch (err) {
    // Client will check for non-2xx status code
    // 400 = Bad Request
    res.status(400).json(err);
  }
};

/*-- Helper Functions --*/

function createJWT(user) {
  return jwt.sign(
    // data payload
    { user },
    process.env.SECRET,
    { expiresIn: '24h' }
  );
}

module.exports = {
    create,
    login,
    checkToken
}