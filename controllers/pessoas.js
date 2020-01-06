const index =  async({Pessoa}, req, res)=>{
  const pessoas = await Pessoa.findAll()
  res.render('pessoas/listaPessoas', {resultado: pessoas})
}
const criarPessoaForm = (req,res) =>{
  res.render('pessoas/criarPessoaForm')
}
const criarPessoa = async({Pessoa}, req,res)=>{
  await Pessoa.create(req.body)
  res.redirect('/pessoas')
}
const excluirPessoa = async ({Pessoa}, req,res) =>{
  await Pessoa.destroy({
    where: {
      id: req.params.id
    } 
  })
  res.redirect('/pessoas')
}
const editarPessoaForm = async ({Pessoa},req,res) =>{
  const resultado = await Pessoa.findByPk(req.params.id)
  res.render('pessoas/editarPessoaForm', {resultado})
}
const editarPessoa = async({Pessoa}, req,res)=>{
  await Pessoa.update(req.body, {
    where: {
      id: req.params.id
    }
  })
  res.redirect('/pessoas')
}
module.exports = {
  index,
  criarPessoaForm,
  criarPessoa,
  excluirPessoa,
  editarPessoaForm,
  editarPessoa
}