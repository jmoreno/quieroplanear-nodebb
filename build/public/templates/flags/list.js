!function(t){"object"==typeof module&&module.exports?module.exports=t():"function"==typeof define&&define.amd&&define(t)}(function(){function s(t,a,n,i,e){var l=t.__escape;return'<div class="row">\n\t<div class="col-sm-4 col-md-3">\n\t\t<div class="panel panel-default">\n\t<div class="panel-heading">\n\t\t<h3 class="panel-title">[[flags:quick-filters]]</h3>\n\t</div>\n\t<div class="panel-body">\n\t\t<ul>\n\t\t\t<li><a href="'+l(n(a&&a.config&&a.config.relative_path))+'/flags?quick=mine">[[flags:filter-quick-mine]]</a></li>\n\t\t</ul>\n\t</div>\n</div>\n\n<div class="panel panel-default">\n\t<div class="panel-heading">\n\t\t<h3 class="panel-title">[[flags:filters]]</h3>\n\t</div>\n\t<div class="panel-body">\n\t\t<form role="form" component="flags/filters">\n\t\t\t<div class="form-group">\n\t\t\t\t<label for="filter-state">[[flags:filter-state]]</label>\n\t\t\t\t<select class="form-control" id="filter-state" name="state">\n\t\t\t\t\t<option value="">[[flags:state-all]]</option>\n\t\t\t\t\t<option value="open">[[flags:state-open]]</option>\n\t\t\t\t\t<option value="wip">[[flags:state-wip]]</option>\n\t\t\t\t\t<option value="resolved">[[flags:state-resolved]]</option>\n\t\t\t\t\t<option value="rejected">[[flags:state-rejected]]</option>\n\t\t\t\t</select>\n\t\t\t</div>\n\n\t\t\t<div class="form-group">\n\t\t\t\t<label for="filter-type">[[flags:filter-type]]</label>\n\t\t\t\t<select class="form-control" id="filter-type" name="type">\n\t\t\t\t\t<option value="">[[flags:filter-type-all]]</option>\n\t\t\t\t\t<option value="post">[[flags:filter-type-post]]</option>\n\t\t\t\t\t<option value="user">[[flags:filter-type-user]]</option>\n\t\t\t\t</select>\n\t\t\t</div>\n\n\t\t\t<div class="form-group">\n\t\t\t\t<label for="filter-assignee">[[flags:filter-assignee]]</label>\n\t\t\t\t<input type="number" class="form-control" id="filter-assignee" name="assignee" min="0" />\n\t\t\t</div>\n\n\t\t\t<div class="form-group">\n\t\t\t\t<label for="filter-cid">[[flags:filter-cid]]</label>\n\t\t\t\t<select class="form-control" id="filter-cid" name="cid" multiple="true">\n\t\t\t\t\t<option value="">[[flags:filter-cid-all]]</option>\n\t\t\t\t\t'+s.blocks.categories(t,a,n,i,e)+'\n\t\t\t\t</select>\n\t\t\t</div>\n\n\t\t\t<div class="form-group">\n\t\t\t\t<label for="filter-targetUid">[[flags:filter-targetUid]]</label>\n\t\t\t\t<input type="number" class="form-control" id="filter-targetUid" name="targetUid" min="0" />\n\t\t\t</div>\n\n\t\t\t<div class="form-group">\n\t\t\t\t<label for="filter-reporterId">[[flags:filter-reporterId]]</label>\n\t\t\t\t<input type="number" class="form-control" id="filter-reporterId" name="reporterId" min="0" />\n\t\t\t</div>\n\n\t\t\t<button type="button" class="btn btn-primary btn-block">[[flags:apply-filters]]</button>\n\t\t</form>\n\t</div>\n</div>\n\t</div>\n\t<div class="col-sm-8 col-md-9">\n\t\t<div class="text-center">\n\t\t\t<div class="panel panel-default">\n\t\t\t\t<div class="panel-body">\n\t\t\t\t\t<div><canvas id="flags:daily" height="250"></canvas></div>\n\t\t\t\t\t<p>\n\n\t\t\t\t\t</p>\n\t\t\t\t</div>\n\t\t\t\t<div class="panel-footer"><small>Daily flags</small></div>\n\t\t\t</div>\n\t\t</div>\n\n\t\t'+(n(a&&a.hasFilter)?'\n\t\t<div class="alert alert-warning">\n\t\t\t<p class="pull-right">\n\t\t\t\t<a href="'+l(n(a&&a.config&&a.config.relative_path))+'/flags?reset=1">[[flags:filter-reset]]</a>\n\t\t\t</p>\n\t\t\t[[flags:filter-active]]\n\t\t</div>\n\t\t':"")+'\n\t\t<table class="table table-striped table-hover" component="flags/list">\n\t\t\t<thead>\n\t\t\t\t<tr>\n\t\t\t\t\t<th>[[flags:state]]</th>\n\t\t\t\t\t<th></th>\n\t\t\t\t\t<th><span class="hidden-xs">[[flags:reporter]] </span><i class="fa fa-user-plus"></i></th>\n\t\t\t\t\t<th><span class="hidden-xs">[[flags:reported-at]] </span><i class="fa fa-clock-o"></i></th>\n\t\t\t\t</tr>\n\t\t\t</thead>\n\t\t\t<tbody>\n\t\t\t\t'+(n(a&&a.flags&&a.flags.length)?"":'\n\t\t\t\t<tr>\n\t\t\t\t\t<td colspan="4">\n\t\t\t\t\t\t<div class="alert alert-success text-center">\n\t\t\t\t\t\t\t[[flags:no-flags]]\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</td>\n\t\t\t\t</tr>\n\t\t\t\t')+"\n\t\t\t\t"+s.blocks.flags(t,a,n,i,e)+'\n\t\t\t</tbody>\n\t\t</table>\n\n\t\t<div component="pagination" class="text-center pagination-container'+(n(a&&a.pagination&&a.pagination.pages&&a.pagination.pages.length)?"":" hidden")+'">\n\t<ul class="pagination hidden-xs">\n\t\t<li class="previous pull-left'+(n(a&&a.pagination&&a.pagination.prev&&a.pagination.prev.active)?"":" disabled")+'">\n\t\t\t<a href="?'+l(n(a&&a.pagination&&a.pagination.prev&&a.pagination.prev.qs))+'" data-page="'+l(n(a&&a.pagination&&a.pagination.prev&&a.pagination.prev.page))+'"><i class="fa fa-chevron-left"></i> </a>\n\t\t</li>\n\n\t\t'+s.blocks["pagination.pages"](t,a,n,i,e)+'\n\n\t\t<li class="next pull-right'+(n(a&&a.pagination&&a.pagination.next&&a.pagination.next.active)?"":" disabled")+'">\n\t\t\t<a href="?'+l(n(a&&a.pagination&&a.pagination.next&&a.pagination.next.qs))+'" data-page="'+l(n(a&&a.pagination&&a.pagination.next&&a.pagination.next.page))+'"> <i class="fa fa-chevron-right"></i></a>\n\t\t</li>\n\t</ul>\n\n\t<ul class="pagination hidden-sm hidden-md hidden-lg">\n\t\t<li class="first'+(n(a&&a.pagination&&a.pagination.prev&&a.pagination.prev.active)?"":" disabled")+'">\n\t\t\t<a href="?page=1" data-page="1"><i class="fa fa-fast-backward"></i> </a>\n\t\t</li>\n\n\t\t<li class="previous'+(n(a&&a.pagination&&a.pagination.prev&&a.pagination.prev.active)?"":" disabled")+'">\n\t\t\t<a href="?'+l(n(a&&a.pagination&&a.pagination.prev&&a.pagination.prev.qs))+'" data-page="'+l(n(a&&a.pagination&&a.pagination.prev&&a.pagination.prev.page))+'"><i class="fa fa-chevron-left"></i> </a>\n\t\t</li>\n\n\t\t<li component="pagination/select-page" class="page select-page">\n\t\t\t<a href="#">'+l(n(a&&a.pagination&&a.pagination.currentPage))+" / "+l(n(a&&a.pagination&&a.pagination.pageCount))+'</a>\n\t\t</li>\n\n\t\t<li class="next'+(n(a&&a.pagination&&a.pagination.next&&a.pagination.next.active)?"":" disabled")+'">\n\t\t\t<a href="?'+l(n(a&&a.pagination&&a.pagination.next&&a.pagination.next.qs))+'" data-page="'+l(n(a&&a.pagination&&a.pagination.next&&a.pagination.next.page))+'"> <i class="fa fa-chevron-right"></i></a>\n\t\t</li>\n\n\t\t<li class="last'+(n(a&&a.pagination&&a.pagination.next&&a.pagination.next.active)?"":" disabled")+'">\n\t\t\t<a href="?page='+l(n(a&&a.pagination&&a.pagination.pageCount))+'" data-page="'+l(n(a&&a.pagination&&a.pagination.pageCount))+'"><i class="fa fa-fast-forward"></i> </a>\n\t\t</li>\n\t</ul>\n</div>\n\t</div>\n</div>\n'}return s.blocks={categories:function(t,a,e,n,i){var l=t.__escape;return n(e(a&&a.categories),function(t,a,n,i){return'\n\t\t\t\t\t<option value="'+l(t)+'">'+l(e(i))+"</option>\n\t\t\t\t\t"},function(){return""})},flags:function(t,e,l,a,n){var s=t.__escape;return a(l(e&&e.flags),function(t,a,n,i){return'\n\t\t\t\t<tr data-flag-id="'+s(l(e&&e.flags&&e.flags[t]&&e.flags[t].flagId))+'">\n\t\t\t\t\t<td><span class="label label-'+s(l(e&&e.flags&&e.flags[t]&&e.flags[t].labelClass))+'">[[flags:state-'+s(l(e&&e.flags&&e.flags[t]&&e.flags[t].state))+']]</span></td>\n\t\t\t\t\t<td>\n\t\t\t\t\t\t<a href="'+s(l(e&&e.config&&e.config.relative_path))+"/flags/"+s(l(e&&e.flags&&e.flags[t]&&e.flags[t].flagId))+'">\n\t\t\t\t\t\t\t<strong>'+s(l(e&&e.flags&&e.flags[t]&&e.flags[t].target_readable))+'</strong> &mdash; <span component="flags/list/description">'+s(l(e&&e.flags&&e.flags[t]&&e.flags[t].description))+"</span>\n\t\t\t\t\t\t</a>\n\t\t\t\t\t</td>\n\t\t\t\t\t<td>\n\t\t\t\t\t\t"+(l(e&&e.flags&&e.flags[t]&&e.flags[t].reporter&&e.flags[t].reporter.picture)?'\n\t\t\t\t\t\t<img class="avatar avatar-sm" src="'+s(l(e&&e.flags&&e.flags[t]&&e.flags[t].reporter&&e.flags[t].reporter.picture))+'" />\n\t\t\t\t\t\t':'\n\t\t\t\t\t\t<div class="avatar avatar-sm" style="background-color: '+s(l(e&&e.flags&&e.flags[t]&&e.flags[t].reporter&&e.flags[t].reporter["icon:bgColor"]))+';">'+s(l(e&&e.flags&&e.flags[t]&&e.flags[t].reporter&&e.flags[t].reporter["icon:text"]))+"</div>\n\t\t\t\t\t\t")+"\n\t\t\t\t\t\t"+s(l(e&&e.flags&&e.flags[t]&&e.flags[t].reporter&&e.flags[t].reporter.username))+'\n\t\t\t\t\t</td>\n\t\t\t\t\t<td><span class="timeago" title="'+s(l(e&&e.flags&&e.flags[t]&&e.flags[t].datetimeISO))+'"></span></td>\n\t\t\t\t</tr>\n\t\t\t\t'},function(){return""})},"pagination.pages":function(t,e,l,a,n){var s=t.__escape;return a(l(e&&e.pagination&&e.pagination.pages),function(t,a,n,i){return"\n\t\t\t"+(l(e&&e.pagination&&e.pagination.pages&&e.pagination.pages[t]&&e.pagination.pages[t].separator)?'\n\t\t\t<li component="pagination/select-page" class="page select-page">\n\t\t\t\t<a href="#"><i class="fa fa-ellipsis-h"></i></a>\n\t\t\t</li>\n\t\t\t':'\n\t\t\t<li class="page'+(l(e&&e.pagination&&e.pagination.pages&&e.pagination.pages[t]&&e.pagination.pages[t].active)?" active":"")+'" >\n\t\t\t\t<a href="?'+s(l(e&&e.pagination&&e.pagination.pages&&e.pagination.pages[t]&&e.pagination.pages[t].qs))+'" data-page="'+s(l(e&&e.pagination&&e.pagination.pages&&e.pagination.pages[t]&&e.pagination.pages[t].page))+'">'+s(l(e&&e.pagination&&e.pagination.pages&&e.pagination.pages[t]&&e.pagination.pages[t].page))+"</a>\n\t\t\t</li>\n\t\t\t")+"\n\t\t"},function(){return""})}},s});