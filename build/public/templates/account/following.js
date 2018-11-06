!function(t){"object"==typeof module&&module.exports?module.exports=t():"function"==typeof define&&define.amd&&define(t)}(function(){function i(t,a,e,n,s){return'<div class="account">\n\t'+(e(a&&a.breadcrumbs&&a.breadcrumbs.length)?'\n<ol class="breadcrumb">\n\t'+i.blocks.breadcrumbs(t,a,e,n,s)+"\n</ol>\n":"")+'\n\n<div class="cover" component="account/cover" style="background-image: url('+t.__escape(e(a&&a["cover:url"]))+"); background-position: "+t.__escape(e(a&&a["cover:position"]))+';">\n\t<div class="avatar-wrapper" data-uid="'+t.__escape(e(a&&a.uid))+'">\n\t\t'+(e(a&&a.picture)?'\n\t\t<img src="'+t.__escape(e(a&&a.picture))+'" class="avatar avatar-xl avatar-rounded" />\n\t\t':'\n\t\t<div class="avatar avatar-xl avatar-rounded" style="background-color: '+t.__escape(e(a&&a["icon:bgColor"]))+';" title="'+t.__escape(e(a&&a.username))+'">'+t.__escape(e(a&&a["icon:text"]))+"</div>\n\t\t")+'\n\t\t<i component="user/status" class="fa fa-circle status '+t.__escape(e(a&&a.status))+'" title="[[global:'+t.__escape(e(a&&a.status))+']]"></i>\n\n\t\t'+(e(a&&a.loggedIn)?"\n\t\t"+(e(a&&a.isSelf)?"":'\n\t\t<button class="btn-morph fab '+(e(a&&a.isFollowing)?"heart":"plus")+(e(a&&a.banned)?" hide":"")+'" title="'+(e(a&&a.isFollowing)?"[[global:unfollow]]":"[[global:follow]]")+'">\n\t\t\t<span>\n\t\t\t\t<span class="s1"></span>\n\t\t\t\t<span class="s2"></span>\n\t\t\t\t<span class="s3"></span>\n\t\t\t</span>\n\t\t</button>\n\t\t')+"\n\t\t":"")+'\n\t</div>\n\n\t<div class="container">\n\t\t<div class="btn-group account-fab bottom-sheet">\n\t<button type="button" class="fab dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">\n\t\t<i class="fa fa-ellipsis-v"></i>\n\t</button>\n\t<ul class="dropdown-menu dropdown-menu-right">\n\t\t'+(e(a&&a.isSelf)?"":"\n\t\t"+(e(a&&a.banned)?"":"\n\t\t"+(e(a&&a.config&&a.config.disableChat)?"":'\n\t\t<li class="'+(e(a&&a.hasPrivateChat)?"":"hidden")+'">\n\t\t\t<a component="account/chat" href="#">[[user:chat_with, '+t.__escape(e(a&&a.username))+']]</a>\n\t\t</li>\n\t\t<li>\n\t\t\t<a component="account/new-chat" href="#">[[user:new_chat_with, '+t.__escape(e(a&&a.username))+"]]</a>\n\t\t</li>\n\t\t")+'\n\t\t<li>\n\t\t\t<a component="account/flag" href="#">[[user:flag-profile]]</a>\n\t\t</li>\n\t\t<li>\n\t\t\t<a component="account/block" href="#">'+(e(a&&a.isBlocked)?"[[user:unblock_user]]":"[[user:block_user]]")+'</a>\n\t\t</li>\n\t\t<li class="divider"></li>\n\t\t')+"\n\t\t")+'\n\t\t<li>\n\t\t\t<a href="'+t.__escape(e(a&&a.config&&a.config.relative_path))+"/user/"+t.__escape(e(a&&a.userslug))+'" class="inline-block" id="profile">[[user:profile]]</a>\n\t\t</li>\n\t\t'+(e(a&&a.showHidden)?'\n\t\t<li><a href="'+t.__escape(e(a&&a.config&&a.config.relative_path))+"/user/"+t.__escape(e(a&&a.userslug))+'/edit">[[user:edit]]</a></li>\n\t\t<li><a href="'+t.__escape(e(a&&a.config&&a.config.relative_path))+"/user/"+t.__escape(e(a&&a.userslug))+'/settings">[[user:settings]]</a></li>\n\t\t':"")+"\n\n\t\t"+(e(a&&a.isSelf)?"":"\n\t\t"+(e(a&&a.canBan)?'\n\t\t<li class="'+(e(a&&a.banned)?"hide":"")+'">\n\t\t\t<a component="account/ban" href="#">[[user:ban_account]]</a>\n\t\t</li>\n\t\t<li class="'+(e(a&&a.banned)?"":"hide")+'">\n\t\t\t<a component="account/unban" href="#">[[user:unban_account]]</a>\n\t\t</li>\n\t\t':"")+"\n\t\t"+(e(a&&a.isAdmin)?'\n\t\t<li>\n\t\t\t<a component="account/delete" href="#" class="">[[user:delete_account]]</a>\n\t\t</li>\n\t\t':"")+"\n\t\t")+'\n\n\t\t<li class="divider"></li>\n\t\t<li><a href="'+t.__escape(e(a&&a.config&&a.config.relative_path))+"/user/"+t.__escape(e(a&&a.userslug))+'/following">[[user:following]]</a></li>\n\t\t<li><a href="'+t.__escape(e(a&&a.config&&a.config.relative_path))+"/user/"+t.__escape(e(a&&a.userslug))+'/followers">[[user:followers]]</a></li>\n\t\t'+(e(a&&a.showHidden)?'\n\t\t<li><a href="'+t.__escape(e(a&&a.config&&a.config.relative_path))+"/user/"+t.__escape(e(a&&a.userslug))+'/blocks">[[user:blocks]]</a></li>\n\t\t':"")+'\n\t\t<li class="divider"></li>\n\t\t<li><a href="'+t.__escape(e(a&&a.config&&a.config.relative_path))+"/user/"+t.__escape(e(a&&a.userslug))+'/topics">[[global:topics]]</a></li>\n\t\t<li><a href="'+t.__escape(e(a&&a.config&&a.config.relative_path))+"/user/"+t.__escape(e(a&&a.userslug))+'/posts">[[global:posts]]</a></li>\n\t\t'+(e(a&&a["reputation:disabled"])?"":'\n\t\t<li><a href="'+t.__escape(e(a&&a.config&&a.config.relative_path))+"/user/"+t.__escape(e(a&&a.userslug))+'/best">[[global:best]]</a></li>\n\t\t')+'\n\t\t<li><a href="'+t.__escape(e(a&&a.config&&a.config.relative_path))+"/user/"+t.__escape(e(a&&a.userslug))+'/groups">[[global:header.groups]]</a></li>\n\n\t\t'+(e(a&&a.showHidden)?'\n\t\t<li><a href="'+t.__escape(e(a&&a.config&&a.config.relative_path))+"/user/"+t.__escape(e(a&&a.userslug))+'/bookmarks">[[user:bookmarks]]</a></li>\n\t\t<li><a href="'+t.__escape(e(a&&a.config&&a.config.relative_path))+"/user/"+t.__escape(e(a&&a.userslug))+'/watched">[[user:watched]]</a></li>\n\t\t<li><a href="'+t.__escape(e(a&&a.config&&a.config.relative_path))+"/user/"+t.__escape(e(a&&a.userslug))+'/ignored">[[user:ignored]]</a></li>\n\t\t'+(e(a&&a["reputation:disabled"])?"":'\n\t\t<li><a href="'+t.__escape(e(a&&a.config&&a.config.relative_path))+"/user/"+t.__escape(e(a&&a.userslug))+'/upvoted">[[global:upvoted]]</a></li>\n\t\t'+(e(a&&a["downvote:disabled"])?"":'\n\t\t<li><a href="'+t.__escape(e(a&&a.config&&a.config.relative_path))+"/user/"+t.__escape(e(a&&a.userslug))+'/downvoted">[[global:downvoted]]</a></li>\n\t\t')+"\n\t\t")+'\n\t\t<li><a href="'+t.__escape(e(a&&a.config&&a.config.relative_path))+"/user/"+t.__escape(e(a&&a.userslug))+'/uploads">[[global:uploads]]</a></li>\n\t\t':"")+"\n\n\t\t"+i.blocks.profile_links(t,a,e,n,s)+"\n\t</ul>\n</div>\n\n\n\t\t"+(e(a&&a.allowCoverPicture)?'\n\t\t<div class="controls">\n\t\t\t<span class="upload"><i class="fa fa-fw fa-4x fa-upload"></i></span>\n\t\t\t<span class="resize"><i class="fa fa-fw fa-4x fa-arrows"></i></span>\n\t\t\t<span class="remove"><i class="fa fa-fw fa-4x fa-times"></i></span>\n\t\t</div>\n\t\t<div class="save">[[groups:cover-save]] <i class="fa fa-fw fa-floppy-o"></i></div>\n\t\t<div class="indicator">[[groups:cover-saving]] <i class="fa fa-fw fa-refresh fa-spin"></i></div>\n\t\t':"")+'\n\t</div>\n</div>\n\n\n\t<div class="users row">\n\t\t<h1>[[pages:'+t.__escape(e(a&&a.template&&a.template.name))+", "+t.__escape(e(a&&a.username))+']]</h1>\n\n\t\t<ul id="users-container" class="users-container" data-nextstart="'+t.__escape(e(a&&a.nextStart))+'">\n\t\t\t'+i.blocks.users(t,a,e,n,s)+"\n\t\t</ul>\n\n\t\t"+(e(a&&a.users&&a.users.length)?"":'\n\t\t<div class="alert alert-warning text-center">[[user:follows_no_one]]</div>\n\t\t')+'\n\n\t\t<div component="pagination" class="text-center pagination-container'+(e(a&&a.pagination&&a.pagination.pages&&a.pagination.pages.length)?"":" hidden")+'">\n\t<ul class="pagination hidden-xs">\n\t\t<li class="previous pull-left'+(e(a&&a.pagination&&a.pagination.prev&&a.pagination.prev.active)?"":" disabled")+'">\n\t\t\t<a href="?'+t.__escape(e(a&&a.pagination&&a.pagination.prev&&a.pagination.prev.qs))+'" data-page="'+t.__escape(e(a&&a.pagination&&a.pagination.prev&&a.pagination.prev.page))+'"><i class="fa fa-chevron-left"></i> </a>\n\t\t</li>\n\n\t\t'+i.blocks["pagination.pages"](t,a,e,n,s)+'\n\n\t\t<li class="next pull-right'+(e(a&&a.pagination&&a.pagination.next&&a.pagination.next.active)?"":" disabled")+'">\n\t\t\t<a href="?'+t.__escape(e(a&&a.pagination&&a.pagination.next&&a.pagination.next.qs))+'" data-page="'+t.__escape(e(a&&a.pagination&&a.pagination.next&&a.pagination.next.page))+'"> <i class="fa fa-chevron-right"></i></a>\n\t\t</li>\n\t</ul>\n\n\t<ul class="pagination hidden-sm hidden-md hidden-lg">\n\t\t<li class="first'+(e(a&&a.pagination&&a.pagination.prev&&a.pagination.prev.active)?"":" disabled")+'">\n\t\t\t<a href="?page=1" data-page="1"><i class="fa fa-fast-backward"></i> </a>\n\t\t</li>\n\n\t\t<li class="previous'+(e(a&&a.pagination&&a.pagination.prev&&a.pagination.prev.active)?"":" disabled")+'">\n\t\t\t<a href="?'+t.__escape(e(a&&a.pagination&&a.pagination.prev&&a.pagination.prev.qs))+'" data-page="'+t.__escape(e(a&&a.pagination&&a.pagination.prev&&a.pagination.prev.page))+'"><i class="fa fa-chevron-left"></i> </a>\n\t\t</li>\n\n\t\t<li component="pagination/select-page" class="page select-page">\n\t\t\t<a href="#">'+t.__escape(e(a&&a.pagination&&a.pagination.currentPage))+" / "+t.__escape(e(a&&a.pagination&&a.pagination.pageCount))+'</a>\n\t\t</li>\n\n\t\t<li class="next'+(e(a&&a.pagination&&a.pagination.next&&a.pagination.next.active)?"":" disabled")+'">\n\t\t\t<a href="?'+t.__escape(e(a&&a.pagination&&a.pagination.next&&a.pagination.next.qs))+'" data-page="'+t.__escape(e(a&&a.pagination&&a.pagination.next&&a.pagination.next.page))+'"> <i class="fa fa-chevron-right"></i></a>\n\t\t</li>\n\n\t\t<li class="last'+(e(a&&a.pagination&&a.pagination.next&&a.pagination.next.active)?"":" disabled")+'">\n\t\t\t<a href="?page='+t.__escape(e(a&&a.pagination&&a.pagination.pageCount))+'" data-page="'+t.__escape(e(a&&a.pagination&&a.pagination.pageCount))+'"><i class="fa fa-fast-forward"></i> </a>\n\t\t</li>\n\t</ul>\n</div>\n\t</div>\n</div>'}return i.blocks={"pagination.pages":function(n,s,i,t,a){return t(i(s&&s.pagination&&s.pagination.pages),function(t,a,e){return"\n\t\t\t"+(i(s&&s.pagination&&s.pagination.pages&&s.pagination.pages[t]&&s.pagination.pages[t].separator)?'\n\t\t\t<li component="pagination/select-page" class="page select-page">\n\t\t\t\t<a href="#"><i class="fa fa-ellipsis-h"></i></a>\n\t\t\t</li>\n\t\t\t':'\n\t\t\t<li class="page'+(i(s&&s.pagination&&s.pagination.pages&&s.pagination.pages[t]&&s.pagination.pages[t].active)?" active":"")+'" >\n\t\t\t\t<a href="?'+n.__escape(i(s&&s.pagination&&s.pagination.pages&&s.pagination.pages[t]&&s.pagination.pages[t].qs))+'" data-page="'+n.__escape(i(s&&s.pagination&&s.pagination.pages&&s.pagination.pages[t]&&s.pagination.pages[t].page))+'">'+n.__escape(i(s&&s.pagination&&s.pagination.pages&&s.pagination.pages[t]&&s.pagination.pages[t].page))+"</a>\n\t\t\t</li>\n\t\t\t")+"\n\t\t"})},users:function(n,s,i,t,a){return t(i(s&&s.users),function(t,a,e){return'\n<li class="users-box registered-user" data-uid="'+n.__escape(i(s&&s.users&&s.users[t]&&s.users[t].uid))+'">\n\t<a href="'+n.__escape(i(s&&s.config&&s.config.relative_path))+"/user/"+n.__escape(i(s&&s.users&&s.users[t]&&s.users[t].userslug))+'">\n\t\t'+(i(s&&s.users&&s.users[t]&&s.users[t].picture)?'\n\t\t<img src="'+n.__escape(i(s&&s.users&&s.users[t]&&s.users[t].picture))+'" />\n\t\t':'\n\t\t<div class="user-icon" style="background-color: '+n.__escape(i(s&&s.users&&s.users[t]&&s.users[t]["icon:bgColor"]))+';">'+n.__escape(i(s&&s.users&&s.users[t]&&s.users[t]["icon:text"]))+"</div>\n\t\t")+'\n\t</a>\n\t<br/>\n\t<div class="user-info">\n\t\t<span>\n\t\t\t<i component="user/status" class="fa fa-circle status '+n.__escape(i(s&&s.users&&s.users[t]&&s.users[t].status))+'" title="[[global:'+n.__escape(i(s&&s.users&&s.users[t]&&s.users[t].status))+']]"></i>\n\t\t\t<a href="'+n.__escape(i(s&&s.config&&s.config.relative_path))+"/user/"+n.__escape(i(s&&s.users&&s.users[t]&&s.users[t].userslug))+'">'+n.__escape(i(s&&s.users&&s.users[t]&&s.users[t].username))+"</a>\n\t\t</span>\n\t\t<br/>\n\n\t\t"+(i(s&&s.section_joindate)?'\n\t\t<div title="joindate" class="joindate">\n\t\t\t<span class="timeago" title="'+n.__escape(i(s&&s.users&&s.users[t]&&s.users[t].joindateISO))+'"></span>\n\t\t</div>\n\t\t':"")+"\n\n\t\t"+(i(s&&s["section_sort-reputation"])?'\n\t\t<div title="reputation" class="reputation">\n\t\t\t<i class="fa fa-star"></i>\n\t\t\t<span class="formatted-number">'+n.__escape(i(s&&s.users&&s.users[t]&&s.users[t].reputation))+"</span>\n\t\t</div>\n\t\t":"")+"\n\n\t\t"+(i(s&&s["section_sort-posts"])?'\n\t\t<div title="post count" class="post-count">\n\t\t\t<i class="fa fa-pencil"></i>\n\t\t\t<span class="formatted-number">'+n.__escape(i(s&&s.users&&s.users[t]&&s.users[t].postcount))+"</span>\n\t\t</div>\n\t\t":"")+"\n\n\t\t"+(i(s&&s.section_flagged)?'\n\t\t<div title="flag count" class="flag-count">\n\t\t\t<i class="fa fa-flag"></i>\n\t\t\t<span><a class="formatted-number" href="'+n.__escape(i(s&&s.config&&s.config.relative_path))+"/flags?targetUid="+n.__escape(i(s&&s.users&&s.users[t]&&s.users[t].uid))+'">'+n.__escape(i(s&&s.users&&s.users[t]&&s.users[t].flags))+"</a></span>\n\t\t</div>\n\t\t":"")+"\n\t</div>\n</li>\n"})},profile_links:function(n,s,i,t,a){return t(i(s&&s.profile_links),function(t,a,e){return"\n\t\t"+(0===a?'\n\t\t<li class="divider"></li>\n\t\t':"")+'\n\t\t<li id="'+n.__escape(i(s&&s.profile_links&&s.profile_links[t]&&s.profile_links[t].id))+'" class="plugin-link '+(i(s&&s.profile_links&&s.profile_links[t]&&s.profile_links[t].public)?"public":"private")+'"><a href="'+n.__escape(i(s&&s.config&&s.config.relative_path))+"/user/"+n.__escape(i(s&&s.userslug))+"/"+n.__escape(i(s&&s.profile_links&&s.profile_links[t]&&s.profile_links[t].route))+'">'+(i(s&&s.profile_links&&s.profile_links[t]&&s.profile_links[t].icon)?'<i class="fa fa-fw '+n.__escape(i(s&&s.profile_links&&s.profile_links[t]&&s.profile_links[t].icon))+'"></i> ':"")+n.__escape(i(s&&s.profile_links&&s.profile_links[t]&&s.profile_links[t].name))+"</a></li>\n\t\t"})},breadcrumbs:function(n,s,i,t,a){return t(i(s&&s.breadcrumbs),function(t,a,e){return"\n\t<li"+(a===e-1?' component="breadcrumb/current"':"")+' itemscope="itemscope" itemtype="http://data-vocabulary.org/Breadcrumb" '+(a===e-1?'class="active"':"")+">\n\t\t"+(a!==e-1?'<a href="'+n.__escape(i(s&&s.breadcrumbs&&s.breadcrumbs[t]&&s.breadcrumbs[t].url))+'" itemprop="url">':"")+'\n\t\t\t<span itemprop="title">\n\t\t\t\t'+n.__escape(i(s&&s.breadcrumbs&&s.breadcrumbs[t]&&s.breadcrumbs[t].text))+"\n\t\t\t\t"+(a===e-1?"\n\t\t\t\t"+(i(s&&s["feeds:disableRSS"])?"":"\n\t\t\t\t"+(i(s&&s.rssFeedUrl)?'<a target="_blank" href="'+n.__escape(i(s&&s.rssFeedUrl))+'"><i class="fa fa-rss-square"></i></a>':""))+"\n\t\t\t\t":"")+"\n\t\t\t</span>\n\t\t"+(a!==e-1?"</a>":"")+"\n\t</li>\n\t"})}},i});