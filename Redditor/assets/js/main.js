$(function() {


	//making posts a global variable
	var posts;
	
	
	// Get the reddit posts:
	$.getJSON("http://www.reddit.com/r/funny/.json", function( data ) {
		
		var postsHTML = "";
		
		posts = data.data.children;
			console.log(posts);
			
		for( var x = 0, l = posts.length; x < l; x++ ){
			postsHTML += postTemplate(posts[x]);
		}

		$("#posting").append(postsHTML);
	});
	
	
	//Templeting of the "post' posted to the <div id="tabLandscape">
	function postTemplate(post){

		var html = "<div class=\"row clickable\" postId='"+post.data.id+"' postDomain='"+post.data.domain+"'>";
		
		if ( post.data.thumbnail == "" || post.data.thumbnail == "default" || post.data.thumbnail == "self" || post.data.thumbnail == "nsfw" ){
			html += "<div class=\"col-lg-3\" id=\"clickImg\"><img id =\"postImg\" src=\"assets/image/reddit.png\"></img></div> ";
		}
		else {
			html += "<div class=\"col-lg-3\" id=\"clickImg\"><img src='"+post.data.thumbnail+"'></img></div> ";
		}

		html += "<div class=\"col-lg-9\"> "+post.data.title+"</div>"+
			"</div>";
	
		return html;
	}
	
	
	$(document).on("click", ".clickable", function(){
		
		classCheck($(this));
		
		var id = $(this).attr("postId");
		var domain = $(this).attr("postDomain");
		contentTemplate(id, domain);
	});
	
	
	function classCheck(clickedThis){
	
		$(".clickable").removeClass("darken");
		clickedThis.addClass("darken");
	};
	
	
	//Templeting of the "iframe' posted to the <div id="contentLandscape">
	function contentTemplate(postId, postDomain){
		
		var usablePosts = _.pluck(posts, "data")
		//	console.log('UB', usablePosts);
		
		var post = _.findWhere(usablePosts, { id: postId })
		//	console.log('posts', post);
	
		$("#contentLandscape iframe").remove();
		$("#contentLandscape .imgDiv").remove();
		var contentHtml = "";
		
		if (postDomain == "i.imgur.com" || postDomain == "i.minus.com"){
			resizeImg(post.url);
		}
		else{
			contentHtml = "<iframe src="+post.url+"></iframe>";
			$("#contentLandscape").append(contentHtml);
		}
	}
	
	
	function resizeImg(imgSrc) {
	
	    var sizedImg = new Image();
	
	    sizedImg.onload = function() {
	    
			var sizedImgWidth = sizedImg.width;	    
			var sizedImgHeight = sizedImg.height;
			var sizedImgRatio = (sizedImgWidth/sizedImgHeight);
			var newImgRatio = "";
			
			contentHtml = "<div class=\"imgDiv\"><img id='imageElement' src='"+imgSrc+"'></img></div> ";
			
			var CL = $("#contentLandscape");
			var windowWidth = CL.width();
			var windowHeight = CL.height();
			CL.html(contentHtml);
			
			if (sizedImgWidth > windowWidth){
				sizedImgWidth = windowWidth;
				sizedImgHeight = (sizedImgWidth/sizedImgRatio);
				newImgRatio = (sizedImgWidth/sizedImgHeight);
			}
			
			if (sizedImgHeight > windowHeight){
				sizedImgHeight = windowHeight;
				sizedImgWidth = (windowHeight*sizedImgRatio);
				newImgRatio = (sizedImgWidth/sizedImgHeight);
			}
			
			var margTop = (windowHeight - sizedImgHeight)/2;
			var margLeft = (windowWidth - sizedImgWidth)/2;
			  		
			var imgEle = CL.find("#imageElement");
		  	imgEle.css({
		  		width: sizedImgWidth+"px",
		  		height: sizedImgHeight+"px",
			    marginLeft: margLeft+"px",
			    marginTop: margTop+"px"
			});
	    }
	    
	    sizedImg.src = imgSrc;
	}
	
		
});

