$(document).ready(function(){
	// Add a new item to the list
	$('.new-item').submit(function(event){
		var text_value = $('.new-item__text').val();
		event.preventDefault();
		if (text_value != '') {
			$('.list').prepend('<li class="list__item"><input type="checkbox" class="list__item-checkbox"><label class="list__item-name">'+text_value+'</label><button class="delete-item-button">&#xf217;</button></li>');
			$('.new-item__text').val('');
		}
	});
	// Hide/Show completed items
	$('.hide-show__button').click(function(event){
		event.preventDefault();
		$('.list__item').has('.list__item-checkbox:checked').hide();
	});

	 
});