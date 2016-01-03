var cards = ['1a','1b','1c','1d',
             '2a','2b','2c','2d',
             '3a','3b','3c','3d',
             '4a','4b','4c','4d',
             '5a','5b','5c','5d',
             '6a','6b','6c','6d',
             '7a','7b','7c','7d',
             '8a','8b','8c','8d',
             '9a','9b','9c','9d',
             '10a','10b','10c','10d',
             '11a','11b','11c','11d',
             '12a','12b','12c','12d',
             '13a','13b','13c','13d'];

var domCards = [];

function shuffle() {
	for(var j, x, i = cards.length; i; j = parseInt(Math.random() * i), x = cards[--i], cards[i] = cards[j], cards[j] = x);
	return cards;
};

function initCards(){
    shuffle(); //打乱
    domCards = [];
    for (var i in cards) {
        domCards.push("<div class='card-"+ cards[i] +"'></div>");
    }
    $("#cards").append(domCards.join(''));
    setTimeout(function(){
        $("#cards>div").each(function(i){
            $(this).css('left', 18*i +"px")
        });
    },200)

}

function deal(){
    if ($("#cards>div").length) {
        $("#desk").empty();
        $("#cards>div").slice(0,4).appendTo('#desk');
    }else{
        initCards();
    }
}

$(document).ready(function(){
    initCards();
}).on('keypress',function(e){
    switch (e.keyCode) {
        case 32: //发牌
            deal();
            break;
        default:
            return;
    }
});
