// import controllers employe
const employeController = require("../controllers/employeController.js");

// router
const router = require("express").Router();


router.post("/addEmploye", employeController.addEmploye);

router.get("/allEmployes", employeController.getAllEmploye);

// Employes router
router.get("/:id", employeController.getOneEmploye);

router.put("/:id", employeController.updateEmploye);

router.delete("/:id", employeController.deleteEmploye);

module.exports = router;
