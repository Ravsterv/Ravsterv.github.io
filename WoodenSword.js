var wood = 0;
var wpc = 1;
var gold = 0;
var autoWood = 0;
var autoWSword = 0;
var autoGold = 0;
//document.getElementById('Wood').innerHTML=wood;
function woodClick(){
	
	wood+=wpc;
	document.getElementById('Wood').innerHTML=wood;
	//var totalWood = wood + wpc;
	
	//document.getElementById("Wood").innerHTML=totalWood;
	if (wood == 50){
	document.getElementById('wSword').style.visibility= 'visible';
	document.getElementById('goldSell').style.visibility = 'visible';
}	
	
}
var wspc=1;
var wsword=0;
var wswordprice=3;
var wswordsell= 2;
function wSwordClick(){
	if (wood < wswordprice){
	
	}else{
		
	wsword+=wspc;
	wood-=wswordprice;
	document.getElementById('wSWord').innerHTML=wsword;
	document.getElementById('Wood').innerHTML=wood;
	}

if (wsword == 50){
	
	document.getElementById('autoLumber').style.visibility = 'visible';
}
}
function sellSword(){
	if (wsword < 1){
	
	}else{
		wsword-=1
		gold+=wswordprice
		document.getElementById('wSWord').innerHTML=wsword;
		document.getElementById('Gold').innerHTML=gold;
	}
}
		
