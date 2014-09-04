var social = {
    shareUrl : document.URL,
    hashTags : 'Dressformer',
    share : function( getSocial ) {
        if ( getSocial == 'fb' ){
                window.open('http://www.facebook.com/sharer.php?u='+ this.shareUrl,'facebook','width=640,height=480,toolbar=0');
	       } else if ( getSocial == 'gp' ) {
	           window.open('https://plus.google.com/share?url='+ this.shareUrl,'gp','width=640,height=480,toolbar=0');
	       } else if ( getSocial == 'tw' ) {
	           window.open('http://twitter.com/share?url='+ this.shareUrl +'&hashtags='+ this.hashTags,'twitter','width=640,height=480,toolbar=0');
	       } else if ( getSocial == 'vk' ) {
	           window.open('http://vkontakte.ru/share.php?url='+ this.shareUrl,'vk','width=640,height=480,toolbar=0');
	       }
    }
}

var URLer = {
    setSite : function() {
        var URLvalue = $('#bg_input').val();
        if (URLvalue == ''){
        } else {
        $('#bg_iframe').attr("src", URLvalue);
        $('#bg_iframe').css('display','block');
        }
    }
}

function scrollTo(target){
        var speed = 1000;
        var top = $( '#' + target ).offset().top;
        $( 'html, body' ).animate({scrollTop: top}, speed);
        return false;
}

$(function() {
    $( '#dfw_btn_dragger' ).draggable();
  });

var dfWidget = {
    _open : function() {
        $( '#dfw_bg' ).css('display', 'block');
        $( '#url_panel' ).css('top', '-80px');
        $( '#bg_iframe' ).css('padding-top', '0px');
	  	$( '#dfw_btn_dragger' ).css('display', 'none');
    },
    _close : function() {
        $( '#dfw_bg' ).css('display', 'none');
        $( '#url_panel' ).css('top', '0px');
        $( '#bg_iframe' ).css('padding-top', '56px');
	  	$( '#dfw_btn_dragger' ).css('display', 'block');
    }
}

 var dfSidebar = {
	 _show : function(sbState) {
		 $( '.df_left_sidebar' ).css('left', '0px');
		 $( '#' + sbState ).css('left', '200px');
	 }
 }

var dfGarment = {
  setting : function() {
	$( '#df_garment_set' ).css('right', '200px');
  }
}

var dfTheme = {
	
	darkTheme : false,
	
	_change : function(newCss) {
		$( '#css_theme' ).attr( 'href', 'css/'+ newCss +'.css' );
	},
	
	_swap : function() {
		if ( this.darkTheme ) {
			$( '#css_theme' ).attr( 'href', 'css/light.css' );
			this.darkTheme = false;
			$ ( 'body' ).css( 'background-image', 'url(img/bg_tile.png)' );
			$ ( '#bg_hint' ).css( 'background-color', 'rgba(256, 256, 256, 0.6);' );
			$ ( '#fd_theme_swap' ).css( 'background-color', '#fff');
			$ ( '#fd_theme_swap' ).css( 'color', '#292929');
		} else {
			$( '#css_theme' ).attr( 'href', 'css/dark.css' );
			this.darkTheme = true;
			$ ( 'body' ).css( 'background-image', 'url(img/bg_tile_dark.png)' );
			$ ( '#bg_hint' ).css( 'background-color', 'rgba(0, 0, 0, 0.4);' );
			$ ( '#fd_theme_swap' ).css( 'background-color', '#292929');
			$ ( '#fd_theme_swap' ).css( 'color', '#fff');
		}
	}
}

$(function() {
    $( document ).tooltip({
		track: true,
		show: {
			delay: 1400
		}
	});
  });