!function(t){"object"==typeof module&&module.exports?module.exports=t():"function"==typeof define&&define.amd&&define(t)}(function(){function p(t,s,e,r,i){return'<div class="recent-replies">\r\n\t<ul class="suggested-topics">\r\n\t'+p.blocks.topics(t,s,e,r,i)+"\r\n\t</ul>\r\n</div>\r\n\r\n<script>\r\n'use strict';\r\n/* globals app*/\r\n\r\nif (window.jQuery) {\r\n\tapp.createUserTooltips();\r\n} else {\r\n\twindow.addEventListener('load', app.createUserTooltips);\r\n}\r\n<\/script>\r\n"}return p.blocks={topics:function(r,i,p,t,s){return t(p(i&&i.topics),function(t,s,e){return'\r\n<li class="clearfix widget-topics">\r\n\t<a href="'+(p(i&&i.topics&&i.topics[t]&&i.topics[t].user&&i.topics[t].user.userslug)?r.__escape(p(i&&i.relative_path))+"/user/"+r.__escape(p(i&&i.topics&&i.topics[t]&&i.topics[t].user&&i.topics[t].user.userslug)):"#")+'">\r\n\t\t'+(p(i&&i.topics&&i.topics[t]&&i.topics[t].user&&i.topics[t].user.picture)?'\r\n\t\t<img title="'+r.__escape(p(i&&i.topics&&i.topics[t]&&i.topics[t].user&&i.topics[t].user.username))+'" class="avatar avatar-sm not-responsive" src="'+r.__escape(p(i&&i.topics&&i.topics[t]&&i.topics[t].user&&i.topics[t].user.picture))+'" />\r\n\t\t':'\r\n\t\t<div title="'+r.__escape(p(i&&i.topics&&i.topics[t]&&i.topics[t].user&&i.topics[t].user.username))+'" class="avatar avatar-sm not-responsive" style="background-color: '+r.__escape(p(i&&i.topics&&i.topics[t]&&i.topics[t].user&&i.topics[t].user["icon:bgColor"]))+';">'+r.__escape(p(i&&i.topics&&i.topics[t]&&i.topics[t].user&&i.topics[t].user["icon:text"]))+"</div>\r\n\t\t")+'\r\n\t</a>\r\n\r\n\t<p>\r\n\t\t<a href="'+r.__escape(p(i&&i.relative_path))+"/topic/"+r.__escape(p(i&&i.topics&&i.topics[t]&&i.topics[t].slug))+'">'+r.__escape(p(i&&i.topics&&i.topics[t]&&i.topics[t].title))+'</a>\r\n\t</p>\r\n\t<span class="pull-right post-preview-footer">\r\n\t\t<span class="timeago" title="'+r.__escape(p(i&&i.topics&&i.topics[t]&&i.topics[t].lastposttimeISO))+'"></span>\r\n\t</span>\r\n</li>\r\n'})}},p});