const Sequelize = require('sequelize');
const sequelize = new Sequelize('sequelize-test', 'root', '', {
  dialect: 'mysql',
  host: 'localhost'
})
const models = {}
const fs = require('fs')
const path = require('path')
fs
  .readdirSync(__dirname)
  .filter((file)=> file != 'index.js')
  .forEach((file)=>{
    const model = sequelize.import(path.join(__dirname, file))
    models[model.name] = model
  })
  Object.keys(models).forEach(modelName=>{
    if ('associate' in models[modelName]){
      models[modelName].associate(models)
    }
  }) 
const pessoa = sequelize.import('./pessoa.js')
console.log(pessoa)

module.exports = {
  sequelize,
  models
}