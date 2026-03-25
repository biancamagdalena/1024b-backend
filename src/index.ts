let x:number = 10

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