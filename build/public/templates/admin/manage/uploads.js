!function(t){"object"==typeof module&&module.exports?module.exports=t():"function"==typeof define&&define.amd&&define(t)}(function(){function s(t,a,n,i,e){return(n(a&&a.breadcrumbs&&a.breadcrumbs.length)?'\n<ol class="breadcrumb">\n\t'+s.blocks.breadcrumbs(t,a,n,i,e)+"\n</ol>\n":"")+'\n<div class="clearfix">\n\t<button id="upload" class="btn-success pull-right"><i class="fa fa-upload"></i> [[global:upload]]</button>\n</div>\n\n<div class="table-responsive">\n\t<table class="table table-striped users-table">\n\t\t<thead>\n\t\t\t<tr>\n\t\t\t\t<th>[[admin/manage/uploads:filename]]</th>\n\t\t\t\t'+(n(a&&a.showPids)?'<th class="text-right">[[admin/manage/uploads:usage]]</th>':"")+'\n\t\t\t\t<th class="text-right">[[admin/manage/uploads:size/filecount]]</th>\n\t\t\t\t<th></th>\n\t\t\t</tr>\n\t\t</thead>\n\t\t<tbody>\n\t\t\t'+s.blocks.files(t,a,n,i,e)+'\n\t\t</tbody>\n\t</table>\n</div>\n\n<div component="pagination" class="text-center pagination-container'+(n(a&&a.pagination&&a.pagination.pages&&a.pagination.pages.length)?"":" hidden")+'">\n\t<ul class="pagination hidden-xs">\n\t\t<li class="previous pull-left'+(n(a&&a.pagination&&a.pagination.prev&&a.pagination.prev.active)?"":" disabled")+'">\n\t\t\t<a href="?'+t.__escape(n(a&&a.pagination&&a.pagination.prev&&a.pagination.prev.qs))+'" data-page="'+t.__escape(n(a&&a.pagination&&a.pagination.prev&&a.pagination.prev.page))+'"><i class="fa fa-chevron-left"></i> </a>\n\t\t</li>\n\n\t\t'+s.blocks["pagination.pages"](t,a,n,i,e)+'\n\n\t\t<li class="next pull-right'+(n(a&&a.pagination&&a.pagination.next&&a.pagination.next.active)?"":" disabled")+'">\n\t\t\t<a href="?'+t.__escape(n(a&&a.pagination&&a.pagination.next&&a.pagination.next.qs))+'" data-page="'+t.__escape(n(a&&a.pagination&&a.pagination.next&&a.pagination.next.page))+'"> <i class="fa fa-chevron-right"></i></a>\n\t\t</li>\n\t</ul>\n\n\t<ul class="pagination hidden-sm hidden-md hidden-lg">\n\t\t<li class="first'+(n(a&&a.pagination&&a.pagination.prev&&a.pagination.prev.active)?"":" disabled")+'">\n\t\t\t<a href="?page=1" data-page="1"><i class="fa fa-fast-backward"></i> </a>\n\t\t</li>\n\n\t\t<li class="previous'+(n(a&&a.pagination&&a.pagination.prev&&a.pagination.prev.active)?"":" disabled")+'">\n\t\t\t<a href="?'+t.__escape(n(a&&a.pagination&&a.pagination.prev&&a.pagination.prev.qs))+'" data-page="'+t.__escape(n(a&&a.pagination&&a.pagination.prev&&a.pagination.prev.page))+'"><i class="fa fa-chevron-left"></i> </a>\n\t\t</li>\n\n\t\t<li component="pagination/select-page" class="page select-page">\n\t\t\t<a href="#">'+t.__escape(n(a&&a.pagination&&a.pagination.currentPage))+" / "+t.__escape(n(a&&a.pagination&&a.pagination.pageCount))+'</a>\n\t\t</li>\n\n\t\t<li class="next'+(n(a&&a.pagination&&a.pagination.next&&a.pagination.next.active)?"":" disabled")+'">\n\t\t\t<a href="?'+t.__escape(n(a&&a.pagination&&a.pagination.next&&a.pagination.next.qs))+'" data-page="'+t.__escape(n(a&&a.pagination&&a.pagination.next&&a.pagination.next.page))+'"> <i class="fa fa-chevron-right"></i></a>\n\t\t</li>\n\n\t\t<li class="last'+(n(a&&a.pagination&&a.pagination.next&&a.pagination.next.active)?"":" disabled")+'">\n\t\t\t<a href="?page='+t.__escape(n(a&&a.pagination&&a.pagination.pageCount))+'" data-page="'+t.__escape(n(a&&a.pagination&&a.pagination.pageCount))+'"><i class="fa fa-fast-forward"></i> </a>\n\t\t</li>\n\t</ul>\n</div>'}return s.blocks={"pagination.pages":function(i,e,s,t,a){return t(s(e&&e.pagination&&e.pagination.pages),function(t,a,n){return"\n\t\t\t"+(s(e&&e.pagination&&e.pagination.pages&&e.pagination.pages[t]&&e.pagination.pages[t].separator)?'\n\t\t\t<li component="pagination/select-page" class="page select-page">\n\t\t\t\t<a href="#"><i class="fa fa-ellipsis-h"></i></a>\n\t\t\t</li>\n\t\t\t':'\n\t\t\t<li class="page'+(s(e&&e.pagination&&e.pagination.pages&&e.pagination.pages[t]&&e.pagination.pages[t].active)?" active":"")+'" >\n\t\t\t\t<a href="?'+i.__escape(s(e&&e.pagination&&e.pagination.pages&&e.pagination.pages[t]&&e.pagination.pages[t].qs))+'" data-page="'+i.__escape(s(e&&e.pagination&&e.pagination.pages&&e.pagination.pages[t]&&e.pagination.pages[t].page))+'">'+i.__escape(s(e&&e.pagination&&e.pagination.pages&&e.pagination.pages[t]&&e.pagination.pages[t].page))+"</a>\n\t\t\t</li>\n\t\t\t")+"\n\t\t"})},files:function(e,s,p,n,t){return n(p(s&&s.files),function(i,t,a){return'\n\t\t\t<tr data-path="'+e.__escape(p(s&&s.files&&s.files[i]&&s.files[i].path))+'">\n\t\t\t\t'+(p(s&&s.files&&s.files[i]&&s.files[i].isDirectory)?'\n\t\t\t\t<td class="col-md-6" role="button">\n\t\t\t\t\t<i class="fa fa-fw fa-folder-o"></i> <a href="'+e.__escape(p(s&&s.config&&s.config.relative_path))+"/admin/manage/uploads?dir="+e.__escape(p(s&&s.files&&s.files[i]&&s.files[i].path))+'">'+e.__escape(p(s&&s.files&&s.files[i]&&s.files[i].name))+"</a>\n\t\t\t\t</td>\n\t\t\t\t":"")+"\n\n\t\t\t\t"+(p(s&&s.files&&s.files[i]&&s.files[i].isFile)?'\n\t\t\t\t<td class="col-md-6">\n\t\t\t\t\t<i class="fa fa-fw fa-file-text-o"></i> <a href="'+e.__escape(p(s&&s.config&&s.config.relative_path))+e.__escape(p(s&&s.files&&s.files[i]&&s.files[i].url))+'" target="_blank">'+e.__escape(p(s&&s.files&&s.files[i]&&s.files[i].name))+"</a>\n\t\t\t\t</td>\n\t\t\t\t":"")+"\n\n\t\t\t\t"+(p(s&&s.showPids)?'\n\t\t\t\t<td class="col-md-3 text-right">\n\t\t\t\t\t'+n(p(s&&s.files&&s.files[i]&&s.files[i].inPids),function(t,a,n){return'\n\t\t\t\t\t<a target="_blank" href="'+e.__escape(p(s&&s.config&&s.config.relative_path))+"/post/"+e.__escape(p(s&&s.files&&s.files[i]&&s.files[i].inPids&&s.files[i].inPids[t]))+'"><span class="label label-default">'+e.__escape(p(s&&s.files&&s.files[i]&&s.files[i].inPids&&s.files[i].inPids[t]))+"</span></a>\n\t\t\t\t\t"})+"\n\t\t\t\t\t"+(p(s&&s.files&&s.files[i]&&s.files[i].inPids&&s.files[i].inPids.length)?"":'\n\t\t\t\t\t<span class="label label-danger">[[admin/manage/uploads:orphaned]]</span>\n\t\t\t\t\t')+"\n\t\t\t\t</td>\n\t\t\t\t":"")+'\n\n\t\t\t\t<td class="col-md-2 text-right">'+(p(s&&s.files&&s.files[i]&&s.files[i].isFile)?e.__escape(p(s&&s.files&&s.files[i]&&s.files[i].sizeHumanReadable)):"[[admin/manage/uploads:filecount, "+e.__escape(p(s&&s.files&&s.files[i]&&s.files[i].fileCount))+"]]")+'</td>\n\n\t\t\t\t<td role="button" class="col-md-1 text-right"><i class="delete fa fa-fw fa-trash-o '+(p(s&&s.files&&s.files[i]&&s.files[i].isFile)?"":" hidden")+'"></i></td>\n\t\t\t</tr>\n\t\t\t'})},breadcrumbs:function(i,e,s,t,a){return t(s(e&&e.breadcrumbs),function(t,a,n){return"\n\t<li"+(a===n-1?' component="breadcrumb/current"':"")+' itemscope="itemscope" itemtype="http://data-vocabulary.org/Breadcrumb" '+(a===n-1?'class="active"':"")+">\n\t\t"+(a!==n-1?'<a href="'+i.__escape(s(e&&e.breadcrumbs&&e.breadcrumbs[t]&&e.breadcrumbs[t].url))+'" itemprop="url">':"")+'\n\t\t\t<span itemprop="title">\n\t\t\t\t'+i.__escape(s(e&&e.breadcrumbs&&e.breadcrumbs[t]&&e.breadcrumbs[t].text))+"\n\t\t\t\t"+(a===n-1?"\n\t\t\t\t"+(s(e&&e["feeds:disableRSS"])?"":"\n\t\t\t\t"+(s(e&&e.rssFeedUrl)?'<a target="_blank" href="'+i.__escape(s(e&&e.rssFeedUrl))+'"><i class="fa fa-rss-square"></i></a>':""))+"\n\t\t\t\t":"")+"\n\t\t\t</span>\n\t\t"+(a!==n-1?"</a>":"")+"\n\t</li>\n\t"})}},s});