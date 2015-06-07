/**
 * @author James McMurran
 * 
 */

/**
 * This function is to Check the amount of times the user has missed a letter. And will call the functions to draw the two text boxes.
 * And those functions will check if the user has won.
 * 
 * @param  {Object} x	The x shift.
 * @param  {Object} y	The y shift.
 * @param  {Object} z	The % to shift in size given in 1 - .01.
 * @param  {Object} w	The width to draw.
 * @param  {Object} color	the color you want the.
 */
keyPressUp= function (x,y,z,color) {
  //This is called when key is pressed.
$(document).keyup(function(e) {
					
				var	characterPosition	= validCharacters.indexOf(String.fromCharCode(e.which));
				var	character			= String.fromCharCode(e.which);
					if (characterPosition != -1)
					{
						
						//is the character in the word
					var	characterGoodcap= wordIsArray.indexOf(validCharacters[characterPosition]);
					var	characterGood	= wordIsArray.indexOf(validCharacters[characterPosition].toLowerCase());
						if (characterGood == -1 && characterGoodcap == -1)
						{
							alert('I am sorry '+validCharacters[characterPosition]+' is not in the word.');
							
							timesMissed+=1;
							if (timesMissed==1)
							{
								drawHead(x,y,z,color);
							}
							else if (timesMissed==2)
							{
								drawHead(x,y,z,color);
								drawBody(x,y,z,color);
							}
							else if (timesMissed==3)
							{
								drawHead(x,y,z,color);
								drawBody(x,y,z,color);
								drawLeftArm(x,y,z,color);
							}
							else if (timesMissed==4)
							{
								drawHead	(x,y,z,color);
								drawBody	(x,y,z,color);
								drawLeftArm	(x,y,z,color);
								drawRightArm(x,y,z,color);
							}
							else if (timesMissed==5)
							{
								drawHead(x,y,z,color);
								drawBody(x,y,z,color);
								drawLeftArm(x,y,z,color);
								drawRightArm(x,y,z,color);
								drawLeftLeg(x,y,z,color);
							}
							else if (timesMissed==6)
							{
								drawHead		(x,y,z,color);
								drawBody		(x,y,z,color);
								drawLeftArm		(x,y,z,color);
								drawRightArm	(x,y,z,color);
								drawLeftLeg		(x,y,z,color);
								drawRightLeg	(x,y,z,color);
							}
							else if (timesMissed==7)
							{
								drawHead(x,y,z,color);
								drawBody(x,y,z,color);
								drawLeftArm(x,y,z,color);
								drawRightArm(x,y,z,color);
								drawLeftLeg		(x,y,z,color);
								drawRightLeg	(x,y,z,color);
								drawEyes(x,y,z,color);
								$(document).unbind('keyup');
								alert('I am sorry you loose. The word was '+ wordIsArray.join(''));
							}
						}
						validCharacters[characterPosition] 	= '';
						usedCharacters[characterPosition] 	= character;
						drawLetterBank();
						drawWordsInBox();
						
					}
					});
		  
}			

/**
 *This is the function draws the gallows. This is help full if animation is need or to move after it is coded.
 * 
 * @param  {Object} x	The x shift.
 * @param  {Object} y	The y shift.
 * @param  {Object} z	The % to shift in size given in 1 - .01.
 * @param  {Object} w	The width to draw.
 * @param  {Object} color	the color you want the.
 * @param  {Object} ropeColor	This is the color of the rope.
 * @see		The gallows	are drawn.
 *
 */
drawGallows = function  (x,y,z,w,color,ropeColor) {
  	// used this public Domain image as a starting point. http://www.wpclipart.com/world_history/punishment/gallows_lineart.png.html
                  canvasContext.lineWidth = w;
                //Now we begin the path
                canvasContext.beginPath();
                //move to start point
                canvasContext.moveTo((17+x)*z,( 652+y)*z);
                //Draw bottom square
                canvasContext.lineTo((411+x)*z,( 652+y)*z);
                canvasContext.lineTo((411+x)*z,( 627+y)*z);
                canvasContext.lineTo((20+x)*z,( 629+y)*z);
                canvasContext.closePath();
                canvasContext.fillStyle=color;
                canvasContext.fill();
                //Draw back square
                canvasContext.moveTo((411+x)*z,( 627+y)*z);
                canvasContext.lineTo((336+x)*z,( 537+y)*z);
                canvasContext.lineTo((65+x)*z,(540+y)*z);
                canvasContext.lineTo((20+x)*z,( 629+y)*z);
                canvasContext.fillStyle=color;
                canvasContext.fill();
                canvasContext.stroke();
                
                //draw vertical post
                canvasContext.lineWidth = w;
                //Now we begin the path
                canvasContext.beginPath();
                canvasContext.rect((60+x)*z,(112+y)*z,22*z,482*z);
                canvasContext.fillStyle=color;
                canvasContext.fill();
                //draw it
                canvasContext.stroke();
                
                //Draw back square
                canvasContext.moveTo((82+x)*z,( 237+y)*z);
                canvasContext.lineTo((82+x)*z,( 199+y)*z);
                canvasContext.lineTo((134+x)*z,(112+y)*z);
                canvasContext.lineTo((153+x)*z,(112+y)*z);
                
                //Draw bottom top bar
                canvasContext.moveTo((41+x)*z,( 111+y)*z);
                canvasContext.lineTo((36+x)*z,( 96+y)*z);
                canvasContext.lineTo((257+x)*z,(93+y)*z);
                canvasContext.lineTo((245+x)*z,(112+y)*z);
                canvasContext.closePath();
                
                //Draw top of top bar
                canvasContext.moveTo((36+x)*z,( 96+y)*z)
                canvasContext.lineTo((257+x)*z,(93+y)*z);
                canvasContext.lineTo((257+x)*z,(64+y)*z);
                canvasContext.lineTo((36+x)*z,(64+y)*z);
                 canvasContext.closePath();
                
                canvasContext.fillStyle=color;
                canvasContext.fill();
                canvasContext.stroke();
                
                //draw rope
                canvasContext.lineWidth = w;
                canvasContext.beginPath();
                canvasContext.rect((194+x)*z,(98+y)*z,8*z,90*z);
                canvasContext.fillStyle=ropeColor; 
                canvasContext.fill();
                //draw it                
                canvasContext.stroke();
}



/**
 * This is used to display the text in a chat bubble. And to show it in a typewriter method.
 * 
 * @param {Object} text The text you would like to be typed out on screen.
 * @param {Object} speed The speed the text is written at.
 * @see				Text being typed into the talk bubble.
 */
textToScreen = function (x,y,z,text,speed,textColor,bgColor) {
  talkbubble(x,y,z,textColor,bgColor);
  	canvasContext.font = '7pt sans';
	canvasContext.fillStyle = textColor;
	var textIs = "\
Hello friend I am Tom.\n\
As you can see I am set to go to the gallows.\n\
I am an innocent man. It was my twin brother. I promise.\n\
The judge is a betting man and loves word puzzles.\n\
So I bet him that I could get someone to solve his puzzle.\n\
Will you please help me?"
	textIs = textIs.split('\n')
		$(textIs).each(function(index,text) {
      		canvasContext.fillText( text, 280, 95 + index*10);
      	});
}

talkbubble = function(x,y,z,textColor,bgColor){
	canvasContext.beginPath();
	canvasContext.moveTo(	(308+x)*z,(218+y)*z);
	canvasContext.arcTo(	(240+x)*z,(218+y)*z, (240+x)*z, (160+y)*z ,25	);//bottom left corner
	canvasContext.lineTo(	(240+x)*z,(137+y)*z);
	canvasContext.arcTo(	(240+x)*z,( 79+y)*z, (308+x)*z, ( 79+y)*z ,25	); // top left corner
	canvasContext.lineTo(	(461+x)*z,( 79+y)*z);
	canvasContext.arcTo(	(529+x)*z,( 79+y)*z, (529+x)*z, (137+y)*z ,25	);// top right corner
	canvasContext.lineTo(	(529+x)*z,(160+y)*z);
	canvasContext.arcTo(	(529+x)*z,(218+y)*z, (461+x)*z, (218+y)*z ,25	);// top right corner
	canvasContext.closePath();
	canvasContext.fillStyle=bgColor; 
	canvasContext.fill();
	canvasContext.strokeStyle=textColor; 
	canvasContext.stroke();
}



drawHead = function (x,y,z,color) {
	
				canvasContext.beginPath();
			    canvasContext.arc(198, 173, 35, 0, 2 * Math.PI, false);
			    canvasContext.strokeStyle=color;
			    canvasContext.restore();
			    canvasContext.stroke();
}

drawBody= function (x,y,z,color) {
			canvasContext.beginPath();
			canvasContext.rect((194+x)*z,(208+y)*z,8*z,180*z);
			canvasContext.fillStyle=color; 
            canvasContext.fill();
			canvasContext.stroke();
}

drawRightArm = function (x,y,z,color) {
		canvasContext.beginPath();
        //right arm
 		canvasContext.moveTo((204+x)*z,( 262+y)*z);//bottom inside
        canvasContext.lineTo((204+x)*z,( 250+y)*z);//top inside
        canvasContext.lineTo((274+x)*z,(182+y)*z);//top outside
        canvasContext.lineTo((281+x)*z,(187+y)*z);//bottom outside
        canvasContext.closePath();

        canvasContext.fillStyle=color; 
        canvasContext.fill();
        canvasContext.strokeStyle=color; 
		canvasContext.stroke();
}

drawLeftArm = function (x,y,z,color) {
 		canvasContext.beginPath();
		//left arm
 		canvasContext.moveTo((193+x)*z,( 250+y)*z);//top inside
        canvasContext.lineTo((124+x)*z,( 180+y)*z);//top outside
        canvasContext.lineTo((119+x)*z,(186+y)*z);//bottom outside
        canvasContext.lineTo((193+x)*z,(262+y)*z);//bottom inside
        canvasContext.closePath();
		canvasContext.fillStyle=color; 
        canvasContext.fill();
        canvasContext.strokeStyle=color; 
		canvasContext.stroke();
}

drawLeftLeg = function (x,y,z,color) {
		canvasContext.beginPath();
		//left leg
 		canvasContext.moveTo((193+x)*z,(376+y)*z);//top inside
        canvasContext.lineTo((120+x)*z,(460+y)*z);//top outside
        canvasContext.lineTo((126+x)*z,(466+y)*z);//bottom outside
        canvasContext.lineTo((193+x)*z,(388+y)*z);//bottom inside
        canvasContext.closePath();

        canvasContext.fillStyle=color; 
        canvasContext.fill();
        canvasContext.strokeStyle=color; 
		canvasContext.stroke();
}
drawRightLeg = function (x,y,z,color) {
		canvasContext.beginPath();
        //right leg
 		canvasContext.moveTo((204+x)*z,(388+y)*z);//bottom inside
       	canvasContext.lineTo((204+x)*z,(376+y)*z);//top inside
        canvasContext.lineTo((281+x)*z,(460+y)*z);//top outside
      	canvasContext.lineTo((274+x)*z,(466+y)*z);//bottom outside
        canvasContext.closePath();
        canvasContext.fillStyle=color; 
        canvasContext.fill();
        canvasContext.strokeStyle=color; 
		canvasContext.stroke();
}
drawEyes= function (x,y,z,color) {
	canvasContext.font = '15pt sans';
	canvasContext.fillStyle = color;
	canvasContext.fillText( 'X   X', 176, 178);
	canvasContext.fillText( '------', 176, 196);
}


/**
 * This is to draw the background 
 * @param {Object} top1 top half start color
 * @param {Object} top2 top half end color
 * @param {Object} bottom1 bottom half start color
 * @param {Object} bottom2 bottom half end color
 */
drawBackground = function  (top1,top2,bottom1,bottom2) {
  canvasContext.beginPath();
                if(bottom1!= undefined && bottom1!== null && bottom1 !='')
                { 
	                canvasContext.rect(0,0,600,400);
	                var bgc1 = canvasContext.createLinearGradient(300, 0, 300, 400);
	                bgc1.addColorStop(0, top1);
	                bgc1.addColorStop(1, top2);
	                canvasContext.fillStyle = bgc1;
	                canvasContext.fill();
	                
	                canvasContext.beginPath();
	                canvasContext.rect(0,300,600,500);
	                var bgc2 = canvasContext.createLinearGradient(300, 400, 300, 800);
	                bgc2.addColorStop(0, bottom1);
	                bgc2.addColorStop(1, bottom2);
	                canvasContext.fillStyle = bgc2;
	                canvasContext.fill();
                }else{
                	console.log('bottom1');
                	canvasContext.rect(0,0,600,800);
                	var bgc1 = canvasContext.createLinearGradient(300, 0, 300, 800);
	                bgc1.addColorStop(0, top1);
	                bgc1.addColorStop(1, top2);
	                canvasContext.fillStyle = bgc1;
	                canvasContext.fill();
                }
}
/**
 * Draws the Letter bank to the right
 */
drawLetterBank = function () {
		canvasContext.strokeStyle='black'; 
  		canvasContext.lineWidth = 2;
		canvasContext.beginPath();
		canvasContext.rect(573,50,20,570);
		canvasContext.fillStyle="white"; 
		canvasContext.fill();
		//draw it                
		canvasContext.stroke();
		canvasContext.font = '15pt serif';
      	canvasContext.fillStyle = 'black';
      	$(usedCharacters).each(function(index,text) {
      		canvasContext.fillText( text, 575, 100 + index*20);
      	});
}

drawWordSpace = function () {
		theWordIs = $.trim(categories[diffuculty][category]).replace(/\n/g,',').replace(/	   		/g,'');
		theWordIs = theWordIs.split(',')
		
		//letters array
		randomValue =	Math.floor(Math.random()*(theWordIs.length));
      	wordIsArray = theWordIs[randomValue].split('');
      	e = $.Event('keyup');
      	//try to give only 3 letters. this should fix it picking the same letter twice and it getting upto six letters because of duplacet letters
      	var i=0;
      	 t=1;
      	 usedCharactersInt = new Array();
      	 //for some reason it will not work unless a letter is given. lower case is not search as it only looks for caps.
	    usedCharactersInt[0] = 'a'; 
      	if(giveFirstLetter==true)
      	{
      		e.which = wordIsArray[0].toUpperCase().charCodeAt(0);
	    	$(document).trigger(e);
      	}
      	while (i<3)
      	{
      		var chrTest = (wordIsArray[Math.floor(Math.random()*wordIsArray.length)])
      console.log(chrTest); 
      		//get number of occurences
	    	var occur 	= $.grep(wordIsArray, function (n) {return n == chrTest;}).length;
	    		chrTest = chrTest.toUpperCase();
	    		occur   += $.grep(wordIsArray, function (n) {return n == chrTest;}).length;
	   console.log('occur'+occur);
	    		PreUese = chrTest.indexOf(usedCharactersInt);
	   console.log('Pre use '+PreUese);
	   usedCharactersInt[t]=chrTest;
	    		 if(PreUese==-1)
	    		 {
	    		 	e.which = chrTest.charCodeAt(0);
	    		 	$(document).trigger(e);
	    		 	i+=occur;
	    		 }
	    		 else 
	    		 {i+=.25;
	    		 console.log('in the else');
	    		}
	    		t++;
      	}
      	drawWordsInBox()
}

drawWordsInBox = function () {
		//draw box
		canvasContext.strokeStyle='black'; 
	  	canvasContext.lineWidth = 2;
		canvasContext.beginPath();
		canvasContext.rect(25,625,550,50);
		canvasContext.fillStyle="white"; 
		canvasContext.fill();
		//draw it                
		canvasContext.stroke();
		canvasContext.font = '25pt serif';
      	canvasContext.fillStyle = 'black';
      	//get the amount to off set to center it.
 	 centerOffset=(550-(30+wordIsArray.length*30))/2+25;
 	 var winyet=0;
     var noWinYet=0;
  	for (i=0; i<wordIsArray.length;i++)
      	{ 
      		//if the letter has been typed before and is in the word put it in the text box else put a _
      		if (usedCharacters.indexOf(wordIsArray[i].toUpperCase())!= -1) {
      			canvasContext.fillText( wordIsArray[i], 30+i*30+centerOffset, 650 );
      			 winyet=1;
      		}else{
      		canvasContext.fillText( "_", 30+i*30+centerOffset, 650 );
      		//there are still words to be found
      		 noWinYet=1;
      		}
      	}
      if (winyet==1 && noWinYet == 0)
      { 
      	winGame();
      }
}

addGameButtons = function (x,y,z) {
    var imageNewGameBlue = new Image();
 	  imageNewGameBlue.src = 'images/newGameBlue.png';
      imageNewGameBlue.onload = function() {
      canvasContext.drawImage(imageNewGameBlue, 380, 20);   	
      }
    var imageOptionsBlue = new Image();
 	  imageOptionsBlue.src = 'images/optionsBlue.png';
      imageOptionsBlue.onload = function() {
      canvasContext.drawImage(imageOptionsBlue, 500, 20);   	
      }
    buttonsNeedRedraw=0;
}

hoverButtonsInGame = function (x,y,z) {
  $("#hangman").mousemove(function(e){
			//start game button
			//60 190 -- top left corner
			//280 265 -- bottom right 
			var imageNewGameGreen = new Image();
				imageNewGameGreen.src = 'images/newGameGreen.png';
			var imageOptionsGreen = new Image();
			 	imageOptionsGreen.src = 'images/optionsGreen.png';
			 	
	      if (e.pageX>380&&e.pageX<490&&e.pageY>20&&e.pageY< 40)
	      {
			      imageNewGameGreen.onload = function() {
			      	canvasContext.drawImage(imageNewGameGreen, 380, 20);   	
			      }
			      buttonsNeedRedraw=1;
	      }
	      else if (e.pageX>500&&e.pageX<580&&e.pageY>20&&e.pageY< 40)
	      {
			      imageOptionsGreen.onload = function() {
			      	canvasContext.drawImage(imageOptionsGreen, 500, 20)
			      }
			      buttonsNeedRedraw=1;
	      }
	      else if (buttonsNeedRedraw==1){
	      	addGameButtons(x,y,z)
	      }
	});
}

checkIfGameMenuButtonsClicked = function (x,y,z) {
	$("#hangman").click(function(e){
		//new Game
		if (e.pageX>380&&e.pageX<490&&e.pageY>20&&e.pageY< 40)
	      {
	      	$('#hangman').unbind();
	      	playAgain();
	      }
	     //options
	     if (e.pageX>500&&e.pageX<580&&e.pageY>20&&e.pageY< 40)
	      {
	      	window.open('options.html','','width=500,height=300');
	      }
	});
}

winGame = function () {
	animationFrameCount=0;
	var ctx = document.getElementById('hangman').getContext('2d');
	//The image is loaded when page loads so we can just call it here. This is nice for slow connections.
	imagejumpOffGallows = document.getElementById('winSpiteSheet');
	jumpOffGallows();
//	}
}


jumpOffGallows = function  () {

	if(animationFrameCount>=357)
	{
		addGameButtons();
	}
	else
	{
			//redraw screen
	drawBackground("white",'#0000fe','#00fe42','#663300')
  	//addGameButtons(); buttons flash if this is run
  	drawGallows(0,-50,1,2,'#663300','#e7c5aa');
  	canvasContext.font = '35pt sans';
	canvasContext.fillStyle = 'red';	
  	canvasContext.fillText( 'You Win', 362, 236);
  	drawLetterBank();	
  	
  		//draw words box because it goes nuts if you try to do the function
  			//draw box
		canvasContext.strokeStyle='black'; 
	  	canvasContext.lineWidth = 2;
		canvasContext.beginPath();
		canvasContext.rect(25,625,550,50);
		canvasContext.fillStyle="white"; 
		canvasContext.fill();
		//draw it                
		canvasContext.stroke();
		canvasContext.font = '25pt serif';
      	canvasContext.fillStyle = 'black';
      	//get the amount to off set to center it.
 	 	centerOffset=(550-(30+wordIsArray.length*30))/2+25;
 	 	for (i=0; i<wordIsArray.length;i++)
      	{ canvasContext.fillText( wordIsArray[i], 30+i*30+centerOffset, 650 );}
  	
  			//textToScreen(30,1,1,1,1,'black','white');
  		xx= (animationFrameCount%52)*160;
  		yy= Math.floor(animationFrameCount/52)*225;
  	//draw image
	//drawImage(image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight)
    canvasContext.drawImage(imagejumpOffGallows,xx,yy,  160,225  ,5,115  ,330,500);   	
	
		setTimeout(jumpOffGallows,20);
		animationFrameCount++;
	}
	
 	
}
