timeline = () => {
    
    function VerticalTimeline( element ) {
		this.element = element;
        this.blocks = this.element.getElementsByClassName("timelineBlock");
        this.arms = this.element.getElementsByClassName("timelineArm");
        this.items = this.element.getElementsByClassName("timelineItem");
		this.offset = 0.8;
		this.hideBlocks();
	};

	VerticalTimeline.prototype.hideBlocks = function() {
        //hide timeline blocks which are outside the viewport
		if ( !"classList" in document.documentElement ) {
			return;
		}
		for( var i = 0; i < this.blocks.length; i++) {
            if( this.blocks[i].getBoundingClientRect().top > window.innerHeight*this.offset ) {
                this.arms[i].classList.add("hidden"); 
                this.items[i].classList.add("hidden"); 
            }
		}
	;}

	VerticalTimeline.prototype.showBlocks = function() {
		if ( ! "classList" in document.documentElement ) {
			return;
		}
		var self = this;
		for( var i = 0; i < this.blocks.length; i++) {
			(function(i){
				if( self.items[i].classList.contains("hidden") && self.blocks[i].getBoundingClientRect().top <= window.innerHeight*self.offset ) {
					// add bounce-in animation
					self.arms[i].classList.add("timelineItem--bounce-in");
					self.items[i].classList.add("timelineItem--bounce-in");
					self.arms[i].classList.remove("hidden");
					self.items[i].classList.remove("hidden");
				}
			})(i);
		}
	};

	var v = document.getElementById("timeline"),
        scrolling = false;
        let vt = new VerticalTimeline(v);
        window.addEventListener('scroll', function(e) {
            if (!scrolling) {
                scrolling = true;
				(!window.requestAnimationFrame) ? setTimeout(checkTimelineScroll, 250) : window.requestAnimationFrame(checkTimelineScroll);
            }
        })

	function checkTimelineScroll() {
		vt.showBlocks();
		scrolling = false;
	};
};

document.addEventListener("DOMContentLoaded", timeline());