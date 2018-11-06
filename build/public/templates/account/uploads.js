!function(t){"object"==typeof module&&module.exports?module.exports=t():"function"==typeof define&&define.amd&&define(t)}(function(){function s(t,a,n,e,i){return'<div class="account">\n\t'+(n(a&&a.breadcrumbs&&a.breadcrumbs.length)?'\n<ol class="breadcrumb">\n\t'+s.blocks.breadcrumbs(t,a,n,e,i)+"\n</ol>\n":"")+'\n\n<div class="cover" component="account/cover" style="background-image: url('+t.__escape(n(a&&a["cover:url"]))+"); background-position: "+t.__escape(n(a&&a["cover:position"]))+';">\n\t<div class="avatar-wrapper" data-uid="'+t.__escape(n(a&&a.uid))+'">\n\t\t'+(n(a&&a.picture)?'\n\t\t<img src="'+t.__escape(n(a&&a.picture))+'" class="avatar avatar-xl avatar-rounded" />\n\t\t':'\n\t\t<div class="avatar avatar-xl avatar-rounded" style="background-color: '+t.__escape(n(a&&a["icon:bgColor"]))+';" title="'+t.__escape(n(a&&a.username))+'">'+t.__escape(n(a&&a["icon:text"]))+"</div>\n\t\t")+'\n\t\t<i component="user/status" class="fa fa-circle status '+t.__escape(n(a&&a.status))+'" title="[[global:'+t.__escape(n(a&&a.status))+']]"></i>\n\n\t\t'+(n(a&&a.loggedIn)?"\n\t\t"+(n(a&&a.isSelf)?"":'\n\t\t<button class="btn-morph fab '+(n(a&&a.isFollowing)?"heart":"plus")+(n(a&&a.banned)?" hide":"")+'" title="'+(n(a&&a.isFollowing)?"[[global:unfollow]]":"[[global:follow]]")+'">\n\t\t\t<span>\n\t\t\t\t<span class="s1"></span>\n\t\t\t\t<span class="s2"></span>\n\t\t\t\t<span class="s3"></span>\n\t\t\t</span>\n\t\t</button>\n\t\t')+"\n\t\t":"")+'\n\t</div>\n\n\t<div class="container">\n\t\t<div class="btn-group account-fab bottom-sheet">\n\t<button type="button" class="fab dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">\n\t\t<i class="fa fa-ellipsis-v"></i>\n\t</button>\n\t<ul class="dropdown-menu dropdown-menu-right">\n\t\t'+(n(a&&a.isSelf)?"":"\n\t\t"+(n(a&&a.banned)?"":"\n\t\t"+(n(a&&a.config&&a.config.disableChat)?"":'\n\t\t<li class="'+(n(a&&a.hasPrivateChat)?"":"hidden")+'">\n\t\t\t<a component="account/chat" href="#">[[user:chat_with, '+t.__escape(n(a&&a.username))+']]</a>\n\t\t</li>\n\t\t<li>\n\t\t\t<a component="account/new-chat" href="#">[[user:new_chat_with, '+t.__escape(n(a&&a.username))+"]]</a>\n\t\t</li>\n\t\t")+'\n\t\t<li>\n\t\t\t<a component="account/flag" href="#">[[user:flag-profile]]</a>\n\t\t</li>\n\t\t<li>\n\t\t\t<a component="account/block" href="#">'+(n(a&&a.isBlocked)?"[[user:unblock_user]]":"[[user:block_user]]")+'</a>\n\t\t</li>\n\t\t<li class="divider"></li>\n\t\t')+"\n\t\t")+'\n\t\t<li>\n\t\t\t<a href="'+t.__escape(n(a&&a.config&&a.config.relative_path))+"/user/"+t.__escape(n(a&&a.userslug))+'" class="inline-block" id="profile">[[user:profile]]</a>\n\t\t</li>\n\t\t'+(n(a&&a.showHidden)?'\n\t\t<li><a href="'+t.__escape(n(a&&a.config&&a.config.relative_path))+"/user/"+t.__escape(n(a&&a.userslug))+'/edit">[[user:edit]]</a></li>\n\t\t<li><a href="'+t.__escape(n(a&&a.config&&a.config.relative_path))+"/user/"+t.__escape(n(a&&a.userslug))+'/settings">[[user:settings]]</a></li>\n\t\t':"")+"\n\n\t\t"+(n(a&&a.isSelf)?"":"\n\t\t"+(n(a&&a.canBan)?'\n\t\t<li class="'+(n(a&&a.banned)?"hide":"")+'">\n\t\t\t<a component="account/ban" href="#">[[user:ban_account]]</a>\n\t\t</li>\n\t\t<li class="'+(n(a&&a.banned)?"":"hide")+'">\n\t\t\t<a component="account/unban" href="#">[[user:unban_account]]</a>\n\t\t</li>\n\t\t':"")+"\n\t\t"+(n(a&&a.isAdmin)?'\n\t\t<li>\n\t\t\t<a component="account/delete" href="#" class="">[[user:delete_account]]</a>\n\t\t</li>\n\t\t':"")+"\n\t\t")+'\n\n\t\t<li class="divider"></li>\n\t\t<li><a href="'+t.__escape(n(a&&a.config&&a.config.relative_path))+"/user/"+t.__escape(n(a&&a.userslug))+'/following">[[user:following]]</a></li>\n\t\t<li><a href="'+t.__escape(n(a&&a.config&&a.config.relative_path))+"/user/"+t.__escape(n(a&&a.userslug))+'/followers">[[user:followers]]</a></li>\n\t\t'+(n(a&&a.showHidden)?'\n\t\t<li><a href="'+t.__escape(n(a&&a.config&&a.config.relative_path))+"/user/"+t.__escape(n(a&&a.userslug))+'/blocks">[[user:blocks]]</a></li>\n\t\t':"")+'\n\t\t<li class="divider"></li>\n\t\t<li><a href="'+t.__escape(n(a&&a.config&&a.config.relative_path))+"/user/"+t.__escape(n(a&&a.userslug))+'/topics">[[global:topics]]</a></li>\n\t\t<li><a href="'+t.__escape(n(a&&a.config&&a.config.relative_path))+"/user/"+t.__escape(n(a&&a.userslug))+'/posts">[[global:posts]]</a></li>\n\t\t'+(n(a&&a["reputation:disabled"])?"":'\n\t\t<li><a href="'+t.__escape(n(a&&a.config&&a.config.relative_path))+"/user/"+t.__escape(n(a&&a.userslug))+'/best">[[global:best]]</a></li>\n\t\t')+'\n\t\t<li><a href="'+t.__escape(n(a&&a.config&&a.config.relative_path))+"/user/"+t.__escape(n(a&&a.userslug))+'/groups">[[global:header.groups]]</a></li>\n\n\t\t'+(n(a&&a.showHidden)?'\n\t\t<li><a href="'+t.__escape(n(a&&a.config&&a.config.relative_path))+"/user/"+t.__escape(n(a&&a.userslug))+'/bookmarks">[[user:bookmarks]]</a></li>\n\t\t<li><a href="'+t.__escape(n(a&&a.config&&a.config.relative_path))+"/user/"+t.__escape(n(a&&a.userslug))+'/watched">[[user:watched]]</a></li>\n\t\t<li><a href="'+t.__escape(n(a&&a.config&&a.config.relative_path))+"/user/"+t.__escape(n(a&&a.userslug))+'/ignored">[[user:ignored]]</a></li>\n\t\t'+(n(a&&a["reputation:disabled"])?"":'\n\t\t<li><a href="'+t.__escape(n(a&&a.config&&a.config.relative_path))+"/user/"+t.__escape(n(a&&a.userslug))+'/upvoted">[[global:upvoted]]</a></li>\n\t\t'+(n(a&&a["downvote:disabled"])?"":'\n\t\t<li><a href="'+t.__escape(n(a&&a.config&&a.config.relative_path))+"/user/"+t.__escape(n(a&&a.userslug))+'/downvoted">[[global:downvoted]]</a></li>\n\t\t')+"\n\t\t")+'\n\t\t<li><a href="'+t.__escape(n(a&&a.config&&a.config.relative_path))+"/user/"+t.__escape(n(a&&a.userslug))+'/uploads">[[global:uploads]]</a></li>\n\t\t':"")+"\n\n\t\t"+s.blocks.profile_links(t,a,n,e,i)+"\n\t</ul>\n</div>\n\n\n\t\t"+(n(a&&a.allowCoverPicture)?'\n\t\t<div class="controls">\n\t\t\t<span class="upload"><i class="fa fa-fw fa-4x fa-upload"></i></span>\n\t\t\t<span class="resize"><i class="fa fa-fw fa-4x fa-arrows"></i></span>\n\t\t\t<span class="remove"><i class="fa fa-fw fa-4x fa-times"></i></span>\n\t\t</div>\n\t\t<div class="save">[[groups:cover-save]] <i class="fa fa-fw fa-floppy-o"></i></div>\n\t\t<div class="indicator">[[groups:cover-saving]] <i class="fa fa-fw fa-refresh fa-spin"></i></div>\n\t\t':"")+'\n\t</div>\n</div>\n\n\t<div class="row">\n\t\t<h1>'+t.__escape(n(a&&a.title))+"</h1>\n\n        "+(n(a&&a.privateUploads)?'\n        <div class="alert alert-info text-center">[[uploads:private-uploads-info]]</div>\n        ':'\n        <div class="alert alert-info text-center">[[uploads:public-uploads-info]]</div>\n        ')+"\n\n\t\t"+(n(a&&a.uploads&&a.uploads.length)?"":'\n\t\t\t<div class="alert alert-warning text-center">[[uploads:no-uploads-found]]</div>\n\t\t')+'\n\n\t\t<div class="col-xs-12">\n            <table class="table table-striped">\n                <thead>\n                    <tr>\n                        <th></th>\n                        <th></th>\n                    </tr>\n                </thead>\n                <tbody>\n                    '+s.blocks.uploads(t,a,n,e,i)+'\n                </tbody>\n            </table>\n\n\t\t\t<div component="pagination" class="text-center pagination-container'+(n(a&&a.pagination&&a.pagination.pages&&a.pagination.pages.length)?"":" hidden")+'">\n\t<ul class="pagination hidden-xs">\n\t\t<li class="previous pull-left'+(n(a&&a.pagination&&a.pagination.prev&&a.pagination.prev.active)?"":" disabled")+'">\n\t\t\t<a href="?'+t.__escape(n(a&&a.pagination&&a.pagination.prev&&a.pagination.prev.qs))+'" data-page="'+t.__escape(n(a&&a.pagination&&a.pagination.prev&&a.pagination.prev.page))+'"><i class="fa fa-chevron-left"></i> </a>\n\t\t</li>\n\n\t\t'+s.blocks["pagination.pages"](t,a,n,e,i)+'\n\n\t\t<li class="next pull-right'+(n(a&&a.pagination&&a.pagination.next&&a.pagination.next.active)?"":" disabled")+'">\n\t\t\t<a href="?'+t.__escape(n(a&&a.pagination&&a.pagination.next&&a.pagination.next.qs))+'" data-page="'+t.__escape(n(a&&a.pagination&&a.pagination.next&&a.pagination.next.page))+'"> <i class="fa fa-chevron-right"></i></a>\n\t\t</li>\n\t</ul>\n\n\t<ul class="pagination hidden-sm hidden-md hidden-lg">\n\t\t<li class="first'+(n(a&&a.pagination&&a.pagination.prev&&a.pagination.prev.active)?"":" disabled")+'">\n\t\t\t<a href="?page=1" data-page="1"><i class="fa fa-fast-backward"></i> </a>\n\t\t</li>\n\n\t\t<li class="previous'+(n(a&&a.pagination&&a.pagination.prev&&a.pagination.prev.active)?"":" disabled")+'">\n\t\t\t<a href="?'+t.__escape(n(a&&a.pagination&&a.pagination.prev&&a.pagination.prev.qs))+'" data-page="'+t.__escape(n(a&&a.pagination&&a.pagination.prev&&a.pagination.prev.page))+'"><i class="fa fa-chevron-left"></i> </a>\n\t\t</li>\n\n\t\t<li component="pagination/select-page" class="page select-page">\n\t\t\t<a href="#">'+t.__escape(n(a&&a.pagination&&a.pagination.currentPage))+" / "+t.__escape(n(a&&a.pagination&&a.pagination.pageCount))+'</a>\n\t\t</li>\n\n\t\t<li class="next'+(n(a&&a.pagination&&a.pagination.next&&a.pagination.next.active)?"":" disabled")+'">\n\t\t\t<a href="?'+t.__escape(n(a&&a.pagination&&a.pagination.next&&a.pagination.next.qs))+'" data-page="'+t.__escape(n(a&&a.pagination&&a.pagination.next&&a.pagination.next.page))+'"> <i class="fa fa-chevron-right"></i></a>\n\t\t</li>\n\n\t\t<li class="last'+(n(a&&a.pagination&&a.pagination.next&&a.pagination.next.active)?"":" disabled")+'">\n\t\t\t<a href="?page='+t.__escape(n(a&&a.pagination&&a.pagination.pageCount))+'" data-page="'+t.__escape(n(a&&a.pagination&&a.pagination.pageCount))+'"><i class="fa fa-fast-forward"></i> </a>\n\t\t</li>\n\t</ul>\n</div>\n\t\t</div>\n\t</div>\n</div>'}return s.blocks={"pagination.pages":function(e,i,s,t,a){return t(s(i&&i.pagination&&i.pagination.pages),function(t,a,n){return"\n\t\t\t"+(s(i&&i.pagination&&i.pagination.pages&&i.pagination.pages[t]&&i.pagination.pages[t].separator)?'\n\t\t\t<li component="pagination/select-page" class="page select-page">\n\t\t\t\t<a href="#"><i class="fa fa-ellipsis-h"></i></a>\n\t\t\t</li>\n\t\t\t':'\n\t\t\t<li class="page'+(s(i&&i.pagination&&i.pagination.pages&&i.pagination.pages[t]&&i.pagination.pages[t].active)?" active":"")+'" >\n\t\t\t\t<a href="?'+e.__escape(s(i&&i.pagination&&i.pagination.pages&&i.pagination.pages[t]&&i.pagination.pages[t].qs))+'" data-page="'+e.__escape(s(i&&i.pagination&&i.pagination.pages&&i.pagination.pages[t]&&i.pagination.pages[t].page))+'">'+e.__escape(s(i&&i.pagination&&i.pagination.pages&&i.pagination.pages[t]&&i.pagination.pages[t].page))+"</a>\n\t\t\t</li>\n\t\t\t")+"\n\t\t"})},uploads:function(e,i,s,t,a){return t(s(i&&i.uploads),function(t,a,n){return'\n                    <tr data-name="'+e.__escape(s(i&&i.uploads&&i.uploads[t]&&i.uploads[t].name))+'">\n                        <td>\n                            <a href="'+e.__escape(s(i&&i.config&&i.config.relative_path))+e.__escape(s(i&&i.uploads&&i.uploads[t]&&i.uploads[t].url))+'">'+e.__escape(s(i&&i.uploads&&i.uploads[t]&&i.uploads[t].url))+'</a>\n                        </td>\n                        <td>\n                            <div class="btn-group ">\n                                <button class="btn btn-danger btn-xs" data-action="delete"><i class="fa fa-trash"></i></button>\n                            </div>\n                        </td>\n                    </tr>\n                    '})},profile_links:function(e,i,s,t,a){return t(s(i&&i.profile_links),function(t,a,n){return"\n\t\t"+(0===a?'\n\t\t<li class="divider"></li>\n\t\t':"")+'\n\t\t<li id="'+e.__escape(s(i&&i.profile_links&&i.profile_links[t]&&i.profile_links[t].id))+'" class="plugin-link '+(s(i&&i.profile_links&&i.profile_links[t]&&i.profile_links[t].public)?"public":"private")+'"><a href="'+e.__escape(s(i&&i.config&&i.config.relative_path))+"/user/"+e.__escape(s(i&&i.userslug))+"/"+e.__escape(s(i&&i.profile_links&&i.profile_links[t]&&i.profile_links[t].route))+'">'+(s(i&&i.profile_links&&i.profile_links[t]&&i.profile_links[t].icon)?'<i class="fa fa-fw '+e.__escape(s(i&&i.profile_links&&i.profile_links[t]&&i.profile_links[t].icon))+'"></i> ':"")+e.__escape(s(i&&i.profile_links&&i.profile_links[t]&&i.profile_links[t].name))+"</a></li>\n\t\t"})},breadcrumbs:function(e,i,s,t,a){return t(s(i&&i.breadcrumbs),function(t,a,n){return"\n\t<li"+(a===n-1?' component="breadcrumb/current"':"")+' itemscope="itemscope" itemtype="http://data-vocabulary.org/Breadcrumb" '+(a===n-1?'class="active"':"")+">\n\t\t"+(a!==n-1?'<a href="'+e.__escape(s(i&&i.breadcrumbs&&i.breadcrumbs[t]&&i.breadcrumbs[t].url))+'" itemprop="url">':"")+'\n\t\t\t<span itemprop="title">\n\t\t\t\t'+e.__escape(s(i&&i.breadcrumbs&&i.breadcrumbs[t]&&i.breadcrumbs[t].text))+"\n\t\t\t\t"+(a===n-1?"\n\t\t\t\t"+(s(i&&i["feeds:disableRSS"])?"":"\n\t\t\t\t"+(s(i&&i.rssFeedUrl)?'<a target="_blank" href="'+e.__escape(s(i&&i.rssFeedUrl))+'"><i class="fa fa-rss-square"></i></a>':""))+"\n\t\t\t\t":"")+"\n\t\t\t</span>\n\t\t"+(a!==n-1?"</a>":"")+"\n\t</li>\n\t"})}},s});