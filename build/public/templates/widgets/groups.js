!function(r){"object"==typeof module&&module.exports?module.exports=r():"function"==typeof define&&define.amd&&define(r)}(function(){function n(r,s,e,o,u){return'\r\n<div class="groups-list">\r\n'+n.blocks.groups(r,s,e,o,u)+"\r\n</div>\r\n"}return n.blocks={groups:function(o,u,n,r,s){return r(n(u&&u.groups),function(r,s,e){return'\r\n<div class="groups-list-item clearfix">\r\n\t<img src="'+o.__escape(n(u&&u.groups&&u.groups[r]&&u.groups[r]["cover:url"]))+'" class="pull-left" />\r\n\t<a href="'+o.__escape(n(u&&u.relative_path))+"/groups/"+o.__escape(n(u&&u.groups&&u.groups[r]&&u.groups[r].slug))+'"><strong>'+o.__escape(n(u&&u.groups&&u.groups[r]&&u.groups[r].displayName))+"</strong></a>\r\n</div>\r\n"})}},n});