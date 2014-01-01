/*!
 * ZUI
 * Some code copy from Bootstrap v3.0.0 by @fat and @mdo Copyright 2013 Twitter, Inc. Licensed under http://www.apache.org/licenses/LICENSE-2.0
 */
;if(typeof jQuery==="undefined"){throw new Error("ZUI requires jQuery")}+function(b){function a(){var e=document.createElement("bootstrap");var d={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",transition:"transitionend"};for(var c in d){if(e.style[c]!==undefined){return{end:d[c]}}}}b.fn.emulateTransitionEnd=function(e){var d=false,c=this;b(this).one(b.support.transition.end,function(){d=true});var f=function(){if(!d){b(c).trigger(b.support.transition.end)}};setTimeout(f,e);return this};b(function(){b.support.transition=a()})}(jQuery);+function(d){var c='[data-dismiss="alert"]';var b=function(e){d(e).on("click",c,this.close)};b.prototype.close=function(j){var i=d(this);var g=i.attr("data-target");if(!g){g=i.attr("href");g=g&&g.replace(/.*(?=#[^\s]*$)/,"")}var h=d(g);if(j){j.preventDefault()}if(!h.length){h=i.hasClass("alert")?i:i.parent()}h.trigger(j=d.Event("close.bs.alert"));if(j.isDefaultPrevented()){return}h.removeClass("in");function f(){h.trigger("closed.bs.alert").remove()}d.support.transition&&h.hasClass("fade")?h.one(d.support.transition.end,f).emulateTransitionEnd(150):f()};var a=d.fn.alert;d.fn.alert=function(e){return this.each(function(){var g=d(this);var f=g.data("bs.alert");if(!f){g.data("bs.alert",(f=new b(this)))}if(typeof e=="string"){f[e].call(g)}})};d.fn.alert.Constructor=b;d.fn.alert.noConflict=function(){d.fn.alert=a;return this};d(document).on("click.bs.alert.data-api",c,b.prototype.close)}(window.jQuery);+function(c){var b=function(e,d){this.$element=c(e);this.options=c.extend({},b.DEFAULTS,d)};b.DEFAULTS={loadingText:"loading..."};b.prototype.setState=function(g){var i="disabled";var e=this.$element;var h=e.is("input")?"val":"html";var f=e.data();g=g+"Text";if(!f.resetText){e.data("resetText",e[h]())}e[h](f[g]||this.options[g]);setTimeout(function(){g=="loadingText"?e.addClass(i).attr(i,i):e.removeClass(i).removeAttr(i)},0)};b.prototype.toggle=function(){var d=this.$element.closest('[data-toggle="buttons"]');if(d.length){var e=this.$element.find("input").prop("checked",!this.$element.hasClass("active")).trigger("change");if(e.prop("type")==="radio"){d.find(".active").removeClass("active")}}this.$element.toggleClass("active")};var a=c.fn.button;c.fn.button=function(d){return this.each(function(){var g=c(this);var f=g.data("bs.button");var e=typeof d=="object"&&d;if(!f){g.data("bs.button",(f=new b(this,e)))}if(d=="toggle"){f.toggle()}else{if(d){f.setState(d)}}})};c.fn.button.Constructor=b;c.fn.button.noConflict=function(){c.fn.button=a;return this};c(document).on("click.bs.button.data-api","[data-toggle^=button]",function(f){var d=c(f.target);if(!d.hasClass("btn")){d=d.closest(".btn")}d.button("toggle");f.preventDefault()})}(window.jQuery);+function(b){var c=function(e,d){this.$element=b(e);this.$indicators=this.$element.find(".carousel-indicators");this.options=d;this.paused=this.sliding=this.interval=this.$active=this.$items=null;this.options.pause=="hover"&&this.$element.on("mouseenter",b.proxy(this.pause,this)).on("mouseleave",b.proxy(this.cycle,this))};c.DEFAULTS={interval:5000,pause:"hover",wrap:true};c.prototype.cycle=function(d){d||(this.paused=false);this.interval&&clearInterval(this.interval);this.options.interval&&!this.paused&&(this.interval=setInterval(b.proxy(this.next,this),this.options.interval));return this};c.prototype.getActiveIndex=function(){this.$active=this.$element.find(".item.active");this.$items=this.$active.parent().children();return this.$items.index(this.$active)};c.prototype.to=function(f){var e=this;var d=this.getActiveIndex();if(f>(this.$items.length-1)||f<0){return}if(this.sliding){return this.$element.one("slid",function(){e.to(f)})}if(d==f){return this.pause().cycle()}return this.slide(f>d?"next":"prev",b(this.$items[f]))};c.prototype.pause=function(d){d||(this.paused=true);if(this.$element.find(".next, .prev").length&&b.support.transition.end){this.$element.trigger(b.support.transition.end);this.cycle(true)}this.interval=clearInterval(this.interval);return this};c.prototype.next=function(){if(this.sliding){return}return this.slide("next")};c.prototype.prev=function(){if(this.sliding){return}return this.slide("prev")};c.prototype.slide=function(k,f){var m=this.$element.find(".item.active");var d=f||m[k]();var j=this.interval;var l=k=="next"?"left":"right";var g=k=="next"?"first":"last";var h=this;if(!d.length){if(!this.options.wrap){return}d=this.$element.find(".item")[g]()}this.sliding=true;j&&this.pause();var i=b.Event("slide.bs.carousel",{relatedTarget:d[0],direction:l});if(d.hasClass("active")){return}if(this.$indicators.length){this.$indicators.find(".active").removeClass("active");this.$element.one("slid",function(){var e=b(h.$indicators.children()[h.getActiveIndex()]);e&&e.addClass("active")})}if(b.support.transition&&this.$element.hasClass("slide")){this.$element.trigger(i);if(i.isDefaultPrevented()){return}d.addClass(k);d[0].offsetWidth;m.addClass(l);d.addClass(l);m.one(b.support.transition.end,function(){d.removeClass([k,l].join(" ")).addClass("active");m.removeClass(["active",l].join(" "));h.sliding=false;setTimeout(function(){h.$element.trigger("slid")},0)}).emulateTransitionEnd(600)}else{this.$element.trigger(i);if(i.isDefaultPrevented()){return}m.removeClass("active");d.addClass("active");this.sliding=false;this.$element.trigger("slid")}j&&this.cycle();return this};var a=b.fn.carousel;b.fn.carousel=function(d){return this.each(function(){var h=b(this);var g=h.data("bs.carousel");var e=b.extend({},c.DEFAULTS,h.data(),typeof d=="object"&&d);var f=typeof d=="string"?d:e.slide;if(!g){h.data("bs.carousel",(g=new c(this,e)))}if(typeof d=="number"){g.to(d)}else{if(f){g[f]()}else{if(e.interval){g.pause().cycle()}}}})};b.fn.carousel.Constructor=c;b.fn.carousel.noConflict=function(){b.fn.carousel=a;return this};b(document).on("click.bs.carousel.data-api","[data-slide], [data-slide-to]",function(j){var i=b(this),f;var d=b(i.attr("data-target")||(f=i.attr("href"))&&f.replace(/.*(?=#[^\s]+$)/,""));var g=b.extend({},d.data(),i.data());var h=i.attr("data-slide-to");if(h){g.interval=false}d.carousel(g);if(h=i.attr("data-slide-to")){d.data("bs.carousel").to(h)}j.preventDefault()});b(window).on("load",function(){b('[data-ride="carousel"]').each(function(){var d=b(this);d.carousel(d.data())})})}(window.jQuery);+function(b){var c=function(e,d){this.$element=b(e);this.options=b.extend({},c.DEFAULTS,d);this.transitioning=null;if(this.options.parent){this.$parent=b(this.options.parent)}if(this.options.toggle){this.toggle()}};c.DEFAULTS={toggle:true};c.prototype.dimension=function(){var d=this.$element.hasClass("width");return d?"width":"height"};c.prototype.show=function(){if(this.transitioning||this.$element.hasClass("in")){return}var e=b.Event("show.bs.collapse");this.$element.trigger(e);if(e.isDefaultPrevented()){return}var h=this.$parent&&this.$parent.find("> .panel > .in");if(h&&h.length){var f=h.data("bs.collapse");if(f&&f.transitioning){return}h.collapse("hide");f||h.data("bs.collapse",null)}var i=this.dimension();this.$element.removeClass("collapse").addClass("collapsing")[i](0);this.transitioning=1;var d=function(){this.$element.removeClass("collapsing").addClass("in")[i]("auto");this.transitioning=0;this.$element.trigger("shown.bs.collapse")};if(!b.support.transition){return d.call(this)}var g=b.camelCase(["scroll",i].join("-"));this.$element.one(b.support.transition.end,b.proxy(d,this)).emulateTransitionEnd(350)[i](this.$element[0][g])};c.prototype.hide=function(){if(this.transitioning||!this.$element.hasClass("in")){return}var e=b.Event("hide.bs.collapse");this.$element.trigger(e);if(e.isDefaultPrevented()){return}var f=this.dimension();this.$element[f](this.$element[f]())[0].offsetHeight;this.$element.addClass("collapsing").removeClass("collapse").removeClass("in");this.transitioning=1;var d=function(){this.transitioning=0;this.$element.trigger("hidden.bs.collapse").removeClass("collapsing").addClass("collapse")};if(!b.support.transition){return d.call(this)}this.$element[f](0).one(b.support.transition.end,b.proxy(d,this)).emulateTransitionEnd(350)};c.prototype.toggle=function(){this[this.$element.hasClass("in")?"hide":"show"]()};var a=b.fn.collapse;b.fn.collapse=function(d){return this.each(function(){var g=b(this);var f=g.data("bs.collapse");var e=b.extend({},c.DEFAULTS,g.data(),typeof d=="object"&&d);if(!f){g.data("bs.collapse",(f=new c(this,e)))}if(typeof d=="string"){f[d]()}})};b.fn.collapse.Constructor=c;b.fn.collapse.noConflict=function(){b.fn.collapse=a;return this};b(document).on("click.bs.collapse.data-api","[data-toggle=collapse]",function(j){var l=b(this),d;var k=l.attr("data-target")||j.preventDefault()||(d=l.attr("href"))&&d.replace(/.*(?=#[^\s]+$)/,"");var f=b(k);var h=f.data("bs.collapse");var i=h?"toggle":l.data();var m=l.attr("data-parent");var g=m&&b(m);if(!h||!h.transitioning){if(g){g.find('[data-toggle=collapse][data-parent="'+m+'"]').not(l).addClass("collapsed")}l[f.hasClass("in")?"addClass":"removeClass"]("collapsed")}f.collapse(i)})}(window.jQuery);+function(g){var e=".dropdown-backdrop";var b="[data-toggle=dropdown]";var a=function(i){var h=g(i).on("click.bs.dropdown",this.toggle)};a.prototype.toggle=function(k){var j=g(this);if(j.is(".disabled, :disabled")){return}var i=f(j);var h=i.hasClass("open");d();if(!h){if("ontouchstart" in document.documentElement&&!i.closest(".navbar-nav").length){g('<div class="dropdown-backdrop"/>').insertAfter(g(this)).on("click",d)}i.trigger(k=g.Event("show.bs.dropdown"));if(k.isDefaultPrevented()){return}i.toggleClass("open").trigger("shown.bs.dropdown");j.focus()}return false};a.prototype.keydown=function(l){if(!/(38|40|27)/.test(l.keyCode)){return}var k=g(this);l.preventDefault();l.stopPropagation();if(k.is(".disabled, :disabled")){return}var j=f(k);var i=j.hasClass("open");if(!i||(i&&l.keyCode==27)){if(l.which==27){j.find(b).focus()}return k.click()}var m=g("[role=menu] li:not(.divider):visible a",j);if(!m.length){return}var h=m.index(m.filter(":focus"));if(l.keyCode==38&&h>0){h--}if(l.keyCode==40&&h<m.length-1){h++}if(!~h){h=0}m.eq(h).focus()};function d(){g(e).remove();g(b).each(function(i){var h=f(g(this));if(!h.hasClass("open")){return}h.trigger(i=g.Event("hide.bs.dropdown"));if(i.isDefaultPrevented()){return}h.removeClass("open").trigger("hidden.bs.dropdown")})}function f(j){var h=j.attr("data-target");if(!h){h=j.attr("href");h=h&&/#/.test(h)&&h.replace(/.*(?=#[^\s]*$)/,"")}var i=h&&g(h);return i&&i.length?i:j.parent()}var c=g.fn.dropdown;g.fn.dropdown=function(h){return this.each(function(){var j=g(this);var i=j.data("dropdown");if(!i){j.data("dropdown",(i=new a(this)))}if(typeof h=="string"){i[h].call(j)}})};g.fn.dropdown.Constructor=a;g.fn.dropdown.noConflict=function(){g.fn.dropdown=c;return this};g(document).on("click.bs.dropdown.data-api",d).on("click.bs.dropdown.data-api",".dropdown form",function(h){h.stopPropagation()}).on("click.bs.dropdown.data-api",b,a.prototype.toggle).on("keydown.bs.dropdown.data-api",b+", [role=menu]",a.prototype.keydown)}(window.jQuery);+function(c){var b=function(e,d){this.options=d;this.$element=c(e);this.$backdrop=this.isShown=null;if(this.options.remote){this.$element.load(this.options.remote)}};b.DEFAULTS={backdrop:true,keyboard:true,show:true};b.prototype.toggle=function(d){return this[!this.isShown?"show":"hide"](d)};b.prototype.show=function(g){var d=this;var f=c.Event("show.bs.modal",{relatedTarget:g});this.$element.trigger(f);if(this.isShown||f.isDefaultPrevented()){return}this.isShown=true;this.escape();this.$element.on("click.dismiss.modal",'[data-dismiss="modal"]',c.proxy(this.hide,this));this.backdrop(function(){var i=c.support.transition&&d.$element.hasClass("fade");if(!d.$element.parent().length){d.$element.appendTo(document.body)}d.$element.show();if(i){d.$element[0].offsetWidth}d.$element.addClass("in").attr("aria-hidden",false);d.enforceFocus();var h=c.Event("shown.bs.modal",{relatedTarget:g});i?d.$element.find(".modal-dialog").one(c.support.transition.end,function(){d.$element.focus().trigger(h)}).emulateTransitionEnd(300):d.$element.focus().trigger(h)})};b.prototype.hide=function(d){if(d){d.preventDefault()}d=c.Event("hide.bs.modal");this.$element.trigger(d);if(!this.isShown||d.isDefaultPrevented()){return}this.isShown=false;this.escape();c(document).off("focusin.bs.modal");this.$element.removeClass("in").attr("aria-hidden",true).off("click.dismiss.modal");c.support.transition&&this.$element.hasClass("fade")?this.$element.one(c.support.transition.end,c.proxy(this.hideModal,this)).emulateTransitionEnd(300):this.hideModal()};b.prototype.enforceFocus=function(){c(document).off("focusin.bs.modal").on("focusin.bs.modal",c.proxy(function(d){if(this.$element[0]!==d.target&&!this.$element.has(d.target).length){this.$element.focus()}},this))};b.prototype.escape=function(){if(this.isShown&&this.options.keyboard){this.$element.on("keyup.dismiss.bs.modal",c.proxy(function(d){d.which==27&&this.hide()},this))}else{if(!this.isShown){this.$element.off("keyup.dismiss.bs.modal")}}};b.prototype.hideModal=function(){var d=this;this.$element.hide();this.backdrop(function(){d.removeBackdrop();d.$element.trigger("hidden.bs.modal")})};b.prototype.removeBackdrop=function(){this.$backdrop&&this.$backdrop.remove();this.$backdrop=null};b.prototype.backdrop=function(g){var f=this;var e=this.$element.hasClass("fade")?"fade":"";if(this.isShown&&this.options.backdrop){var d=c.support.transition&&e;this.$backdrop=c('<div class="modal-backdrop '+e+'" />').appendTo(document.body);this.$element.on("click.dismiss.modal",c.proxy(function(h){if(h.target!==h.currentTarget){return}this.options.backdrop=="static"?this.$element[0].focus.call(this.$element[0]):this.hide.call(this)},this));if(d){this.$backdrop[0].offsetWidth}this.$backdrop.addClass("in");if(!g){return}d?this.$backdrop.one(c.support.transition.end,g).emulateTransitionEnd(150):g()}else{if(!this.isShown&&this.$backdrop){this.$backdrop.removeClass("in");c.support.transition&&this.$element.hasClass("fade")?this.$backdrop.one(c.support.transition.end,g).emulateTransitionEnd(150):g()}else{if(g){g()}}}};var a=c.fn.modal;c.fn.modal=function(d,e){return this.each(function(){var h=c(this);var g=h.data("bs.modal");var f=c.extend({},b.DEFAULTS,h.data(),typeof d=="object"&&d);if(!g){h.data("bs.modal",(g=new b(this,f)))}if(typeof d=="string"){g[d](e)}else{if(f.show){g.show(e)}}})};c.fn.modal.Constructor=b;c.fn.modal.noConflict=function(){c.fn.modal=a;return this};c(document).on("click.bs.modal.data-api",'[data-toggle="modal"]',function(i){var h=c(this);var f=h.attr("href");var d=c(h.attr("data-target")||(f&&f.replace(/.*(?=#[^\s]+$)/,"")));var g=d.data("modal")?"toggle":c.extend({remote:!/#/.test(f)&&f},d.data(),h.data());i.preventDefault();d.modal(g,this).one("hide",function(){h.is(":visible")&&h.focus()})});c(document).on("show.bs.modal",".modal",function(){c(document.body).addClass("modal-open")}).on("hidden.bs.modal",".modal",function(){c(document.body).removeClass("modal-open")})}(window.jQuery);+function(c){var b=function(e,d){this.type=this.options=this.enabled=this.timeout=this.hoverState=this.$element=null;this.init("tooltip",e,d)};b.DEFAULTS={animation:true,placement:"top",selector:false,template:'<div class="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:false,container:false};b.prototype.init=function(k,h,f){this.enabled=true;this.type=k;this.$element=c(h);this.options=this.getOptions(f);var j=this.options.trigger.split(" ");for(var g=j.length;g--;){var e=j[g];if(e=="click"){this.$element.on("click."+this.type,this.options.selector,c.proxy(this.toggle,this))}else{if(e!="manual"){var l=e=="hover"?"mouseenter":"focus";var d=e=="hover"?"mouseleave":"blur";this.$element.on(l+"."+this.type,this.options.selector,c.proxy(this.enter,this));this.$element.on(d+"."+this.type,this.options.selector,c.proxy(this.leave,this))}}}this.options.selector?(this._options=c.extend({},this.options,{trigger:"manual",selector:""})):this.fixTitle()};b.prototype.getDefaults=function(){return b.DEFAULTS};b.prototype.getOptions=function(d){d=c.extend({},this.getDefaults(),this.$element.data(),d);if(d.delay&&typeof d.delay=="number"){d.delay={show:d.delay,hide:d.delay}}return d};b.prototype.getDelegateOptions=function(){var d={};var e=this.getDefaults();this._options&&c.each(this._options,function(f,g){if(e[f]!=g){d[f]=g}});return d};b.prototype.enter=function(e){var d=e instanceof this.constructor?e:c(e.currentTarget)[this.type](this.getDelegateOptions()).data("bs."+this.type);clearTimeout(d.timeout);d.hoverState="in";if(!d.options.delay||!d.options.delay.show){return d.show()}d.timeout=setTimeout(function(){if(d.hoverState=="in"){d.show()}},d.options.delay.show)};b.prototype.leave=function(e){var d=e instanceof this.constructor?e:c(e.currentTarget)[this.type](this.getDelegateOptions()).data("bs."+this.type);clearTimeout(d.timeout);d.hoverState="out";if(!d.options.delay||!d.options.delay.hide){return d.hide()}d.timeout=setTimeout(function(){if(d.hoverState=="out"){d.hide()}},d.options.delay.hide)};b.prototype.show=function(){var n=c.Event("show.bs."+this.type);if(this.hasContent()&&this.enabled){this.$element.trigger(n);if(n.isDefaultPrevented()){return}var j=this.tip();this.setContent();if(this.options.animation){j.addClass("fade")}var i=typeof this.options.placement=="function"?this.options.placement.call(this,j[0],this.$element[0]):this.options.placement;var r=/\s?auto?\s?/i;var s=r.test(i);if(s){i=i.replace(r,"")||"top"}j.detach().css({top:0,left:0,display:"block"}).addClass(i);this.options.container?j.appendTo(this.options.container):j.insertAfter(this.$element);var o=this.getPosition();var d=j[0].offsetWidth;var l=j[0].offsetHeight;if(s){var h=this.$element.parent();var g=i;var p=document.documentElement.scrollTop||document.body.scrollTop;var q=this.options.container=="body"?window.innerWidth:h.outerWidth();var m=this.options.container=="body"?window.innerHeight:h.outerHeight();var k=this.options.container=="body"?0:h.offset().left;i=i=="bottom"&&o.top+o.height+l-p>m?"top":i=="top"&&o.top-p-l<0?"bottom":i=="right"&&o.right+d>q?"left":i=="left"&&o.left-d<k?"right":i;j.removeClass(g).addClass(i)}var f=this.getCalculatedOffset(i,o,d,l);this.applyPlacement(f,i);this.$element.trigger("shown.bs."+this.type)}};b.prototype.applyPlacement=function(i,j){var g;var k=this.tip();var f=k[0].offsetWidth;var n=k[0].offsetHeight;var e=parseInt(k.css("margin-top"),10);var h=parseInt(k.css("margin-left"),10);if(isNaN(e)){e=0}if(isNaN(h)){h=0}i.top=i.top+e;i.left=i.left+h;k.offset(i).addClass("in");var d=k[0].offsetWidth;var l=k[0].offsetHeight;if(j=="top"&&l!=n){g=true;i.top=i.top+n-l}if(/bottom|top/.test(j)){var m=0;if(i.left<0){m=i.left*-2;i.left=0;k.offset(i);d=k[0].offsetWidth;l=k[0].offsetHeight}this.replaceArrow(m-f+d,d,"left")}else{this.replaceArrow(l-n,l,"top")}if(g){k.offset(i)}};b.prototype.replaceArrow=function(f,e,d){this.arrow().css(d,f?(50*(1-f/e)+"%"):"")};b.prototype.setContent=function(){var e=this.tip();var d=this.getTitle();e.find(".tooltip-inner")[this.options.html?"html":"text"](d);e.removeClass("fade in top bottom left right")};b.prototype.hide=function(){var f=this;var h=this.tip();var g=c.Event("hide.bs."+this.type);function d(){if(f.hoverState!="in"){h.detach()}}this.$element.trigger(g);if(g.isDefaultPrevented()){return}h.removeClass("in");c.support.transition&&this.$tip.hasClass("fade")?h.one(c.support.transition.end,d).emulateTransitionEnd(150):d();this.$element.trigger("hidden.bs."+this.type);return this};b.prototype.fixTitle=function(){var d=this.$element;if(d.attr("title")||typeof(d.attr("data-original-title"))!="string"){d.attr("data-original-title",d.attr("title")||"").attr("title","")}};b.prototype.hasContent=function(){return this.getTitle()};b.prototype.getPosition=function(){var d=this.$element[0];return c.extend({},(typeof d.getBoundingClientRect=="function")?d.getBoundingClientRect():{width:d.offsetWidth,height:d.offsetHeight},this.$element.offset())};b.prototype.getCalculatedOffset=function(d,g,e,f){return d=="bottom"?{top:g.top+g.height,left:g.left+g.width/2-e/2}:d=="top"?{top:g.top-f,left:g.left+g.width/2-e/2}:d=="left"?{top:g.top+g.height/2-f/2,left:g.left-e}:{top:g.top+g.height/2-f/2,left:g.left+g.width}};b.prototype.getTitle=function(){var f;var d=this.$element;var e=this.options;f=d.attr("data-original-title")||(typeof e.title=="function"?e.title.call(d[0]):e.title);return f};b.prototype.tip=function(){return this.$tip=this.$tip||c(this.options.template)};b.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".tooltip-arrow")};b.prototype.validate=function(){if(!this.$element[0].parentNode){this.hide();this.$element=null;this.options=null}};b.prototype.enable=function(){this.enabled=true};b.prototype.disable=function(){this.enabled=false};b.prototype.toggleEnabled=function(){this.enabled=!this.enabled};b.prototype.toggle=function(f){var d=f?c(f.currentTarget)[this.type](this.getDelegateOptions()).data("bs."+this.type):this;d.tip().hasClass("in")?d.leave(d):d.enter(d)};b.prototype.destroy=function(){this.hide().$element.off("."+this.type).removeData("bs."+this.type)};var a=c.fn.tooltip;c.fn.tooltip=function(d){return this.each(function(){var g=c(this);var f=g.data("bs.tooltip");var e=typeof d=="object"&&d;if(!f){g.data("bs.tooltip",(f=new b(this,e)))}if(typeof d=="string"){f[d]()}})};c.fn.tooltip.Constructor=b;c.fn.tooltip.noConflict=function(){c.fn.tooltip=a;return this}}(window.jQuery);+function(c){var b=function(e,d){this.init("popover",e,d)};if(!c.fn.tooltip){throw new Error("Popover requires tooltip.js")}b.DEFAULTS=c.extend({},c.fn.tooltip.Constructor.DEFAULTS,{placement:"right",trigger:"click",content:"",template:'<div class="popover"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'});b.prototype=c.extend({},c.fn.tooltip.Constructor.prototype);b.prototype.constructor=b;b.prototype.getDefaults=function(){return b.DEFAULTS};b.prototype.setContent=function(){var g=this.tip();var e=this.getTarget();if(e){if(e.find(".arrow").length<1){g.addClass("no-arrow")}g.html(e.html());return}var f=this.getTitle();var d=this.getContent();g.find(".popover-title")[this.options.html?"html":"text"](f);g.find(".popover-content")[this.options.html?"html":"text"](d);g.removeClass("fade top bottom left right in");if(!g.find(".popover-title").html()){g.find(".popover-title").hide()}};b.prototype.hasContent=function(){return this.getTarget()||this.getTitle()||this.getContent()};b.prototype.getContent=function(){var d=this.$element;var e=this.options;return d.attr("data-content")||(typeof e.content=="function"?e.content.call(d[0]):e.content)};b.prototype.getTarget=function(){var d=this.$element;var f=this.options;var e=d.attr("data-target")||(typeof f.target=="function"?f.target.call(d[0]):f.target);return(e&&true)?(e=="$next"?d.next(".popover"):c(e)):false};b.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".arrow")};b.prototype.tip=function(){if(!this.$tip){this.$tip=c(this.options.template)}return this.$tip};var a=c.fn.popover;c.fn.popover=function(d){return this.each(function(){var g=c(this);var f=g.data("bs.popover");var e=typeof d=="object"&&d;if(!f){g.data("bs.popover",(f=new b(this,e)))}if(typeof d=="string"){f[d]()}})};c.fn.popover.Constructor=b;c.fn.popover.noConflict=function(){c.fn.popover=a;return this}}(window.jQuery);+function(c){var b=function(e,d){this.init("pager",e,d)};if(!c.fn.tooltip){throw new Error("Popover requires tooltip.js")}if(!c.fn.popover){throw new Error("Popover requires popover.js")}b.prototype.init=function(f,e,d){this.type=f;this.$element=c(e);this.options=d;this.computeIndex();this.$element.popover({container:"body",trigger:"manual",html:true,template:'<div class="popover pager-popover"><div class="arrow"></div><div class="popover-content"></div></div>'}).on("click."+this.type,false,c.proxy(this.showPopover,this))};b.prototype.hidePopover=function(){var d=this.$element;if(d.attr("data-safe-close")=="true"){d.popover("hide").attr("data-safe-close",false);c(document).unbind("click",this.hidePopover)}else{d.attr("data-safe-close",true)}};b.prototype.showPopover=function(){var d=this.$element;if(!(d.attr("data-content"))){d.attr("data-content","<ul class='pager'>"+this.setContent(this.getUrl())+"</ul>")}d.popover("show");c(document).bind("click",c.proxy(this.hidePopover,this))};b.prototype.setContent=function(e){var g="";if(this.isRangeIndex){for(var f=this.indexStart;f<=this.indexEnd;f++){g+="<li><a href='"+e.replace("%",f)+"'>"+f+"</a></li>"}}else{for(var f=this.indexs.length-1;f>=0;f--){var d=this.indexs[f];g+="<li><a href='"+e.replace("%",d)+"'>"+d+"</a></li>"}}return g};b.prototype.getUrl=function(){var d=this.$element;var e=this.options;return d.attr("data-url")||d.attr("href")||(typeof e.url=="function"?e.url.call(d[0]):e.url)||"?page=%"};b.prototype.computeIndex=function(){var e=this.$element;var f=e.closest("li");var h=this.options;var g=e.attr("data-index")||(typeof h.index=="function"?h.index.call(e[0]):h.index)||((f.prev("li").find("a").text()-0+1)+"-"+(f.next("li").find("a").text()-1));if(g.indexOf("-")>0){this.isRangeIndex=true;var d=g.split("-");this.indexStart=d[0]-0;this.indexEnd=d[1]-0;this.indexCount=this.indexEnd-this.indexStart}else{this.indexs=g.split(",");this.indexCount=this.indexs.length}};var a=c.fn.pager;c.fn.pager=function(d){return this.each(function(){var g=c(this);var f=g.data("bs.pager");var e=typeof d=="object"&&d;if(!f){g.data("bs.pager",(f=new b(this,e)))}if(typeof d=="string"){f[d]()}})};c.fn.pager.Constructor=b;c.fn.pager.noConflict=function(){c.fn.pager=a;return this}}(window.jQuery);+function(c){var b=function(d){this.element=c(d)};b.prototype.show=function(){var j=this.element;var g=j.closest("ul:not(.dropdown-menu)");var f=j.attr("data-target");if(!f){f=j.attr("href");f=f&&f.replace(/.*(?=#[^\s]*$)/,"")}if(j.parent("li").hasClass("active")){return}var h=g.find(".active:last a")[0];var i=c.Event("show.bs.tab",{relatedTarget:h});j.trigger(i);if(i.isDefaultPrevented()){return}var d=c(f);this.activate(j.parent("li"),g);this.activate(d,d.parent(),function(){j.trigger({type:"shown.bs.tab",relatedTarget:h})})};b.prototype.activate=function(f,e,i){var d=e.find("> .active");var h=i&&c.support.transition&&d.hasClass("fade");function g(){d.removeClass("active").find("> .dropdown-menu > .active").removeClass("active");f.addClass("active");if(h){f[0].offsetWidth;f.addClass("in")}else{f.removeClass("fade")}if(f.parent(".dropdown-menu")){f.closest("li.dropdown").addClass("active")}i&&i()}h?d.one(c.support.transition.end,g).emulateTransitionEnd(150):g();d.removeClass("in")};var a=c.fn.tab;c.fn.tab=function(d){return this.each(function(){var f=c(this);var e=f.data("bs.tab");if(!e){f.data("bs.tab",(e=new b(this)))}if(typeof d=="string"){e[d]()}})};c.fn.tab.Constructor=b;c.fn.tab.noConflict=function(){c.fn.tab=a;return this};c(document).on("click.bs.tab.data-api",'[data-toggle="tab"], [data-toggle="pill"]',function(d){d.preventDefault();c(this).tab("show")})}(window.jQuery);(function(a){jQuery.fn.lightbox=function(){var b=0;a("[data-toggle='lightbox']").each(function(){a(this).attr("data-id",b++)});a(this).click(function(){if(!a.fn.modal){throw new Error("modal requires for lightbox")}var e=a(this);var h=e.attr("data-image")||e.attr("src")||e.attr("href")||e.find("img").attr("src");if(!h){return false}var d=e.attr("data-caption")||e.find("img").attr("title")||e.attr("title");if(a("#lightboxModal").size()==0){a('<div id="lightboxModal" class="modal fade modal-lightbox"><div class="controller prev"><i class="icon icon-chevron-sign-left"></i></div><div class="controller next"><i class="icon icon-chevron-sign-right"></i></div><div class="modal-dialog"><img id="lightboxImg" src="#" alt="" data-dismiss="modal" /><div class="caption"></div></div></div>').appendTo("body");a("#lightboxModal .prev").click(function(){var k=parseInt(a("#lightboxModal").attr("data-id"))-1;var j=a('[data-toggle="lightbox"][data-id="'+k+'"]');if(j){console.log("prve:"+k);console.log("prve:"+j.attr("href"));var i=j.attr("data-image")||j.attr("src")||j.attr("href")||j.find("img").attr("src");if(i){console.log("prve-url:"+i);a("#lightboxImg").attr("src",i);a("#lightboxModal").attr("data-id",k);if(a('[data-toggle="lightbox",data-id="'+(k-1)+'"]')){a("#lightboxModal").find(".prev").show()}else{a("#lightboxModal").find(".prev").hide()}}}});a("#lightboxModal .next").click(function(){var k=parseInt(a("#lightboxModal").attr("data-id"))+1;var j=a('[data-toggle="lightbox"][data-id="'+k+'"]');if(j){var i=j.attr("data-image")||j.attr("src")||j.attr("href")||j.find("img").attr("src");if(i){a("#lightboxImg").attr("src",i);a("#lightboxModal").attr("data-id",k);if(a('[data-toggle="lightbox",data-id="'+(k+1)+'"]')){a("#lightboxModal").find(".next").show()}else{a("#lightboxModal").find(".next").hide()}}}})}var g=parseInt(e.attr("data-id"));var c=a("#lightboxImg");var f=a("#lightboxModal");f.find(".controller").hide();f.attr("data-id",g);if(a('[data-toggle="lightbox"][data-id="'+(g-1)+'"]')){f.find(".prev").show()}if(a('[data-toggle="lightbox"][data-id="'+(g+1)+'"]')){f.find(".next").show()}c.attr("alt",d).attr("src",h);if(d&&d.length>0){f.addClass("with-caption").find(".caption").text(d)}else{f.find(".caption").remove()}f.modal();return false})}})(jQuery);

/**
 * bootbox.js v4.1.0
 *
 * http://bootboxjs.com/license.txt
 */
window.bootbox=window.bootbox||function a(b,c){"use strict";function d(a){var b=r[p.locale];return b?b[a]:r.en[a]}function e(a,c,d){a.preventDefault();var e=b.isFunction(d)&&d(a)===!1;e||c.modal("hide")}function f(a){var b,c=0;for(b in a)c++;return c}function g(a,c){var d=0;b.each(a,function(a,b){c(a,b,d++)})}function h(a){var c,d;if("object"!=typeof a)throw new Error("Please supply an object of options");if(!a.message)throw new Error("Please specify a message");return a=b.extend({},p,a),a.buttons||(a.buttons={}),a.backdrop=a.backdrop?"static":!1,c=a.buttons,d=f(c),g(c,function(a,e,f){if(b.isFunction(e)&&(e=c[a]={callback:e}),"object"!==b.type(e))throw new Error("button with key "+a+" must be an object");e.label||(e.label=a),e.className||(e.className=2>=d&&f===d-1?"btn-primary":"btn-default")}),a}function i(a,b){var c=a.length,d={};if(1>c||c>2)throw new Error("Invalid argument length");return 2===c||"string"==typeof a[0]?(d[b[0]]=a[0],d[b[1]]=a[1]):d=a[0],d}function j(a,c,d){return b.extend(!0,{},a,i(c,d))}function k(a,b,c,d){var e={className:"bootbox-"+a,buttons:l.apply(null,b)};return m(j(e,d,c),b)}function l(){for(var a={},b=0,c=arguments.length;c>b;b++){var e=arguments[b],f=e.toLowerCase(),g=e.toUpperCase();a[f]={label:d(g)}}return a}function m(a,b){var d={};return g(b,function(a,b){d[b]=!0}),g(a.buttons,function(a){if(d[a]===c)throw new Error("button key "+a+" is not allowed (options are "+b.join("\n")+")")}),a}var n={dialog:"<div class='bootbox modal' tabindex='-1' role='dialog'><div class='modal-dialog'><div class='modal-content'><div class='modal-body'><div class='bootbox-body'></div></div></div></div></div>",header:"<div class='modal-header'><h4 class='modal-title'></h4></div>",footer:"<div class='modal-footer'></div>",closeButton:"<button type='button' class='bootbox-close-button close'>&times;</button>",form:"<form class='bootbox-form'></form>",inputs:{text:"<input class='bootbox-input bootbox-input-text form-control' autocomplete=off type=text />",email:"<input class='bootbox-input bootbox-input-email form-control' autocomplete='off' type='email' />",select:"<select class='bootbox-input bootbox-input-select form-control'></select>",checkbox:"<div class='checkbox'><label><input class='bootbox-input bootbox-input-checkbox' type='checkbox' /></label></div>"}},o=b("body"),p={locale:"en",backdrop:!0,animate:!0,className:null,closeButton:!0,show:!0},q={};q.alert=function(){var a;if(a=k("alert",["ok"],["message","callback"],arguments),a.callback&&!b.isFunction(a.callback))throw new Error("alert requires callback property to be a function when provided");return a.buttons.ok.callback=a.onEscape=function(){return b.isFunction(a.callback)?a.callback():!0},q.dialog(a)},q.confirm=function(){var a;if(a=k("confirm",["cancel","confirm"],["message","callback"],arguments),a.buttons.cancel.callback=a.onEscape=function(){return a.callback(!1)},a.buttons.confirm.callback=function(){return a.callback(!0)},!b.isFunction(a.callback))throw new Error("confirm requires a callback");return q.dialog(a)},q.prompt=function(){var a,d,e,f,h,i,k;if(f=b(n.form),d={className:"bootbox-prompt",buttons:l("cancel","confirm"),value:"",inputType:"text"},a=m(j(d,arguments,["title","callback"]),["cancel","confirm"]),i=a.show===c?!0:a.show,a.message=f,a.buttons.cancel.callback=a.onEscape=function(){return a.callback(null)},a.buttons.confirm.callback=function(){var c;switch(a.inputType){case"text":case"email":case"select":c=h.val();break;case"checkbox":var d=h.find("input:checked");c=[],g(d,function(a,d){c.push(b(d).val())})}return a.callback(c)},a.show=!1,!a.title)throw new Error("prompt requires a title");if(!b.isFunction(a.callback))throw new Error("prompt requires a callback");if(!n.inputs[a.inputType])throw new Error("invalid prompt type");switch(h=b(n.inputs[a.inputType]),a.inputType){case"text":case"email":h.val(a.value);break;case"select":var o={};if(k=a.inputOptions||[],!k.length)throw new Error("prompt with select requires options");g(k,function(a,d){var e=h;if(d.value===c||d.text===c)throw new Error("given options in wrong format");d.group&&(o[d.group]||(o[d.group]=b("<optgroup/>").attr("label",d.group)),e=o[d.group]),e.append("<option value='"+d.value+"'>"+d.text+"</option>")}),g(o,function(a,b){h.append(b)}),h.val(a.value);break;case"checkbox":var p=b.isArray(a.value)?a.value:[a.value];if(k=a.inputOptions||[],!k.length)throw new Error("prompt with checkbox requires options");if(!k[0].value||!k[0].text)throw new Error("given options in wrong format");h=b("<div/>"),g(k,function(c,d){var e=b(n.inputs[a.inputType]);e.find("input").attr("value",d.value),e.find("label").append(d.text),g(p,function(a,b){b===d.value&&e.find("input").prop("checked",!0)}),h.append(e)})}return a.placeholder&&h.attr("placeholder",a.placeholder),f.append(h),f.on("submit",function(a){a.preventDefault(),e.find(".btn-primary").click()}),e=q.dialog(a),e.off("shown.bs.modal"),e.on("shown.bs.modal",function(){h.focus()}),i===!0&&e.modal("show"),e},q.dialog=function(a){a=h(a);var c=b(n.dialog),d=c.find(".modal-body"),f=a.buttons,i="",j={onEscape:a.onEscape};if(g(f,function(a,b){i+="<button data-bb-handler='"+a+"' type='button' class='btn "+b.className+"'>"+b.label+"</button>",j[a]=b.callback}),d.find(".bootbox-body").html(a.message),a.animate===!0&&c.addClass("fade"),a.className&&c.addClass(a.className),a.title&&d.before(n.header),a.closeButton){var k=b(n.closeButton);a.title?c.find(".modal-header").prepend(k):k.css("margin-top","-10px").prependTo(d)}return a.title&&c.find(".modal-title").html(a.title),i.length&&(d.after(n.footer),c.find(".modal-footer").html(i)),c.on("hidden.bs.modal",function(a){a.target===this&&c.remove()}),c.on("shown.bs.modal",function(){c.find(".btn-primary:first").focus()}),c.on("escape.close.bb",function(a){j.onEscape&&e(a,c,j.onEscape)}),c.on("click",".modal-footer button",function(a){var d=b(this).data("bb-handler");e(a,c,j[d])}),c.on("click",".bootbox-close-button",function(a){e(a,c,j.onEscape)}),c.on("keyup",function(a){27===a.which&&c.trigger("escape.close.bb")}),o.append(c),c.modal({backdrop:a.backdrop,keyboard:!1,show:!1}),a.show&&c.modal("show"),c},q.setDefaults=function(){var a={};2===arguments.length?a[arguments[0]]=arguments[1]:a=arguments[0],b.extend(p,a)},q.hideAll=function(){b(".bootbox").modal("hide")};var r={br:{OK:"OK",CANCEL:"Cancelar",CONFIRM:"Sim"},da:{OK:"OK",CANCEL:"Annuller",CONFIRM:"Accepter"},de:{OK:"OK",CANCEL:"Abbrechen",CONFIRM:"Akzeptieren"},en:{OK:"OK",CANCEL:"Cancel",CONFIRM:"OK"},es:{OK:"OK",CANCEL:"Cancelar",CONFIRM:"Aceptar"},fi:{OK:"OK",CANCEL:"Peruuta",CONFIRM:"OK"},fr:{OK:"OK",CANCEL:"Annuler",CONFIRM:"D'accord"},it:{OK:"OK",CANCEL:"Annulla",CONFIRM:"Conferma"},nl:{OK:"OK",CANCEL:"Annuleren",CONFIRM:"Accepteren"},no:{OK:"OK",CANCEL:"Avbryt",CONFIRM:"OK"},pl:{OK:"OK",CANCEL:"Anuluj",CONFIRM:"Potwierdź"},ru:{OK:"OK",CANCEL:"Отмена",CONFIRM:"Применить"},zh_CN:{OK:"OK",CANCEL:"取消",CONFIRM:"确认"},zh_TW:{OK:"OK",CANCEL:"取消",CONFIRM:"確認"}};return q.init=function(c){window.bootbox=a(c||b)},q}(window.jQuery);
