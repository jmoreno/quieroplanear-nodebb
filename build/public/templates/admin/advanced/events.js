!function(t){"object"==typeof module&&module.exports?module.exports=t():"function"==typeof define&&define.amd&&define(t)}(function(){function s(t,a,n,e,i){return'<div class="row events">\n\t<div class="col-lg-9">\n\t\t<div class="panel panel-default">\n\t\t\t<div class="panel-heading"><i class="fa fa-calendar-o"></i> [[admin/advanced/events:events]]</div>\n\t\t\t<div class="panel-body" data-next="'+t.__escape(n(a&&a.next))+'">\n\t\t\t\t'+(n(a&&a.events&&a.events.length)?"":'\n\t\t\t\t<div class="alert alert-info">[[admin/advanced/events:no-events]]</div>\n\t\t\t\t')+'\n\t\t\t\t<div class="events-list">\n\t\t\t\t'+s.blocks.events(t,a,n,e,i)+'\n\t\t\t\t<div component="pagination" class="text-center pagination-container'+(n(a&&a.pagination&&a.pagination.pages&&a.pagination.pages.length)?"":" hidden")+'">\n\t<ul class="pagination hidden-xs">\n\t\t<li class="previous pull-left'+(n(a&&a.pagination&&a.pagination.prev&&a.pagination.prev.active)?"":" disabled")+'">\n\t\t\t<a href="?'+t.__escape(n(a&&a.pagination&&a.pagination.prev&&a.pagination.prev.qs))+'" data-page="'+t.__escape(n(a&&a.pagination&&a.pagination.prev&&a.pagination.prev.page))+'"><i class="fa fa-chevron-left"></i> </a>\n\t\t</li>\n\n\t\t'+s.blocks["pagination.pages"](t,a,n,e,i)+'\n\n\t\t<li class="next pull-right'+(n(a&&a.pagination&&a.pagination.next&&a.pagination.next.active)?"":" disabled")+'">\n\t\t\t<a href="?'+t.__escape(n(a&&a.pagination&&a.pagination.next&&a.pagination.next.qs))+'" data-page="'+t.__escape(n(a&&a.pagination&&a.pagination.next&&a.pagination.next.page))+'"> <i class="fa fa-chevron-right"></i></a>\n\t\t</li>\n\t</ul>\n\n\t<ul class="pagination hidden-sm hidden-md hidden-lg">\n\t\t<li class="first'+(n(a&&a.pagination&&a.pagination.prev&&a.pagination.prev.active)?"":" disabled")+'">\n\t\t\t<a href="?page=1" data-page="1"><i class="fa fa-fast-backward"></i> </a>\n\t\t</li>\n\n\t\t<li class="previous'+(n(a&&a.pagination&&a.pagination.prev&&a.pagination.prev.active)?"":" disabled")+'">\n\t\t\t<a href="?'+t.__escape(n(a&&a.pagination&&a.pagination.prev&&a.pagination.prev.qs))+'" data-page="'+t.__escape(n(a&&a.pagination&&a.pagination.prev&&a.pagination.prev.page))+'"><i class="fa fa-chevron-left"></i> </a>\n\t\t</li>\n\n\t\t<li component="pagination/select-page" class="page select-page">\n\t\t\t<a href="#">'+t.__escape(n(a&&a.pagination&&a.pagination.currentPage))+" / "+t.__escape(n(a&&a.pagination&&a.pagination.pageCount))+'</a>\n\t\t</li>\n\n\t\t<li class="next'+(n(a&&a.pagination&&a.pagination.next&&a.pagination.next.active)?"":" disabled")+'">\n\t\t\t<a href="?'+t.__escape(n(a&&a.pagination&&a.pagination.next&&a.pagination.next.qs))+'" data-page="'+t.__escape(n(a&&a.pagination&&a.pagination.next&&a.pagination.next.page))+'"> <i class="fa fa-chevron-right"></i></a>\n\t\t</li>\n\n\t\t<li class="last'+(n(a&&a.pagination&&a.pagination.next&&a.pagination.next.active)?"":" disabled")+'">\n\t\t\t<a href="?page='+t.__escape(n(a&&a.pagination&&a.pagination.pageCount))+'" data-page="'+t.__escape(n(a&&a.pagination&&a.pagination.pageCount))+'"><i class="fa fa-fast-forward"></i> </a>\n\t\t</li>\n\t</ul>\n</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\t<div class="col-lg-3 acp-sidebar">\n\t\t<div class="panel panel-default">\n\t\t\t<div class="panel-heading"></div>\n\t\t\t<div class="panel-body">\n\t\t\t\t<button class="btn btn-warning" data-action="clear">\n\t\t\t\t\t<i class="fa fa-eraser"></i> [[admin/advanced/events:delete-events]]\n\t\t\t\t</button>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>\n'}return s.blocks={"pagination.pages":function(e,i,s,t,a){return t(s(i&&i.pagination&&i.pagination.pages),function(t,a,n){return"\n\t\t\t"+(s(i&&i.pagination&&i.pagination.pages&&i.pagination.pages[t]&&i.pagination.pages[t].separator)?'\n\t\t\t<li component="pagination/select-page" class="page select-page">\n\t\t\t\t<a href="#"><i class="fa fa-ellipsis-h"></i></a>\n\t\t\t</li>\n\t\t\t':'\n\t\t\t<li class="page'+(s(i&&i.pagination&&i.pagination.pages&&i.pagination.pages[t]&&i.pagination.pages[t].active)?" active":"")+'" >\n\t\t\t\t<a href="?'+e.__escape(s(i&&i.pagination&&i.pagination.pages&&i.pagination.pages[t]&&i.pagination.pages[t].qs))+'" data-page="'+e.__escape(s(i&&i.pagination&&i.pagination.pages&&i.pagination.pages[t]&&i.pagination.pages[t].page))+'">'+e.__escape(s(i&&i.pagination&&i.pagination.pages&&i.pagination.pages[t]&&i.pagination.pages[t].page))+"</a>\n\t\t\t</li>\n\t\t\t")+"\n\t\t"})},events:function(e,i,s,t,a){return t(s(i&&i.events),function(t,a,n){return"\n\t\t\t\t<div>\n\t\t\t\t\t<span>#"+e.__escape(s(i&&i.events&&i.events[t]&&i.events[t].eid))+' </span><span class="label label-info">'+e.__escape(s(i&&i.events&&i.events[t]&&i.events[t].type))+'</span>\n\t\t\t\t\t<a href="'+e.__escape(s(i&&i.config&&i.config.relative_path))+"/user/"+e.__escape(s(i&&i.events&&i.events[t]&&i.events[t].user&&i.events[t].user.userslug))+'" target="_blank">\n\t\t\t\t\t\t'+(s(i&&i.events&&i.events[t]&&i.events[t].user&&i.events[t].user.picture)?'\n\t\t\t\t\t\t<img class="avatar avatar-sm" src="'+e.__escape(s(i&&i.events&&i.events[t]&&i.events[t].user&&i.events[t].user.picture))+'" />\n\t\t\t\t\t\t':'\n\t\t\t\t\t\t<div class="avatar avatar-sm" style="background-color: '+e.__escape(s(i&&i.events&&i.events[t]&&i.events[t].user&&i.events[t].user["icon:bgColor"]))+';">'+e.__escape(s(i&&i.events&&i.events[t]&&i.events[t].user&&i.events[t].user["icon:text"]))+"</div>\n\t\t\t\t\t\t")+'\n\t\t\t\t\t</a>\n\t\t\t\t\t<a href="'+e.__escape(s(i&&i.config&&i.config.relative_path))+"/user/"+e.__escape(s(i&&i.events&&i.events[t]&&i.events[t].user&&i.events[t].user.userslug))+'" target="_blank">'+e.__escape(s(i&&i.events&&i.events[t]&&i.events[t].user&&i.events[t].user.username))+"</a> (uid "+e.__escape(s(i&&i.events&&i.events[t]&&i.events[t].uid))+") (IP "+e.__escape(s(i&&i.events&&i.events[t]&&i.events[t].ip))+')\n\t\t\t\t\t<span class="pull-right">'+e.__escape(s(i&&i.events&&i.events[t]&&i.events[t].timestampISO))+"</span>\n\t\t\t\t\t<br /><br />\n\t\t\t\t\t<pre>"+e.__escape(s(i&&i.events&&i.events[t]&&i.events[t].jsonString))+"</pre>\n\t\t\t\t</div>\n\t\t\t\t"})}},s});