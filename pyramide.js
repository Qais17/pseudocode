var nbcarac = 0;
var hauteur = 5;
var carac = "x";
var space = " ";


function ecrireLigne(){
	var ligne = "";
	//decalage
	var decalage = hauteur - 1;
    while(decalage > 0){
        ligne = ligne + space;
        decalage --; 
    }
	//mettre les caracteres
	if(nbcarac == 0){
    	ligne = ligne + carac;
		nbcarac ++;
	}else{
		nbcarac += 2;
		for(var i = nbcarac;i > 0; i--){
			ligne = ligne + carac;		
		}
				
	}
	//affichage de ligne
	console.log(ligne+"\r\n")

    hauteur --;


}
function pyramide(){
	while(hauteur != 0){
		ecrireLigne();
	}
}
pyramide();
