const db = require("../models");

// create main Model
const Employe = db.employes;
const Review = db.reviews;

// main work

// 1. create employe

const addEmploye = async (req, res) => {
  let info = {
    employeName: req.body.employeName,
  };

  const employe = await Employe.create(info);
  res.status(200).send(employe);
  console.log(employe, "emp1");
};

// 2. get all employe

const getAllEmploye = async (req, res) => {
  let employes = await Employe.findAll({});
  res.status(200).send(employes);
  console.log(employes, "emp2");

};

// 3. get single employe

const getOneEmploye = async (req, res) => {
  let id = req.params.id;
  let employe = await Employe.findOne({ where: { id: id } });
  res.status(200).send(employe);
  console.log(employe, "emp3");

};

// 4. update employe

const updateEmploye = async (req, res) => {
  let id = req.params.id;

  const employe = await Employe.update(req.body, { where: { id: id } });

  res.status(200).send(employe);
  console.log(employe, "emp4");

};

// 5. delete employe by id

const deleteEmploye = async (req, res) => {
  let id = req.params.id;

  await Employe.destroy({ where: { id: id } });

  res.status(200).send("Employe is deleted !");
};

module.exports = {
  addEmploye,
  getAllEmploye,
  getOneEmploye,
  updateEmploye,
  deleteEmploye,
};
