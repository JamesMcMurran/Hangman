/**
 * @author James McMurran
 * 
 */

drawButtons = function (x,y,z) {
	//(xnorm+x)*z,(ynorm+y)*z
  var imageLogo = new Image();
 	  imageLogo.src = 'images/Logo.png';
      imageLogo.onload = function() {
      canvasContext.drawImage(imageLogo, 100, 40);   	
      }
  var imageObj = new Image();
 	  imageObj.src = 'images/button.png';
      imageObj.onload = function() {
      //button image background
      //start Game
      canvasContext.drawImage(imageObj, 60, 191);
      //How To Play
      canvasContext.drawImage(imageObj, 325, 191);
      //Guest book
      canvasContext.drawImage(imageObj, 85, 400+100, 100, 50);
      //Custom Words
      canvasContext.drawImage(imageObj, 235, 400+100, 100, 50);
      //Options
      canvasContext.drawImage(imageObj, 385, 400+100, 100, 50);
      canvasContext.font = '15pt sans';
	  canvasContext.fillStyle = 'red';
	  canvasContext.fillText( 'START GAME', 97, 236);
	  canvasContext.fillText( 'HOW TO PLAY', 362, 236);
	  //top message
	  canvasContext.font = '30pt sans';
	  canvasContext.fillStyle = 'blue';
	 //canvasContext.fillText( 'Hangman', 175, 100);
	  canvasContext.fillText( 'Can you save him?', 110, 140);
	  //opts row
	  canvasContext.font = '8pt sans';
	  canvasContext.fillStyle = 'red';
	  canvasContext.fillText( 'GUESTBOOK', 		100, 430+100);
	  canvasContext.fillText( 'Custom WORDS', 	240, 430+100);
	  canvasContext.fillText( 'OPTIONS', 		410, 430+100);
	  
      };
}
checkIfMenuButtonsClicked = function (x,y,z) {
$("#hangman").click(function(e){
	if (e.pageY>190&&e.pageY<265)
      {
			//start game button
			//60 190 -- top left corner
			//280 265 -- bottom right
	      if (e.pageX>60&&e.pageX<270)
	      {
	      	$('#hangman').unbind('click');
	      	startGame();
	      }
	      //how to play
	      //325 190
	      //535 265
	      if (e.pageX>325&&e.pageX<535)
	      {
	      	howToPlay();
	      }
      }
      if(e.pageY>400+100&&e.pageY<450+100)
      {
	      //GuestBook
	      //85  400
	      //185 450
	      if (e.pageX>85&&e.pageX<185)
	      {
	      	window.open('guestBook.php','','width=1000,height=600');
	      }
	      //Custom words
	      //canvasContext.drawImage(imageObj, 235, 400, 100, 50);
	      if (e.pageX>235&&e.pageX<335)
	      {
	      	window.open('customWords.html','','width=500,height=300');
	      }
	      //options
	      //canvasContext.drawImage(imageObj, 385, 400, 100, 50);
	      if (e.pageX>385&&e.pageX<485)
	      {
	      	window.open('options.html','','width=500,height=300');
	      }
      }
   }); 

}

enterCustomWords = function(){
		//lets keep the users from pulling any funny biss. remove all but text
		var text=document.getElementById('enterTextHere').value;
		text = text.replace(/[^A-Za-z,]/g, '').replace(/,,/g, '');
		//Added it to ever difficulty so that it will show up in the options page
		window.opener.categories[0]['Custom']=text;
		window.opener.categories[1]['Custom']=text;
		window.opener.categories[2]['Custom']=text;
		window.opener.category 				 = 'Custom';
		self.close()
}

enterCustomOptions = function () {
  window.opener.diffuculty 		= $('input:radio[name=diff]:checked').val();
  window.opener.category 		= $('#category').val();
  window.opener.giveFirstLetter	= $('#giveFistLetter').is(':checked');
  self.close()
}

howToPlay= function (x,y,z) {
		//drawBackground("#a90404",'#000000');
		canvasContext.font = '14.5pt sans';
		canvasContext.fillStyle = 'blue';
		//This makes it a bit more manageable to add and edit text but it does have to have no white space.
		var textIs = "\
Hello. This is Hangman. It is a classic game in which you \n\
are to guess the missing letters in the word at the bottom \n\
of the screen. You are given three letters as hints.\n\
To make your guesses press the letter you wish to guess \n\
on your keyboard. If you are right the letter is added to \n\
the word. If you are wrong one of Hangman's body parts \n\
will be added. You have up to 7 wrong guesses before \n\
Hangman's dead. \n\
Guess the word correctly and save his life!"
		textIs = textIs.split('\n')
		$(textIs).each(function(index,text) {
      		canvasContext.fillText( text, 25, 300 + index*20);
      	});
}

//onloads
$(window).load(function() {
	//when ops page loads
	if ($("#optionsPageBody").length > 0){
	  // do something here
	 $('input:radio[name="diff"]').filter('[value="'+ window.opener.diffuculty +'"]').attr('checked', true);
	 
	 $(Object.getOwnPropertyNames(window.opener.categories[window.opener.diffuculty])).each(function(key,value){
	 	//you need to get rid of length
	 	if (value != 'length')
	 	{
	 		$('#category').append('<option value="'+value +'">'+value +'</option>');
	 	}
	 	});
	 $('#category').val(window.opener.category);
	 $('#giveFistLetter').attr('checked', window.opener.giveFirstLetter);
	}
});
