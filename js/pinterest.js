var colCount = 0;
var colWidth = 300;
var margin = 15;
var spaceLeft = 0;
var windowWidth = 0;
var blocks = [];

$(function(){
	$(window).resize(setupBlocks);
});

var scrollHandler = function(e){

}

$(window).on("scroll", _.debounce(function() {
   if($(window).scrollTop() + $(window).height() >= $(document).height() - 600) {
   	
   	console.log("bottom");

    if (lastId) {
        load({
            after: 't3_' + lastId
        });
        $(".block").show();
    }

   	$(window).ready(setupBlocks);

   }
}, 100));


function setupBlocks() {
	windowWidth = $(window).width();
	blocks = [];

	// Calculate the margin so the blocks are evenly spaced within the window
	colCount = Math.floor(windowWidth/(colWidth+margin*2));
	spaceLeft = (windowWidth - 30 - ((colWidth*colCount)+(margin*(colCount-1)))) / 2;
	console.log(spaceLeft);
	
	for(var i=0;i<colCount;i++){
		blocks.push(margin);
	}
	positionBlocks();
}

function positionBlocks() {
	$('.block').each(function(i){
		var min = Array.min(blocks);
		var index = $.inArray(min, blocks);
		var leftPos = margin+(index*(colWidth+margin));
		$(this).css({
			'left':(leftPos+spaceLeft)+'px',
			'top':min+'px'
		});
		blocks[index] = min+$(this).outerHeight()+margin;
	});
	$(".block").show();
	var maxHeight = Array.max(blocks);
	$('#reddit').stop().animate({'height':maxHeight});
	$('#footer').stop().animate({'top':maxHeight+150});
}

// Function to get the Min value in Array
Array.min = function(array) {
    return Math.min.apply(Math, array);
};

// Function to get the Max value in Array
Array.max = function(array) {
    return Math.max.apply(Math, array);
};