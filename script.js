	
	var velicina = 10;
	var createdTime;
	var clickedTime;
	var reactionTime;
	var bestresult = 10000;
	var bool = false;
	var gotovo = false;
	var vrijemePocetka;
	var tries = 10;
	
	hover();
	


	gamediv.onclick = function()
	{	
		if(bool == false)
		{
			gamediv.style.color = "black";
			gamediv.removeChild(document.getElementById("start"));
			setTimeout(kreiranjediva, (Math.random()*5000));
			bool = true;
		};
		
		circle.onclick= function()
		{	clickedTime = Date.now();
			reactionTime = (clickedTime - createdTime)/1000;
			tries--;
			/*circle.style.display ="none"; */
			$("#circle").fadeOut(200); 
			spantime.innerHTML = reactionTime+" s";
			spantries.innerHTML = tries;
			if(reactionTime < bestresult)
			{
				bestresult = reactionTime;
				spanbesttime.innerHTML = bestresult+" s";
			}
			
			if(tries == 0)
			{
				gotovo = true;
				gamediv.innerHTML="Gotova igra, tvoj najbolji rezultat je: "+bestresult+" s";
			}else
				{
				setTimeout(kreiranjediva, (Math.random()*3000)+200);
				}
		}

	};

	function hover()
	{
		gamediv.onmouseover = function()
		{	
			gamediv.style.color = "black";
			if(gotovo == false)
			{
			gamediv.style.color = "red";
			gamediv.onmouseout = function()
			{
				gamediv.style.color = "black";
			}
			}
		}
	};

	function kreiranjediva()
	{
			var x;
			x = Math.floor((Math.random()*60)+30);
			circle.style.width = x;
			circle.style.height = x;
			circle.style.marginLeft = Math.floor((Math.random()*650)+50);
			circle.style.marginTop = Math.floor((Math.random()*350)+50);	
			circle.style.backgroundColor = getRandomColor();
			if(Math.random() > 0.5)
			{
				circle.style.borderRadius = "20px";
			} else {circle.style.borderRadius = "0px"}
			circle.style.display = "block";
			createdTime = Date.now();
	};

	function getRandomColor() 
	{
    	var letters = '0123456789ABCDEF'.split('');
    	var color = '#';
    	for (var i = 0; i < 6; i++ ) 
    		{
       	 		color += letters[Math.floor(Math.random() * 16)];
    		}
    	return color;
	};
