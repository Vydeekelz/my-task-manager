const express = require('express');
const app = express();
app.use(express.json())
let {people} = require('../data')

const getPeople = (req, res) => {
  res.status(200).json({success: true, message: people})
}

const getPerson = (req, res) => {
  const {id} = req.params;
  const singlePerson = people.find((person) => person.id === Number(id))
  res.status(200).json(singlePerson)
}

const searchPeople = (req, res) => {
  const {search, limit} = req.query;
  console.log(req.query);
  let sortedPersons = [...people];
  console.log(people)
  console.log(sortedPersons)

  if (search) {
      sortedPersons = sortedPersons.filter((person) => {
          return person.name.startsWith(search)
      })
  }
  if (limit) { 
      return sortedPersons = sortedPersons.slice(0, Number(limit))
  }
  console.log(sortedPersons)
  res.status(200).json(sortedPersons)
}

const addPerson = (req, res) => {
  const name = req.body;
  if (!name) {
      res.status(400)
      .send({success:false, msg: 'please input the required data'})
  }
  else {
      res.status(201).json( {success: true, data: [...people, {id: people.length +1, name: name}] })}
}

const updatePeople = (req, res) => {
  const {id} = req.params;
  const {name} = req.body;
  const person  = people.find((person) => person.id === Number(id))

  if (!person) {
      return res
      .status(404)
      .send({success: false, message: "There is no user with given ID"})
  }
  const newPeople = people.map((person) => {
      if (person.id === Number(id)) {
         person.name = name
      }
      return person
  })
  res.status(200).json({newPeople})
  }

const deletePerson = (req, res) => {
  const {id} = req.params;
  const person = people.find((person) => person.id === Number(id))

  if (!person) {
      return res
      .status(404)
      .send({success: false, message: `There is no user with given ID ${id}`})
  }
  const newPeople = people.filter((person) => person.id !== Number(id))
  res.status(200).json({success: true, message: newPeople})
}





module.exports = {getPeople, getPerson, searchPeople, addPerson, updatePeople, deletePerson }
