$('body').append('<div class="display_ads_right google-adsense display_ads_right" id="available-fixer"></div>');

var adblock_fixer = function () {

	function adblock_fixer(params) {
        if (!(this instanceof adblock_fixer)) {
            return new adblock_fixer(params);
        }
        this.start.apply(this, arguments);
	}

	adblock_fixer.prototype = {
        start: function (arguments) {        	

        	if ( this.check_available_blocker() ) {
        		if ( arguments.action == "print" ) {
        			this.print(arguments.error_text);
        		}

        		if ( arguments.action == "redirect" ) {
        			if ( arguments.redirect_page != "" && arguments.redirect_page != undefined ) {
        				window.location.href = arguments.redirect_page;
        			}

        			else {
        				window.location.href = "404.php";
        			}
        			
        		}

        		else {
        			this.default_action( arguments.error_text );
        		}    

        		return true;    		
        	}

        	else {
        		$("#available-fixer").remove();
        		return false;
        	}
        	
        },

        check_available_blocker: function () {
        	if (  $("#available-fixer").css("display") == "none"){
        		return true;
        	}
        },

        print: function ( error_text ) {
        	$('body').empty();
        	$('body').append('<div class="adblock_info"><p>'+error_text+'</p></div>');	
        },

        default_action: function ( error_text ) {
        	this.print( error_text );
        }
	};

	return adblock_fixer;
}();

