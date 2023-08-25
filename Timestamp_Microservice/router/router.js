//Importan las librerias
const express = require("express");
const multer = require("multer");

//importa el metodo
const  MethodController = require("../controllers/funct");

//metodo ruta
const router = express.Router();

//Ruta del metodo 
router.get("/:date?", MethodController.method);

module.exports = router;























