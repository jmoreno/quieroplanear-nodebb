!function(t){"object"==typeof module&&module.exports?module.exports=t():"function"==typeof define&&define.amd&&define(t)}(function(){function a(t,e,s,i,r){var n=t.__escape;return'\t\t\t\t\t<table class="table table-striped privilege-table">\n\t\t\t\t\t\t<thead>\n\t\t\t\t\t\t\t<tr class="privilege-table-header">\n\t\t\t\t\t\t\t\t<th colspan="2"></th>\n\t\t\t\t\t\t\t\t<th class="arrowed" colspan="3">\n\t\t\t\t\t\t\t\t\t[[admin/manage/categories:privileges.section-viewing]]\n\t\t\t\t\t\t\t\t</th>\n\t\t\t\t\t\t\t\t<th class="arrowed" colspan="9">\n\t\t\t\t\t\t\t\t\t[[admin/manage/categories:privileges.section-posting]]\n\t\t\t\t\t\t\t\t</th>\n\t\t\t\t\t\t\t\t<th class="arrowed" colspan="3">\n\t\t\t\t\t\t\t\t\t[[admin/manage/categories:privileges.section-moderation]]\n\t\t\t\t\t\t\t\t</th>\n\t\t\t\t\t\t\t</tr><tr>\x3c!-- zebrastripe reset --\x3e</tr>\n\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t<th colspan="2">[[admin/manage/categories:privileges.section-user]]</th>\n\t\t\t\t\t\t\t\t'+a.blocks["privileges.labels.users"](t,e,s,i,r)+"\n\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t</thead>\n\t\t\t\t\t\t<tbody>\n\t\t\t\t\t\t\t"+(s(e&&e.privileges&&e.privileges.users&&e.privileges.users.length)?"\n\t\t\t\t\t\t\t"+a.blocks["privileges.users"](t,e,s,i,r)+'\n\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t<td colspan="'+n(s(e&&e.privileges&&e.privileges.columnCount))+'">\n\t\t\t\t\t\t\t\t\t<button type="button" class="btn btn-primary pull-right" data-ajaxify="false" data-action="search.user">\n\t\t\t\t\t\t\t\t\t\t[[admin/manage/categories:privileges.search-user]]\n\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t':'\n\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t<td colspan="'+n(s(e&&e.privileges&&e.privileges.columnCount))+'">\n\t\t\t\t\t\t\t\t\t[[admin/manage/categories:privileges.no-users]]\n\t\t\t\t\t\t\t\t\t<button type="button" class="btn btn-primary pull-right" data-ajaxify="false" data-action="search.user">\n\t\t\t\t\t\t\t\t\t\t[[admin/manage/categories:privileges.search-user]]\n\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t')+'\n\t\t\t\t\t\t</tbody>\n\t\t\t\t\t</table>\n\n\t\t\t\t\t<table class="table table-striped privilege-table">\n\t\t\t\t\t\t<thead>\n\t\t\t\t\t\t\t<tr class="privilege-table-header">\n\t\t\t\t\t\t\t\t<th colspan="2"></th>\n\t\t\t\t\t\t\t\t<th class="arrowed" colspan="3">\n\t\t\t\t\t\t\t\t\t[[admin/manage/categories:privileges.section-viewing]]\n\t\t\t\t\t\t\t\t</th>\n\t\t\t\t\t\t\t\t<th class="arrowed" colspan="9">\n\t\t\t\t\t\t\t\t\t[[admin/manage/categories:privileges.section-posting]]\n\t\t\t\t\t\t\t\t</th>\n\t\t\t\t\t\t\t\t<th class="arrowed" colspan="3">\n\t\t\t\t\t\t\t\t\t[[admin/manage/categories:privileges.section-moderation]]\n\t\t\t\t\t\t\t\t</th>\n\t\t\t\t\t\t\t</tr><tr>\x3c!-- zebrastripe reset --\x3e</tr>\n\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t<th colspan="2">[[admin/manage/categories:privileges.section-group]]</th>\n\t\t\t\t\t\t\t\t'+a.blocks["privileges.labels.groups"](t,e,s,i,r)+"\n\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t</thead>\n\t\t\t\t\t\t<tbody>\n\t\t\t\t\t\t\t"+a.blocks["privileges.groups"](t,e,s,i,r)+'\n\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t<td colspan="'+n(s(e&&e.privileges&&e.privileges.columnCount))+'">\n\t\t\t\t\t\t\t\t\t<div class="btn-toolbar">\n\t\t\t\t\t\t\t\t\t\t<button type="button" class="btn btn-primary pull-right" data-ajaxify="false" data-action="search.group">\n\t\t\t\t\t\t\t\t\t\t\t[[admin/manage/categories:privileges.search-group]]\n\t\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t\t\t<button type="button" class="btn btn-info pull-right" data-ajaxify="false" data-action="copyToChildren">\n\t\t\t\t\t\t\t\t\t\t\t[[admin/manage/categories:privileges.copy-to-children]]\n\t\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t\t\t<button type="button" class="btn btn-info pull-right" data-ajaxify="false" data-action="copyPrivilegesFrom">\n\t\t\t\t\t\t\t\t\t\t\t[[admin/manage/categories:privileges.copy-from-category]]\n\t\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t</tbody>\n\t\t\t\t\t</table>\n\t\t\t\t\t<div class="help-block">\n\t\t\t\t\t\t[[admin/manage/categories:privileges.inherit]]\n\t\t\t\t\t</div>\n'}return a.blocks={"privileges.labels.users":function(t,r,n,e,s){var a=t.__escape;return e(n(r&&r.privileges&&r.privileges.labels&&r.privileges.labels.users),function(t,e,s,i){return'\n\t\t\t\t\t\t\t\t<th class="text-center">'+a(n(r&&r.privileges&&r.privileges.labels&&r.privileges.labels.users&&r.privileges.labels.users[t]&&r.privileges.labels.users[t].name))+"</th>\n\t\t\t\t\t\t\t\t"},function(){return""})},"privileges.users":function(r,n,a,t,l){var p=r.__escape;return t(a(n&&n.privileges&&n.privileges.users),function(t,e,s,i){return'\n\t\t\t\t\t\t\t<tr data-uid="'+p(a(n&&n.privileges&&n.privileges.users&&n.privileges.users[t]&&n.privileges.users[t].uid))+'">\n\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\t'+(a(n&&n.privileges&&n.privileges.users&&n.privileges.users[t]&&n.privileges.users[t].picture)?'\n\t\t\t\t\t\t\t\t\t<img class="avatar avatar-sm" src="'+p(a(n&&n.privileges&&n.privileges.users&&n.privileges.users[t]&&n.privileges.users[t].picture))+'" title="'+p(a(n&&n.privileges&&n.privileges.users&&n.privileges.users[t]&&n.privileges.users[t].username))+'" />\n\t\t\t\t\t\t\t\t\t':'\n\t\t\t\t\t\t\t\t\t<div class="avatar avatar-sm" style="background-color: '+p(a(n&&n.privileges&&n.privileges.users&&n.privileges.users[t]&&n.privileges.users[t]["icon:bgColor"]))+';">'+p(a(n&&n.privileges&&n.privileges.users&&n.privileges.users[t]&&n.privileges.users[t]["icon:text"]))+"</div>\n\t\t\t\t\t\t\t\t\t")+"\n\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t<td>"+p(a(n&&n.privileges&&n.privileges.users&&n.privileges.users[t]&&n.privileges.users[t].username))+"</td>\n\t\t\t\t\t\t\t\t"+p(l(n,r,"spawnPrivilegeStates",[a(n&&n.privileges&&n.privileges.users&&n.privileges.users[t]&&n.privileges.users[t].username),a(n&&n.privileges&&n.privileges.users&&n.privileges.users[t]&&n.privileges.users[t].privileges)]))+"\n\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t"},function(){return""})},"privileges.labels.groups":function(t,r,n,e,s){var a=t.__escape;return e(n(r&&r.privileges&&r.privileges.labels&&r.privileges.labels.groups),function(t,e,s,i){return'\n\t\t\t\t\t\t\t\t<th class="text-center">'+a(n(r&&r.privileges&&r.privileges.labels&&r.privileges.labels.groups&&r.privileges.labels.groups[t]&&r.privileges.labels.groups[t].name))+"</th>\n\t\t\t\t\t\t\t\t"},function(){return""})},"privileges.groups":function(r,n,a,t,l){var p=r.__escape;return t(a(n&&n.privileges&&n.privileges.groups),function(t,e,s,i){return'\n\t\t\t\t\t\t\t<tr data-group-name="'+p(a(n&&n.privileges&&n.privileges.groups&&n.privileges.groups[t]&&n.privileges.groups[t].name))+'" data-private="'+(a(n&&n.privileges&&n.privileges.groups&&n.privileges.groups[t]&&n.privileges.groups[t].isPrivate)?"1":"0")+'">\n\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\t'+(a(n&&n.privileges&&n.privileges.groups&&n.privileges.groups[t]&&n.privileges.groups[t].isPrivate)?'\n\t\t\t\t\t\t\t\t\t<i class="fa fa-lock text-muted" title="[[admin/manage/categories:privileges.group-private]]"></i>\n\t\t\t\t\t\t\t\t\t':"")+"\n\t\t\t\t\t\t\t\t\t"+p(a(n&&n.privileges&&n.privileges.groups&&n.privileges.groups[t]&&n.privileges.groups[t].name))+"\n\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t"+p(l(n,r,"spawnPrivilegeStates",[a(n&&n.privileges&&n.privileges.groups&&n.privileges.groups[t]&&n.privileges.groups[t].name),a(n&&n.privileges&&n.privileges.groups&&n.privileges.groups[t]&&n.privileges.groups[t].privileges)]))+"\n\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t"},function(){return""})}},a});