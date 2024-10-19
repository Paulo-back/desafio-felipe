
const entrada = require('prompt-sync')({sigint: true});

let elo;

console.log("Digite seu nome Herói: ");
let nome = entrada();

      
    console.log("Digite seu Xp: ");

    do{
    let xp = parseInt(entrada());
    
        switch(true){
           
            case (xp>= 0 && xp <= 1000):
                elo = "Ferro";
                break;
            case(xp>= 1001 && xp<=2000):
                elo = "Bronze";
                break;
            case(xp>=2001 && xp<=5000):
                elo = "Prata";
                break;
            case(xp>=6001 && xp<=7000):
                elo = "Ouro";
                break;
            case(xp>= 7001 && xp<=8000):
                elo = "Platina";
                break;
            case(xp>= 8001 && xp<=9000):
                elo = "Ascendente";
                break;
            case(xp>= 9001 && xp<=10000):
                elo = "Imortal";
                break;
            case(xp>10000):
                elo = "Radiante";
                break;
            default:
                elo = 1;
                console.log("\nErro ao receber xp!\n\nPor favor digitar um xp válido: ");                           
           
        }
    }while(elo==1);

 console.log("O Herói de nome "+nome+" está no nível de "+elo);


