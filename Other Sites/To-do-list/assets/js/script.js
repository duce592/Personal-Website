var addItem = function(){
    var toAdd = $("input[name=listItem]").val();
    $('#listToPush').prepend("<p class='item'>"+toAdd+"</p>");
    $('input[type=text]').val('');
}

$(document).ready(function() {
    $('button').click(function() {
    	addItem();
    });
    $(document).on('click','.item',function(){
    	$(this).fadeOut('fast', function(){
    		$(this).remove();
		});
    });
    $(document).on('keydown',function(event) {
	    if (event.which == 13) {
	    	addItem();
	    };
    });
});