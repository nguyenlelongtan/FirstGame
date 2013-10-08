function viewScore(){
	var viewScore = Alloy.createController('viewScore').getView();
    viewScore.open();
};
function startGame(){
	var gameScreen = Alloy.createController('gameScreen').getView();
    gameScreen.open();
}
$.index.open();
