function remove_occur(s,r){
 var res;
var tab = s.split(" ");
 var search = tab.indexOf(r); // recuperation de l'index du second string en parametre de la function
     tab[search] = " "; // on fait la mise a jour de ce string dans le tableau genere.
 for(var i = 0; i < tab.length; i++){ // lecture de la table generee
      if(tab[i] !== " ")
            res = res + tab[i] + " ";
 }
return res;
}
remove_occur("The quick brown fox jumps over the lazy dog", 'the');
