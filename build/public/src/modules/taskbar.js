"use strict";define("taskbar",["benchpress","translator"],function(t,a){var i={};i.init=function(){var a=this;t.parse("modules/taskbar",{},function(t){a.taskbar=$(t);a.tasklist=a.taskbar.find("ul");$(document.body).append(a.taskbar);a.taskbar.on("click","li",function(){var t=$(this);var a=t.attr("data-module");var e=t.attr("data-uuid");require([a],function(a){if(!t.hasClass("active")){s();a.load(e);i.toggleNew(e,false);app.alternatingTitle("");i.tasklist.removeClass("active");t.addClass("active")}else{a.minimize(e)}});return false})})};i.discard=function(t,a){var s=i.tasklist.find('[data-module="'+t+'"][data-uuid="'+a+'"]');s.remove();e()};i.push=function(t,a,e){var s=i.tasklist.find('li[data-uuid="'+a+'"]');var d={module:t,uuid:a,options:e,element:s};$(window).trigger("filter:taskbar.push",d);if(!s.length&&d.module){n(d)}};i.get=function(t){var a=$('[data-module="'+t+'"]').map(function(t,a){return $(a).data()});return a};i.minimize=function(t,a){var e=i.tasklist.find('[data-module="'+t+'"][data-uuid="'+a+'"]');e.toggleClass("active",false)};i.toggleNew=function(t,a,e){var s=i.tasklist.find('[data-uuid="'+t+'"]');s.toggleClass("new",a);if(!e){$(window).trigger("action:taskbar.toggleNew",t)}};i.updateActive=function(t){var a=i.tasklist.find("li");a.removeClass("active");a.filter('[data-uuid="'+t+'"]').addClass("active");$("[data-uuid]:not([data-module])").toggleClass("modal-unfocused",true);$('[data-uuid="'+t+'"]:not([data-module])').toggleClass("modal-unfocused",false)};i.isActive=function(t){var a=i.tasklist.find('li[data-uuid="'+t+'"]');return a.hasClass("active")};function e(){var t=i.tasklist.find("li");if(t.length>0){i.taskbar.attr("data-active","1")}else{i.taskbar.removeAttr("data-active")}}function s(){i.tasklist.find(".active").removeClass("active")}function n(t){a.translate(t.options.title,function(a){var n=$("<div></div>").text(a||"NodeBB Task").html();var d=$("<li />").addClass(t.options.className).html('<a href="#">'+(t.options.icon?'<i class="fa '+t.options.icon+'"></i> ':"")+(t.options.image?'<img src="'+t.options.image+'"/> ':"")+'<span component="taskbar/title">'+n+"</span>"+"</a>").attr({title:n,"data-module":t.module,"data-uuid":t.uuid}).addClass(t.options.state!==undefined?t.options.state:"active");if(!t.options.state||t.options.state==="active"){s()}i.tasklist.append(d);e();t.element=d;d.data(t);$(window).trigger("action:taskbar.pushed",t)})}i.updateTitle=function(t,a,e){i.tasklist.find('[data-module="'+t+'"][data-uuid="'+a+'"] [component="taskbar/title"]').text(e)};return i});
//# sourceMappingURL=public/src/modules/taskbar.js.map