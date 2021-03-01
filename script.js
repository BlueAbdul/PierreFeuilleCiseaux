const pfs = document.getElementById('selector');
let botChoice = "";
let compteurPlayer = 0;
let compteurBot= 0;
let nulCount = 0;
const playerView = document.getElementById('player');
const botView = document.getElementById('bot');
const resultDiv = document.getElementById('result');

const bot = function(){
   
   let alea = Math.random()*10;
   let randomizer = Math.floor(alea)
   console.log(randomizer);
   if(randomizer < 3){
     botChoice = "pierre"
     botView.innerHTML = `<h1>Ordi : </h1><img src="./images/pierre.png"><h1>Pierre</h1>`;     
   } 
   if(randomizer > 3 && randomizer <= 6 ){
    botChoice = "ciseaux"
    botView.innerHTML = `<h1>Ordi : </h1><img src="./images/ciseaux.png"><h1>Ciseaux</h1>`;   
  } 
  if(randomizer > 6){
    botChoice = "feuille"
    botView.innerHTML = `<h1>Ordi : </h1><img src="./images/feuille.png"><h1>Feuille</h1>`;     
  } 
}
const playerChoice = function(){
    document.getElementById('selector').addEventListener("click", (e) => {
        let player = e.target.id
        bot();
        if(player === "pierre"){
            playerView.innerHTML = `<h1>Joueur : </h1><img src="./images/pierre.png"><h1>Pierre</h1>`;
            switch(player, botChoice){
                case 'pierre' && 'pierre':
                    console.log("nul");
                    nulCount++
                    resultDiv.innerHTML ='<h1>Match nul</h1><img src="./images/zero.png">'
                    break;
                case 'pierre' && 'ciseaux':
                    console.log("gagné");
                    compteurPlayer++
                    resultDiv.innerHTML ='<h1>Gagné</h1><img src="./images/victory.png">'
                    break;
                case 'pierre' && 'feuille':
                    console.log("perdu");
                    compteurBot++
                    resultDiv.innerHTML ='<h1>Perdu</h1><img src="./images/defeat.png">'
                    break;
            }     
          } 
          if(player === "ciseaux" ){
           playerView.innerHTML = `<h1>Joueur : </h1><img src="./images/ciseaux.png"><h1>Ciseaux</h1>`;  
           switch(player, botChoice){
            case 'ciseaux' && 'pierre':
                console.log("perdu");
                compteurBot++
                resultDiv.innerHTML ='<h1>Perdu</h1><img src="./images/defeat.png">'
                break;
            case 'ciseaux' && 'ciseaux':
                console.log("nul");
                nulCount++
                resultDiv.innerHTML ='<h1>Match nul</h1><img src="./images/zero.png">'
                break;
            case 'ciseaux' && 'feuille':
                console.log("gagné");
                compteurPlayer++
                resultDiv.innerHTML ='<h1>Gagné</h1><img src="./images/victory.png">'
                break;
           } 
         } 
         if( player === "feuille"){
           playerView.innerHTML = `<h1>Joueur : </h1><img src="./images/feuille.png"><h1>Feuille</h1>`;   
           switch(player, botChoice){
            case 'feuille' && 'pierre':
                console.log("gagné");
                compteurPlayer++
                resultDiv.innerHTML ='<h1>Gagné</h1><img src="./images/victory.png">'
                break;
            case 'feuille' && 'ciseaux':
                console.log("perdu");
                compteurBot++
                resultDiv.innerHTML ='<h1>Perdu</h1><img src="./images/defeat.png">'
                break;
            case 'feuille' && 'feuille':
                console.log("nul");
                nulCount++
                resultDiv.innerHTML ='<h1>Match nul</h1><img src="./images/zero.png">'
                break;
        }  
         } 
        console.log(botChoice);
        score()
    })
}

const score = function(){
    let pC = document.getElementById('playerCount');
    let bC = document.getElementById('botCount');
    let nC = document.getElementById('nulCount');

    pC.innerHTML = `Joueur : ${compteurPlayer}`;
    bC.innerHTML = `Ordi : ${compteurBot}`;
    nC.innerHTML = `Nuls : ${nulCount}`;

}

playerChoice()
