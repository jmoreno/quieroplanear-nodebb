!function(s){"object"==typeof module&&module.exports?module.exports=s():"function"==typeof define&&define.amd&&define(s)}(function(){function r(s,t,e,o,p){var n=s.__escape;return'<div class="clearfix post-header">\n\t<div class="icon pull-left">\n\t\t<a href="'+(e(t&&t.posts&&t.posts.user&&t.posts.user.userslug)?n(e(t&&t.config&&t.config.relative_path))+"/user/"+n(e(t&&t.posts&&t.posts.user&&t.posts.user.userslug)):"#")+'">\n\t\t\t'+(e(t&&t.posts&&t.posts.user&&t.posts.user.picture)?'\n\t\t\t<img component="user/picture" data-uid="'+n(e(t&&t.posts&&t.posts.user&&t.posts.user.uid))+'" src="'+n(e(t&&t.posts&&t.posts.user&&t.posts.user.picture))+'" align="left" itemprop="image" />\n\t\t\t':'\n\t\t\t<div component="user/picture" data-uid="'+n(e(t&&t.posts&&t.posts.user&&t.posts.user.uid))+'" class="user-icon" style="background-color: '+n(e(t&&t.posts&&t.posts.user&&t.posts.user["icon:bgColor"]))+';">'+n(e(t&&t.posts&&t.posts.user&&t.posts.user["icon:text"]))+"</div>\n\t\t\t")+'\n\t\t\t<i component="user/status" class="fa fa-circle status '+n(e(t&&t.posts&&t.posts.user&&t.posts.user.status))+'" title="[[global:'+n(e(t&&t.posts&&t.posts.user&&t.posts.user.status))+']]"></i>\n\n\t\t</a>\n\t</div>\n\n\t<small class="pull-left">\n\t\t<strong>\n\t\t\t<a href="'+(e(t&&t.posts&&t.posts.user&&t.posts.user.userslug)?n(e(t&&t.config&&t.config.relative_path))+"/user/"+n(e(t&&t.posts&&t.posts.user&&t.posts.user.userslug)):"#")+'" itemprop="author" data-username="'+n(e(t&&t.posts&&t.posts.user&&t.posts.user.username))+'" data-uid="'+n(e(t&&t.posts&&t.posts.user&&t.posts.user.uid))+'">'+n(e(t&&t.posts&&t.posts.user&&t.posts.user.username))+"</a>\n\t\t</strong>\n\n\t\t"+r.blocks["posts.user.selectedGroups"](s,t,e,o,p)+"\n\n\t\t"+(e(t&&t.posts&&t.posts.user&&t.posts.user.banned)?'\n\t\t<span class="label label-danger">[[user:banned]]</span>\n\t\t':"")+'\n\n\t\t<span class="visible-xs-inline-block visible-sm-inline-block visible-md-inline-block visible-lg-inline-block">\n\t\t\t<a class="permalink" href="'+n(e(t&&t.config&&t.config.relative_path))+"/post/"+n(e(t&&t.posts&&t.posts.pid))+'"><span class="timeago" title="'+n(e(t&&t.posts&&t.posts.timestampISO))+'"></span></a>\n\n\t\t\t<i component="post/edit-indicator" class="fa fa-pencil-square'+(e(t&&t.privileges&&t.privileges["posts:history"])?" pointer":"")+" edit-icon "+(e(t&&t.posts&&t.posts.editor&&t.posts.editor.username)?"":"hidden")+'"></i>\n\n\t\t\t<small data-editor="'+n(e(t&&t.posts&&t.posts.editor&&t.posts.editor.userslug))+'" component="post/editor" class="hidden">[[global:last_edited_by, '+n(e(t&&t.posts&&t.posts.editor&&t.posts.editor.username))+']] <span class="timeago" title="'+n(e(t&&t.posts&&t.posts.editedISO))+'"></span></small>\n\n\t\t\t'+(e(t&&t.posts&&t.posts.toPid)?'\n\t\t\t<a component="post/parent" class="btn btn-xs btn-default hidden-xs" data-topid="'+n(e(t&&t.posts&&t.posts.toPid))+'" href="/post/'+n(e(t&&t.posts&&t.posts.toPid))+'"><i class="fa fa-reply"></i> @'+(e(t&&t.posts&&t.posts.parent&&t.posts.parent.username)?n(e(t&&t.posts&&t.posts.parent&&t.posts.parent.username)):"[[global:guest]]")+"</a>\n\t\t\t":"")+"\n\n\t\t\t<span>\n\t\t\t\t"+(e(t&&t.posts&&t.posts.user&&t.posts.user.custom_profile_info&&t.posts.user.custom_profile_info.length)?"\n\t\t\t\t&#124;\n\t\t\t\t"+r.blocks["posts.user.custom_profile_info"](s,t,e,o,p)+"\n\t\t\t\t":"")+'\n\t\t\t</span>\n\t\t</span>\n\t\t<span class="bookmarked"><i class="fa fa-bookmark-o"></i></span>\n\n\t</small>\n</div>\n\n<br />\n\n<div class="content" component="post/content" itemprop="text">\n\t'+n(e(t&&t.posts&&t.posts.content))+'\n</div>\n\n<div class="clearfix post-footer">\n\t'+(e(t&&t.posts&&t.posts.user&&t.posts.user.signature)?'\n\t<div component="post/signature" data-uid="'+n(e(t&&t.posts&&t.posts.user&&t.posts.user.uid))+'" class="post-signature">'+n(e(t&&t.posts&&t.posts.user&&t.posts.user.signature))+"</div>\n\t":"")+'\n\n\t<small class="pull-right">\n\t\t<span class="post-tools">\n\t\t\t<a component="post/reply" href="#" class="no-select '+(e(t&&t.privileges&&t.privileges["topics:reply"])?"":"hidden")+'">[[topic:reply]]</a>\n\t\t\t<a component="post/quote" href="#" class="no-select '+(e(t&&t.privileges&&t.privileges["topics:reply"])?"":"hidden")+'">[[topic:quote]]</a>\n\t\t</span>\n\n\t\t'+(e(t&&t["reputation:disabled"])?"":'\n\t\t<span class="votes">\n\t\t\t<a component="post/upvote" href="#" class="'+(e(t&&t.posts&&t.posts.upvoted)?"upvoted":"")+'">\n\t\t\t\t<i class="fa fa-chevron-up"></i>\n\t\t\t</a>\n\n\t\t\t<span component="post/vote-count" data-votes="'+n(e(t&&t.posts&&t.posts.votes))+'">'+n(e(t&&t.posts&&t.posts.votes))+"</span>\n\n\t\t\t"+(e(t&&t["downvote:disabled"])?"":'\n\t\t\t<a component="post/downvote" href="#" class="'+(e(t&&t.posts&&t.posts.downvoted)?"downvoted":"")+'">\n\t\t\t\t<i class="fa fa-chevron-down"></i>\n\t\t\t</a>\n\t\t\t')+"\n\t\t</span>\n\t\t")+'\n\n\t\t<span component="post/tools" class="dropdown moderator-tools bottom-sheet '+(e(t&&t.posts&&t.posts.display_post_menu)?"":"hidden")+'">\n\t<a href="#" data-toggle="dropdown"><i class="fa fa-fw fa-ellipsis-v"></i></a>\n\t<ul class="dropdown-menu dropdown-menu-right" role="menu"></ul>\n</span>\n\n\t</small>\n\n\t'+(e(t&&t.hideReplies)?"":'\n\t<a component="post/reply-count" href="#" class="threaded-replies no-select '+(e(t&&t.posts&&t.posts.replies&&t.posts.replies.count)?"":"hidden")+'">\n\t\t<span component="post/reply-count/avatars" class="avatars '+(e(t&&t.posts&&t.posts.replies&&t.posts.replies.hasMore)?"hasMore":"")+'">\n\t\t\t'+r.blocks["posts.replies.users"](s,t,e,o,p)+'\n\t\t</span>\n\n\t\t<span class="replies-count" component="post/reply-count/text" data-replies="'+n(e(t&&t.posts&&t.posts.replies&&t.posts.replies.count))+'">'+n(e(t&&t.posts&&t.posts.replies&&t.posts.replies.text))+'</span>\n\t\t<span class="replies-last hidden-xs">[[topic:last_reply_time]] <span class="timeago" title="'+n(e(t&&t.posts&&t.posts.replies&&t.posts.replies.timestampISO))+'"></span></span>\n\n\t\t<i class="fa fa-fw fa-chevron-right" component="post/replies/open"></i>\n\t\t<i class="fa fa-fw fa-chevron-down hidden" component="post/replies/close"></i>\n\t\t<i class="fa fa-fw fa-spin fa-spinner hidden" component="post/replies/loading"></i>\n\t</a>\n\t')+"\n</div>\n\n<hr />\n"}return r.blocks={"posts.user.selectedGroups":function(s,p,n,t,e){var r=s.__escape;return t(n(p&&p.posts&&p.posts.user&&p.posts.user.selectedGroups),function(s,t,e,o){return"\n"+(n(p&&p.posts&&p.posts.user&&p.posts.user.selectedGroups&&p.posts.user.selectedGroups[s]&&p.posts.user.selectedGroups[s].slug)?'\n<a href="'+r(n(p&&p.config&&p.config.relative_path))+"/groups/"+r(n(p&&p.posts&&p.posts.user&&p.posts.user.selectedGroups&&p.posts.user.selectedGroups[s]&&p.posts.user.selectedGroups[s].slug))+'"><small class="label group-label inline-block" style="background-color: '+r(n(p&&p.posts&&p.posts.user&&p.posts.user.selectedGroups&&p.posts.user.selectedGroups[s]&&p.posts.user.selectedGroups[s].labelColor))+';">'+(n(p&&p.posts&&p.posts.user&&p.posts.user.selectedGroups&&p.posts.user.selectedGroups[s]&&p.posts.user.selectedGroups[s].icon)?'<i class="fa '+r(n(p&&p.posts&&p.posts.user&&p.posts.user.selectedGroups&&p.posts.user.selectedGroups[s]&&p.posts.user.selectedGroups[s].icon))+'"></i> ':"")+r(n(p&&p.posts&&p.posts.user&&p.posts.user.selectedGroups&&p.posts.user.selectedGroups[s]&&p.posts.user.selectedGroups[s].userTitle))+"</small></a>\n":"")+"\n"},function(){return""})},"posts.user.custom_profile_info":function(s,p,n,t,e){var r=s.__escape;return t(n(p&&p.posts&&p.posts.user&&p.posts.user.custom_profile_info),function(s,t,e,o){return"\n\t\t\t\t"+r(n(p&&p.posts&&p.posts.user&&p.posts.user.custom_profile_info&&p.posts.user.custom_profile_info[s]&&p.posts.user.custom_profile_info[s].content))+"\n\t\t\t\t"},function(){return""})},"posts.replies.users":function(s,p,n,t,e){var r=s.__escape;return t(n(p&&p.posts&&p.posts.replies&&p.posts.replies.users),function(s,t,e,o){return"\n\t\t\t"+(n(p&&p.posts&&p.posts.replies&&p.posts.replies.users&&p.posts.replies.users[s]&&p.posts.replies.users[s].picture)?'\n\t\t\t<span><img component="user/picture" data-uid="'+r(n(p&&p.posts&&p.posts.replies&&p.posts.replies.users&&p.posts.replies.users[s]&&p.posts.replies.users[s].uid))+'" title="'+r(n(p&&p.posts&&p.posts.replies&&p.posts.replies.users&&p.posts.replies.users[s]&&p.posts.replies.users[s].username))+'" class="avatar" src="'+r(n(p&&p.posts&&p.posts.replies&&p.posts.replies.users&&p.posts.replies.users[s]&&p.posts.replies.users[s].picture))+'"  itemprop="image" /></span>\n\t\t\t':'\n\t\t\t<div component="user/picture" data-uid="'+r(n(p&&p.posts&&p.posts.replies&&p.posts.replies.users&&p.posts.replies.users[s]&&p.posts.replies.users[s].uid))+'" title="'+r(n(p&&p.posts&&p.posts.replies&&p.posts.replies.users&&p.posts.replies.users[s]&&p.posts.replies.users[s].username))+'" class="user-icon" style="background-color: '+r(n(p&&p.posts&&p.posts.replies&&p.posts.replies.users&&p.posts.replies.users[s]&&p.posts.replies.users[s]["icon:bgColor"]))+';">'+r(n(p&&p.posts&&p.posts.replies&&p.posts.replies.users&&p.posts.replies.users[s]&&p.posts.replies.users[s]["icon:text"]))+"</div>\n\t\t\t")+"\n\t\t\t"},function(){return""})}},r});