var wood = 0;
var wpc = 1;
var gold = 0;
var 
//document.getElementById('Wood').innerHTML=wood;
function woodClick(){
	
	wood+=wpc;
	document.getElementById('Wood').innerHTML=wood;
	//var totalWood = wood + wpc;
	
	//document.getElementById("Wood").innerHTML=totalWood;
	if (wood == 10){
	document.getElementById('wSword').style.visibility= 'visible';
}	
	
}
var wspc=1;
var wsword=0;
var wswordprice=3;
function wSwordClick(){
	if (wood < wswordprice){
	
	}else{
		
	wsword+=wspc;
	wood-=wswordprice;
	document.getElementById('wSWord').innerHTML=wsword;
	document.getElementById('Wood').innerHTML=wood;
	}
}