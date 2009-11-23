function init_home_page() {
  if (!$('#logo').length) {
    return;
  }
  
	$('#logo').click(function() {
		function offStage() {
			$(this).css('top', '-1500px').animate({
				top: '50%',
				height: '113px'
			}, 'slow', 'swing');
		}

		$(this).stop().animate({
			top: '200%',
			height: '1500px'
		}, 'slow', 'swing', offStage);
	});
}