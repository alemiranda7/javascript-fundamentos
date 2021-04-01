function main(a, b, c, d){
    let conceito;
     var media = (a + b + c + d) / 4;
     
     if(media >= 9.0){
         conceito = 'A';
     }else if(media >= 7.5){
         conceito = 'B';
     }else if(media >= 6.0){
         conceito = 'C';
     }else if(media >= 4.0){
         conceito = 'D';
     }else{
         conceito = 'F';
     }
    console.log(conceito);
 }