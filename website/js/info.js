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
 });