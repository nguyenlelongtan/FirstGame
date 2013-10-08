Ti.Database.install("/BiHallowGame.db","BiHallowGame");
var db = Ti.Database.open("BiHallowGame");
if(db){
	var scores=db.execute("Select score FROM Top ORDER BY score DESC LIMIT 10");
	while(scores.isValidRow()){
		$.sectionScore.add(Ti.UI.createTableViewRow({title: scores.fieldByName("score").toString(),font:{fontSize:50}}));
		scores.next();
	}
}


$.viewScore.open();
