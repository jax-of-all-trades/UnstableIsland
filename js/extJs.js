document.ready = function()
{
	music();
}

var curMusic = 0;

function music(){
	curMusic = Math.floor(Math.random() * 5);
	$('audio')[curMusic].play();
	$('#radio').click(function(){
		if (curMusic == -1){
			curMusic = Math.floor(Math.random() * 5);
			$('audio')[curMusic].play();
		}
		else {
			$('audio')[curMusic].pause();
			$('audio')[curMusic].currentTime = 0;
			curMusic = -1;
		}
	});
}
