!function(t){"object"==typeof module&&module.exports?module.exports=t():"function"==typeof define&&define.amd&&define(t)}(function(){function e(n,i,a,t,s){return(a(i&&i.breadcrumbs&&i.breadcrumbs.length)?'\n<ol class="breadcrumb">\n\t'+e.blocks.breadcrumbs(n,i,a,t,s)+"\n</ol>\n":"")+'\n<div widget-area="header">\n\t'+e.blocks["widgets.header"](n,i,a,t,s)+'\n</div>\n<div class="row">\n\t<div class="category '+(a(i&&i.widgets&&i.widgets.sidebar&&i.widgets.sidebar.length)?"col-lg-9 col-sm-12":"col-lg-12")+'">\n\t\t<div class="subcategory">\n\t'+(a(i&&i.children&&i.children.length)?"<p>[[category:subcategories]]</p>":"")+'\n\n\t<ul class="categories" itemscope itemtype="http://www.schema.org/ItemList">\n\t\t'+e.blocks.children(n,i,a,t,s)+"\n\t</ul>\n</div>\n\n\t\t"+(a(i&&i.children&&i.children.length)?'<hr class="hidden-xs"/>':"")+'\n\n\t\t<div class="clearfix">\n\t\t\t'+(a(i&&i.privileges&&i.privileges["topics:create"])?'\n\t\t\t<a href="'+n.__escape(a(i&&i.config&&i.config.relative_path))+"/compose?cid="+n.__escape(a(i&&i.cid))+'" component="category/post" id="new_topic" class="btn btn-primary" data-ajaxify="false" role="button">[[category:new_topic_button]]</a>\n\t\t\t':"\n\t\t\t\t"+(a(i&&i.loggedIn)?"":'\n\t\t\t\t<a component="category/post/guest" href="'+n.__escape(a(i&&i.config&&i.config.relative_path))+'/login" class="btn btn-primary">[[category:guest-login-post]]</a>\n\t\t\t\t')+"\n\t\t\t")+'\n\n\t\t\t<span class="pull-right" component="category/controls">\n\t\t\t\t'+(a(i&&i.config&&i.config.loggedIn)?'\n<div class="btn-group topic-watch-dropdown bottom-sheet" component="topic/watch">\n\n\t<button class="btn btn-default dropdown-toggle" data-toggle="dropdown" type="button">\n\n\t\t<span component="category/watching/menu" '+(a(i&&i.isIgnored)?'class="hidden"':"")+'><i class="fa fa-fw fa-eye"></i><span class="visible-sm-inline visible-md-inline visible-lg-inline">[[category:watching]]</span></span>\n\n\t\t<span component="category/ignoring/menu" '+(a(i&&i.isIgnored)?"":'class="hidden"')+'><i class="fa fa-fw fa-eye-slash"></i><span class="visible-sm-inline visible-md-inline visible-lg-inline">[[category:ignoring]]</span></span>\n\n\t\t<span class="caret"></span>\n\t</button>\n\n\t<ul class="dropdown-menu dropdown-menu-right">\n\t\t<li><a href="#" component="category/watching"><i component="category/watching/check" class="fa fa-fw '+(a(i&&i.isIgnored)?"":"fa-check")+'"></i><i class="fa fa-fw fa-eye"></i> [[category:watching]]<p class="help-text"><small>[[category:watching.description]]</small></p></a></li>\n\t\t<li><a href="#" component="category/ignoring"><i component="category/ignoring/check" class="fa fa-fw '+(a(i&&i.isIgnored)?"fa-check":"")+'"></i><i class="fa fa-fw fa-eye-slash"></i> [[category:ignoring]]<p class="help-text"><small>[[category:ignoring.description]]</small></p></a></li>\n\t</ul>\n</div>\n':"")+"\n\t\t\t\t"+(a(i&&i.loggedIn)?'\n<div class="btn-group bottom-sheet" component="thread/sort">\n\t<button class="btn btn-default dropdown-toggle" data-toggle="dropdown" type="button">\n\t\t<span class="visible-sm-inline visible-md-inline visible-lg-inline">[[topic:sort_by]]</span>\n\t\t<span class="visible-xs-inline"><i class="fa fa-fw fa-sort"></i></span>\n\t\t<span class="caret"></span>\n\t</button>\n\n\t<ul class="dropdown-menu pull-right">\n\t\t<li><a href="#" class="newest_to_oldest" data-sort="newest_to_oldest"><i class="fa fa-fw"></i> [[topic:newest_to_oldest]]</a></li>\n\t\t<li><a href="#" class="oldest_to_newest" data-sort="oldest_to_newest"><i class="fa fa-fw"></i> [[topic:oldest_to_newest]]</a></li>\n\t\t<li><a href="#" class="most_posts" data-sort="most_posts"><i class="fa fa-fw"></i> [[topic:most_posts]]</a></li>\n\t\t<li><a href="#" class="most_votes" data-sort="most_votes"><i class="fa fa-fw"></i> [[topic:most_votes]]</a></li>\n\t</ul>\n</div>\n':"")+"\n\t\t\t\t"+(a(i&&i.privileges&&i.privileges.editable)?'\n<div class="btn-group thread-tools bottom-sheet">\n\t<button class="btn btn-default dropdown-toggle" data-toggle="dropdown" type="button">\n\t\t<span class="visible-sm-inline visible-md-inline visible-lg-inline">[[topic:thread_tools.title]]</span>\n\t\t<span class="visible-xs-inline"><i class="fa fa-fw fa-gear"></i></span>\n\t\t<span class="caret"></span>\n\t</button>\n\t<ul class="dropdown-menu pull-right">\n\t\t<li>\n\t\t\t<a component="topic/mark-unread-for-all" href="#">\n\t\t\t\t<i class="fa fa-fw fa-inbox"></i> [[topic:thread_tools.markAsUnreadForAll]]\n\t\t\t</a>\n\t\t</li>\n\t\t<li>\n\t\t\t<a component="topic/pin" href="#">\n\t\t\t\t<i class="fa fa-fw fa-thumb-tack"></i> [[topic:thread_tools.pin]]\n\t\t\t</a>\n\t\t</li>\n\t\t<li>\n\t\t\t<a component="topic/unpin" href="#" class="hidden">\n\t\t\t\t<i class="fa fa-fw fa-thumb-tack fa-rotate-90"></i> [[topic:thread_tools.unpin]]\n\t\t\t</a>\n\t\t</li>\n\n\t\t<li>\n\t\t\t<a component="topic/lock" href="#">\n\t\t\t\t<i class="fa fa-fw fa-lock"></i> [[topic:thread_tools.lock]]\n\t\t\t</a>\n\t\t</li>\n\t\t<li>\n\t\t\t<a component="topic/unlock" href="#" class="hidden">\n\t\t\t\t<i class="fa fa-fw fa-unlock"></i> [[topic:thread_tools.unlock]]\n\t\t\t</a>\n\t\t</li>\n\n\t\t<li class="divider"></li>\n\n\t\t<li>\n\t\t\t<a component="topic/move" href="#">\n\t\t\t\t<i class="fa fa-fw fa-arrows"></i> [[topic:thread_tools.move]]\n\t\t\t</a>\n\t\t</li>\n\t\t<li>\n\t\t\t<a component="topic/move-all" href="#">\n\t\t\t\t<i class="fa fa-fw fa-arrows"></i> [[topic:thread_tools.move_all]]\n\t\t\t</a>\n\t\t</li>\n\t\t<li>\n\t\t\t<a component="topic/merge" href="#">\n\t\t\t\t<i class="fa fa-fw fa-code-fork"></i> [[topic:thread_tools.merge]]\n\t\t\t</a>\n\t\t</li>\n\n\t\t<li class="divider"></li>\n\n\t\t<li>\n\t\t\t<a component="topic/delete" href="#">\n\t\t\t\t<i class="fa fa-fw fa-trash-o"></i> [[topic:thread_tools.delete]]\n\t\t\t</a>\n\t\t</li>\n\t\t<li>\n\t\t\t<a component="topic/restore" href="#" class="hidden">\n\t\t\t\t<i class="fa fa-fw fa-history"></i> [[topic:thread_tools.restore]]\n\t\t\t</a>\n\t\t</li>\n\t\t<li>\n\t\t\t<a component="topic/purge" href="#" class="hidden">\n\t\t\t\t<i class="fa fa-fw fa-eraser"></i> [[topic:thread_tools.purge]]\n\t\t\t</a>\n\t\t</li>\n\n\t\t'+e.blocks.thread_tools(n,i,a,t,s)+"\n\t</ul>\n</div>\n":"")+'\n\t\t\t</span>\n\t\t</div>\n\n\t\t<hr class="hidden-xs" />\n\n\t\t<p class="hidden-xs">'+n.__escape(a(i&&i.name))+"</p>\n\n\t\t"+(a(i&&i.topics&&i.topics.length)?"":"\n\t\t"+(a(i&&i.privileges&&i.privileges["topics:create"])?'\n\t\t<hr class="visible-xs" />\n\t\t<div class="alert alert-warning" id="category-no-topics">\n\t\t\t[[category:no_topics]]\n\t\t</div>\n\t\t':"")+"\n\t\t")+'\n\n\t\t<a href="'+n.__escape(a(i&&i.url))+'">\n\t\t\t<div class="alert alert-warning hide" id="new-topics-alert"></div>\n\t\t</a>\n\n\t\t<ul component="category" class="topic-list" itemscope itemtype="http://www.schema.org/ItemList" data-nextstart="'+n.__escape(a(i&&i.nextStart))+'" data-set="'+n.__escape(a(i&&i.set))+'">\n\t<meta itemprop="itemListOrder" content="descending">\n\t'+e.blocks.topics(n,i,a,t,s)+"\n</ul>\n\n\n\t\t"+(a(i&&i.config&&i.config.usePagination)?'\n\t\t\t<div component="pagination" class="text-center pagination-container'+(a(i&&i.pagination&&i.pagination.pages&&i.pagination.pages.length)?"":" hidden")+'">\n\t<ul class="pagination hidden-xs">\n\t\t<li class="previous pull-left'+(a(i&&i.pagination&&i.pagination.prev&&i.pagination.prev.active)?"":" disabled")+'">\n\t\t\t<a href="?'+n.__escape(a(i&&i.pagination&&i.pagination.prev&&i.pagination.prev.qs))+'" data-page="'+n.__escape(a(i&&i.pagination&&i.pagination.prev&&i.pagination.prev.page))+'"><i class="fa fa-chevron-left"></i> </a>\n\t\t</li>\n\n\t\t'+t(a(i&&i.pagination&&i.pagination.pages),function(t,s,e){return"\n\t\t\t"+(a(i&&i.pagination&&i.pagination.pages&&i.pagination.pages[t]&&i.pagination.pages[t].separator)?'\n\t\t\t<li component="pagination/select-page" class="page select-page">\n\t\t\t\t<a href="#"><i class="fa fa-ellipsis-h"></i></a>\n\t\t\t</li>\n\t\t\t':'\n\t\t\t<li class="page'+(a(i&&i.pagination&&i.pagination.pages&&i.pagination.pages[t]&&i.pagination.pages[t].active)?" active":"")+'" >\n\t\t\t\t<a href="?'+n.__escape(a(i&&i.pagination&&i.pagination.pages&&i.pagination.pages[t]&&i.pagination.pages[t].qs))+'" data-page="'+n.__escape(a(i&&i.pagination&&i.pagination.pages&&i.pagination.pages[t]&&i.pagination.pages[t].page))+'">'+n.__escape(a(i&&i.pagination&&i.pagination.pages&&i.pagination.pages[t]&&i.pagination.pages[t].page))+"</a>\n\t\t\t</li>\n\t\t\t")+"\n\t\t"})+'\n\n\t\t<li class="next pull-right'+(a(i&&i.pagination&&i.pagination.next&&i.pagination.next.active)?"":" disabled")+'">\n\t\t\t<a href="?'+n.__escape(a(i&&i.pagination&&i.pagination.next&&i.pagination.next.qs))+'" data-page="'+n.__escape(a(i&&i.pagination&&i.pagination.next&&i.pagination.next.page))+'"> <i class="fa fa-chevron-right"></i></a>\n\t\t</li>\n\t</ul>\n\n\t<ul class="pagination hidden-sm hidden-md hidden-lg">\n\t\t<li class="first'+(a(i&&i.pagination&&i.pagination.prev&&i.pagination.prev.active)?"":" disabled")+'">\n\t\t\t<a href="?page=1" data-page="1"><i class="fa fa-fast-backward"></i> </a>\n\t\t</li>\n\n\t\t<li class="previous'+(a(i&&i.pagination&&i.pagination.prev&&i.pagination.prev.active)?"":" disabled")+'">\n\t\t\t<a href="?'+n.__escape(a(i&&i.pagination&&i.pagination.prev&&i.pagination.prev.qs))+'" data-page="'+n.__escape(a(i&&i.pagination&&i.pagination.prev&&i.pagination.prev.page))+'"><i class="fa fa-chevron-left"></i> </a>\n\t\t</li>\n\n\t\t<li component="pagination/select-page" class="page select-page">\n\t\t\t<a href="#">'+n.__escape(a(i&&i.pagination&&i.pagination.currentPage))+" / "+n.__escape(a(i&&i.pagination&&i.pagination.pageCount))+'</a>\n\t\t</li>\n\n\t\t<li class="next'+(a(i&&i.pagination&&i.pagination.next&&i.pagination.next.active)?"":" disabled")+'">\n\t\t\t<a href="?'+n.__escape(a(i&&i.pagination&&i.pagination.next&&i.pagination.next.qs))+'" data-page="'+n.__escape(a(i&&i.pagination&&i.pagination.next&&i.pagination.next.page))+'"> <i class="fa fa-chevron-right"></i></a>\n\t\t</li>\n\n\t\t<li class="last'+(a(i&&i.pagination&&i.pagination.next&&i.pagination.next.active)?"":" disabled")+'">\n\t\t\t<a href="?page='+n.__escape(a(i&&i.pagination&&i.pagination.pageCount))+'" data-page="'+n.__escape(a(i&&i.pagination&&i.pagination.pageCount))+'"><i class="fa fa-fast-forward"></i> </a>\n\t\t</li>\n\t</ul>\n</div>\n\t\t':"")+'\n\t</div>\n\t<div widget-area="sidebar" class="col-lg-3 col-sm-12 '+(a(i&&i.widgets&&i.widgets.sidebar&&i.widgets.sidebar.length)?"":"hidden")+'">\n\t\t'+e.blocks["widgets.sidebar"](n,i,a,t,s)+'\n\t</div>\n</div>\n<div widget-area="footer">\n\t'+e.blocks["widgets.footer"](n,i,a,t,s)+'\n</div>\n\n<div id="move_thread_modal" class="modal" tabindex="-1" role="dialog" aria-labelledby="Move Topic" aria-hidden="true">\n\t<div class="modal-dialog">\n\t\t<div class="modal-content">\n\t\t\t<div class="modal-header">\n\t\t\t\t<button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>\n\t\t\t\t<h3>[[topic:move_topic]]</h3>\n\t\t\t</div>\n\t\t\t<div class="modal-body">\n\t\t\t\t<div component="category-selector" class="btn-group '+(a(i&&i.pullRight)?"pull-right":"")+'">\n\t<button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown">\n\t\t<span component="category-selector-selected">[[topic:thread_tools.select_category]]</span> <span class="caret"></span>\n\t</button>\n\t<ul class="dropdown-menu category-dropdown-menu" role="menu">\n\t\t'+e.blocks.categories(n,i,a,t,s)+'\n\t</ul>\n</div>\n\t\t\t</div>\n\t\t\t<div class="modal-footer">\n\t\t\t\t<button type="button" class="btn btn-default" data-dismiss="modal" id="move_thread_cancel">[[global:buttons.close]]</button>\n\t\t\t\t<button type="button" class="btn btn-primary" id="move_thread_commit" disabled>[[topic:confirm_move]]</button>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>\n\n'+(a(i&&i.config&&i.config.usePagination)?"":'\n<noscript>\n\t<div component="pagination" class="text-center pagination-container'+(a(i&&i.pagination&&i.pagination.pages&&i.pagination.pages.length)?"":" hidden")+'">\n\t<ul class="pagination hidden-xs">\n\t\t<li class="previous pull-left'+(a(i&&i.pagination&&i.pagination.prev&&i.pagination.prev.active)?"":" disabled")+'">\n\t\t\t<a href="?'+n.__escape(a(i&&i.pagination&&i.pagination.prev&&i.pagination.prev.qs))+'" data-page="'+n.__escape(a(i&&i.pagination&&i.pagination.prev&&i.pagination.prev.page))+'"><i class="fa fa-chevron-left"></i> </a>\n\t\t</li>\n\n\t\t'+e.blocks["pagination.pages"](n,i,a,t,s)+'\n\n\t\t<li class="next pull-right'+(a(i&&i.pagination&&i.pagination.next&&i.pagination.next.active)?"":" disabled")+'">\n\t\t\t<a href="?'+n.__escape(a(i&&i.pagination&&i.pagination.next&&i.pagination.next.qs))+'" data-page="'+n.__escape(a(i&&i.pagination&&i.pagination.next&&i.pagination.next.page))+'"> <i class="fa fa-chevron-right"></i></a>\n\t\t</li>\n\t</ul>\n\n\t<ul class="pagination hidden-sm hidden-md hidden-lg">\n\t\t<li class="first'+(a(i&&i.pagination&&i.pagination.prev&&i.pagination.prev.active)?"":" disabled")+'">\n\t\t\t<a href="?page=1" data-page="1"><i class="fa fa-fast-backward"></i> </a>\n\t\t</li>\n\n\t\t<li class="previous'+(a(i&&i.pagination&&i.pagination.prev&&i.pagination.prev.active)?"":" disabled")+'">\n\t\t\t<a href="?'+n.__escape(a(i&&i.pagination&&i.pagination.prev&&i.pagination.prev.qs))+'" data-page="'+n.__escape(a(i&&i.pagination&&i.pagination.prev&&i.pagination.prev.page))+'"><i class="fa fa-chevron-left"></i> </a>\n\t\t</li>\n\n\t\t<li component="pagination/select-page" class="page select-page">\n\t\t\t<a href="#">'+n.__escape(a(i&&i.pagination&&i.pagination.currentPage))+" / "+n.__escape(a(i&&i.pagination&&i.pagination.pageCount))+'</a>\n\t\t</li>\n\n\t\t<li class="next'+(a(i&&i.pagination&&i.pagination.next&&i.pagination.next.active)?"":" disabled")+'">\n\t\t\t<a href="?'+n.__escape(a(i&&i.pagination&&i.pagination.next&&i.pagination.next.qs))+'" data-page="'+n.__escape(a(i&&i.pagination&&i.pagination.next&&i.pagination.next.page))+'"> <i class="fa fa-chevron-right"></i></a>\n\t\t</li>\n\n\t\t<li class="last'+(a(i&&i.pagination&&i.pagination.next&&i.pagination.next.active)?"":" disabled")+'">\n\t\t\t<a href="?page='+n.__escape(a(i&&i.pagination&&i.pagination.pageCount))+'" data-page="'+n.__escape(a(i&&i.pagination&&i.pagination.pageCount))+'"><i class="fa fa-fast-forward"></i> </a>\n\t\t</li>\n\t</ul>\n</div>\n</noscript>\n')+"\n"}return e.blocks={"pagination.pages":function(n,i,a,t,s){return t(a(i&&i.pagination&&i.pagination.pages),function(t,s,e){return"\n\t\t\t"+(a(i&&i.pagination&&i.pagination.pages&&i.pagination.pages[t]&&i.pagination.pages[t].separator)?'\n\t\t\t<li component="pagination/select-page" class="page select-page">\n\t\t\t\t<a href="#"><i class="fa fa-ellipsis-h"></i></a>\n\t\t\t</li>\n\t\t\t':'\n\t\t\t<li class="page'+(a(i&&i.pagination&&i.pagination.pages&&i.pagination.pages[t]&&i.pagination.pages[t].active)?" active":"")+'" >\n\t\t\t\t<a href="?'+n.__escape(a(i&&i.pagination&&i.pagination.pages&&i.pagination.pages[t]&&i.pagination.pages[t].qs))+'" data-page="'+n.__escape(a(i&&i.pagination&&i.pagination.pages&&i.pagination.pages[t]&&i.pagination.pages[t].page))+'">'+n.__escape(a(i&&i.pagination&&i.pagination.pages&&i.pagination.pages[t]&&i.pagination.pages[t].page))+"</a>\n\t\t\t</li>\n\t\t\t")+"\n\t\t"})},categories:function(n,i,a,t,s){return t(a(i&&i.categories),function(t,s,e){return'\n\t\t<li role="presentation" class="category '+(a(i&&i.categories&&i.categories[t]&&i.categories[t].disabledClass)?"disabled":"")+'" data-cid="'+n.__escape(a(i&&i.categories&&i.categories[t]&&i.categories[t].cid))+'" data-name="'+n.__escape(a(i&&i.categories&&i.categories[t]&&i.categories[t].name))+'">\n\t\t\t<a role="menu-item">'+n.__escape(a(i&&i.categories&&i.categories[t]&&i.categories[t].level))+'<span component="category-markup">'+(a(i&&i.categories&&i.categories[t]&&i.categories[t].icon)?'<span class="fa-stack"><i style="color: '+n.__escape(a(i&&i.categories&&i.categories[t]&&i.categories[t].bgColor))+';" class="fa fa-circle fa-stack-2x"></i><i style="color: '+n.__escape(a(i&&i.categories&&i.categories[t]&&i.categories[t].color))+';" class="fa fa-stack-1x fa-fw '+n.__escape(a(i&&i.categories&&i.categories[t]&&i.categories[t].icon))+'"></i></span>':"")+" "+n.__escape(a(i&&i.categories&&i.categories[t]&&i.categories[t].name))+"</span></a>\n\t\t</li>\n\t\t"})},"widgets.footer":function(t,n,i,s,e){return s(i(n&&n.widgets&&n.widgets.footer),function(t,s,e){return"\n\t"+i(n&&n.widgets&&n.widgets.footer&&n.widgets.footer[t]&&n.widgets.footer[t].html)+"\n\t"})},"widgets.sidebar":function(t,n,i,s,e){return s(i(n&&n.widgets&&n.widgets.sidebar),function(t,s,e){return"\n\t\t"+i(n&&n.widgets&&n.widgets.sidebar&&n.widgets.sidebar[t]&&n.widgets.sidebar[t].html)+"\n\t\t"})},topics:function(i,a,o,e,c){return e(o(a&&a.topics),function(n,t,s){return'\n\t<li component="category/topic" class="row clearfix category-item '+i.__escape(c(a,i,"generateTopicClass",[o(a&&a.topics&&a.topics[n])]))+'" data-tid="'+i.__escape(o(a&&a.topics&&a.topics[n]&&a.topics[n].tid))+'" data-index="'+i.__escape(o(a&&a.topics&&a.topics[n]&&a.topics[n].index))+'" data-cid="'+i.__escape(o(a&&a.topics&&a.topics[n]&&a.topics[n].cid))+'" itemprop="itemListElement">\n\t\t<meta itemprop="name" content="'+i.__escape(c(a,i,"stripTags",[o(a&&a.title)]))+'">\n\n\t\t<div class="col-md-6 col-sm-9 col-xs-10 content">\n\t\t\t<div class="avatar pull-left" title="'+i.__escape(o(a&&a.topics&&a.topics[n]&&a.topics[n].user&&a.topics[n].user.username))+'">\n\t\t\t\t'+(o(a&&a.showSelect)?'\n\t\t\t\t<div class="select" component="topic/select">\n\t\t\t\t\t'+(o(a&&a.topics&&a.topics[n]&&a.topics[n].thumb)?'\n\t\t\t\t\t<img src="'+i.__escape(o(a&&a.topics&&a.topics[n]&&a.topics[n].thumb))+'" class="user-img" />\n\t\t\t\t\t':"\n\t\t\t\t\t"+(o(a&&a.topics&&a.topics[n]&&a.topics[n].user&&a.topics[n].user.picture)?'\n\t\t\t\t\t<img component="user/picture" data-uid="'+i.__escape(o(a&&a.topics&&a.topics[n]&&a.topics[n].user&&a.topics[n].user.uid))+'" src="'+i.__escape(o(a&&a.topics&&a.topics[n]&&a.topics[n].user&&a.topics[n].user.picture))+'" class="user-img" />\n\t\t\t\t\t':'\n\t\t\t\t\t<div class="user-icon" style="background-color: '+i.__escape(o(a&&a.topics&&a.topics[n]&&a.topics[n].user&&a.topics[n].user["icon:bgColor"]))+';">'+i.__escape(o(a&&a.topics&&a.topics[n]&&a.topics[n].user&&a.topics[n].user["icon:text"]))+"</div>\n\t\t\t\t\t")+"\n\t\t\t\t\t")+'\n\t\t\t\t\t<i class="fa fa-check"></i>\n\t\t\t\t</div>\n\t\t\t\t':"")+"\n\n\t\t\t\t"+(o(a&&a.showSelect)?"":'\n\t\t\t\t<a href="'+(o(a&&a.topics&&a.topics[n]&&a.topics[n].user&&a.topics[n].user.userslug)?i.__escape(o(a&&a.config&&a.config.relative_path))+"/user/"+i.__escape(o(a&&a.topics&&a.topics[n]&&a.topics[n].user&&a.topics[n].user.userslug)):"#")+'" class="pull-left">\n\t\t\t\t\t'+(o(a&&a.topics&&a.topics[n]&&a.topics[n].thumb)?'\n\t\t\t\t\t<img src="'+i.__escape(o(a&&a.topics&&a.topics[n]&&a.topics[n].thumb))+'" class="user-img" />\n\t\t\t\t\t':"\n\t\t\t\t\t"+(o(a&&a.topics&&a.topics[n]&&a.topics[n].user&&a.topics[n].user.picture)?'\n\t\t\t\t\t<img component="user/picture" data-uid="'+i.__escape(o(a&&a.topics&&a.topics[n]&&a.topics[n].user&&a.topics[n].user.uid))+'" src="'+i.__escape(o(a&&a.topics&&a.topics[n]&&a.topics[n].user&&a.topics[n].user.picture))+'" class="user-img" />\n\t\t\t\t\t':'\n\t\t\t\t\t<div class="user-icon" style="background-color: '+i.__escape(o(a&&a.topics&&a.topics[n]&&a.topics[n].user&&a.topics[n].user["icon:bgColor"]))+';">'+i.__escape(o(a&&a.topics&&a.topics[n]&&a.topics[n].user&&a.topics[n].user["icon:text"]))+"</div>\n\t\t\t\t\t")+"\n\t\t\t\t\t")+"\n\t\t\t\t</a>\n\t\t\t\t")+'\n\n\t\t\t</div>\n\n\t\t\t<h2 component="topic/header" class="title">\n\t\t\t\t<i component="topic/pinned" class="fa fa-thumb-tack '+(o(a&&a.topics&&a.topics[n]&&a.topics[n].pinned)?"":"hide")+'" title="[[topic:pinned]]"></i>\n\t\t\t\t<i component="topic/locked" class="fa fa-lock '+(o(a&&a.topics&&a.topics[n]&&a.topics[n].locked)?"":"hide")+'" title="[[topic:locked]]"></i>\n\t\t\t\t<i component="topic/moved" class="fa fa-arrow-circle-right '+(o(a&&a.topics&&a.topics[n]&&a.topics[n].oldCid)?"":"hide")+'" title="[[topic:moved]]"></i>\n\t\t\t\t'+(o(a&&a.topics&&a.topics[n]&&a.topics[n].icons)?e(o(a&&a.topics&&a.topics[n]&&a.topics[n].icons),function(t,s,e){return i.__escape(o(a&&a.topics&&a.topics[n]&&a.topics[n].icons&&a.topics[n].icons[t]))}):e(o(a&&a.icons),function(t,s,e){return i.__escape(o(a&&a.icons&&a.icons[t]))}))+"\n\n\t\t\t\t"+(o(a&&a.topics&&a.topics[n]&&a.topics[n].noAnchor)?"\n\t\t\t\t<span>"+i.__escape(o(a&&a.topics&&a.topics[n]&&a.topics[n].title))+"</span><br />\n\t\t\t\t":'\n\t\t\t\t<a href="'+i.__escape(o(a&&a.config&&a.config.relative_path))+"/topic/"+i.__escape(o(a&&a.topics&&a.topics[n]&&a.topics[n].slug))+(o(a&&a.topics&&a.topics[n]&&a.topics[n].bookmark)?"/"+i.__escape(o(a&&a.topics&&a.topics[n]&&a.topics[n].bookmark)):"")+'" itemprop="url">'+i.__escape(o(a&&a.topics&&a.topics[n]&&a.topics[n].title))+"</a><br />\n\t\t\t\t")+"\n\n\t\t\t\t"+(o(a&&a.template&&a.template.category)?"":'\n\t\t\t\t<small>\n\t\t\t\t\t<a href="'+i.__escape(o(a&&a.config&&a.config.relative_path))+"/category/"+i.__escape(o(a&&a.topics&&a.topics[n]&&a.topics[n].category&&a.topics[n].category.slug))+'"><span class="fa-stack fa-lg"><i style="color:'+i.__escape(o(a&&a.topics&&a.topics[n]&&a.topics[n].category&&a.topics[n].category.bgColor))+';" class="fa fa-circle fa-stack-2x"></i><i style="color:'+i.__escape(o(a&&a.topics&&a.topics[n]&&a.topics[n].category&&a.topics[n].category.color))+';" class="fa '+i.__escape(o(a&&a.topics&&a.topics[n]&&a.topics[n].category&&a.topics[n].category.icon))+' fa-stack-1x"></i></span> '+i.__escape(o(a&&a.topics&&a.topics[n]&&a.topics[n].category&&a.topics[n].category.name))+"</a> &bull;\n\t\t\t\t</small>\n\t\t\t\t")+"\n\n\t\t\t\t"+(o(a&&a.topics&&a.topics[n]&&a.topics[n].tags&&a.topics[n].tags.length)?'\n\t\t\t\t<span class="tag-list hidden-xs">\n\t\t\t\t\t'+(o(a&&a.topics&&a.topics[n]&&a.topics[n].tags)?e(o(a&&a.topics&&a.topics[n]&&a.topics[n].tags),function(t,s,e){return'\n\t\t\t\t\t<a href="'+i.__escape(o(a&&a.config&&a.config.relative_path))+"/tags/"+i.__escape(o(a&&a.topics&&a.topics[n]&&a.topics[n].tags&&a.topics[n].tags[t]&&a.topics[n].tags[t].value))+'"><span class="tag" style="'+(o(a&&a.topics&&a.topics[n]&&a.topics[n].tags&&a.topics[n].tags[t]&&a.topics[n].tags[t].color)?"color: "+i.__escape(o(a&&a.topics&&a.topics[n]&&a.topics[n].tags&&a.topics[n].tags[t]&&a.topics[n].tags[t].color))+";":"")+(o(a&&a.topics&&a.topics[n]&&a.topics[n].tags&&a.topics[n].tags[t]&&a.topics[n].tags[t].bgColor)?"background-color: "+i.__escape(o(a&&a.topics&&a.topics[n]&&a.topics[n].tags&&a.topics[n].tags[t]&&a.topics[n].tags[t].bgColor))+";":"")+'">'+i.__escape(o(a&&a.topics&&a.topics[n]&&a.topics[n].tags&&a.topics[n].tags[t]&&a.topics[n].tags[t].valueEscaped))+"</span></a>\n\t\t\t\t\t"}):e(o(a&&a.tags),function(t,s,e){return'\n\t\t\t\t\t<a href="'+i.__escape(o(a&&a.config&&a.config.relative_path))+"/tags/"+i.__escape(o(a&&a.topics&&a.topics.tags&&a.topics.tags.value))+'"><span class="tag" style="'+(o(a&&a.topics&&a.topics.tags&&a.topics.tags.color)?"color: "+i.__escape(o(a&&a.topics&&a.topics.tags&&a.topics.tags.color))+";":"")+(o(a&&a.topics&&a.topics.tags&&a.topics.tags.bgColor)?"background-color: "+i.__escape(o(a&&a.topics&&a.topics.tags&&a.topics.tags.bgColor))+";":"")+'">'+i.__escape(o(a&&a.topics&&a.topics.tags&&a.topics.tags.valueEscaped))+"</span></a>\n\t\t\t\t\t"}))+"\n\t\t\t\t\t<small>&bull;</small>\n\t\t\t\t</span>\n\t\t\t\t":"")+'\n\n\t\t\t\t<small class="hidden-xs"><span class="timeago" title="'+i.__escape(o(a&&a.topics&&a.topics[n]&&a.topics[n].timestampISO))+'"></span> &bull; <a href="'+(o(a&&a.topics&&a.topics[n]&&a.topics[n].user&&a.topics[n].user.userslug)?i.__escape(o(a&&a.config&&a.config.relative_path))+"/user/"+i.__escape(o(a&&a.topics&&a.topics[n]&&a.topics[n].user&&a.topics[n].user.userslug)):"#")+'">'+i.__escape(o(a&&a.topics&&a.topics[n]&&a.topics[n].user&&a.topics[n].user.username))+'</a></small>\n\t\t\t\t<small class="visible-xs-inline">\n\t\t\t\t\t'+(o(a&&a.topics&&a.topics[n]&&a.topics[n].teaser&&a.topics[n].teaser.timestamp)?'\n\t\t\t\t\t<span class="timeago" title="'+i.__escape(o(a&&a.topics&&a.topics[n]&&a.topics[n].teaser&&a.topics[n].teaser.timestampISO))+'"></span>\n\t\t\t\t\t':'\n\t\t\t\t\t<span class="timeago" title="'+i.__escape(o(a&&a.topics&&a.topics[n]&&a.topics[n].timestampISO))+'"></span>\n\t\t\t\t\t')+'\n\t\t\t\t</small>\n\t\t\t</h2>\n\t\t</div>\n\n\t\t<div class="mobile-stat col-xs-2 visible-xs text-right">\n\t\t\t<span class="human-readable-number">'+i.__escape(o(a&&a.topics&&a.topics[n]&&a.topics[n].postcount))+'</span> <a href="'+i.__escape(o(a&&a.config&&a.config.relative_path))+"/topic/"+i.__escape(o(a&&a.topics&&a.topics[n]&&a.topics[n].slug))+"/"+i.__escape(o(a&&a.topics&&a.topics[n]&&a.topics[n].teaser&&a.topics[n].teaser.index))+'"><i class="fa fa-arrow-circle-right"></i></a>\n\t\t</div>\n\n\t\t<div class="col-md-1 hidden-sm hidden-xs stats stats-votes">\n\t\t\t'+(o(a&&a["reputation:disabled"])?"":'\n\t\t\t<span class="human-readable-number" title="'+i.__escape(o(a&&a.topics&&a.topics[n]&&a.topics[n].votes))+'">'+i.__escape(o(a&&a.topics&&a.topics[n]&&a.topics[n].votes))+"</span><br />\n\t\t\t<small>[[global:votes]]</small>\n\t\t\t")+'\n\t\t</div>\n\n\t\t<div class="col-md-1 hidden-sm hidden-xs stats stats-postcount">\n\t\t\t<span class="human-readable-number" title="'+i.__escape(o(a&&a.topics&&a.topics[n]&&a.topics[n].postcount))+'">'+i.__escape(o(a&&a.topics&&a.topics[n]&&a.topics[n].postcount))+'</span><br />\n\t\t\t<small>[[global:posts]]</small>\n\t\t</div>\n\n\t\t<div class="col-md-1 hidden-sm hidden-xs stats stats-viewcount">\n\t\t\t<span class="human-readable-number" title="'+i.__escape(o(a&&a.topics&&a.topics[n]&&a.topics[n].viewcount))+'">'+i.__escape(o(a&&a.topics&&a.topics[n]&&a.topics[n].viewcount))+'</span><br />\n\t\t\t<small>[[global:views]]</small>\n\t\t</div>\n\n\t\t<div class="col-md-3 col-sm-3 teaser hidden-xs" component="topic/teaser">\n\t\t\t<div class="card" style="border-color: '+i.__escape(o(a&&a.topics&&a.topics[n]&&a.topics[n].category&&a.topics[n].category.bgColor))+'">\n\t\t\t\t'+(o(a&&a.topics&&a.topics[n]&&a.topics[n].unreplied)?"\n\t\t\t\t<p>\n\t\t\t\t\t[[category:no_replies]]\n\t\t\t\t</p>\n\t\t\t\t":"\n\t\t\t\t"+(o(a&&a.topics&&a.topics[n]&&a.topics[n].teaser&&a.topics[n].teaser.pid)?'\n\t\t\t\t<p>\n\t\t\t\t\t<a href="'+i.__escape(o(a&&a.config&&a.config.relative_path))+"/user/"+i.__escape(o(a&&a.topics&&a.topics[n]&&a.topics[n].teaser&&a.topics[n].teaser.user&&a.topics[n].teaser.user.userslug))+'">\n\t\t\t\t\t\t'+(o(a&&a.topics&&a.topics[n]&&a.topics[n].teaser&&a.topics[n].teaser.user&&a.topics[n].teaser.user.picture)?'\n\t\t\t\t\t\t<img title="'+i.__escape(o(a&&a.topics&&a.topics[n]&&a.topics[n].teaser&&a.topics[n].teaser.user&&a.topics[n].teaser.user.username))+'" class="user-img" src="'+i.__escape(o(a&&a.topics&&a.topics[n]&&a.topics[n].teaser&&a.topics[n].teaser.user&&a.topics[n].teaser.user.picture))+'" />\n\t\t\t\t\t\t':'\n\t\t\t\t\t\t<span title="'+i.__escape(o(a&&a.topics&&a.topics[n]&&a.topics[n].teaser&&a.topics[n].teaser.user&&a.topics[n].teaser.user.username))+'" class="user-icon user-img" style="background-color: '+i.__escape(o(a&&a.topics&&a.topics[n]&&a.topics[n].teaser&&a.topics[n].teaser.user&&a.topics[n].teaser.user["icon:bgColor"]))+';">'+i.__escape(o(a&&a.topics&&a.topics[n]&&a.topics[n].teaser&&a.topics[n].teaser.user&&a.topics[n].teaser.user["icon:text"]))+"</span>\n\t\t\t\t\t\t")+'\n\t\t\t\t\t</a>\n\t\t\t\t\t<a class="permalink" href="'+i.__escape(o(a&&a.config&&a.config.relative_path))+"/topic/"+i.__escape(o(a&&a.topics&&a.topics[n]&&a.topics[n].slug))+"/"+i.__escape(o(a&&a.topics&&a.topics[n]&&a.topics[n].teaser&&a.topics[n].teaser.index))+'">\n\t\t\t\t\t\t<span class="timeago" title="'+i.__escape(o(a&&a.topics&&a.topics[n]&&a.topics[n].teaser&&a.topics[n].teaser.timestampISO))+'"></span>\n\t\t\t\t\t</a>\n\t\t\t\t</p>\n\t\t\t\t<div class="post-content">\n\t\t\t\t\t'+i.__escape(o(a&&a.topics&&a.topics[n]&&a.topics[n].teaser&&a.topics[n].teaser.content))+"\n\t\t\t\t</div>\n\t\t\t\t":"")+"\n\t\t\t\t")+"\n\t\t\t</div>\n\t\t</div>\n\t</li>\n\t"})},thread_tools:function(n,i,a,t,s){return t(a(i&&i.thread_tools),function(t,s,e){return'\n\t\t<li>\n\t\t\t<a href="#" class="'+n.__escape(a(i&&i.thread_tools&&i.thread_tools[t]&&i.thread_tools[t].class))+'"><i class="fa fa-fw '+n.__escape(a(i&&i.thread_tools&&i.thread_tools[t]&&i.thread_tools[t].icon))+'"></i> '+n.__escape(a(i&&i.thread_tools&&i.thread_tools[t]&&i.thread_tools[t].title))+"</a>\n\t\t</li>\n\t\t"})},children:function(i,a,o,e,c){return e(o(a&&a.children),function(n,t,s){return'\n\t\t<li component="categories/category" data-cid="'+i.__escape(o(a&&a.children&&a.children[n]&&a.children[n].cid))+'" data-numRecentReplies="1" class="row clearfix">\n\t<meta itemprop="name" content="'+i.__escape(o(a&&a.children&&a.children[n]&&a.children[n].name))+'">\n\n\t<div class="content col-xs-12 '+(o(a&&a.config&&a.config.hideCategoryLastPost)?"col-md-10 col-sm-12":"col-md-7 col-sm-9")+'">\n\t\t<div class="icon pull-left" style="'+i.__escape(c(a,i,"generateCategoryBackground",[o(a&&a.children&&a.children[n])]))+'">\n\t\t\t<i class="fa fa-fw '+i.__escape(o(a&&a.children&&a.children[n]&&a.children[n].icon))+'"></i>\n\t\t</div>\n\n\t\t<h2 class="title">\n\t\t\t'+(o(a&&a.children&&a.children[n]&&a.children[n].isSection)?"\n"+i.__escape(o(a&&a.children&&a.children[n]&&a.children[n].name))+"\n":"\n"+(o(a&&a.children&&a.children[n]&&a.children[n].link)?'\n<a href="'+i.__escape(o(a&&a.children&&a.children[n]&&a.children[n].link))+'" itemprop="url">\n':'\n<a href="'+i.__escape(o(a&&a.config&&a.config.relative_path))+"/category/"+i.__escape(o(a&&a.children&&a.children[n]&&a.children[n].slug))+'" itemprop="url">\n')+"\n"+i.__escape(o(a&&a.children&&a.children[n]&&a.children[n].name))+"\n</a>\n")+"\n\t\t</h2>\n\t\t<div>\n\t\t\t"+(o(a&&a.children&&a.children[n]&&a.children[n].descriptionParsed)?'\n\t\t\t<div class="description">\n\t\t\t\t'+i.__escape(o(a&&a.children&&a.children[n]&&a.children[n].descriptionParsed))+"\n\t\t\t</div>\n\t\t\t":"")+"\n\t\t\t"+(o(a&&a.config&&a.config.hideSubCategories)?"":"\n\t\t\t"+i.__escape(c(a,i,"generateChildrenCategories",[o(a&&a.children&&a.children[n])]))+"\n\t\t\t")+'\n\t\t</div>\n\t\t<span class="visible-xs pull-right">\n\t\t\t'+(o(a&&a.children&&a.children[n]&&a.children[n].teaser&&a.children[n].teaser.timestampISO)?'\n\t\t\t<a class="permalink" href="'+i.__escape(o(a&&a.children&&a.children[n]&&a.children[n].teaser&&a.children[n].teaser.url))+'">\n\t\t\t\t<small class="timeago" title="'+i.__escape(o(a&&a.children&&a.children[n]&&a.children[n].teaser&&a.children[n].teaser.timestampISO))+'"></small>\n\t\t\t</a>\n\t\t\t':"")+"\n\t\t</span>\n\t</div>\n\n\t"+(o(a&&a.children&&a.children[n]&&a.children[n].link)?"":'\n\t<div class="col-md-1 hidden-sm hidden-xs stats">\n\t\t<span class="'+i.__escape(o(a&&a.children&&a.children[n]&&a.children[n]["unread-class"]))+' human-readable-number" title="'+i.__escape(o(a&&a.children&&a.children[n]&&a.children[n].totalTopicCount))+'">'+i.__escape(o(a&&a.children&&a.children[n]&&a.children[n].totalTopicCount))+'</span><br />\n\t\t<small>[[global:topics]]</small>\n\t</div>\n\t<div class="col-md-1 hidden-sm hidden-xs stats">\n\t\t<span class="'+i.__escape(o(a&&a.children&&a.children[n]&&a.children[n]["unread-class"]))+' human-readable-number" title="'+i.__escape(o(a&&a.children&&a.children[n]&&a.children[n].totalPostCount))+'">'+i.__escape(o(a&&a.children&&a.children[n]&&a.children[n].totalPostCount))+"</span><br />\n\t\t<small>[[global:posts]]</small>\n\t</div>\n\t"+(o(a&&a.config&&a.config.hideCategoryLastPost)?"":'\n\t<div class="col-md-3 col-sm-3 teaser hidden-xs" component="topic/teaser">\n\t\t<div class="card" style="border-color: '+i.__escape(o(a&&a.children&&a.children[n]&&a.children[n].bgColor))+'">\n\t'+(o(a&&a.children&&a.children[n]&&a.children[n].posts)?e(o(a&&a.children&&a.children[n]&&a.children[n].posts),function(t,s,e){return"\n\t"+(0===s?'\n\t<div component="category/posts">\n\t\t<p>\n\t\t\t<a href="'+i.__escape(o(a&&a.config&&a.config.relative_path))+"/user/"+i.__escape(o(a&&a.children&&a.children[n]&&a.children[n].posts&&a.children[n].posts[t]&&a.children[n].posts[t].user&&a.children[n].posts[t].user.userslug))+'">\n\t\t\t\t'+(o(a&&a.children&&a.children[n]&&a.children[n].posts&&a.children[n].posts[t]&&a.children[n].posts[t].user&&a.children[n].posts[t].user.picture)?'\n\t\t\t\t<img class="user-img" title="'+i.__escape(o(a&&a.children&&a.children[n]&&a.children[n].posts&&a.children[n].posts[t]&&a.children[n].posts[t].user&&a.children[n].posts[t].user.username))+'" alt="'+i.__escape(o(a&&a.children&&a.children[n]&&a.children[n].posts&&a.children[n].posts[t]&&a.children[n].posts[t].user&&a.children[n].posts[t].user.username))+'" src="'+i.__escape(o(a&&a.children&&a.children[n]&&a.children[n].posts&&a.children[n].posts[t]&&a.children[n].posts[t].user&&a.children[n].posts[t].user.picture))+'">\n\t\t\t\t':'\n\t\t\t\t<span class="user-icon user-img" title="'+i.__escape(o(a&&a.children&&a.children[n]&&a.children[n].posts&&a.children[n].posts[t]&&a.children[n].posts[t].user&&a.children[n].posts[t].user.username))+'" style="background-color: '+i.__escape(o(a&&a.children&&a.children[n]&&a.children[n].posts&&a.children[n].posts[t]&&a.children[n].posts[t].user&&a.children[n].posts[t].user["icon:bgColor"]))+';">'+i.__escape(o(a&&a.children&&a.children[n]&&a.children[n].posts&&a.children[n].posts[t]&&a.children[n].posts[t].user&&a.children[n].posts[t].user["icon:text"]))+"</span>\n\t\t\t\t")+'\n\t\t\t</a>\n\t\t\t<a class="permalink" href="'+i.__escape(o(a&&a.config&&a.config.relative_path))+"/topic/"+i.__escape(o(a&&a.children&&a.children[n]&&a.children[n].posts&&a.children[n].posts[t]&&a.children[n].posts[t].topic&&a.children[n].posts[t].topic.slug))+(o(a&&a.children&&a.children[n]&&a.children[n].posts&&a.children[n].posts[t]&&a.children[n].posts[t].index)?"/"+i.__escape(o(a&&a.children&&a.children[n]&&a.children[n].posts&&a.children[n].posts[t]&&a.children[n].posts[t].index)):"")+'">\n\t\t\t\t<small class="timeago" title="'+i.__escape(o(a&&a.children&&a.children[n]&&a.children[n].posts&&a.children[n].posts[t]&&a.children[n].posts[t].timestampISO))+'"></small>\n\t\t\t</a>\n\t\t</p>\n\t\t<div class="post-content">\n\t\t\t'+i.__escape(o(a&&a.children&&a.children[n]&&a.children[n].posts&&a.children[n].posts[t]&&a.children[n].posts[t].content))+"\n\t\t</div>\n\t</div>\n\t":"")+"\n\t"}):e(o(a&&a.posts),function(t,s,e){return"\n\t"+(0===s?'\n\t<div component="category/posts">\n\t\t<p>\n\t\t\t<a href="'+i.__escape(o(a&&a.config&&a.config.relative_path))+"/user/"+i.__escape(o(a&&a.posts&&a.posts[t]&&a.posts[t].user&&a.posts[t].user.userslug))+'">\n\t\t\t\t'+(o(a&&a.posts&&a.posts[t]&&a.posts[t].user&&a.posts[t].user.picture)?'\n\t\t\t\t<img class="user-img" title="'+i.__escape(o(a&&a.posts&&a.posts[t]&&a.posts[t].user&&a.posts[t].user.username))+'" alt="'+i.__escape(o(a&&a.posts&&a.posts[t]&&a.posts[t].user&&a.posts[t].user.username))+'" src="'+i.__escape(o(a&&a.posts&&a.posts[t]&&a.posts[t].user&&a.posts[t].user.picture))+'">\n\t\t\t\t':'\n\t\t\t\t<span class="user-icon user-img" title="'+i.__escape(o(a&&a.posts&&a.posts[t]&&a.posts[t].user&&a.posts[t].user.username))+'" style="background-color: '+i.__escape(o(a&&a.posts&&a.posts[t]&&a.posts[t].user&&a.posts[t].user["icon:bgColor"]))+';">'+i.__escape(o(a&&a.posts&&a.posts[t]&&a.posts[t].user&&a.posts[t].user["icon:text"]))+"</span>\n\t\t\t\t")+'\n\t\t\t</a>\n\t\t\t<a class="permalink" href="'+i.__escape(o(a&&a.config&&a.config.relative_path))+"/topic/"+i.__escape(o(a&&a.posts&&a.posts[t]&&a.posts[t].topic&&a.posts[t].topic.slug))+(o(a&&a.posts&&a.posts[t]&&a.posts[t].index)?"/"+i.__escape(o(a&&a.posts&&a.posts[t]&&a.posts[t].index)):"")+'">\n\t\t\t\t<small class="timeago" title="'+i.__escape(o(a&&a.posts&&a.posts[t]&&a.posts[t].timestampISO))+'"></small>\n\t\t\t</a>\n\t\t</p>\n\t\t<div class="post-content">\n\t\t\t'+i.__escape(o(a&&a.posts&&a.posts[t]&&a.posts[t].content))+"\n\t\t</div>\n\t</div>\n\t":"")+"\n\t"}))+"\n\n\t"+(o(a&&a.children&&a.children[n]&&a.children[n].posts&&a.children[n].posts.length)?"":'\n\t<div component="category/posts">\n\t\t<div class="post-content">\n\t\t\t[[category:no_new_posts]]\n\t\t</div>\n\t</div>\n\t')+"\n</div>\n\n\t</div>\n\t")+"\n\t")+"\n</li>\n\n\t\t"})},"widgets.header":function(t,n,i,s,e){return s(i(n&&n.widgets&&n.widgets.header),function(t,s,e){return"\n\t"+i(n&&n.widgets&&n.widgets.header&&n.widgets.header[t]&&n.widgets.header[t].html)+"\n\t"})},breadcrumbs:function(n,i,a,t,s){return t(a(i&&i.breadcrumbs),function(t,s,e){return"\n\t<li"+(s===e-1?' component="breadcrumb/current"':"")+' itemscope="itemscope" itemtype="http://data-vocabulary.org/Breadcrumb" '+(s===e-1?'class="active"':"")+">\n\t\t"+(s!==e-1?'<a href="'+n.__escape(a(i&&i.breadcrumbs&&i.breadcrumbs[t]&&i.breadcrumbs[t].url))+'" itemprop="url">':"")+'\n\t\t\t<span itemprop="title">\n\t\t\t\t'+n.__escape(a(i&&i.breadcrumbs&&i.breadcrumbs[t]&&i.breadcrumbs[t].text))+"\n\t\t\t\t"+(s===e-1?"\n\t\t\t\t"+(a(i&&i["feeds:disableRSS"])?"":"\n\t\t\t\t"+(a(i&&i.rssFeedUrl)?'<a target="_blank" href="'+n.__escape(a(i&&i.rssFeedUrl))+'"><i class="fa fa-rss-square"></i></a>':""))+"\n\t\t\t\t":"")+"\n\t\t\t</span>\n\t\t"+(s!==e-1?"</a>":"")+"\n\t</li>\n\t"})}},e});