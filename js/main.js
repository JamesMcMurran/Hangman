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
  
  var buttonsNeedRedraw	=0;



//get the xml then start the game.
$.ajax({
	url:'words.xml',
	dataType:'xml',
	success:function(data){
		declareStartingVars();
		$(data).find('Difficulty').each(function(keyHead,valueHead){
			categories[keyHead]=new Array();
			$(valueHead).find('category').each(function(key,value){
				superKey=$(value).attr('cat');
				categories[keyHead][superKey]= $(valueHead).find('category:nth-child('+(key+1)+')').text();
				category = $(value).attr('cat');
			});
			
		});
		$(document).ready(initialise);
	},
	error: function() {
	  alert("it did not work");
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

                if(canvasVariable && canvasVariable.getContext) {
               		canvasContext = canvasVariable.getContext('2d');
                	startWelcomeScreen();  
  					
  				}else{
                alert("You can't see my canvas because your browser is old!");
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
  					//get the keyboard to pop up on mobile devices
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
