!function(t){"object"==typeof module&&module.exports?module.exports=t():"function"==typeof define&&define.amd&&define(t)}(function(){function c(t,e,s,a,i){return(s(e&&e.breadcrumbs&&e.breadcrumbs.length)?'\n<ol class="breadcrumb">\n\t'+c.blocks.breadcrumbs(t,e,s,a,i)+"\n</ol>\n":"")+'\n<div widget-area="header">\n\t'+c.blocks["widgets.header"](t,e,s,a,i)+'\n</div>\n<div class="top">\n\t<div class="btn-toolbar">\n\t\t<div class="pull-left">\n\t\t\t'+(s(e&&e.loggedIn)?'\n\t\t\t<button component="category/post" id="new_topic" class="btn btn-primary">[[category:new_topic_button]]</button>\n\t\t\t':'\n\t\t\t<a component="category/post/guest" href="'+t.__escape(s(e&&e.config&&e.config.relative_path))+'/login" class="btn btn-primary">[[category:guest-login-post]]</a>\n\t\t\t')+'\n\t\t</div>\n\n\t\t<div component="category/dropdown" class="btn-group pull-right category-dropdown-container '+(s(e&&e.categories&&e.categories.length)?"":"hidden")+'">\n\t\t\t<button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown">\n\t\t\t\t'+(s(e&&e.selectedCategory)?(s(e&&e.selectedCategory&&e.selectedCategory.icon)?'<span class="fa-stack"><i style="color: '+t.__escape(s(e&&e.selectedCategory&&e.selectedCategory.bgColor))+';" class="fa fa-circle fa-stack-2x"></i><i class="fa fa-fw fa-stack-1x '+t.__escape(s(e&&e.selectedCategory&&e.selectedCategory.icon))+'" style="color: '+t.__escape(s(e&&e.selectedCategory&&e.selectedCategory.color))+';"></i></span>':"")+" "+t.__escape(s(e&&e.selectedCategory&&e.selectedCategory.name)):"\n\t\t\t\t[[unread:all_categories]]")+' <span class="caret"></span>\n\t\t\t</button>\n\t\t\t<ul component="category/list" class="dropdown-menu category-dropdown-menu" role="menu">\n\t\t\t\t<li role="presentation" class="category">\n\t\t\t\t\t<a role="menu-item" href="'+t.__escape(s(e&&e.config&&e.config.relative_path))+"/"+t.__escape(s(e&&e.allCategoriesUrl))+'"><i class="fa fa-fw '+(s(e&&e.selectedCategory)?"":"fa-check")+'"></i> [[unread:all_categories]]</a>\n\t\t\t\t</li>\n\t\t\t\t'+c.blocks.categories(t,e,s,a,i)+'\n\t\t\t</ul>\n\t\t</div>\n\n\t\t<div class="btn-group pull-right '+(s(e&&e.filters&&e.filters.length)?"":"hidden")+'">\n\t\t\t<button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown">\n\t\t\t'+t.__escape(s(e&&e.selectedFilter&&e.selectedFilter.name))+' <span class="caret"></span>\n\t\t\t</button>\n\t\t\t<ul class="dropdown-menu" role="menu">\n\t\t\t\t'+c.blocks.filters(t,e,s,a,i)+'\n\t\t\t</ul>\n\t\t</div>\n\n\t\t<div class="btn-group pull-right '+(s(e&&e.terms&&e.terms.length)?"":"hidden")+'">\n\t\t\t<button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown">\n\t\t\t'+t.__escape(s(e&&e.selectedTerm&&e.selectedTerm.name))+' <span class="caret"></span>\n\t\t\t</button>\n\t\t\t<ul class="dropdown-menu" role="menu">\n\t\t\t\t'+c.blocks.terms(t,e,s,a,i)+'\n\t\t\t</ul>\n\t\t</div>\n\t</div>\n\n\t<hr class="hidden-xs"/>\n\n\t<div class="category">\n\t\t'+(s(e&&e.topics&&e.topics.length)?"":'\n\t\t<div class="alert alert-warning" id="category-no-topics">[[top:no_top_topics]]</div>\n\t\t')+'\n\n\t\t<ul component="category" class="topic-list" itemscope itemtype="http://www.schema.org/ItemList" data-nextstart="'+t.__escape(s(e&&e.nextStart))+'" data-set="'+t.__escape(s(e&&e.set))+'">\n\t<meta itemprop="itemListOrder" content="descending">\n\t'+c.blocks.topics(t,e,s,a,i)+"\n</ul>\n\n\n\t\t"+(s(e&&e.config&&e.config.usePagination)?'\n\t\t\t<div component="pagination" class="text-center pagination-container'+(s(e&&e.pagination&&e.pagination.pages&&e.pagination.pages.length)?"":" hidden")+'">\n\t<ul class="pagination hidden-xs">\n\t\t<li class="previous pull-left'+(s(e&&e.pagination&&e.pagination.prev&&e.pagination.prev.active)?"":" disabled")+'">\n\t\t\t<a href="?'+t.__escape(s(e&&e.pagination&&e.pagination.prev&&e.pagination.prev.qs))+'" data-page="'+t.__escape(s(e&&e.pagination&&e.pagination.prev&&e.pagination.prev.page))+'"><i class="fa fa-chevron-left"></i> </a>\n\t\t</li>\n\n\t\t'+c.blocks["pagination.pages"](t,e,s,a,i)+'\n\n\t\t<li class="next pull-right'+(s(e&&e.pagination&&e.pagination.next&&e.pagination.next.active)?"":" disabled")+'">\n\t\t\t<a href="?'+t.__escape(s(e&&e.pagination&&e.pagination.next&&e.pagination.next.qs))+'" data-page="'+t.__escape(s(e&&e.pagination&&e.pagination.next&&e.pagination.next.page))+'"> <i class="fa fa-chevron-right"></i></a>\n\t\t</li>\n\t</ul>\n\n\t<ul class="pagination hidden-sm hidden-md hidden-lg">\n\t\t<li class="first'+(s(e&&e.pagination&&e.pagination.prev&&e.pagination.prev.active)?"":" disabled")+'">\n\t\t\t<a href="?page=1" data-page="1"><i class="fa fa-fast-backward"></i> </a>\n\t\t</li>\n\n\t\t<li class="previous'+(s(e&&e.pagination&&e.pagination.prev&&e.pagination.prev.active)?"":" disabled")+'">\n\t\t\t<a href="?'+t.__escape(s(e&&e.pagination&&e.pagination.prev&&e.pagination.prev.qs))+'" data-page="'+t.__escape(s(e&&e.pagination&&e.pagination.prev&&e.pagination.prev.page))+'"><i class="fa fa-chevron-left"></i> </a>\n\t\t</li>\n\n\t\t<li component="pagination/select-page" class="page select-page">\n\t\t\t<a href="#">'+t.__escape(s(e&&e.pagination&&e.pagination.currentPage))+" / "+t.__escape(s(e&&e.pagination&&e.pagination.pageCount))+'</a>\n\t\t</li>\n\n\t\t<li class="next'+(s(e&&e.pagination&&e.pagination.next&&e.pagination.next.active)?"":" disabled")+'">\n\t\t\t<a href="?'+t.__escape(s(e&&e.pagination&&e.pagination.next&&e.pagination.next.qs))+'" data-page="'+t.__escape(s(e&&e.pagination&&e.pagination.next&&e.pagination.next.page))+'"> <i class="fa fa-chevron-right"></i></a>\n\t\t</li>\n\n\t\t<li class="last'+(s(e&&e.pagination&&e.pagination.next&&e.pagination.next.active)?"":" disabled")+'">\n\t\t\t<a href="?page='+t.__escape(s(e&&e.pagination&&e.pagination.pageCount))+'" data-page="'+t.__escape(s(e&&e.pagination&&e.pagination.pageCount))+'"><i class="fa fa-fast-forward"></i> </a>\n\t\t</li>\n\t</ul>\n</div>\n\t\t':"")+"\n\t</div>\n</div>"}return c.blocks={"pagination.pages":function(a,i,c,t,e){return t(c(i&&i.pagination&&i.pagination.pages),function(t,e,s){return"\n\t\t\t"+(c(i&&i.pagination&&i.pagination.pages&&i.pagination.pages[t]&&i.pagination.pages[t].separator)?'\n\t\t\t<li component="pagination/select-page" class="page select-page">\n\t\t\t\t<a href="#"><i class="fa fa-ellipsis-h"></i></a>\n\t\t\t</li>\n\t\t\t':'\n\t\t\t<li class="page'+(c(i&&i.pagination&&i.pagination.pages&&i.pagination.pages[t]&&i.pagination.pages[t].active)?" active":"")+'" >\n\t\t\t\t<a href="?'+a.__escape(c(i&&i.pagination&&i.pagination.pages&&i.pagination.pages[t]&&i.pagination.pages[t].qs))+'" data-page="'+a.__escape(c(i&&i.pagination&&i.pagination.pages&&i.pagination.pages[t]&&i.pagination.pages[t].page))+'">'+a.__escape(c(i&&i.pagination&&i.pagination.pages&&i.pagination.pages[t]&&i.pagination.pages[t].page))+"</a>\n\t\t\t</li>\n\t\t\t")+"\n\t\t"})},topics:function(i,c,o,s,n){return s(o(c&&c.topics),function(a,t,e){return'\n\t<li component="category/topic" class="row clearfix category-item '+i.__escape(n(c,i,"generateTopicClass",[o(c&&c.topics&&c.topics[a])]))+'" data-tid="'+i.__escape(o(c&&c.topics&&c.topics[a]&&c.topics[a].tid))+'" data-index="'+i.__escape(o(c&&c.topics&&c.topics[a]&&c.topics[a].index))+'" data-cid="'+i.__escape(o(c&&c.topics&&c.topics[a]&&c.topics[a].cid))+'" itemprop="itemListElement">\n\t\t<meta itemprop="name" content="'+i.__escape(n(c,i,"stripTags",[o(c&&c.title)]))+'">\n\n\t\t<div class="col-md-6 col-sm-9 col-xs-10 content">\n\t\t\t<div class="avatar pull-left" title="'+i.__escape(o(c&&c.topics&&c.topics[a]&&c.topics[a].user&&c.topics[a].user.username))+'">\n\t\t\t\t'+(o(c&&c.showSelect)?'\n\t\t\t\t<div class="select" component="topic/select">\n\t\t\t\t\t'+(o(c&&c.topics&&c.topics[a]&&c.topics[a].thumb)?'\n\t\t\t\t\t<img src="'+i.__escape(o(c&&c.topics&&c.topics[a]&&c.topics[a].thumb))+'" class="user-img" />\n\t\t\t\t\t':"\n\t\t\t\t\t"+(o(c&&c.topics&&c.topics[a]&&c.topics[a].user&&c.topics[a].user.picture)?'\n\t\t\t\t\t<img component="user/picture" data-uid="'+i.__escape(o(c&&c.topics&&c.topics[a]&&c.topics[a].user&&c.topics[a].user.uid))+'" src="'+i.__escape(o(c&&c.topics&&c.topics[a]&&c.topics[a].user&&c.topics[a].user.picture))+'" class="user-img" />\n\t\t\t\t\t':'\n\t\t\t\t\t<div class="user-icon" style="background-color: '+i.__escape(o(c&&c.topics&&c.topics[a]&&c.topics[a].user&&c.topics[a].user["icon:bgColor"]))+';">'+i.__escape(o(c&&c.topics&&c.topics[a]&&c.topics[a].user&&c.topics[a].user["icon:text"]))+"</div>\n\t\t\t\t\t")+"\n\t\t\t\t\t")+'\n\t\t\t\t\t<i class="fa fa-check"></i>\n\t\t\t\t</div>\n\t\t\t\t':"")+"\n\n\t\t\t\t"+(o(c&&c.showSelect)?"":'\n\t\t\t\t<a href="'+(o(c&&c.topics&&c.topics[a]&&c.topics[a].user&&c.topics[a].user.userslug)?i.__escape(o(c&&c.config&&c.config.relative_path))+"/user/"+i.__escape(o(c&&c.topics&&c.topics[a]&&c.topics[a].user&&c.topics[a].user.userslug)):"#")+'" class="pull-left">\n\t\t\t\t\t'+(o(c&&c.topics&&c.topics[a]&&c.topics[a].thumb)?'\n\t\t\t\t\t<img src="'+i.__escape(o(c&&c.topics&&c.topics[a]&&c.topics[a].thumb))+'" class="user-img" />\n\t\t\t\t\t':"\n\t\t\t\t\t"+(o(c&&c.topics&&c.topics[a]&&c.topics[a].user&&c.topics[a].user.picture)?'\n\t\t\t\t\t<img component="user/picture" data-uid="'+i.__escape(o(c&&c.topics&&c.topics[a]&&c.topics[a].user&&c.topics[a].user.uid))+'" src="'+i.__escape(o(c&&c.topics&&c.topics[a]&&c.topics[a].user&&c.topics[a].user.picture))+'" class="user-img" />\n\t\t\t\t\t':'\n\t\t\t\t\t<div class="user-icon" style="background-color: '+i.__escape(o(c&&c.topics&&c.topics[a]&&c.topics[a].user&&c.topics[a].user["icon:bgColor"]))+';">'+i.__escape(o(c&&c.topics&&c.topics[a]&&c.topics[a].user&&c.topics[a].user["icon:text"]))+"</div>\n\t\t\t\t\t")+"\n\t\t\t\t\t")+"\n\t\t\t\t</a>\n\t\t\t\t")+'\n\n\t\t\t</div>\n\n\t\t\t<h2 component="topic/header" class="title">\n\t\t\t\t<i component="topic/pinned" class="fa fa-thumb-tack '+(o(c&&c.topics&&c.topics[a]&&c.topics[a].pinned)?"":"hide")+'" title="[[topic:pinned]]"></i>\n\t\t\t\t<i component="topic/locked" class="fa fa-lock '+(o(c&&c.topics&&c.topics[a]&&c.topics[a].locked)?"":"hide")+'" title="[[topic:locked]]"></i>\n\t\t\t\t<i component="topic/moved" class="fa fa-arrow-circle-right '+(o(c&&c.topics&&c.topics[a]&&c.topics[a].oldCid)?"":"hide")+'" title="[[topic:moved]]"></i>\n\t\t\t\t'+(o(c&&c.topics&&c.topics[a]&&c.topics[a].icons)?s(o(c&&c.topics&&c.topics[a]&&c.topics[a].icons),function(t,e,s){return i.__escape(o(c&&c.topics&&c.topics[a]&&c.topics[a].icons&&c.topics[a].icons[t]))}):s(o(c&&c.icons),function(t,e,s){return i.__escape(o(c&&c.icons&&c.icons[t]))}))+"\n\n\t\t\t\t"+(o(c&&c.topics&&c.topics[a]&&c.topics[a].noAnchor)?"\n\t\t\t\t<span>"+i.__escape(o(c&&c.topics&&c.topics[a]&&c.topics[a].title))+"</span><br />\n\t\t\t\t":'\n\t\t\t\t<a href="'+i.__escape(o(c&&c.config&&c.config.relative_path))+"/topic/"+i.__escape(o(c&&c.topics&&c.topics[a]&&c.topics[a].slug))+(o(c&&c.topics&&c.topics[a]&&c.topics[a].bookmark)?"/"+i.__escape(o(c&&c.topics&&c.topics[a]&&c.topics[a].bookmark)):"")+'" itemprop="url">'+i.__escape(o(c&&c.topics&&c.topics[a]&&c.topics[a].title))+"</a><br />\n\t\t\t\t")+"\n\n\t\t\t\t"+(o(c&&c.template&&c.template.category)?"":'\n\t\t\t\t<small>\n\t\t\t\t\t<a href="'+i.__escape(o(c&&c.config&&c.config.relative_path))+"/category/"+i.__escape(o(c&&c.topics&&c.topics[a]&&c.topics[a].category&&c.topics[a].category.slug))+'"><span class="fa-stack fa-lg"><i style="color:'+i.__escape(o(c&&c.topics&&c.topics[a]&&c.topics[a].category&&c.topics[a].category.bgColor))+';" class="fa fa-circle fa-stack-2x"></i><i style="color:'+i.__escape(o(c&&c.topics&&c.topics[a]&&c.topics[a].category&&c.topics[a].category.color))+';" class="fa '+i.__escape(o(c&&c.topics&&c.topics[a]&&c.topics[a].category&&c.topics[a].category.icon))+' fa-stack-1x"></i></span> '+i.__escape(o(c&&c.topics&&c.topics[a]&&c.topics[a].category&&c.topics[a].category.name))+"</a> &bull;\n\t\t\t\t</small>\n\t\t\t\t")+"\n\n\t\t\t\t"+(o(c&&c.topics&&c.topics[a]&&c.topics[a].tags&&c.topics[a].tags.length)?'\n\t\t\t\t<span class="tag-list hidden-xs">\n\t\t\t\t\t'+(o(c&&c.topics&&c.topics[a]&&c.topics[a].tags)?s(o(c&&c.topics&&c.topics[a]&&c.topics[a].tags),function(t,e,s){return'\n\t\t\t\t\t<a href="'+i.__escape(o(c&&c.config&&c.config.relative_path))+"/tags/"+i.__escape(o(c&&c.topics&&c.topics[a]&&c.topics[a].tags&&c.topics[a].tags[t]&&c.topics[a].tags[t].value))+'"><span class="tag" style="'+(o(c&&c.topics&&c.topics[a]&&c.topics[a].tags&&c.topics[a].tags[t]&&c.topics[a].tags[t].color)?"color: "+i.__escape(o(c&&c.topics&&c.topics[a]&&c.topics[a].tags&&c.topics[a].tags[t]&&c.topics[a].tags[t].color))+";":"")+(o(c&&c.topics&&c.topics[a]&&c.topics[a].tags&&c.topics[a].tags[t]&&c.topics[a].tags[t].bgColor)?"background-color: "+i.__escape(o(c&&c.topics&&c.topics[a]&&c.topics[a].tags&&c.topics[a].tags[t]&&c.topics[a].tags[t].bgColor))+";":"")+'">'+i.__escape(o(c&&c.topics&&c.topics[a]&&c.topics[a].tags&&c.topics[a].tags[t]&&c.topics[a].tags[t].valueEscaped))+"</span></a>\n\t\t\t\t\t"}):s(o(c&&c.tags),function(t,e,s){return'\n\t\t\t\t\t<a href="'+i.__escape(o(c&&c.config&&c.config.relative_path))+"/tags/"+i.__escape(o(c&&c.topics&&c.topics.tags&&c.topics.tags.value))+'"><span class="tag" style="'+(o(c&&c.topics&&c.topics.tags&&c.topics.tags.color)?"color: "+i.__escape(o(c&&c.topics&&c.topics.tags&&c.topics.tags.color))+";":"")+(o(c&&c.topics&&c.topics.tags&&c.topics.tags.bgColor)?"background-color: "+i.__escape(o(c&&c.topics&&c.topics.tags&&c.topics.tags.bgColor))+";":"")+'">'+i.__escape(o(c&&c.topics&&c.topics.tags&&c.topics.tags.valueEscaped))+"</span></a>\n\t\t\t\t\t"}))+"\n\t\t\t\t\t<small>&bull;</small>\n\t\t\t\t</span>\n\t\t\t\t":"")+'\n\n\t\t\t\t<small class="hidden-xs"><span class="timeago" title="'+i.__escape(o(c&&c.topics&&c.topics[a]&&c.topics[a].timestampISO))+'"></span> &bull; <a href="'+(o(c&&c.topics&&c.topics[a]&&c.topics[a].user&&c.topics[a].user.userslug)?i.__escape(o(c&&c.config&&c.config.relative_path))+"/user/"+i.__escape(o(c&&c.topics&&c.topics[a]&&c.topics[a].user&&c.topics[a].user.userslug)):"#")+'">'+i.__escape(o(c&&c.topics&&c.topics[a]&&c.topics[a].user&&c.topics[a].user.username))+'</a></small>\n\t\t\t\t<small class="visible-xs-inline">\n\t\t\t\t\t'+(o(c&&c.topics&&c.topics[a]&&c.topics[a].teaser&&c.topics[a].teaser.timestamp)?'\n\t\t\t\t\t<span class="timeago" title="'+i.__escape(o(c&&c.topics&&c.topics[a]&&c.topics[a].teaser&&c.topics[a].teaser.timestampISO))+'"></span>\n\t\t\t\t\t':'\n\t\t\t\t\t<span class="timeago" title="'+i.__escape(o(c&&c.topics&&c.topics[a]&&c.topics[a].timestampISO))+'"></span>\n\t\t\t\t\t')+'\n\t\t\t\t</small>\n\t\t\t</h2>\n\t\t</div>\n\n\t\t<div class="mobile-stat col-xs-2 visible-xs text-right">\n\t\t\t<span class="human-readable-number">'+i.__escape(o(c&&c.topics&&c.topics[a]&&c.topics[a].postcount))+'</span> <a href="'+i.__escape(o(c&&c.config&&c.config.relative_path))+"/topic/"+i.__escape(o(c&&c.topics&&c.topics[a]&&c.topics[a].slug))+"/"+i.__escape(o(c&&c.topics&&c.topics[a]&&c.topics[a].teaser&&c.topics[a].teaser.index))+'"><i class="fa fa-arrow-circle-right"></i></a>\n\t\t</div>\n\n\t\t<div class="col-md-1 hidden-sm hidden-xs stats stats-votes">\n\t\t\t'+(o(c&&c["reputation:disabled"])?"":'\n\t\t\t<span class="human-readable-number" title="'+i.__escape(o(c&&c.topics&&c.topics[a]&&c.topics[a].votes))+'">'+i.__escape(o(c&&c.topics&&c.topics[a]&&c.topics[a].votes))+"</span><br />\n\t\t\t<small>[[global:votes]]</small>\n\t\t\t")+'\n\t\t</div>\n\n\t\t<div class="col-md-1 hidden-sm hidden-xs stats stats-postcount">\n\t\t\t<span class="human-readable-number" title="'+i.__escape(o(c&&c.topics&&c.topics[a]&&c.topics[a].postcount))+'">'+i.__escape(o(c&&c.topics&&c.topics[a]&&c.topics[a].postcount))+'</span><br />\n\t\t\t<small>[[global:posts]]</small>\n\t\t</div>\n\n\t\t<div class="col-md-1 hidden-sm hidden-xs stats stats-viewcount">\n\t\t\t<span class="human-readable-number" title="'+i.__escape(o(c&&c.topics&&c.topics[a]&&c.topics[a].viewcount))+'">'+i.__escape(o(c&&c.topics&&c.topics[a]&&c.topics[a].viewcount))+'</span><br />\n\t\t\t<small>[[global:views]]</small>\n\t\t</div>\n\n\t\t<div class="col-md-3 col-sm-3 teaser hidden-xs" component="topic/teaser">\n\t\t\t<div class="card" style="border-color: '+i.__escape(o(c&&c.topics&&c.topics[a]&&c.topics[a].category&&c.topics[a].category.bgColor))+'">\n\t\t\t\t'+(o(c&&c.topics&&c.topics[a]&&c.topics[a].unreplied)?"\n\t\t\t\t<p>\n\t\t\t\t\t[[category:no_replies]]\n\t\t\t\t</p>\n\t\t\t\t":"\n\t\t\t\t"+(o(c&&c.topics&&c.topics[a]&&c.topics[a].teaser&&c.topics[a].teaser.pid)?'\n\t\t\t\t<p>\n\t\t\t\t\t<a href="'+i.__escape(o(c&&c.config&&c.config.relative_path))+"/user/"+i.__escape(o(c&&c.topics&&c.topics[a]&&c.topics[a].teaser&&c.topics[a].teaser.user&&c.topics[a].teaser.user.userslug))+'">\n\t\t\t\t\t\t'+(o(c&&c.topics&&c.topics[a]&&c.topics[a].teaser&&c.topics[a].teaser.user&&c.topics[a].teaser.user.picture)?'\n\t\t\t\t\t\t<img title="'+i.__escape(o(c&&c.topics&&c.topics[a]&&c.topics[a].teaser&&c.topics[a].teaser.user&&c.topics[a].teaser.user.username))+'" class="user-img" src="'+i.__escape(o(c&&c.topics&&c.topics[a]&&c.topics[a].teaser&&c.topics[a].teaser.user&&c.topics[a].teaser.user.picture))+'" />\n\t\t\t\t\t\t':'\n\t\t\t\t\t\t<span title="'+i.__escape(o(c&&c.topics&&c.topics[a]&&c.topics[a].teaser&&c.topics[a].teaser.user&&c.topics[a].teaser.user.username))+'" class="user-icon user-img" style="background-color: '+i.__escape(o(c&&c.topics&&c.topics[a]&&c.topics[a].teaser&&c.topics[a].teaser.user&&c.topics[a].teaser.user["icon:bgColor"]))+';">'+i.__escape(o(c&&c.topics&&c.topics[a]&&c.topics[a].teaser&&c.topics[a].teaser.user&&c.topics[a].teaser.user["icon:text"]))+"</span>\n\t\t\t\t\t\t")+'\n\t\t\t\t\t</a>\n\t\t\t\t\t<a class="permalink" href="'+i.__escape(o(c&&c.config&&c.config.relative_path))+"/topic/"+i.__escape(o(c&&c.topics&&c.topics[a]&&c.topics[a].slug))+"/"+i.__escape(o(c&&c.topics&&c.topics[a]&&c.topics[a].teaser&&c.topics[a].teaser.index))+'">\n\t\t\t\t\t\t<span class="timeago" title="'+i.__escape(o(c&&c.topics&&c.topics[a]&&c.topics[a].teaser&&c.topics[a].teaser.timestampISO))+'"></span>\n\t\t\t\t\t</a>\n\t\t\t\t</p>\n\t\t\t\t<div class="post-content">\n\t\t\t\t\t'+i.__escape(o(c&&c.topics&&c.topics[a]&&c.topics[a].teaser&&c.topics[a].teaser.content))+"\n\t\t\t\t</div>\n\t\t\t\t":"")+"\n\t\t\t\t")+"\n\t\t\t</div>\n\t\t</div>\n\t</li>\n\t"})},terms:function(a,i,c,t,e){return t(c(i&&i.terms),function(t,e,s){return'\n\t\t\t\t<li role="presentation" class="category">\n\t\t\t\t\t<a role="menu-item" href="'+a.__escape(c(i&&i.config&&i.config.relative_path))+"/"+a.__escape(c(i&&i.terms&&i.terms[t]&&i.terms[t].url))+'"><i class="fa fa-fw '+(c(i&&i.terms&&i.terms[t]&&i.terms[t].selected)?"fa-check":"")+'"></i>'+a.__escape(c(i&&i.terms&&i.terms[t]&&i.terms[t].name))+"</a>\n\t\t\t\t</li>\n\t\t\t\t"})},filters:function(a,i,c,t,e){return t(c(i&&i.filters),function(t,e,s){return'\n\t\t\t\t<li role="presentation" class="category">\n\t\t\t\t\t<a role="menu-item" href="'+a.__escape(c(i&&i.config&&i.config.relative_path))+"/"+a.__escape(c(i&&i.filters&&i.filters[t]&&i.filters[t].url))+'"><i class="fa fa-fw '+(c(i&&i.filters&&i.filters[t]&&i.filters[t].selected)?"fa-check":"")+'"></i>'+a.__escape(c(i&&i.filters&&i.filters[t]&&i.filters[t].name))+"</a>\n\t\t\t\t</li>\n\t\t\t\t"})},categories:function(a,i,c,t,e){return t(c(i&&i.categories),function(t,e,s){return'\n\t\t\t\t<li role="presentation" class="category" data-cid="'+a.__escape(c(i&&i.categories&&i.categories[t]&&i.categories[t].cid))+'" data-parent-cid="'+a.__escape(c(i&&i.categories&&i.categories[t]&&i.categories[t].parentCid))+'">\n\t\t\t\t\t<a role="menu-item" href="#"><i component="category/select/icon" class="fa fa-fw '+(c(i&&i.categories&&i.categories[t]&&i.categories[t].selected)?"fa-check":"")+'"></i>'+a.__escape(c(i&&i.categories&&i.categories[t]&&i.categories[t].level))+(c(i&&i.categories&&i.categories[t]&&i.categories[t].icon)?'<span class="fa-stack"><i style="color: '+a.__escape(c(i&&i.categories&&i.categories[t]&&i.categories[t].bgColor))+';" class="fa fa-circle fa-stack-2x"></i><i class="fa fa-fw fa-stack-1x '+a.__escape(c(i&&i.categories&&i.categories[t]&&i.categories[t].icon))+'" style="color: '+a.__escape(c(i&&i.categories&&i.categories[t]&&i.categories[t].color))+';"></i></span>':"")+" "+a.__escape(c(i&&i.categories&&i.categories[t]&&i.categories[t].name))+"</a>\n\t\t\t\t</li>\n\t\t\t\t"})},"widgets.header":function(t,a,i,e,s){return e(i(a&&a.widgets&&a.widgets.header),function(t,e,s){return"\n\t"+i(a&&a.widgets&&a.widgets.header&&a.widgets.header[t]&&a.widgets.header[t].html)+"\n\t"})},breadcrumbs:function(a,i,c,t,e){return t(c(i&&i.breadcrumbs),function(t,e,s){return"\n\t<li"+(e===s-1?' component="breadcrumb/current"':"")+' itemscope="itemscope" itemtype="http://data-vocabulary.org/Breadcrumb" '+(e===s-1?'class="active"':"")+">\n\t\t"+(e!==s-1?'<a href="'+a.__escape(c(i&&i.breadcrumbs&&i.breadcrumbs[t]&&i.breadcrumbs[t].url))+'" itemprop="url">':"")+'\n\t\t\t<span itemprop="title">\n\t\t\t\t'+a.__escape(c(i&&i.breadcrumbs&&i.breadcrumbs[t]&&i.breadcrumbs[t].text))+"\n\t\t\t\t"+(e===s-1?"\n\t\t\t\t"+(c(i&&i["feeds:disableRSS"])?"":"\n\t\t\t\t"+(c(i&&i.rssFeedUrl)?'<a target="_blank" href="'+a.__escape(c(i&&i.rssFeedUrl))+'"><i class="fa fa-rss-square"></i></a>':""))+"\n\t\t\t\t":"")+"\n\t\t\t</span>\n\t\t"+(e!==s-1?"</a>":"")+"\n\t</li>\n\t"})}},c});