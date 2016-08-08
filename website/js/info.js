 $(document).ready(function(){
 	// 导航栏粉色块转换
	 $("#info li").click(function(e) {
	        e.preventDefault();
	        $("#info li").removeClass("active");
	        $(this).addClass("active");

	    });
	 // 信息页面的滑动
	$(".info-basic").show();
	$(".my-duilian").hide();
	$(".my-points").hide()

	 $("#info ul li").click(function(){
	 	if($(this).attr('class')=="basic active"){
			$(".info-basic").slideDown();
			$(".my-duilian").slideUp();
	  		$(".my-points").slideUp();
		}
		else if($(this).attr('class')=="duilian active"){
			$(".my-duilian").slideDown();
			$(".info-basic").slideUp();
	  		$(".my-points").slideUp();
		}
		else {
			$(".my-points").slideDown();
			$(".my-duilian").slideUp();
	  		$(".info-basic").slideUp();
		}
  });

// 背景移动所需参数
	$sky1 = $(".section");
	$sky2 = $("#sky");
	mainwidth = $(".section").outerWidth();  
	offset = -$(".section").width();

	var offset1 = 0;//显示的云
	var offset2 = offset;//隐藏的云
 //背景云移动
 setInterval(function flutter() {
	if (offset1 >= mainwidth) {
		offset1 =  offset;
	}

	if (offset2 >= mainwidth) {
		 offset2 =  offset;
	}
	offset1 += 1;
	offset2 += 1;
	$sky1.css("background-position", offset1 + "px 0")
	
	$sky2.css("background-position", offset2 + "px 0")
}, 70);

 // $(function (){
 //    // var $width=$(".section").width();
 //    // while(1){
	//     $(".section").animate({
	//         "background-position-x": "+1500",
	//         "background-position-y": "0"
	//     }, 50000);
	// 	 $("#sky").animate({
	//         "background-position-x": "+1500",
	//         "background-position-y": "0"
	//     }, 70320);

 // 		// $(".section").css(background-position);
	// // }
	//   });
  });