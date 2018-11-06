!function(t){"object"==typeof module&&module.exports?module.exports=t():"function"==typeof define&&define.amd&&define(t)}(function(){function i(t,e,s,a,n){return'<div class="account">\n\t'+(s(e&&e.breadcrumbs&&e.breadcrumbs.length)?'\n<ol class="breadcrumb">\n\t'+i.blocks.breadcrumbs(t,e,s,a,n)+"\n</ol>\n":"")+'\n\n<div class="cover" component="account/cover" style="background-image: url('+t.__escape(s(e&&e["cover:url"]))+"); background-position: "+t.__escape(s(e&&e["cover:position"]))+';">\n\t<div class="avatar-wrapper" data-uid="'+t.__escape(s(e&&e.uid))+'">\n\t\t'+(s(e&&e.picture)?'\n\t\t<img src="'+t.__escape(s(e&&e.picture))+'" class="avatar avatar-xl avatar-rounded" />\n\t\t':'\n\t\t<div class="avatar avatar-xl avatar-rounded" style="background-color: '+t.__escape(s(e&&e["icon:bgColor"]))+';" title="'+t.__escape(s(e&&e.username))+'">'+t.__escape(s(e&&e["icon:text"]))+"</div>\n\t\t")+'\n\t\t<i component="user/status" class="fa fa-circle status '+t.__escape(s(e&&e.status))+'" title="[[global:'+t.__escape(s(e&&e.status))+']]"></i>\n\n\t\t'+(s(e&&e.loggedIn)?"\n\t\t"+(s(e&&e.isSelf)?"":'\n\t\t<button class="btn-morph fab '+(s(e&&e.isFollowing)?"heart":"plus")+(s(e&&e.banned)?" hide":"")+'" title="'+(s(e&&e.isFollowing)?"[[global:unfollow]]":"[[global:follow]]")+'">\n\t\t\t<span>\n\t\t\t\t<span class="s1"></span>\n\t\t\t\t<span class="s2"></span>\n\t\t\t\t<span class="s3"></span>\n\t\t\t</span>\n\t\t</button>\n\t\t')+"\n\t\t":"")+'\n\t</div>\n\n\t<div class="container">\n\t\t<div class="btn-group account-fab bottom-sheet">\n\t<button type="button" class="fab dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">\n\t\t<i class="fa fa-ellipsis-v"></i>\n\t</button>\n\t<ul class="dropdown-menu dropdown-menu-right">\n\t\t'+(s(e&&e.isSelf)?"":"\n\t\t"+(s(e&&e.banned)?"":"\n\t\t"+(s(e&&e.config&&e.config.disableChat)?"":'\n\t\t<li class="'+(s(e&&e.hasPrivateChat)?"":"hidden")+'">\n\t\t\t<a component="account/chat" href="#">[[user:chat_with, '+t.__escape(s(e&&e.username))+']]</a>\n\t\t</li>\n\t\t<li>\n\t\t\t<a component="account/new-chat" href="#">[[user:new_chat_with, '+t.__escape(s(e&&e.username))+"]]</a>\n\t\t</li>\n\t\t")+'\n\t\t<li>\n\t\t\t<a component="account/flag" href="#">[[user:flag-profile]]</a>\n\t\t</li>\n\t\t<li>\n\t\t\t<a component="account/block" href="#">'+(s(e&&e.isBlocked)?"[[user:unblock_user]]":"[[user:block_user]]")+'</a>\n\t\t</li>\n\t\t<li class="divider"></li>\n\t\t')+"\n\t\t")+'\n\t\t<li>\n\t\t\t<a href="'+t.__escape(s(e&&e.config&&e.config.relative_path))+"/user/"+t.__escape(s(e&&e.userslug))+'" class="inline-block" id="profile">[[user:profile]]</a>\n\t\t</li>\n\t\t'+(s(e&&e.showHidden)?'\n\t\t<li><a href="'+t.__escape(s(e&&e.config&&e.config.relative_path))+"/user/"+t.__escape(s(e&&e.userslug))+'/edit">[[user:edit]]</a></li>\n\t\t<li><a href="'+t.__escape(s(e&&e.config&&e.config.relative_path))+"/user/"+t.__escape(s(e&&e.userslug))+'/settings">[[user:settings]]</a></li>\n\t\t':"")+"\n\n\t\t"+(s(e&&e.isSelf)?"":"\n\t\t"+(s(e&&e.canBan)?'\n\t\t<li class="'+(s(e&&e.banned)?"hide":"")+'">\n\t\t\t<a component="account/ban" href="#">[[user:ban_account]]</a>\n\t\t</li>\n\t\t<li class="'+(s(e&&e.banned)?"":"hide")+'">\n\t\t\t<a component="account/unban" href="#">[[user:unban_account]]</a>\n\t\t</li>\n\t\t':"")+"\n\t\t"+(s(e&&e.isAdmin)?'\n\t\t<li>\n\t\t\t<a component="account/delete" href="#" class="">[[user:delete_account]]</a>\n\t\t</li>\n\t\t':"")+"\n\t\t")+'\n\n\t\t<li class="divider"></li>\n\t\t<li><a href="'+t.__escape(s(e&&e.config&&e.config.relative_path))+"/user/"+t.__escape(s(e&&e.userslug))+'/following">[[user:following]]</a></li>\n\t\t<li><a href="'+t.__escape(s(e&&e.config&&e.config.relative_path))+"/user/"+t.__escape(s(e&&e.userslug))+'/followers">[[user:followers]]</a></li>\n\t\t'+(s(e&&e.showHidden)?'\n\t\t<li><a href="'+t.__escape(s(e&&e.config&&e.config.relative_path))+"/user/"+t.__escape(s(e&&e.userslug))+'/blocks">[[user:blocks]]</a></li>\n\t\t':"")+'\n\t\t<li class="divider"></li>\n\t\t<li><a href="'+t.__escape(s(e&&e.config&&e.config.relative_path))+"/user/"+t.__escape(s(e&&e.userslug))+'/topics">[[global:topics]]</a></li>\n\t\t<li><a href="'+t.__escape(s(e&&e.config&&e.config.relative_path))+"/user/"+t.__escape(s(e&&e.userslug))+'/posts">[[global:posts]]</a></li>\n\t\t'+(s(e&&e["reputation:disabled"])?"":'\n\t\t<li><a href="'+t.__escape(s(e&&e.config&&e.config.relative_path))+"/user/"+t.__escape(s(e&&e.userslug))+'/best">[[global:best]]</a></li>\n\t\t')+'\n\t\t<li><a href="'+t.__escape(s(e&&e.config&&e.config.relative_path))+"/user/"+t.__escape(s(e&&e.userslug))+'/groups">[[global:header.groups]]</a></li>\n\n\t\t'+(s(e&&e.showHidden)?'\n\t\t<li><a href="'+t.__escape(s(e&&e.config&&e.config.relative_path))+"/user/"+t.__escape(s(e&&e.userslug))+'/bookmarks">[[user:bookmarks]]</a></li>\n\t\t<li><a href="'+t.__escape(s(e&&e.config&&e.config.relative_path))+"/user/"+t.__escape(s(e&&e.userslug))+'/watched">[[user:watched]]</a></li>\n\t\t<li><a href="'+t.__escape(s(e&&e.config&&e.config.relative_path))+"/user/"+t.__escape(s(e&&e.userslug))+'/ignored">[[user:ignored]]</a></li>\n\t\t'+(s(e&&e["reputation:disabled"])?"":'\n\t\t<li><a href="'+t.__escape(s(e&&e.config&&e.config.relative_path))+"/user/"+t.__escape(s(e&&e.userslug))+'/upvoted">[[global:upvoted]]</a></li>\n\t\t'+(s(e&&e["downvote:disabled"])?"":'\n\t\t<li><a href="'+t.__escape(s(e&&e.config&&e.config.relative_path))+"/user/"+t.__escape(s(e&&e.userslug))+'/downvoted">[[global:downvoted]]</a></li>\n\t\t')+"\n\t\t")+'\n\t\t<li><a href="'+t.__escape(s(e&&e.config&&e.config.relative_path))+"/user/"+t.__escape(s(e&&e.userslug))+'/uploads">[[global:uploads]]</a></li>\n\t\t':"")+"\n\n\t\t"+i.blocks.profile_links(t,e,s,a,n)+"\n\t</ul>\n</div>\n\n\n\t\t"+(s(e&&e.allowCoverPicture)?'\n\t\t<div class="controls">\n\t\t\t<span class="upload"><i class="fa fa-fw fa-4x fa-upload"></i></span>\n\t\t\t<span class="resize"><i class="fa fa-fw fa-4x fa-arrows"></i></span>\n\t\t\t<span class="remove"><i class="fa fa-fw fa-4x fa-times"></i></span>\n\t\t</div>\n\t\t<div class="save">[[groups:cover-save]] <i class="fa fa-fw fa-floppy-o"></i></div>\n\t\t<div class="indicator">[[groups:cover-saving]] <i class="fa fa-fw fa-refresh fa-spin"></i></div>\n\t\t':"")+'\n\t</div>\n</div>\n\n\n\t<form class="edit-form">\n\t\t\x3c!-- disables autocomplete on FF --\x3e<input type="password" style="display:none">\n\n\t\t'+(s(e&&e.isSelf)?'\n\t\t<div class="form-group">\n\t\t\t<label class="control-label" for="inputCurrentPassword">[[user:current_password]]</label>\n\t\t\t<div class="controls">\n\t\t\t\t<input autocomplete="off" class="form-control" type="password" id="inputCurrentPassword" placeholder="[[user:current_password]]" value=""'+(s(e&&e.hasPassword)?"":" disabled")+">\n\t\t\t</div>\n\t\t</div>\n\t\t":"")+'\n\n\t\t<div class="form-group">\n\t\t\t<label class="control-label" for="inputNewPassword">[[user:password]]</label>\n\t\t\t<input class="form-control" type="password" id="inputNewPassword" placeholder="[[user:password]]" value="">\n\t\t\t<span class="form-feedback" id="password-notify"></span>\n\t\t</div>\n\n\t\t<div class="form-group">\n\t\t\t<label class="control-label" for="inputNewPasswordAgain">[[user:confirm_password]]</label>\n\t\t\t<input class="form-control" type="password" id="inputNewPasswordAgain" placeholder="[[user:confirm_password]]" value="">\n\t\t\t<span class="form-feedback" id="password-confirm-notify"></span>\n\t\t</div>\n\t\t\n\t\t<div class="form-actions">\n\t\t\t<a id="changePasswordBtn" href="#" class="btn btn-primary btn-block"><i class="hide fa fa-spinner fa-spin"></i> [[user:change_password]]</a>\n\t\t</div>\n\t</form>\n</div>'}return i.blocks={profile_links:function(a,n,i,t,e){return t(i(n&&n.profile_links),function(t,e,s){return"\n\t\t"+(0===e?'\n\t\t<li class="divider"></li>\n\t\t':"")+'\n\t\t<li id="'+a.__escape(i(n&&n.profile_links&&n.profile_links[t]&&n.profile_links[t].id))+'" class="plugin-link '+(i(n&&n.profile_links&&n.profile_links[t]&&n.profile_links[t].public)?"public":"private")+'"><a href="'+a.__escape(i(n&&n.config&&n.config.relative_path))+"/user/"+a.__escape(i(n&&n.userslug))+"/"+a.__escape(i(n&&n.profile_links&&n.profile_links[t]&&n.profile_links[t].route))+'">'+(i(n&&n.profile_links&&n.profile_links[t]&&n.profile_links[t].icon)?'<i class="fa fa-fw '+a.__escape(i(n&&n.profile_links&&n.profile_links[t]&&n.profile_links[t].icon))+'"></i> ':"")+a.__escape(i(n&&n.profile_links&&n.profile_links[t]&&n.profile_links[t].name))+"</a></li>\n\t\t"})},breadcrumbs:function(a,n,i,t,e){return t(i(n&&n.breadcrumbs),function(t,e,s){return"\n\t<li"+(e===s-1?' component="breadcrumb/current"':"")+' itemscope="itemscope" itemtype="http://data-vocabulary.org/Breadcrumb" '+(e===s-1?'class="active"':"")+">\n\t\t"+(e!==s-1?'<a href="'+a.__escape(i(n&&n.breadcrumbs&&n.breadcrumbs[t]&&n.breadcrumbs[t].url))+'" itemprop="url">':"")+'\n\t\t\t<span itemprop="title">\n\t\t\t\t'+a.__escape(i(n&&n.breadcrumbs&&n.breadcrumbs[t]&&n.breadcrumbs[t].text))+"\n\t\t\t\t"+(e===s-1?"\n\t\t\t\t"+(i(n&&n["feeds:disableRSS"])?"":"\n\t\t\t\t"+(i(n&&n.rssFeedUrl)?'<a target="_blank" href="'+a.__escape(i(n&&n.rssFeedUrl))+'"><i class="fa fa-rss-square"></i></a>':""))+"\n\t\t\t\t":"")+"\n\t\t\t</span>\n\t\t"+(e!==s-1?"</a>":"")+"\n\t</li>\n\t"})}},i});