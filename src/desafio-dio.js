//Crie uma variavel para armazenar o nome e a quantidade de experiencia(xp)
//de um heroi ,depois utilize uma estrutura de decisao para apresentar alguma
//das mensagens abaixo:
//
//Se XP for menor do que 1.000 = Ferro
//Se XP for entre 1.001 e 2.000 = Bronze
//Se XP for entre 2.001 e 5.000 = Prata
//Se XP for entre 6.001 e 7.000 = Ouro
//Se XP for entre 7.001 e 8.000 = Platina
//Se XP for entre 8.001 e 9.000 = Ascendente
//Se XP for entre 9.001 e 10.000 = Imortal
//Se XP for maior ou igual a  10.001 = Radiante

const entrada = require('prompt-sync')({sigint: true});



    
let elo;

console.log("Digite seu nome Heroi: ");
let nome = entrada();

    do{  
    console.log("Agora digite seu Xp: ");
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
                console.log("Erro ao receber xp!\nPor favor digitar elo xp\n");
              
                
            
        }//Novo problema numeros negativos entram na categoria bronze rever isso!
    }while(elo==1);

 console.log("O Herói de nome "+nome+" está no nível de "+elo);


