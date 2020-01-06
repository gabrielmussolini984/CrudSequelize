// Imports  
const express = require('express'); 
const path = require('path');
const pessoasController = require('../controllers/pessoas');
const model = require('../models/index');

//Injetando dependencias
const pessoasRouter = () =>{
  const router = express.Router();
  router.get('/', pessoasController.index.bind(null, model.models));
  router.get('/criarPessoaForm', pessoasController.criarPessoaForm);
  router.post('/criarPessoa', pessoasController.criarPessoa.bind(null, model.models));
  router.get('/delete/:id', pessoasController.excluirPessoa.bind(null,model.models));
  router.get('/editarPessoaForm/:id', pessoasController.editarPessoaForm.bind(null, model.models));
  router.post('/editarPessoa/:id', pessoasController.editarPessoa.bind(null, model.models));
  return router;
};


module.exports = pessoasRouter;