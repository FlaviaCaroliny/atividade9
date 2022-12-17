function m(n1,n2){
return n1*n2;
}
var n1=Number(prompt('Digite um número:'))
var n2=Number(prompt('Digite outro número:'))
alert(m(n1,n2))
var x=Number(prompt('Digite um número para ser a base:'));
var y=Number(prompt('Digite o expoente'));
function quadrado(x,y){
    return x**y
}
alert(quadrado(x,y))
var n=prompt('Digite seu nome aqui:')
var an=Number(prompt('Digite seu ano de nascimento'))
let at=2022
let i=at-an;
let m1=('Olá, seu nome é ' +n);
let m2=('E sua idade é ' +i);
alert(m1);
alert(m2);
var si= Number(prompt('Digite seu saldo inicial:'))
var vc= Number(prompt('Digite o valor da compra que você deseja realizar:'))
let sf=si-vc;
if(vc<=si){
    alert('A compra ocorrreu corretamente. Seu saldo agora é de ' +sf)
}
else if (vc>si){
    alert('A compra deu errado. Seu saldo é insuficiente.')
}
var n1= Number(prompt ('Digite um número inteiro'))
var n2= Number(prompt ('Digite outro número inteiro agora'))
var sinal= prompt ('Digite um desses sinais para realizar alguma operação com esses 2 números: +(subtração) -(subtração) *(multiplicação) /(divisão)')
function a(n1,n2){
    return n1+n2;
}
function b(n1,n2){
    return n1-n2;
} 
function c(n1,n2){
    return n1*n2;
}
function d(n1,n2){
    return n1/n2;
}
if (sinal==='+'){
    alert(a(n1,n2))
}
else if (sinal==='-'){
    alert(b(n1,n2))
}
if (sinal==='*'){
    alert(c(n1,n2))
}
else if(sinal==='/'){
    alert(d(n1,n2))
}
alert('Agora você digitará alguns numéros e irá aparecer a soma e a média deles')
var n01= Number(prompt ('1° número'))
var n02=Number(prompt ('2° número'))
var n03=Number(prompt ('3° número'))
var n04=Number(prompt ('4° número'))
function soma(){
    return n01+n02+n03+n04;
}
let sn=n01+n02+n03+n04;
function média(){
    return sn/4
}
alert((soma(n01,n02,n03,n04)))
alert((média(n01,n02,n03,n04)))

