!function(t){"object"==typeof module&&module.exports?module.exports=t():"function"==typeof define&&define.amd&&define(t)}(function(){function l(t,e,s,i,r){return'\t\t\t\t\t<table class="table table-striped privilege-table">\n\t\t\t\t\t\t<thead>\n\t\t\t\t\t\t\t<tr class="privilege-table-header">\n\t\t\t\t\t\t\t\t<th colspan="3"></th>\n\t\t\t\t\t\t\t</tr><tr>\x3c!-- zebrastripe reset --\x3e</tr>\n\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t<th colspan="2">[[admin/manage/categories:privileges.section-user]]</th>\n\t\t\t\t\t\t\t\t'+l.blocks["privileges.labels.users"](t,e,s,i,r)+"\n\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t</thead>\n\t\t\t\t\t\t<tbody>\n\t\t\t\t\t\t\t"+(s(e&&e.privileges&&e.privileges.users&&e.privileges.users.length)?"\n\t\t\t\t\t\t\t"+l.blocks["privileges.users"](t,e,s,i,r)+'\n\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t<td colspan="'+t.__escape(s(e&&e.privileges&&e.privileges.columnCount))+'">\n\t\t\t\t\t\t\t\t\t<button type="button" class="btn btn-primary pull-right" data-ajaxify="false" data-action="search.user">\n\t\t\t\t\t\t\t\t\t\t[[admin/manage/categories:privileges.search-user]]\n\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t':'\n\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t<td colspan="'+t.__escape(s(e&&e.privileges&&e.privileges.columnCount))+'">\n\t\t\t\t\t\t\t\t\t[[admin/manage/privileges:global.no-users]]\n\t\t\t\t\t\t\t\t\t<button type="button" class="btn btn-primary pull-right" data-ajaxify="false" data-action="search.user">\n\t\t\t\t\t\t\t\t\t\t[[admin/manage/categories:privileges.search-user]]\n\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t')+'\n\t\t\t\t\t\t</tbody>\n\t\t\t\t\t</table>\n\n\t\t\t\t\t<table class="table table-striped privilege-table">\n\t\t\t\t\t\t<thead>\n\t\t\t\t\t\t\t<tr class="privilege-table-header">\n\t\t\t\t\t\t\t\t<th colspan="3"></th>\n\t\t\t\t\t\t\t</tr><tr>\x3c!-- zebrastripe reset --\x3e</tr>\n\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t<th colspan="2">[[admin/manage/categories:privileges.section-group]]</th>\n\t\t\t\t\t\t\t\t'+l.blocks["privileges.labels.groups"](t,e,s,i,r)+"\n\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t</thead>\n\t\t\t\t\t\t<tbody>\n\t\t\t\t\t\t\t"+l.blocks["privileges.groups"](t,e,s,i,r)+'\n\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t<td colspan="'+t.__escape(s(e&&e.privileges&&e.privileges.columnCount))+'">\n\t\t\t\t\t\t\t\t\t<div class="btn-toolbar">\n\t\t\t\t\t\t\t\t\t\t<button type="button" class="btn btn-primary pull-right" data-ajaxify="false" data-action="search.group">\n\t\t\t\t\t\t\t\t\t\t\t[[admin/manage/categories:privileges.search-group]]\n\t\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t</tbody>\n\t\t\t\t\t</table>\n\t\t\t\t\t<div class="help-block">\n\t\t\t\t\t\t[[admin/manage/categories:privileges.inherit]]\n\t\t\t\t\t</div>\n'}return l.blocks={"privileges.groups":function(i,r,l,t,n){return t(l(r&&r.privileges&&r.privileges.groups),function(t,e,s){return'\n\t\t\t\t\t\t\t<tr data-group-name="'+i.__escape(l(r&&r.privileges&&r.privileges.groups&&r.privileges.groups[t]&&r.privileges.groups[t].name))+'" data-private="'+(l(r&&r.privileges&&r.privileges.groups&&r.privileges.groups[t]&&r.privileges.groups[t].isPrivate)?"1":"0")+'">\n\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\t'+(l(r&&r.privileges&&r.privileges.groups&&r.privileges.groups[t]&&r.privileges.groups[t].isPrivate)?'\n\t\t\t\t\t\t\t\t\t<i class="fa fa-lock text-muted" title="[[admin/manage/categories:privileges.group-private]]"></i>\n\t\t\t\t\t\t\t\t\t':"")+"\n\t\t\t\t\t\t\t\t\t"+i.__escape(l(r&&r.privileges&&r.privileges.groups&&r.privileges.groups[t]&&r.privileges.groups[t].name))+"\n\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t"+i.__escape(n(r,i,"spawnPrivilegeStates",[l(r&&r.privileges&&r.privileges.groups&&r.privileges.groups[t]&&r.privileges.groups[t].name),l(r&&r.privileges&&r.privileges.groups&&r.privileges.groups[t]&&r.privileges.groups[t].privileges)]))+"\n\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t"})},"privileges.labels.groups":function(i,r,l,t,e){return t(l(r&&r.privileges&&r.privileges.labels&&r.privileges.labels.groups),function(t,e,s){return'\n\t\t\t\t\t\t\t\t<th class="text-center">'+i.__escape(l(r&&r.privileges&&r.privileges.labels&&r.privileges.labels.groups&&r.privileges.labels.groups[t]&&r.privileges.labels.groups[t].name))+"</th>\n\t\t\t\t\t\t\t\t"})},"privileges.users":function(i,r,l,t,n){return t(l(r&&r.privileges&&r.privileges.users),function(t,e,s){return'\n\t\t\t\t\t\t\t<tr data-uid="'+i.__escape(l(r&&r.privileges&&r.privileges.users&&r.privileges.users[t]&&r.privileges.users[t].uid))+'">\n\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\t'+(l(r&&r.privileges&&r.privileges.users&&r.privileges.users[t]&&r.privileges.users[t].picture)?'\n\t\t\t\t\t\t\t\t\t<img class="avatar avatar-sm" src="'+i.__escape(l(r&&r.privileges&&r.privileges.users&&r.privileges.users[t]&&r.privileges.users[t].picture))+'" title="'+i.__escape(l(r&&r.privileges&&r.privileges.users&&r.privileges.users[t]&&r.privileges.users[t].username))+'" />\n\t\t\t\t\t\t\t\t\t':'\n\t\t\t\t\t\t\t\t\t<div class="avatar avatar-sm" style="background-color: '+i.__escape(l(r&&r.privileges&&r.privileges.users&&r.privileges.users[t]&&r.privileges.users[t]["icon:bgColor"]))+';">'+i.__escape(l(r&&r.privileges&&r.privileges.users&&r.privileges.users[t]&&r.privileges.users[t]["icon:text"]))+"</div>\n\t\t\t\t\t\t\t\t\t")+"\n\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t<td>"+i.__escape(l(r&&r.privileges&&r.privileges.users&&r.privileges.users[t]&&r.privileges.users[t].username))+"</td>\n\t\t\t\t\t\t\t\t"+i.__escape(n(r,i,"spawnPrivilegeStates",[l(r&&r.privileges&&r.privileges.users&&r.privileges.users[t]&&r.privileges.users[t].username),l(r&&r.privileges&&r.privileges.users&&r.privileges.users[t]&&r.privileges.users[t].privileges)]))+"\n\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t"})},"privileges.labels.users":function(i,r,l,t,e){return t(l(r&&r.privileges&&r.privileges.labels&&r.privileges.labels.users),function(t,e,s){return'\n\t\t\t\t\t\t\t\t<th class="text-center">'+i.__escape(l(r&&r.privileges&&r.privileges.labels&&r.privileges.labels.users&&r.privileges.labels.users[t]&&r.privileges.labels.users[t].name))+"</th>\n\t\t\t\t\t\t\t\t"})}},l});