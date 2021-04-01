/* Só temos um triangulo fomrado quando a soma de dois lados é maior do que a terceira;

   Se todos os lados forem iguais, teremos um triangulo 'equilatero'

   Se todos os lados forem diferentes, teremos um triangulo 'escaleno'

   Se apenas dois lados forem iguais, teremos um triangulo 'isosceles'

   Dependendo dos valores passados, o programa deve imprimir 'equilatero', 'escaleno', 'isosceles' ou 'Nãoé um triangulo'.

   Entrada de dados 1: a=3 b=3 c=3
   Entrada de dados 2: a=2 b=3 c=4
   Entrada de dados 3: a=4 b=4 c=6 */



function main(a, b, c){
    let ab = a + b,
       ac = a + c,
       bc = b + c;
     
     if(ab > c && ac > b && bc > a){
         if(a === b && a === c){
             console.log('Equilátero');
         }else if(a !== b && a !== c && b !== c){
             console.log('Escaleno');
         }else{
             console.log('Isósceles');
         }
     }else{
         console.log('Não é um triângulo');
     }
 
 }