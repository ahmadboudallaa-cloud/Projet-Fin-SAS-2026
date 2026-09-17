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
let choix = parseInt(prompt("Votre choix : "));
 while(isNaN(choix) || choix < 0 || choix  > 9 ){
    console.log("veiller entrer un nombre entre 0 et 9");
    choix = parseInt(prompt("Votre choix : "));
    
   
 }

 switch(choix){
   case 0 : 
      console.log("dfghjkl");
      break;
   case 1 :
      console.log("tableau de bord");
      break ;
   case 2 : 
       console.log("liste des apprenants"); 
       break ;
   case 3 :
       console.log("liste des apprenants");
       break ;
   case 4 :
       console.log("liste des apprenants");
       break ;
   case 5 :
       console.log("liste des apprenants");
       break ;
   case 6 :
       console.log("liste des apprenants");
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


//  function de normalisation

function normaliserNom(nomComplet){
nomComplet = nomComplet.toLowerCase();
nomComplet = nomComplet.split(" ");
for(let i = 0 ; i < nomComplet.length ; i++){
   
   if(nomComplet[i] == ""){
   nomComplet.splice(i , 1)
   i -= 1  
   }
 

}
nomComplet = nomComplet.join(" ")
return nomComplet

}

// ajouter apprenants

function ajouterApprenant(){
  let id = parseInt(prompt("ID d'apprenant :  "));
  while(isNaN(id)){
  console.log("veiller entre un nombre !!!")
    id = prompt("ID d'apprenant :  ");
  }
  let nom =prompt("le nom d'apprenant :  ");
   while(!isNaN(nom)){
  console.log("veiller entre un nom !!!")
    nom = prompt("le nom d'apprenant :  ");
  }

  let ville =prompt("la ville d'apprenant :  ");
   while(!isNaN(ville)){
  console.log("veiller entre une ville !!!")
    ville = prompt("la ville d'apprenant :  ");
  }
  let apprenant = {
   id : id ,
   nom : nom,
   ville : ville
  }
   apprenants.push(apprenant)
   
}








