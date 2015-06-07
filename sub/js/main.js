/**
 * @author James McMurran
 * 
 */

declareStartingVars = function (argument) {
  //set into a array so that letters can be removed after entered
   validCharacters	= new Array('A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z');            
  //Use a array to keep the letters alphabetical  setting them avoids a undefined error
   usedCharacters 	= new Array('','','','','','','','','','','','','','','','','','','','','','','','','','');
  //letters array
   wordIsArray 		= new Array();
  //time the player has miss a letter
   timesMissed=0;
   //animation frame stop
   animationFrameCount=373;
}
  // difficulty is how hard the game is - 0 easy 1 med 2 hard
  var diffuculty 		=2;
  // categories[Difficulty][Category]
  var categories 		= new Array();
  //current category
  var category 			= '';
 
  var giveFirstLetter	=false;
  //used with the hover to redraw the buttons 
  var buttonsNeedRedraw	=0;



//get the xml then start the game.
$.ajax({
	url:'words.xml',
	dataType:'xml',
	success:function(data){
		declareStartingVars();
		//split into the difficulty levels
		$(data).find('Difficulty').each(function(keyHead,valueHead){
			//prep the array
			categories[keyHead]=new Array();
			//Split into the categories 
			$(valueHead).find('category').each(function(key,value){
				//set default category and get category name
				category = $(value).attr('cat');
				//put the  values into categories[diff][category]
				categories[keyHead][category]= $(valueHead).find('category:nth-child('+(key+1)+')').text();
				
			});
			
		});
		$(document).ready(initialise);
	},
	error: function() {
	  alert("I am sorry I can not get the words list.");
	}
});


/**
 *This is the function that is run so get thing going
 *
 * @see       canvas is drawn and asked if you would like to play
 */
initialise = function  () {
  /**
   * This is the variable that hold the Document.getElementById of hangman
   */
canvasVariable = document.getElementById('hangman');
				//check if user can run canvas
                if(canvasVariable && canvasVariable.getContext) {
               		canvasContext = canvasVariable.getContext('2d');
                	startWelcomeScreen();  
  					
  				}else{
                alert("I am sorry your browser does not suport HTML5 Canvas.");
                }
         
}

startGame = function  () {
  					drawBackground("white",'#0000fe','#00fe42','#663300')
  					drawGallows(0,-50,1,2,'#663300','#e7c5aa');
  					//Call key press event
  					keyPressUp(1,1,1,'red');
  					drawLetterBank();
  					drawWordSpace('',diffuculty);
  					textToScreen(30,1,1,1,1,'black','white');
  					addGameButtons();
  					checkIfGameMenuButtonsClicked();
  					//get the keyboard to pop up on mobile devices. Firefox for Android works the best.
  					if( /Android|webOS|Silk|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ) {
	  					$('body').append('<input type="text" name="trickForKindle" id="trickForKindle">');
						document.getElementById ('trickForKindle').focus ();
					}
					else
					{
						hoverButtonsInGame();
					}
  					
}


startWelcomeScreen = function(){
					drawBackground("#a90404",'#000000');
					drawButtons(1,1,1);
					checkIfMenuButtonsClicked();
}

playAgain = function () {
  //reset the variables for new game
declareStartingVars();
  startGame();
}
