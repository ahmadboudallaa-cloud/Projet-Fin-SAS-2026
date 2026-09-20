const prompt = require("prompt-sync")();

const apprenants = [
  {
    id: 1,
    nomComplet: "Sara Dev",
    ville: "Nador",
    resultats: [
      { jour: 1, exercicesTermines: 18,
        totalExercices: 20, challengeTermine: true },
      { jour: 2, exercicesTermines: 14,
        totalExercices: 20, challengeTermine: false }
    ]
  },
  {
    id: 2,
    nomComplet: "Yassine Code",
    ville: "Oujda",
    resultats: [
      { jour: 1, exercicesTermines: 12,
        totalExercices: 20, challengeTermine: false }
    ]
  }
];
let choix = -1;
while(choix !== 0 ){
console.log("SAS PROGRESS CONSOLE");
console.log("1. Afficher le tableau de bord");
console.log("2. Afficher la liste des apprenants");
console.log("3. Ajouter un apprenant");
console.log("4. Consulter un apprenant par identifiant");
console.log("5. Ajouter ou modifier le résultat d'une journée");
console.log("6. Rechercher un apprenant par nom");
console.log("7. Filtrer les apprenants par niveau");
console.log("8. Trier les apprenants par progression décroissante");
console.log("9. Trier les apprenants par ordre alphabétique");
console.log("0. Quitter");
choix = Number(prompt("Votre choix : "));
 while(isNaN(choix) || choix < 0 || choix  > 9 ){
    console.log("veiller entrer un nombre entre 0 et 9");
    choix = parseInt(prompt("Votre choix : "));
    
   
 
}

 switch(choix){
   case 0 : 
      console.log("Au revoir")
      break;
   case 1 :
     afficherTableauDeBord()
      break ;
   case 2 : 
      afficherListeApprenants();
       break ;
   case 3 :
       ajouterApprenant();
       break ;
   case 4 :
       consulterApprenant()
       break ;
   case 5 :
       enregistrerResultat()
       break ;
   case 6 :
       rechercherApprenantNom();
       break ;
   case 7 :
       filtrerParNiveau();
       break ;
   case 8 :
       trierParProgression()
       break ;
   case 9 :
       trierParOrdreAlpha()
       break ;
   




 }
}


//  function de normalisation

function normaliserNom(nomComplet){

nomComplet = nomComplet.toLowerCase();
nomComplet = nomComplet.split(" ");
for(let i = 0 ; i < nomComplet.length ; i++){
   
   if(nomComplet[i] == ""){
   nomComplet.splice(i , 1)
   i -= 1  
   }

   let nom1 = nomComplet[i][0].toUpperCase();
   let rest = nomComplet[i].slice(1);

   nomComplet[i] = nom1 + rest 
 

}
nomComplet = nomComplet.join(" ")
return nomComplet

}

// ajouter apprenants

function ajouterApprenant(){
   console.log("Ajouter l'apprenant");
   let id = Number(prompt("ID d'apprenant :  "));
   let idTrouver = false
    for(let i = 0 ; i < apprenants.length ; i++){
    if(id == apprenants[i].id){
      idTrouver = true;
      break;
  }
}
   while(isNaN(id) || idTrouver == true){
  console.log("veiller entre un nombre et un id nom utiliser !!")
    id = parseInt(prompt("ID d'apprenant : "));
    idTrouver = false;
    for(let i = 0 ; i < apprenants.length ; i++){
    if(id == apprenants[i].id){
      idTrouver = true;
      break;
  }
}
 
  
  }
  let nom =prompt("le nom d'apprenant :  ");
   while(!isNaN(nom)){
  console.log("veiller entre un nom !!!")
    nom = prompt("le nom d'apprenant :  ");
  }

  let ville = prompt("la ville d'apprenant :  ");
   while(!isNaN(ville)){
  console.log("veiller entre une ville !!!")
    ville = prompt("la ville d'apprenant :  ");
  }
  nom = normaliserNom(nom);
  ville = normaliserNom(ville);
  console.log("l'apprenat a ete ajouter ")
  let apprenant = {
   id : id ,
   nomComplet : nom,
   ville : ville,
   resultats: []
  }
  apprenants.push(apprenant)
    }


function enregistrerResultat(){
   let index = indexId()
   console.log("ajouter votre avancemment :");
let jour = parseInt(prompt("ajouter la journer : "));

while(isNaN(jour) || jour < 1 || jour > 7 ){
  jour = parseInt(prompt("ajouter une journer entre 1 et 7 : "));
}

let exercicesTermines = parseInt(prompt("ajouter le nombre des exercices : "))
    while(isNaN(exercicesTermines) || exercicesTermines < 0 || exercicesTermines > 20 ){
      console.log("ajouter un nombre entre 0 et 20");
      exercicesTermines = parseInt(prompt("ajouter le nombre des exercices : "));
    }

    let totalExercices = 20  ;
    let challenge = prompt("challenge terminer (oui /non) : ")
    let challengeFil = challenge.toLowerCase();
    let challengeTermine = false
    while(challengeFil != "oui" && challengeFil != "non"){
       challenge = prompt("challenge terminer (oui /non) : ")
       challengeFil = challenge.toLowerCase();
    }
    if(challengeFil == "oui"){
      challengeTermine = true
    }

   let result = {
      jour: jour ,
       exercicesTermines: exercicesTermines,
        totalExercices: totalExercices,
         challengeTermine: challengeTermine 

    }
    let trouve = false;
    for(let j = 0 ; j < apprenants[index].resultats.length ; j++){
      if(apprenants[index].resultats[j].jour == jour ){
         apprenants[index].resultats[j] = result
         trouve = true
      break;
      }


    }
    
    if(trouve == false){
          apprenants[index].resultats.push(result)

    }


     
   

}
   


function rechercherApprenantNom(){
      let apprenantChercher = false;
     while(apprenantChercher == false ){
    let cherche = prompt("entrer un nom exist : ");
     cherche  = normaliserNom(cherche);


  
     for(let i = 0 ; i <apprenants.length ; i++){
      
if(apprenants[i].nomComplet.includes(cherche) ){
  apprenantChercher = true
  console.log(apprenants[i].nomComplet);

} 
}


  }
}
  
  

   
   
   

function indexId(){
   
let index = 0 ;
  let idTrouver = false
   while(idTrouver == false){
  let cherche = Number(prompt("entrer un id d'apprenant exist : "));
 
for(let i = 0 ; i < apprenants.length ; i++){
   if(apprenants[i].id == cherche){
    idTrouver = true
    index = i
    break ;
   }

  }
   }
  
  
return index
}


function consulterApprenant(){
  let index = indexId()
  let apprenant = calculerProgressionConsulter(index)
  return apprenant

}



function afficherListeApprenants(){
console.log("********** listes des apprenants **********");
   for(let i = 0 ; i < apprenants.length ; i++ ){
      let id = apprenants[i].id;
      let nom = apprenants[i].nomComplet;
      let ville = apprenants[i].ville;

      
      console.log("ID : " + id + " | Nom Complet : " + nom + " | ville : "+ ville )
   }
}
function afficherTableauDeBord(){
let nombreApprenant = apprenants.length
let progTolal = 0
let solide = 0;
let enProgression = 0;
let arenforcer = 0;
for(let i = 0 ; i < apprenants.length ; i++){

let progression = calculerProgression(i);

progTolal += progression




if(progression >= 80){
solide ++
}else if(progression >= 50 && progression <= 79 ){
enProgression ++
}else if(progression < 50 ){
arenforcer ++
}




}



let progMoyenne = progTolal / apprenants.length

console.log("Total d'apprenant : "+ nombreApprenant + " | Progression Moyenne : "+ progMoyenne +"%")
console.log("Nombre de profils Solide : " + solide)
console.log("Nombre de profils En Progression : " + enProgression)
console.log("Nombre de profils Arenforcer : " + arenforcer)
console.log("----------- apprenant -----------")
for(let i = 0 ; i < apprenants.length ; i++){
  let tab = [1 , 2 , 3 , 4 , 5 , 6 , 7 ];
  let tabChallenge = [1 , 2 , 3 , 4 , 5 , 6 , 7 ];
  

for(let j = 0 ; j < apprenants[i].resultats.length ; j++){

 for(let a = 0 ; a < tab.length ; a++){
  if(apprenants[i].resultats[j].jour == tab[a]  ){

  tab.splice(a , 1)
  
  }
 }

 for(let v = 0 ; v < tabChallenge.length ; v++){
 if(apprenants[i].resultats[j].challengeTermine == true && apprenants[i].resultats[j].jour == tabChallenge[v] ){
   tabChallenge.splice(v , 1)
 }
}
}



  let tab2 = tab.join()
  let tabChallenge2 = tabChallenge.join()
let progression = calculerProgression(i)
if(progression[i] < progression[i + 1] ){
  return progression[i]
}
let nom = apprenants[i].nomComplet

console.log("Nom d'apprenant : "+ nom + " | Progression : "+ progression + "%" + " | jour rester : "+ tab2 + " | challenges manquants : "+ tabChallenge2)

}

}




function calculerProgressionConsulter(index ){

  console.log("Apprenant trouvé : " + apprenants[index].nomComplet)
   let jour = apprenants[index].resultats.length 
   let challengeTermine = 0 
 let exercicesTermines = 0;
for(let a = 0 ; a < apprenants[index].resultats.length ; a++){
   exercicesTermines += apprenants[index].resultats[a].exercicesTermines;



if(apprenants[index].resultats[a].challengeTermine == true){
  challengeTermine ++
}



}


  let totalExercices = 20 * jour;
  let progression = (exercicesTermines / totalExercices) * 100

 console.log(apprenants[index].nomComplet + " : " + exercicesTermines + " / " + totalExercices +" exercices, progression : " + progression + " %  ,  " + jour + " journées renseignées, " + challengeTermine + " challenges terminés.")
  
}
function calculerProgression(index ){

   let jour = apprenants[index].resultats.length 
   let challengeTermine = 0 
 let exercicesTermines = 0;
for(let a = 0 ; a < apprenants[index].resultats.length ; a++){
   exercicesTermines += apprenants[index].resultats[a].exercicesTermines;



if(apprenants[index].resultats[a].challengeTermine == true){
  challengeTermine ++
}



}


  let totalExercices = 20 * jour;
  let progression = (exercicesTermines / totalExercices) * 100

return progression;  
}

function filtrerParNiveau(){
  let niveau = prompt("entrer un niveau :  "); 
  let niveauFil = niveau.toLowerCase()

while(niveauFil != "solide" && niveauFil != "en progression" && niveauFil != "a renforcer" ){
   niveau = prompt("entrer un niveau existe (Solide , En progression ou A renforcer) :")
   niveauFil = niveau.toLowerCase()
}
for(let i = 0 ; i < apprenants.length ; i++){

let progression = calculerProgression(i);

let nom = apprenants[i].nomComplet

if(progression >= 80 && niveauFil == "solide"){
console.log("Nom d'apprenant : "+ nom + " | Progression : "+ progression + "%" + " | Niveau : "+niveauFil)

}else if(progression >= 50 && progression < 80 && niveauFil == "en progression"){
console.log("Nom d'apprenant : "+ nom + " | Progression : "+ progression + "%" + " | Niveau : "+niveauFil)
}else if(progression < 50 && niveauFil == "a renforcer"){
console.log("Nom d'apprenant : "+ nom + " | Progression : "+ progression + "%" + " | Niveau : "+niveauFil)
}



}



}


function trierParOrdreAlpha(){
console.log("-----apprenant trier par ordre alphabetique----- ")


apprenants.sort((a , b) => {


return a.nomComplet.localeCompare(b.nomComplet)

})
for(let i = 0 ; i < apprenants.length ; i++){
  console.log(apprenants[i].nomComplet)
}


}

function trierParProgression(){
for(let i = 0 ; i < apprenants.length ; i++){
let progression = calculerProgression(i)
if(progression[i] < progression[i + 1] ){
  return progression[i]
}
let nom = apprenants[i].nomComplet

console.log("Nom d'apprenant : "+ nom + " | Progression : "+ progression + "%")

}

}
