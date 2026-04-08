/*let x:number = 10

let nome:string = "Bianca"

let vetor:number[] = [1, 2, 3, 4, 5,]

let nomes:string[] = ["oi", "olá"]
console.log(nomes) 


let bol:boolean = true;
bol = false

const variavel:any = "oi"

const a:undefined = undefined;

const obj:{id:number,nome:string,idade:number} = {
    id:1,
    nome:"Bianca",
    idade:17
}

obj.id=2
obj.nome = "Bia"
obj.idade=18

//obj={
   // id:2,
   // nome:"bia",
  //  idade:13
//}

const x1=10

const vetor1: number[] = [0,1,2,3,4]
vetor1[0] = 10

let vetor2: number[] = [0,1,2,3,4]
vetor2 = [0,1,2,3,4]

let outraletra: number | string = 10;
outraletra= "Bianca"

const obj1:{id?:number,nome:string,idade:number} = {
    id:1,
    nome:"Bianca",
    idade:17
}

type Pessoa = {id?:number,nome:string,idade:number}

const p:Pessoa={
    id:10,
    nome:"Qualquer coisa",
    idade:32
}

//Um bloco de codigo que executa uma tarefa
//(tarefa é uma sequencia de comandos de codigo)
//Beneficio: Nao repetir codigo

const f = (variavel:number):number=>10
const f3 = f(10)
console.log("O valor de x é "+f3.toString())

//Terminem essa função para retornar a soma de todos os elementos de um vetor
//somaVetor([1,2,3]) => 6
//somaVetor([1,2,3,4]) => 10
// ! usado para não ser undefined

function somaVetor(vetor:number[]):number{
    let soma = 0
    for (let i = 0; i < vetor.length; i++) {
        const element = vetor[i];
        soma = soma + element! 
    }
    return soma
    
}
console.log(`O valor da soma do vetor é ${somaVetor([1,2,3])}`)

//3- Faça uma função que receba 2 vetores e faça a operação de merge entre eles
//ex: mergeVetor([1,2,3], [4,5,6]) => [1,2,3,4,5,6]

const array1:number[] = [1, 2, 3]
const array2:number[] = [4, 5, 6]
const array3:number[] = array1.concat(array2)

console.log(array3)





/////////////////////////////////////////////////////////////////
//ATIVIDADES

/**
 * Exercício 01 - cria um novo vetor com os valores do vetor original mais dois novos valores
 * Nome da função - criaNovoVetor
 * Crie uma função que retorne um novo vetor com os valores do vetor original mais dois novos valores
 * @param {number[]} vetor Vetor de números
 * @param {number} valor1 Primeiro valor a ser adicionado
 * @param {number} valor2 Segundo valor a ser adicionado
 * @returns {number[]} Retorna um novo vetor com os valores do vetor original mais dois novos valores
 * @example
 * criaNovoVetor([1, 2, 3], 4, 5) // [1, 2, 3, 4, 5]
 * criaNovoVetor([1, 2, 3], 0, 0) // [1, 2, 3, 0, 0]
 */

 

//Início do seu código

//function criarNovoVetor(v:number[], v1:number, v2:number){
    

//}


//Fim do seu código


/**
 * Exercício 02 - divisivelPor11
 * Nome da função - divisivelPor11
 * Crie uma função que retorna um array com os números divisíveis por 11 no intervalo
 * @param {number} min Número mínimo
 * @param {number} max Número máximo
 * @returns {number[]} Retorna um array com os números divisíveis por 11 no intervalo
 * @example
 *  divisivelPor11(1, 100) // [11, 22, 33, 44, 55, 66, 77, 88, 99]
 *  
 * divisivelPor11(11, 110) // [11, 22, 33, 44, 55, 66, 77, 88, 99, 110]
 */

//Início do seu código

//Fim do seu código
//(i%11==0)
 

//Promessas
//síncronas e assíncronas
//Paralelismo -> paralelo
//síncrona = tem certeza que vai executar
//paralelo = executa mais de uma coisa ao mesmo tempo
//assíncrona = não tem paralelismo = marca um trecho de código para executar depois

/*console.log("Inicio da execução do código")
//async function funcao(){
const funcao = async ()=>{
    const prom =
    new Promise<string>((resolve,reject)=>{
    setTimeout(function handle(){
    reject("Executei a função")
    },5000)
})
return prom
   

}
try{
const resultado = await funcao()
console.log(resultado)
}
catch(erro){
    console.log("mensagem de erro foda:"+erro)
}

console.log("Fim da execução do código")

try { TENTE
executar algo
caminho feliz -> onde tudo da certo :P
resolve()
sem erro

}
catch(erro){se não der certo
algo que der errado
reject
throw
erros de codigo[entre outros
}

Crie uma função que tenha 50% de chance de retornar "tere" após 5 segundos
 * ou a função devolve o valor null
 * function devolveTere()
 * E faça o tratamento do erro com o try e catch
 * Math.random()>=0.5{}
 


//Funções de vetores -> revisão
//FIND
const vetor = [1,2,3,4,5,6,7]
//procurar -> find
//ele procura o que nós mandarmos
//então temos que criar uma função que retorne verdadeiro
//para o que estamos buscando e falso para o que não estamos buscando
function encontrarVetor(num:number){
    if(num===3){
        return true
    }
    else{
        return false
    }

}
console.log(vetor.find(encontrarVetor))

//ou (mesma coisa, mas de forma reduzida)

//console.log(vetor.find((num:number)=>num==3))

//FILTER
const pessoas = [{id:1,nome:"Bia"},{id:2,nome:"Taehyun"}]
console.log(pessoas.filter((p)=>p.id>=1))

//MAP
//tambem vamos passar uma função para ele
//e ele vai aplicar a função de cada elemento do vetor
//e cria um vetor transformado pela função
function transforma(x:number){
    return x**2
}

const r = vetor.map(transforma)
console.log(r)

//ou
//const r = vetor.map((x)=>x+2)

//SPREAD

const vetor2 = vetor
const vetor3 = [...vetor,...vetor]
vetor2[0] = 10
vetor3[1] = 10

console.log(vetor3)

const [posicao1,posicao2,...resto] = vetor3
console.log(posicao1,posicao2,resto)
/// ... (faz uma cópia)

const {id} =pessoas[0]!
console.log(id)*/


import mysql from 'mysql2/promise';
import express from 'express'
const app = express()
app.use(express.json())
const connection = mysql.createPool({
    host: 'localhost',
    user: 'root',
    database: 'aula1',
});
app.get("/pessoas", async (req, res) => {
    try {
        const [resultado, campos] =
            await connection.execute(`SELECT * FROM pessoa`)
        console.log(resultado)
        res.status(200).json(resultado)
    } catch (err) {
        console.log(err);
        if (err instanceof Error && 'code' in err && err.code === 'ECONNREFUSED') {
            res.status(500).json({ mensagem: "Erro: Ligue o LARAGON!" })
        }
        else if (err instanceof Error && 'code' in err && err.code === 'ER_BAD_DB_ERROR') {
            res.status(500).json({ mensagem: "Erro: Crie o banco de dados ou confira se o nome está correto!" })
        }
        else if (err instanceof Error && 'code' in err && err.code === 'ER_ACCESS_DENIED_ERROR') {
            res.status(500).json({ mensagem: "Erro: Confira o Usuario e Senha da Conexão!" })
        }
        else if (err instanceof Error && 'code' in err && err.code === 'ER_NO_SUCH_TABLE') {
            res.status(500).json({ mensagem: "Erro: Confira o nome da tabela no banco ou crie a tabela!" })
        }
        else if (err instanceof Error && 'code' in err && err.code === 'ER_PARSE_ERROR') {
            res.status(500).json({ mensagem: "Erro: Confira o código SQL do EXECUTE!" })
        }
        else {
            res.status(500).json({ mensagem: "Erro no servidor!" })
        }
    }
})//listar
app.post("/pessoas", async (req, res) => {
    try {
        //const preparacao = await connection.prepare("select * from pessoa");
        const { id, nome } = req.body
        //Valide se o id e o nome foram passados corretamente. (Algum valor)
        //Se não foram, retorne o código 400 com a mensagem "id ou nome inválidos"
        //Não deixe o código executar a parte de baixo quando for inválido.
        if(!id||!nome)
            return res.status(500).json({mensagem:"Erro: Os dados de id ou nome estão incorretos!"})

        const [resultado, campos] =
            await connection.execute(`insert into pessoa values (?,?)`, [id, nome])
        console.log(resultado)
        res.status(201).json({ mensagem: "Sucesso" })
    } catch (err) {
        console.log(err);
        if (err instanceof Error && 'code' in err && err.code === 'ECONNREFUSED') {
            res.status(500).json({ mensagem: "Erro: Ligue o LARAGON!" })
        }
        else if (err instanceof Error && 'code' in err && err.code === 'ER_BAD_DB_ERROR') {
            res.status(500).json({ mensagem: "Erro: Crie o banco de dados ou confira se o nome está correto!" })
        }
        else if (err instanceof Error && 'code' in err && err.code === 'ER_ACCESS_DENIED_ERROR') {
            res.status(500).json({ mensagem: "Erro: Confira o Usuario e Senha da Conexão!" })
        }
        else if (err instanceof Error && 'code' in err && err.code === 'ER_NO_SUCH_TABLE') {
            res.status(500).json({ mensagem: "Erro: Confira o nome da tabela no banco ou crie a tabela!" })
        }
        else if (err instanceof Error && 'code' in err && err.code === 'ER_PARSE_ERROR') {
            res.status(500).json({ mensagem: "Erro: Confira o código SQL do EXECUTE!" })
        }
        else {
            res.status(500).json({ mensagem: "Erro no servidor!" })
        }
    }
})//Inserir
app.post("/cadastro_produto", async (req, res) => {
    try {
        //const preparacao = await connection.prepare("select * from pessoa");
        const { id,nome,categoria,preco,data_criacao,data_modificacao } = req.body
    
        //Valide se o id e o nome foram passados corretamente. (Algum valor)
        //Se não foram, retorne o código 400 com a mensagem "id ou nome inválidos"
        //Não deixe o código executar a parte de baixo quando for inválido.
        if(!id||!nome||!categoria||!preco||!data_criacao||!data_modificacao)
            return res.status(500).json({mensagem:"Erro: Os dados de id,nome,categoria,preco,data_criacao,data_modificacao estão incorretos!"})

        const [resultado, campos] =
            await connection.execute(`insert into produto values (?,?,?,?,?,?)`, [id,nome,categoria,preco,data_criacao,data_modificacao])
        console.log(resultado)
        res.status(201).json({ mensagem: "Sucesso" })
    } catch (err) {
        console.log(err);
        if (err instanceof Error && 'code' in err && err.code === 'ECONNREFUSED') {
            res.status(500).json({ mensagem: "Erro: Ligue o LARAGON!" })
        }
        else if (err instanceof Error && 'code' in err && err.code === 'ER_BAD_DB_ERROR') {
            res.status(500).json({ mensagem: "Erro: Crie o banco de dados ou confira se o nome está correto!" })
        }
        else if (err instanceof Error && 'code' in err && err.code === 'ER_ACCESS_DENIED_ERROR') {
            res.status(500).json({ mensagem: "Erro: Confira o Usuario e Senha da Conexão!" })
        }
        else if (err instanceof Error && 'code' in err && err.code === 'ER_NO_SUCH_TABLE') {
            res.status(500).json({ mensagem: "Erro: Confira o nome da tabela no banco ou crie a tabela!" })
        }
        else if (err instanceof Error && 'code' in err && err.code === 'ER_PARSE_ERROR') {
            res.status(500).json({ mensagem: "Erro: Confira o código SQL do EXECUTE!" })
        }
        else {
            res.status(500).json({ mensagem: "Erro no servidor!" })
        }
    }
})//Inserir

app.get("/listar_produtos", async (req, res) => {
    try {
        const [resultado, campos] =
            await connection.execute(`SELECT * FROM produto`)
        console.log(resultado)
        res.status(200).json(resultado)
    } catch (err) {
        console.log(err);
        if (err instanceof Error && 'code' in err && err.code === 'ECONNREFUSED') {
            res.status(500).json({ mensagem: "Erro: Ligue o LARAGON!" })
        }
        else if (err instanceof Error && 'code' in err && err.code === 'ER_BAD_DB_ERROR') {
            res.status(500).json({ mensagem: "Erro: Crie o banco de dados ou confira se o nome está correto!" })
        }
        else if (err instanceof Error && 'code' in err && err.code === 'ER_ACCESS_DENIED_ERROR') {
            res.status(500).json({ mensagem: "Erro: Confira o Usuario e Senha da Conexão!" })
        }
        else if (err instanceof Error && 'code' in err && err.code === 'ER_NO_SUCH_TABLE') {
            res.status(500).json({ mensagem: "Erro: Confira o nome da tabela no banco ou crie a tabela!" })
        }
        else if (err instanceof Error && 'code' in err && err.code === 'ER_PARSE_ERROR') {
            res.status(500).json({ mensagem: "Erro: Confira o código SQL do EXECUTE!" })
        }
        else {
            res.status(500).json({ mensagem: "Erro no servidor!" })
        }
    }
})//listar

app.get("/listar_produtos_informatica", async (req, res) => {
    try {
        const [resultado, campos] =
            await connection.execute(`SELECT * FROM produto WHERE categoria='informática'`)
        console.log(resultado)
        res.status(200).json(resultado)
    } catch (err) {
        console.log(err);
        if (err instanceof Error && 'code' in err && err.code === 'ECONNREFUSED') {
            res.status(500).json({ mensagem: "Erro: Ligue o LARAGON!" })
        }
        else if (err instanceof Error && 'code' in err && err.code === 'ER_BAD_DB_ERROR') {
            res.status(500).json({ mensagem: "Erro: Crie o banco de dados ou confira se o nome está correto!" })
        }
        else if (err instanceof Error && 'code' in err && err.code === 'ER_ACCESS_DENIED_ERROR') {
            res.status(500).json({ mensagem: "Erro: Confira o Usuario e Senha da Conexão!" })
        }
        else if (err instanceof Error && 'code' in err && err.code === 'ER_NO_SUCH_TABLE') {
            res.status(500).json({ mensagem: "Erro: Confira o nome da tabela no banco ou crie a tabela!" })
        }
        else if (err instanceof Error && 'code' in err && err.code === 'ER_PARSE_ERROR') {
            res.status(500).json({ mensagem: "Erro: Confira o código SQL do EXECUTE!" })
        }
        else {
            res.status(500).json({ mensagem: "Erro no servidor!" })
        }
    }
})//listar

app.get("/listar_produtos_caros", async (req, res) => {
    try {
        const [resultado, campos] =
            await connection.execute(`SELECT * FROM produto WHERE preco>100`)
        console.log(resultado)
        res.status(200).json(resultado)
    } catch (err) {
        console.log(err);
        if (err instanceof Error && 'code' in err && err.code === 'ECONNREFUSED') {
            res.status(500).json({ mensagem: "Erro: Ligue o LARAGON!" })
        }
        else if (err instanceof Error && 'code' in err && err.code === 'ER_BAD_DB_ERROR') {
            res.status(500).json({ mensagem: "Erro: Crie o banco de dados ou confira se o nome está correto!" })
        }
        else if (err instanceof Error && 'code' in err && err.code === 'ER_ACCESS_DENIED_ERROR') {
            res.status(500).json({ mensagem: "Erro: Confira o Usuario e Senha da Conexão!" })
        }
        else if (err instanceof Error && 'code' in err && err.code === 'ER_NO_SUCH_TABLE') {
            res.status(500).json({ mensagem: "Erro: Confira o nome da tabela no banco ou crie a tabela!" })
        }
        else if (err instanceof Error && 'code' in err && err.code === 'ER_PARSE_ERROR') {
            res.status(500).json({ mensagem: "Erro: Confira o código SQL do EXECUTE!" })
        }
        else {
            res.status(500).json({ mensagem: "Erro no servidor!" })
        }
    }
})//listar

/**
 * 
 * Crie uma rota chamada `listar_produtos_caros` que retorne os produtos
 * que custem mais de R$: 100,00
 * 
 */






//Criar o servidor
app.listen(8000, () => {
    console.log("Servidor iniciado na porta 8000")
})

/*
const connection = mysql.createPool({
    host: 'localhost',
    user: 'root',
    database: 'aula1',
  });
  try {

  //const preparacao = await connection.prepare("select * from pessoa");
  const id = 6
  const nome = "Algum nome"
  const [resultado,campos] = await connection.execute(`insert into pessoa (id,nome) values (?,?)`,[id,nome])
  console.log(resultado)
  await connection.end();
} catch (err) {
  console.log(err);
}
*/

/**
 * No banco de dados 'luademel' crie uma nova tabela chamada produto
 * Na tabela produto, crie os seguintes atributos:
 * id INT
 * nome VARCHAR(300)
 * categoria VARCHAR(300)
 * preco DECIMAL(10,2)
 * data_criacao DATATIME
 * data_modificacao DATATIME
 * 
 * Crie uma rota chamada `cadastro_produto` que eu possa enviar
 * um JSON para cadastrar um novo produto no banco de dados
 * 
 * Crie uma rota chamada `listar_produtos` que retorne todos
 * os produtos cadastrados no banco de dados
 * 
 * Crie uma rota chamada `listar_produtos_informatica` que retorne
 * todos os produtos da categoria informatica
 * 
 * Crie uma rota chamada `listar_produtos_caros` que retorne os produtos
 * que custem mais de R$: 100,00
 * 
 */


//CORREÇÃO






