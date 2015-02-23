$(document).ready(function(){
	// Add a new item to the list
	$('.new-item').submit(addNewItem);

	// Hide-Show completed items
	$('.hide-show__button').click(hideShow);

	// Check-Uncheck items
	$('.list').on('click', '.list__item-checkbox', checkItems);

	// Delete a particular item
	$('.list').on('click', '.delete-item-button', function deleteItem(){
		$('.list__item').has(this).remove();
	});

	// Functions

	function addNewItem(event){
		event.preventDefault();
		var htmlStr = '', 
			text_value = $('.new-item__text').val();
		if (text_value != '') {
			htmlStr += '<li class="list__item"><input type="checkbox" class="list__item-checkbox"><label class="list__item-name">';
			htmlStr += text_value;
			htmlStr += '</label><button class="delete-item-button">&#xf217;</button></li>'
		}
		$('.list').prepend(htmlStr);
		$('.new-item__text').val('');
	};

	function isHidden(that){
		var hidden = $(that).hasClass('completed-items-are-hidden');
		return hidden;
	};

	function hideShow(event){
		event.preventDefault();
		var hidden = isHidden(this);
		if (hidden == true) {
			$(this).removeClass('completed-items-are-hidden').html('Hide completed items');
			$('.list__item').has('.list__item-checkbox:checked').removeClass('hide');
		} else {
			$(this).addClass('completed-items-are-hidden').html('Show completed items');
			$('.list__item').has('.list__item-checkbox:checked').addClass('hide');
		}
	}

	function checkItems(){
		var hidden = isHidden($('.hide-show__button'));
		var checked = $(this).is(':checked');
		if  (hidden == true && checked == true){
			$('.list__item').has(this).addClass('hide');
		} 
		if (checked == true){
			// If the item is checked, it is placed at the end of the list 
			$('.list__item').has(this).appendTo('.list');
		} else {
			// If the item is unchecked, it is placed at the beginning of the list 
			$('.list__item').has(this).prependTo('.list');
		}
	}
	 
});