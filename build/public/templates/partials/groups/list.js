!function(t){"object"==typeof module&&module.exports?module.exports=t():"function"==typeof define&&define.amd&&define(t)}(function(){function u(t,s,e,r,o){return"\t"+u.blocks.groups(t,s,e,r,o)}return u.blocks={groups:function(o,u,p,e,t){return e(p(u&&u.groups),function(r,t,s){return'\n\t<div class="col-lg-4 col-md-6 col-sm-12" component="groups/summary" data-slug="'+o.__escape(p(u&&u.groups&&u.groups[r]&&u.groups[r].slug))+'">\n\t\t<div class="panel panel-default">\n\t\t\t<a href="'+o.__escape(p(u&&u.config&&u.config.relative_path))+"/groups/"+o.__escape(p(u&&u.groups&&u.groups[r]&&u.groups[r].slug))+'" class="panel-heading list-cover" style="'+(p(u&&u.groups&&u.groups[r]&&u.groups[r]["cover:thumb:url"])?"background-image: url("+o.__escape(p(u&&u.groups&&u.groups[r]&&u.groups[r]["cover:thumb:url"]))+");":"")+'">\n\t\t\t\t<h3 class="panel-title">'+o.__escape(p(u&&u.groups&&u.groups[r]&&u.groups[r].displayName))+" <small>"+o.__escape(p(u&&u.groups&&u.groups[r]&&u.groups[r].memberCount))+'</small></h3>\n\t\t\t</a>\n\t\t\t<div class="panel-body">\n\t\t\t\t<ul class="members">\n\t\t\t\t\t'+(p(u&&u.groups&&u.groups[r]&&u.groups[r].members)?e(p(u&&u.groups&&u.groups[r]&&u.groups[r].members),function(t,s,e){return'\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<a href="'+o.__escape(p(u&&u.config&&u.config.relative_path))+"/user/"+o.__escape(p(u&&u.groups&&u.groups[r]&&u.groups[r].members&&u.groups[r].members[t]&&u.groups[r].members[t].userslug))+'">\n\t\t\t\t\t\t\t'+(p(u&&u.groups&&u.groups[r]&&u.groups[r].members&&u.groups[r].members[t]&&u.groups[r].members[t].picture)?'\n\t\t\t\t\t\t\t<img class="avatar avatar-sm avatar-rounded" src="'+o.__escape(p(u&&u.groups&&u.groups[r]&&u.groups[r].members&&u.groups[r].members[t]&&u.groups[r].members[t].picture))+'" title="'+o.__escape(p(u&&u.groups&&u.groups[r]&&u.groups[r].members&&u.groups[r].members[t]&&u.groups[r].members[t].username))+'" />\n\t\t\t\t\t\t\t':'\n\t\t\t\t\t\t\t<div class="avatar avatar-sm avatar-rounded" style="background-color: '+o.__escape(p(u&&u.groups&&u.groups[r]&&u.groups[r].members&&u.groups[r].members[t]&&u.groups[r].members[t]["icon:bgColor"]))+';" title="'+o.__escape(p(u&&u.groups&&u.groups[r]&&u.groups[r].members&&u.groups[r].members[t]&&u.groups[r].members[t].username))+'">'+o.__escape(p(u&&u.groups&&u.groups[r]&&u.groups[r].members&&u.groups[r].members[t]&&u.groups[r].members[t]["icon:text"]))+"</div>\n\t\t\t\t\t\t\t")+"\n\t\t\t\t\t\t</a>\n\t\t\t\t\t</li>\n\t\t\t\t\t"}):e(p(u&&u.members),function(t,s,e){return'\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<a href="'+o.__escape(p(u&&u.config&&u.config.relative_path))+"/user/"+o.__escape(p(u&&u.groups&&u.groups.members&&u.groups.members.userslug))+'">\n\t\t\t\t\t\t\t'+(p(u&&u.groups&&u.groups.members&&u.groups.members.picture)?'\n\t\t\t\t\t\t\t<img class="avatar avatar-sm avatar-rounded" src="'+o.__escape(p(u&&u.groups&&u.groups.members&&u.groups.members.picture))+'" title="'+o.__escape(p(u&&u.groups&&u.groups.members&&u.groups.members.username))+'" />\n\t\t\t\t\t\t\t':'\n\t\t\t\t\t\t\t<div class="avatar avatar-sm avatar-rounded" style="background-color: '+o.__escape(p(u&&u.groups&&u.groups.members&&u.groups.members["icon:bgColor"]))+';" title="'+o.__escape(p(u&&u.groups&&u.groups.members&&u.groups.members.username))+'">'+o.__escape(p(u&&u.groups&&u.groups.members&&u.groups.members["icon:text"]))+"</div>\n\t\t\t\t\t\t\t")+"\n\t\t\t\t\t\t</a>\n\t\t\t\t\t</li>\n\t\t\t\t\t"}))+"\n\t\t\t\t\t"+(p(u&&u.groups&&u.groups[r]&&u.groups[r].truncated)?'\n\t\t\t\t\t<li class="truncated"><i class="fa fa-ellipsis-h"></i></li>\n\t\t\t\t\t':"")+"\n\t\t\t\t</ul>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\t"})}},u});