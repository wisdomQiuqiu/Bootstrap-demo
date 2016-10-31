'use strict'

$(function(){
	function resize(){
		//当文档加载完毕之后才会执行
		//获取屏幕宽度
		var windowWidth = $(window).width();

		//判断屏幕属于大还是小
		//根据大小为界面上的每一张轮播图设置背景
		var isSmallScreen = windowWidth  < 768;
		$('#main_ad > .carousel-inner > .item').each(function(index , elem){
			var $item = $(this);
			var imgSrc = $item.data(isSmallScreen?'image-xs':'image-lg');
			$item.css('backgroundImage' ,' url(' + $item.data(isSmallScreen?'image-xs':'image-lg') + ')');
			if (isSmallScreen) {
				$item.html('<img src="' + imgSrc + '"/>');
			}else{
				$item.empty();
			}
		});
	}
	$(window).on('resize' ,resize ).trigger('resize');

	//a的点击事件
	var $newTitle = $('.news-title');
	$('#news .nav-pills a').on('click' , function(){
		//获取当前点击元素
		//获取对应的title值
		var $this = $(this);
		var title = $this.data('title');
		$newTitle.text(title)
	});
});