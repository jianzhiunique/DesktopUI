function getWindowWidth(){
	 if(window.innerWidth)
	 {
	 	return window.innerWidth;
	 }
	 else
	 {
		return document.documentElement.offsetWidth;
	 }
  }
  function getWindowHeight(){
	 if(window.innerHeight)
	 {
	 	return window.innerHeight;
	 }
	 else
	 {
		return document.documentElement.offsetHeight;
	 }
  }
  function myWindow(width,height)
  {
	  this.width=width;
	  this.height=height;
  }
  function closewindow(windowobj){
	  windowobj.parentNode.parentNode.parentNode.parentNode.removeChild(windowobj.parentNode.parentNode.parentNode);
  }
  
  function minwindow(windowobj){
	  $(windowobj.parentNode.parentNode.parentNode).fadeOut("slow");
  }
  
  function maxwindow(windowobj){
	  var type=false;
	  var aid="#"+$(windowobj.parentNode.parentNode.parentNode).attr("id").substring(6);
	  
	  if($(aid).attr("type-data")=="2"){type=true;}
	  
	  var add=parseInt(getWindowHeight()-$(windowobj.parentNode.parentNode.parentNode).css("height").replace(/[^0-9]/ig,""));
	  var new1=parseInt($(windowobj.parentNode.parentNode.parentNode).children(".windowmain").css("height").replace(/[^0-9]/ig,""))+add;
	  if(!type)
	  {
		  var new2=parseInt($(windowobj.parentNode.parentNode.parentNode).children(".windowmain").children("iframe").css("height").replace(/[^0-9]/ig,""))+add;
	  }
	  else
	  {
		  var new2=parseInt($(windowobj.parentNode.parentNode.parentNode).children(".windowmain").children(".windowmainleft").children("iframe").css("height").replace(/[^0-9]/ig,""))+add;
	  }
	  
	  //console.log(new1);
	  $(windowobj.parentNode.parentNode.parentNode).animate({ 
		    width: getWindowWidth(),
		    height: getWindowHeight(),
		    left:"0",
		    top:"0"
		  }, 500 );
	  $(windowobj.parentNode.parentNode.parentNode).children(".windowmain").animate({ 
		    height: new1
		  }, 500 );
	  if(!type)
	  {
		  $(windowobj.parentNode.parentNode.parentNode).children(".windowmain").children("iframe").animate({ 
			    height: new2
		  }, 500 );
	  }
	  else
	  {
		  $(windowobj.parentNode.parentNode.parentNode).children(".windowmain").children(".windowmainleft").children("iframe").animate({ 
			    height: new2
		  }, 500 );
		  $(windowobj.parentNode.parentNode.parentNode).children(".windowmain").children(".windowmainright").children("iframe").animate({ 
			    height: new2
		  }, 500 );
	  }
	  
	  $(windowobj.parentNode.parentNode.parentNode).children(".windowheader").children(".windowswitch").children(".max").attr("onclick","recovery(this);")
  }
  
  function recovery(windowobj){
	  var aid="#"+$(windowobj.parentNode.parentNode.parentNode).attr("id").substring(6); 
	  var type=false;
	  if($(aid).attr("type-data")=="2"){type=true;}
	  var newheight=$(aid).attr("height-data")==undefined?600:parseInt($(aid).attr("height-data"));
	  var newwidth=$(aid).attr("width-data")==undefined?800:parseInt($(aid).attr("width-data"));
	  
	  var add=newheight-parseInt($(windowobj.parentNode.parentNode.parentNode).css("height").replace(/[^0-9]/ig,""));
	  var new1=parseInt($(windowobj.parentNode.parentNode.parentNode).children(".windowmain").css("height").replace(/[^0-9]/ig,""))+add;
	  if(!type)
	  {
		  var new2=parseInt($(windowobj.parentNode.parentNode.parentNode).children(".windowmain").children("iframe").css("height").replace(/[^0-9]/ig,""))+add;
	  }
	  else
	  {
		  var new2=parseInt($(windowobj.parentNode.parentNode.parentNode).children(".windowmain").children(".windowmainleft").children("iframe").css("height").replace(/[^0-9]/ig,""))+add;
	  }
	  
	  
	  $(windowobj.parentNode.parentNode.parentNode).animate({ 
		    width: newwidth,
		    height: newheight,
		    left:"100",
		    top:"50"
		  }, 500 );
	  $(windowobj.parentNode.parentNode.parentNode).children(".windowmain").animate({ 
		    height: new1
		  }, 500 );
	  if(!type)
	  {
		  $(windowobj.parentNode.parentNode.parentNode).children(".windowmain").children("iframe").animate({ 
			    height: new2
		  }, 500 );
	  }
	  else
	  {
		  $(windowobj.parentNode.parentNode.parentNode).children(".windowmain").children(".windowmainleft").children("iframe").animate({ 
			    height: new2
		  }, 500 );
		  $(windowobj.parentNode.parentNode.parentNode).children(".windowmain").children(".windowmainright").children("iframe").animate({ 
			    height: new2
		  }, 500 );
	  }
	  $(windowobj.parentNode.parentNode.parentNode).children(".windowheader").children(".windowswitch").children(".max").attr("onclick","maxwindow(this);")
  }
  function resizewindow(windowobj,newwidth,newheight)
  {
	  
  }

  function myApp(para)
  {
	  var htmltext=$("#appdemo").html();
	  var htmlele=$(htmltext);
	  if(para.appname){
		  var appname=para.appname;
		  htmlele.children(".appname").html(appname);
		  var appid=para.appicon.split(".");
		  htmlele.attr("id",appid[0]+new Date().getTime());
		  }
	  if(para.appicon){
		  var appicon=para.appicon;
		  htmlele.children(".appicon").children("img").attr("src",htmlele.children(".appicon").children("img").attr("src")+appicon);
		  }
	  if(para.width){
		  var width=para.width;
		  htmlele.attr("width-data",width);
		  }
	  if(para.height){
		  var height=para.height;
		  htmlele.attr("height-data",height);
		  }
	  if(para.formaction){
		  var formaction=para.formaction;
		  htmlele.attr("formaction-data",formaction);
		  }
	  if(para.iurl1){
		  var iurl1=para.iurl1;
		  htmlele.attr("iurl1-data",iurl1);
		  }
	  if(para.scrolling1){
		  var scrolling1=para.scrolling1;
		  htmlele.attr("scrolling1-data",scrolling1);
		  }
	  if(para.iurl2){
		  var iurl2=para.iurl2;
		  htmlele.attr("iurl2-data",iurl2);
		  }
	  if(para.scrolling2){
		  var scrolling2=para.scrolling2;
		  htmlele.attr("scrolling2-data",scrolling2);
		  }
	  if(para.type){
		  var type=para.type;
		  htmlele.attr("type-data",type);
		  }
	  if(para.message){
		  var message=para.message;
		  htmlele.children(".message").html(message);
		  htmlele.children(".message").css("opacity",1);
		  
		  }
	  htmlele.attr("status-data","close");
	  $(".main").append(htmlele);
  }
  
  function myWindowUI(para)
  {
	  var htmltext=$("#windowdemo").html();
	  var htmlele=$(htmltext);
	//min height:78,min:width:400
	  if(para.type!="undefined"){
		  var type=para.type;
	  }
	  else
	  {
		  var type="1";
	  }
	  type=parseInt(type);
	  if(para.width!="undefined")
	  {
		  var width=para.width;
	  }
	  else
	  {
		  var width=800;
	  }
  
	  if(para.height!="undefined")
	  {
		  var height=para.height;
	  }
	  else
	  {
		  var height=600;
	  }
	  
	  if(para.formaction!="undefined"){
		  var formaction=para.formaction;
		  htmlele.children(".windowaddress").children(".searchbar").children("form").attr("action",formaction);
	  }
	  if(para.iurl1!="undefined"){var iurl1=para.iurl1;
	  
	  }
	  if(para.scrolling1!="undefined"){
		  var scrolling1=para.scrolling1;
	  }
	  else
	  {
		  var scrolling1="yes";
	  }
	  if(para.iurl2!="undefined"){var iurl2=para.iurl2;}
	  if(para.scrolling2!="undefined"){
		  var scrolling2=para.scrolling2;
	  }
	  else
	  {
		  var scrolling2="yes";
	  }
	  
	  
	
	htmlele.css("width",width);
	htmlele.css("height",height);
	htmlele.css("zIndex","102");
	if(para.id!="undefined"){
		  htmlele.attr("id","window"+para.id);
	  }
	
	
	switch(type){
	case 1: height=height-78;//减去固定高度
			htmlele.children(".windowmain").children(".windowmainleft").remove();
			htmlele.children(".windowmain").children(".windowmainright").remove();
			htmlele.children(".windowmain").children("iframe").css("height",height);
			htmlele.children(".windowmain").children("iframe").attr("scrolling",scrolling1);
			htmlele.children(".windowmain").children("iframe").attr("src",iurl1);
			
			break;
	case 2: height=height-78;//减去固定高度
			htmlele.children(".windowmain").children("iframe").remove();
			htmlele.children(".windowmain").children(".windowmainleft").children("iframe").css("height",height-18);
			htmlele.children(".windowmain").children(".windowmainleft").children("iframe").attr("scrolling",scrolling1);
			htmlele.children(".windowmain").children(".windowmainright").children("iframe").css("height",height-18);
			htmlele.children(".windowmain").children(".windowmainright").children("iframe").attr("scrolling",scrolling2);
			htmlele.children(".windowmain").children(".windowmainleft").children("iframe").attr("src",iurl1);
			htmlele.children(".windowmain").children(".windowmainright").children("iframe").attr("src",iurl2);
			break;
	default:height=height-78;//减去固定高度
			htmlele.children(".windowmain").children(".windowmainleft").remove();
			htmlele.children(".windowmain").children(".windowmainright").remove();
			htmlele.children(".windowmain").children("iframe").css("height",height);
			htmlele.children(".windowmain").children("iframe").attr("scrolling",scrolling1);
			htmlele.children(".windowmain").children("iframe").attr("src",iurl1);
			break;
	};
	htmlele.children(".windowmain").css("height",height);
	
	$(".main").append(htmlele);
	$(".main").desktopuidrag();
	$(".main").desktopuiresizeable();
	
  }
  
  
  function createjson(obj)
  {
	  var jsontext="{";
	  jsontext+='"width":"'+obj.attr("width-data")+'",';
	  jsontext+='"height":"'+obj.attr("height-data")+'",';
	  jsontext+='"formaction":"'+obj.attr("formaction-data")+'",';
	  jsontext+='"iurl1":"'+obj.attr("iurl1-data")+'",';
	  jsontext+='"scrolling1":"'+obj.attr("scrolling1-data")+'",';
	  jsontext+='"iurl2":"'+obj.attr("iurl2-data")+'",';
	  jsontext+='"scrolling2":"'+obj.attr("scrolling2-data")+'",';
	  jsontext+='"type":"'+obj.attr("type-data")+'",';
	  jsontext+='"id":"'+obj.attr("id")+'"';
	  jsontext+="}";
	  return JSON.parse(jsontext);
	  
  }
  (function($){
	  $.fn.extend({
			  desktopui:function(){
				  initwindow();
				  resize();
				  menu();
				  return this.each(function(){
					  var obj=$(this);
					  var items=$(".app",obj);
					  items.each(function(){
						  $(this).click(function(){
							  var aid="#window"+$(this).attr("id");
							  
							  if($(".main").find($(aid)).length==0)
							  {
								  myWindowUI(createjson($(this)));
							  }
							  else
							  {
								  $(".window").css("zIndex",1);
								  //$(".main").find($(aid)).css("display","block");
								  $(".main").find($(aid)).css("zIndex",101);
								  //$(".main").find($(aid)).css("opacity",1);
								  $(".main").find($(aid)).fadeIn("slow");
							  }
							  //console.log(createjson($(this)));
							  
							});
					  });
						  
					  });
			  		}
				  }
				  );
  })(jQuery);
  
  function myPoint(){}
  var point=new myPoint();
  point.x=0;
  point.y=0;
  
  function menu(){
	//禁止火狐、IE、safari的右键菜单弹出
	document.oncontextmenu=function(e){return false;}
	//点击处理函数
	function click(e) {
	  var e=e||event;
	  if(e.which==3||e.button==2){
	  	x=e.clientX;
	  	y=e.clientY;
	    $(".menu").css({left:x,top:y,zIndex:1000,display:"none"});
	  	$(".menu").fadeIn(100);		
	  	return 2;
	  	}
	  else if (e.which==2||e.button==4||e.which==1||e.button==1){
	  	$(".menu").fadeOut(100);
	  	return 1;
	  }
	  }
	  //document.onmousedown=click;
	
	

	$(".main").mousedown(function(e){
		if(click(e)!=1)
			{
				$(".appmenulist").css("display","none");
				$(".desktopmenulist").css("display","block");
			}
		});
	$(".menu>li").mousedown(function(e){
		click(e);
		e.stopPropagation();
	});
	$(".app").mousedown(function(e){
		e.stopPropagation();
		click(e);
		var app=$(this).attr("id");
		
		$(".appmenulist").each(function(){
			$(this).attr("appname-data",app);
		});
		if(click(e)!=1)
		{
			$(".appmenulist").css("display","block");
			$(".desktopmenulist").css("display","none");
		}
		
	});
  }

  
  (function($){
	  $.fn.extend({
		  desktopuidrag:function(){
			  return this.each(function(){
				  var obj=$(this);
				  var items=$(".windowheader",obj);
				  items.each(function(){
					  $(this).mousedown(function(e){
						  $(this).parent().css("zIndex",101);
						  var disX=e.pageX-$(this).parent().offset().left;
						  var disY=e.pageY-$(this).parent().offset().top;
						  var that=$(this);
						  
						  $(document).mousemove(function(e){
							var left=e.pageX-disX;
							var top=e.pageY-disY;
							that.parent().css("left",left+"px");
							that.parent().css("top",top+"px");
							point.x=e.pageX;
							point.y=e.pageY;
						  });
						  $(document).mouseup(function(e){
							  $(".window").css("zIndex",1);
							  that.parent().css("zIndex",100);
							  
							  $(document).unbind("mousemove");
							  $(document).unbind("mouseup");
						  });
						  
						  
						  
					  });
				  });
				  
			  });
			  
			  
		  }
	  
	  });
  })(jQuery);
  
  var newwidth,newheight;
  
  (function($){
	  $.fn.extend({
		  desktopuiresizeable:function(){
			  return this.each(function(){
				  var obj=$(this);
				  var items=$(".windowbottomright",obj);
				  items.each(function(){
					  $(this).mousedown(function(e){
						  $(this).parent().parent().css("zIndex",101);
						  var disX=$(this).parent().parent().offset().left;
						  var disY=$(this).parent().parent().offset().top;
						  var that=$(this).parent();
						  
						  $(document).mousemove(function(e){
							newwidth=e.pageX-disX;
							newheight=e.pageY-disY;
							var windowobj=that;
							var aid="#"+$(windowobj).parent().attr("id").substring(6);
							  var type=false;
							  if($(aid).attr("type-data")=="2"){type=true;}
							  var add=newheight-parseInt($(windowobj).parent().css("height").replace(/[^0-9]/ig,""));
							  $(windowobj).parent().css("height",newheight);
							  $(windowobj).parent().css("width",newwidth);
							  var new1=parseInt($(windowobj).parent().children(".windowmain").css("height").replace(/[^0-9]/ig,""))+add;
							  if(!type)
							  {
								  var new2=parseInt($(windowobj).parent().children(".windowmain").children("iframe").css("height").replace(/[^0-9]/ig,""))+add;
							  }
							  else
							  {
								  var new2=parseInt($(windowobj).parent().children(".windowmain").children(".windowmainleft").children("iframe").css("height").replace(/[^0-9]/ig,""))+add;
							  }
							  
							  $(windowobj).parent().children(".windowmain").css("height",new1);
							  if(!type)
							  {
								  $(windowobj).parent().children(".windowmain").children("iframe").css("height",new2);
							  }
							  else
							  {
								  $(windowobj).parent().children(".windowmain").children(".windowmainleft").children("iframe").css("height",new2);
								  $(windowobj).parent().children(".windowmain").children(".windowmainright").children("iframe").css("height",new2);
							  }
							  
							  $(aid).attr("width-data",newwidth);
							  $(aid).attr("height-data",newheight);
							point.x=e.pageX;
							point.y=e.pageY;
						  });
						  $(document).mouseup(function(e){
							  $(".window").css("zIndex",1);
							  that.parent().parent().css("zIndex",100);
							  
							  $(document).unbind("mousemove");
							  $(document).unbind("mouseup");
						  });
						  
						  
						  
					  });
				  });
				  
			  });
			  
			  
		  }
	  
	  });
  })(jQuery);
  
	  
  var date;
  function getTime(){
	  
	  date=new Date();
	  $(".timebar>span").html(date.toLocaleString());
  }
  
  function initwindow(){
	  var browserWindow=new myWindow(getWindowWidth(),getWindowHeight());
	  $("body").css("width",browserWindow.width);
	  $("body").css("height",browserWindow.height);
	  $(".main").css("height",browserWindow.height-27);
	  setInterval(getTime,1000);
  }
  function resize(){
	  $(window).resize(function (){
		  initwindow();
	  })
  }
  function openapp(obj){
	  $("#"+$(obj).attr("appname-data")).click();
  }