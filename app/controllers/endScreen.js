var args = arguments[0] || {};

$.lbScore.text="Your Score : "+args.score.toString();

var dance=true;
setInterval(function(){
	if(dance){
		$.imgDance.image="/img/dance1.jpg";
		dance=false;
	}else{
		$.imgDance.image="/img/dance2.jpg";
		dance=true;
	}
},500);
Titanium.Database.install("/BiHallowGame.db","BiHallowGame");
var db = Titanium.Database.open("BiHallowGame");
db.execute("INSERT INTO Top VALUES("+args.score.toString()+")");
db.close();
		
function viewScore(){
	var viewScore = Alloy.createController('viewScore').getView();
    viewScore.open();
};	

$.endScreen.open();
