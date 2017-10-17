var pos = ['down','left','up','right'];
var score = 0;
var ai = 0;
var lvl="";
var result = "";

function generate() { 
    document.write(Math.random());
}

function press(choice){
	var x = document.getElementById("demo").innerHTML;
	if(pos[x-1]==choice){
		document.getElementById("res").style="height:80px;width:80px;background-color:GREEN";
		document.getElementById("youS").style = "color:GREEN;font-size:40px";
		score++;
	}
	else{
		document.getElementById("res").style="height:80px;width:80px;background-color:RED";
		document.getElementById("youS").style = "color:RED;font-size:40px";
		score--;
	}
	document.getElementById("score").innerHTML = score;
}

function start(){
	lvl = document.getElementById("lvl").innerHTML;
	document.getElementById("status").innerHTML = "true";
	document.getElementById("bgsound").play();
	document.getElementById("res").disabled = true;
	document.getElementById("res").innerHTML = "";

	document.getElementById("up").disabled = false;
	document.getElementById("left").disabled = false;
	document.getElementById("down").disabled = false;
	document.getElementById("right").disabled = false;

	document.getElementById("res").style="height:80px;width:80px;background-color:WHITE";

	var pos = ['down','left','up','right'];
	var val=69;
	var countDownDate = new Date("Jan 5, 2018 15:37:25").getTime();
	var cond = document.getElementById("status").innerHTML;
	var count = 0;
	var x = setInterval(function() {

	//-->
	++count;
	document.getElementById("res").style="height:80px;width:80px;background-color:WHITE";
	var num = Math.floor((Math.random() * 4) + 1);
	var now = new Date().getTime();
	var distance = countDownDate - now;
	var seconds = Math.floor((distance % (1000 * 60)) / 1000);
	var aiAns = 0;
	document.getElementById("demo").innerHTML = num;	

	if(val!=seconds){
		document.getElementById("gameimage").src = "../assets/images/"+(pos[num-1])+".png";
	}

	if(count>=44){
		if(score>ai)
			result = "YOU WIN! :)"
		else
			result = "YOU LOSE... :(";
		window.name = "<br><br><br><br>"+result+"<br>You: <br>"+score+"<br><br>"+"AI: <br>"+ai;
		window.location = "over.html";
	}
	//<---
	//-->
	if(lvl=="easy"){
		aiAns = Math.floor((Math.random() * 4) + 1);
		if(aiAns<4){
			document.getElementById("aimage").src = "../assets/images/"+(pos[num-1])+".png";
			document.getElementById("aiS").style = "color:GREEN;font-size:40px;float:right";
			ai++;
		}
		else{
			document.getElementById("aiS").style = "color:RED;font-size:40px;float:right";
			ai--;
		}
		document.getElementById("ai").innerHTML = ai;	
	}
	else if(lvl=="normal"){
		aiAns = Math.floor((Math.random() * 20) + 1);
		if(aiAns<18){
			document.getElementById("aimage").src = "../assets/images/"+(pos[num-1])+".png";
			document.getElementById("aiS").style = "color:GREEN;font-size:40px;float:right";
			ai++;
		}
		else{
			document.getElementById("aiS").style = "color:RED;font-size:40px;float:right";
			ai--;
		}
		document.getElementById("ai").innerHTML = ai;	
	}
	else{
		aiAns = Math.floor((Math.random() * 20) + 1);
		if(aiAns<20){
			document.getElementById("aimage").src = "../assets/images/"+(pos[num-1])+".png";
			document.getElementById("aiS").style = "color:GREEN;font-size:40px;float:right";
			ai++;
		}
		else{
			document.getElementById("aiS").style = "color:RED;font-size:40px;float:right";
			ai--;
		}
		document.getElementById("ai").innerHTML = ai;	
	}
	//<--
	}, 1000);
}

function diff(choose){
	lvl = choose;
	window.name = lvl;
}