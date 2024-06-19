const express = require('express');
const router = express.Router();


let users = [
    {
        firstName: "John",
        lastName: "wick",
        email:"johnwick@gamil.com",
        DOB:"22-01-1990",
    },
    {
        firstName: "John",
        lastName: "smith",
        email:"johnsmith@gamil.com",
        DOB:"21-07-1983",
    },
    {
        firstName: "Joyal",
        lastName: "white",
        email:"joyalwhite@gamil.com",
        DOB:"21-03-1989",
    },
];

// GET request: Retrieve all users
router.get("/",(req,res)=>{
  // Copy the code here
  res.send(users)//This line is to be replaced with actual return value
});

// GET by specific ID request: Retrieve a single user with email ID
router.get("/:email",(req,res)=>{
  // Copy the code here
  const email = req.params.email;
  const filteredUser = users.filter((user) => user.email === email);
  res.send(filteredUser)//This line is to be replaced with actual return value
});


// POST request: Create a new user
router.post("/",(req,res)=>{
  const newUser = {
    ...req.body,
  }
  console.log(newUser);
  users.push(newUser);
  res.send("User with email "+newUser.email+" has been created")//This line is to be replaced with actual return value
});


// PUT request: Update the details of a user by email ID
router.put("/:email", (req, res) => {
  const email = req.params.email;

  let filteredUser = users.filter((user) => user.email === email)[0];

  console.log(filteredUser);

  if (!filteredUser) {
    res.send("Unable to find user with email "+email+"!");
  } else {
    const updatedUser = {
      ...req.body,
    }
    for (const prop in updatedUser) {
      filteredUser[prop] = updatedUser[prop];
    }

    users = users.filter((user) => user.email !== email);
    users.push(filteredUser);
    // res.send(`User with email ${email} updated.\n${filteredUser}`);
    res.status(200).send(filteredUser);
  }
});


// DELETE request: Delete a user by email ID
router.delete("/:email", (req, res) => {
  // Copy the code here
  const email = req.params.email;
  let filteredUser = users.filter((user) => user.email === email)[0];
  if (!filteredUser) {
    res.send("Unable to find user with email "+email+"!");
  } else {
    users = users.filter((user) => user.email !== email);
    res.status(200).send(`User with email ${email} has been deleted.`);
  }
});

module.exports=router;
