$(function(){
	var mySwiper1 = new Swiper('#swiper1',{
	    speed:500,
	    autoplay: 2000,
	    loop:true,
	});
	var mySwiper2 = new Swiper('.swiper-container2',{
		speed:500,
		slidesPerView : 'auto',
		resistant:true,
		resistanceRatio:0,
		autoplay: 2000,
	    loop:true
	});
	var mySwiper4 = new Swiper('#swiper4',{
		speed:500,
		slidesPerView : 'auto',
		resistant:true,
		resistanceRatio:0,
		autoplay: 2000,
	    loop:true
	});
	hideSlide();
	function hideSlide(){
		var width_dt=$('.slideMenu dl dt').width();
		var width_dd=$('.slideMenu dl dd').width();
		var div_width=width_dt+width_dd;
		$('.slideMenu').css('width',div_width+20);
		$('.slideMenu').css('right',-width_dd-20);
	}
	var flag=1;
	$('.slideMenu dl dt').click(function(){
		if(flag==1){
			var width_dd=$(this).siblings('dd').width();
			$(this).parent().parent().parent().stop().animate({right:'-20'},400);
			flag=2;
		}else if(flag==2){
			var width_dd=$(this).siblings('dd').width();
			$(this).parent().parent().parent().stop().animate({right:-width_dd-20},400);
			flag=1;
		}
	});
	$('.menu').click(function(){
		$('.menu_cont').slideDown();
	});
	$('.close').click(function(){
		$('.menu_cont').slideUp(0);
	})
	var height_body=$('body').height();
	$('.menu_cont').css('height',height_body);
	$('.menu_cont ul li').click(function(){
		$(this).addClass('on').siblings().removeClass('on');
		$(this).find('ul').slideDown(300).parent().siblings().find('ul').slideUp(300);
	})
	//滚动的捐赠故事中间部分文字居中
	center_p();
	function center_p(){
		var len=$('#swiper4 .swiper-slide').length;
		for(var i=0;i<len;i++){
			var height_p=$('#swiper4 .swiper-slide').eq(i).children('a').children('p').height();
			$('#swiper4 .swiper-slide').eq(i).find('p').css('margin-top',-height_p/2+'px');
		}
	}
	$('#swiper4 .swiper-slide').click(function(){
		$(this).addClass('on').siblings().removeClass('on');
		var time_story=$(this).find('a').attr('data-time');
		var href_story=$(this).find('a').attr('href')
		var title_story=$(this).find('a').children('p').text();
		var summary_story=$(this).find('a').children('span').text();
		$('.story_intro h2').text(title_story);
		$('.story_intro span').text(time_story);
		$('.story_intro p').text(summary_story);
		$('.story_intro a').attr('href',href_story);
	});
	getUlWidth();
	function getUlWidth(){
		var li_width=0,li_margin=0;
		for(var i=0;i<$('.link_share li').length;i++){
			li_width+=$('.link_share li').eq(i).width();
			li_margin+=parseInt($('.link_share li').eq(i).css('margin-right'));
		}
		$('.link_share ul').css({'width':li_width+li_margin,'margin-left':-(li_width+li_margin)/2});
	}
	//捐赠项目背景图片更换
	$('.donate_project_cont ul li').click(function(){
		var i=$(this).index();
		$(this).addClass('on').siblings().removeClass('on')
		$('.back_img_wrap img').eq(i).addClass('on').siblings().removeClass('on');
	})
	$('#swiper3 .swiper-slide div').click(function(){
		$('#swiper3 .swiper-slide div').removeClass('on');
		$(this).addClass('on');
	});
	$('.cont_search ul li').click(function(){
		$(this).addClass('on').siblings().removeClass('on')
	});
	$('.page_number a').click(function(){
		$(this).addClass('on').siblings().removeClass('on')
	});
	$('.page_start_end a').click(function(){
		$(this).addClass('on').siblings().removeClass('on')
	});
	$('.cont_project ul li').click(function(){
		$(this).addClass('on').siblings().removeClass('on')
	});
	$('.link_share li').click(function(){
		$(this).find('img').fadeToggle(200);
		$(this).find('p').toggleClass('on');
	})
})
