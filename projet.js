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
   case 1 :
      console.log("tableau de bord");
   case 2 : 
       console.log("liste des apprenants"); 
   case 3 :
       console.log("liste des apprenants");
   case 4 :
       console.log("liste des apprenants");
   case 5 :
       console.log("liste des apprenants");
   case 6 :
       console.log("liste des apprenants");
   case 7 :
       console.log("liste des apprenants");
   case 8 :
       console.log("liste des apprenants");
   case 9 :
       console.log("liste des apprenants");
   




 }




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

console.log(normaliserNom("nom  Complet"))



