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
		var h = $(this).hasClass('completed-items-are-shown');
		var s = $(this).hasClass('completed-items-are-hidden');
		if (h == true) {
			$(this).removeClass('completed-items-are-shown').addClass('completed-items-are-hidden').html('Show completed items');
			$('.list__item').has('.list__item-checkbox:checked').addClass('hide');
		} else if (s == true) {
			$(this).removeClass('completed-items-are-hidden').addClass('completed-items-are-shown').html('Hide completed items');
			$('.list__item').has('.list__item-checkbox:checked').removeClass('hide');
		}
	});
	$('.list__item-checkbox').click(function(){
		var s = $('.hide-show__button').hasClass('completed-items-are-hidden');
		if ( s == true){
			// $('.list__item').has('.list__item-checkbox:checked').not('hide').addClass('hide');
			$('.list__item').has('.list__item-checkbox:checked').addClass('hide');
		};
	});	
	// Delete a particular item
	$('.list').on('click', '.delete-item-button', function(){
		$('.list__item').has(this).remove();
	});
	 
});