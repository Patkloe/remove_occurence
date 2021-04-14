function remove_occur(s,r){
 var res;
var tab = s.split(" ");
 var search = tab.indexOf(r);
     tab[search] = " ";
 for(var i = 0; i < tab.length; i++){
      if(tab[i] !== " ")
            res = res + tab[i] + " ";
 }
return res;
}
remove_occur("The quick brown fox jumps over the lazy dog", 'the');
