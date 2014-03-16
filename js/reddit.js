var lastId;

var jsonlink = "http://www.reddit.com/r/" + subreddit + "/.json?jsonp=?"

function load(params) {
    params = params || {};
    $.getJSON(jsonlink, params, function (data) {
        var children = data.data.children;
        $.each(children, function (i, item) {
          
          path = item.data.url
          id = item.data.created_utc
          permalink = "http://www.reddit.com" + item.data.permalink

        	start = path.lastIndexOf(".")                    //find the last period character in the string
        	if (start == -1){                                //if there isn't one report the problem
        	  
        	}
        	else{
        	   start++                                       
        	   //the first character of the extension is the one after the .

        	   extension = path.substring(start, path.length).toLowerCase()  
        	   //force the rest of the string to lower case

        	   if ( (extension == "jpg") || (extension == "jpeg") || (extension == "png") || (extension == "gif") ){   
        	      //if extension is jpg or jpeg then it's ok.
                $("<div>").attr("class", "photo " + id + " block" + " animated fadeInUp").appendTo("#reddit");
                  $("<img/>").addClass("main").attr("src", path).appendTo("." + id);
                  $("<figcaption>").addClass("caption").text(item.data.title).appendTo("." + id);
                  $("<hr/>").appendTo("." + id);
                  $("<a class='permalink' target='_blank'><i class='fa fa-comments-o'></i> Comments<a/>").attr("href", permalink).appendTo("." + id);

        	   }

        	   else if ( ( path.indexOf("imgur") > -1) && ( path.indexOf("/gallery/") == -1) && ( path.indexOf("/a/") == -1) ) {   
        	   	//if imgur image without extension and not album or gallery
        	   	fixedPath = path + ".jpg"
        	    
            	    $("<div>").attr("class", "photo " + id + " block" + " animated fadeInUp").appendTo("#reddit");
                    $("<img/>").addClass("main").attr("src", fixedPath).appendTo("." + id);
                    $("<figcaption>").addClass("caption").text(item.data.title).appendTo("." + id);
                    $("<hr/>").appendTo("." + id);
                    $("<a class='permalink' target='_blank'><i class='fa fa-comments-o'></i> Comments<a/>").attr("href", permalink).appendTo("." + id);

        	   }

        	   else if (path.indexOf("http://youtu.be") > -1) {
        	   	//if link is youtu.be
        	   	videoID = path.replace('http://youtu.be/', '');
        	   	fixedPath = 'http://www.youtube.com/embed/' + videoID;
        	   	$("<iframe>").addClass("video block animated fadeInUp").attr("src", fixedPath).appendTo("#reddit");
        	   }

        	   else if (path.indexOf(".youtube.com/watch") > -1) {
        	   	//if link is .youtube.com/watch
        	   	
        	   	videoID = path.substr(path.indexOf("v=") + 2);

        	   	if (videoID.indexOf("&") > -1) {
        	   		videoID = videoID.substring(0, videoID.indexOf("&")); //remove all characters after "&"
        	   	}
        	   	
        	   	fixedPath = 'http://www.youtube.com/embed/' + videoID;
        	   	$("<iframe>").addClass("video block animated fadeInUp").attr("src", fixedPath).appendTo("#reddit");

        	   }


        	   else {
        	   	//any other link type
        	   	//http://www.youtube.com/attribution_link?a=UOyOofZ1F5s&amp;u=%2Fwatch%3Fv%3DF1wWhLzDRIY%26feature%3Dshare
        	   	//http://instagram.com/p/k2IoRwSgL3/
        	   	//http://imgur.com/a/j1Nvj
        	   	//http://imgur.com/gallery/hOLdAHW/new
        	   }     	   
        	}   


        });
        if (children && children.length > 0) {
            lastId = children[children.length - 1].data.id;
        } else {
            lastId = undefined;
        }
    });

}

load();


    
