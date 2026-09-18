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
choix = parseInt(prompt("Votre choix : "));
 while(isNaN(choix) || choix < 0 || choix  > 9 ){
    console.log("veiller entrer un nombre entre 0 et 9");
    choix = parseInt(prompt("Votre choix : "));
    
   
 
}

 switch(choix){
   case 0 : 
      console.log("Au revoir")
      break;
   case 1 :
       console.log("liste des apprenants");
      break ;
   case 2 : 
       console.log("liste des apprenants"); 
       break ;
   case 3 :
       ajouterApprenant();
       break ;
   case 4 :
       console.log("liste des apprenants");
       break ;
   case 5 :
       console.log("liste des apprenants");
       break ;
   case 6 :
       rechercherApprenantNom();
       break ;
   case 7 :
       console.log("liste des apprenants");
       break ;
   case 8 :
       console.log("liste des apprenants");
       break ;
   case 9 :
       console.log("liste des apprenants");
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
  let id = parseInt(prompt("ID d'apprenant :  "));
  for(let i = 0 ; i < apprenants.length ; i++){
   while(isNaN(id) || apprenants[i].id == id){
  console.log("veiller entre un nombre et un id nom utiliser !!")
    id = prompt("ID d'apprenant :  ");
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
   console.log("ajouter votre avancemment")
let jour = parseInt(prompt("ajouter la journer : "))
for(let i = 0 ; i < apprenants.resultats.length ; i++){

   while(apprenants[i].resultats[i].jour == jour){
     
  console.log("cette journer et deja enregistrer modifier la  ")
   
    jour = parseInt(prompt("ajouter la journer : "))


   }
    

    

   }
   

let exercicesTermines = parseInt(prompt("ajouter le nombre des exercices : "))
    while(isNaN(exercicesTermines) || exercicesTermines < 0 || exercicesTermines > 20 ){
      console.log("ajouter un nombre entre 1 et 20");
      exercicesTermines = parseInt(prompt("ajouter le nombre des exercices : "));
    }

    let totalExercices = 20 ;
    let challengeTermine =  false;
    if(exercicesTermines == 20){
      challengeTermine = true ;
    }
   let result = {
      jour: jour ,
       exercicesTermines: exercicesTermines,
        totalExercices: totalExercices,
         challengeTermine: challengeTermine 

         

    }
    apprenants[n].resultats.push(result)

  
   }


   function rechercherApprenantNom(){
   let cherche = prompt("entrer le nom d'apprenant : ");
     cherche  = normaliserNom(cherche);

     let apprenantChercher = false;


  while(apprenantChercher == false ){
    let cherche = prompt("entrer un nom exist : ");
     cherche  = normaliserNom(cherche);
     for(let i = 0 ; i <apprenants.length ; i++){
      
if(apprenants[i].nomComplet.includes(cherche) ){
  apprenantChercher = apprenants[i].nomComplet.includes(cherche)
  console.log(apprenants[i].nomComplet);

}  
}
  }
  

   }
   
   


   
  





















