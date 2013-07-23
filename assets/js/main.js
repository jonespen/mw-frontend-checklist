var $list = $('main > ol');

$list.find('> li').each(function() {
	var $this = $(this),
		$children = $this.find('ul');

	if($children.length){
		$this.addClass('accordion');
	}
});

$list.on('click', '.accordion', function() {
	var $this = $(this);

	$this.find('ul').slideToggle('fast').end().toggleClass('on');
});

