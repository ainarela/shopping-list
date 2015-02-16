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
		var shown = $(this).hasClass('completed-items-are-shown');
		var hidden = $(this).hasClass('completed-items-are-hidden');
		if (shown == true) {
			$(this).removeClass('completed-items-are-shown').addClass('completed-items-are-hidden').html('Show completed items');
			$('.list__item').has('.list__item-checkbox:checked').addClass('hide');
		} else if (hidden == true) {
			$(this).removeClass('completed-items-are-hidden').addClass('completed-items-are-shown').html('Hide completed items');
			$('.list__item').has('.list__item-checkbox:checked').removeClass('hide');
		}
	});
	$('.list').on('click', '.list__item-checkbox', function(){
		var hidden = $('.hide-show__button').hasClass('completed-items-are-hidden');
		if ( hidden == true){
			// $('.list__item').has('.list__item-checkbox:checked').not('hide').addClass('hide');
			$('.list__item').has('.list__item-checkbox:checked').addClass('hide');
		} if (this.checked){
			$('.list__item').has(this).appendTo('.list');
		}
	});	
	// Delete a particular item
	$('.list').on('click', '.delete-item-button', function(){
		$('.list__item').has(this).remove();
	});
	 
});