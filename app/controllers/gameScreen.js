var quest;
var countQuest=0;
var score=0;
var quests =[
	{questName:"Plz Shake Ur Phone",name:"shake",type:"gesture"},	
	{questName:"Plz Click On Screen",name:"click",type:"win"},
	{questName:"Swipe To Right",name:"right",type:"win"},
	{questName:"Plz Double Click On Screen",name:"dblclick",type:"win"},
	{questName:"Swipe To Left",name:"left",type:"win"},
	{questName:"Swipe Up",name:"up",type:"win"},
	{questName:"Swipe Down",name:"down",type:"win"},
	{questName:"longpress",name:"longpress",type:"win"},			
	{questName:"twofingertap",name:"twofingertap",type:"win"}
];
quests=shuffleArray(quests);
function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}

var countTime = 4;
var intervalTime = setInterval(function()
{
	$.lbTime.text="Time : "+countTime;
    countTime--;
    if(countTime == -1){
      newQuestion();
    }
},1000);

$.gameScreen.addEventListener("click",function(){
	if(quest.name=="click"){
		answearTrue();
	}
});

$.gameScreen.addEventListener("longpress",function(){
	if(quest.name=="longpress"){
		answearTrue();
	}
});

$.gameScreen.addEventListener("swipe",function(e){
	if(quest.name==e.direction){
		answearTrue();
	}
});

$.gameScreen.addEventListener("dblclick",function(e){
	if(quest.name=="dblclick"){
		answearTrue();
	}
});

$.gameScreen.addEventListener("twofingertap",function(e){
	if(quest.name=="twofingertap"){
		answearTrue();
	}
});

Titanium.Gesture.addEventListener("shake",function(){
	if(quest.name=="shake"){
		answearTrue();
	}
});

function answearTrue(){
	score++;
	Ti.Media.vibrate();
	newQuestion();
};

function newQuestion(){
	if(countQuest==quests.length){
		clearInterval(intervalTime);			
		intervalTime=null;
		var endScreen = Alloy.createController('endScreen',{score:score}).getView();
    	endScreen.open();
	}else{
		countTime=4;
		//quest=quests[Math.floor(Math.random()*quests.length)];
		quest=quests[countQuest];
		$.lbQuest.text=quest.questName;
		countQuest++;
	}
};

newQuestion();
	
$.gameScreen.open();
