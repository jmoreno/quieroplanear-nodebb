!function(s){"object"==typeof module&&module.exports?module.exports=s():"function"==typeof define&&define.amd&&define(s)}(function(){function a(s,o,n,t,e){return(n(o&&o.posts&&o.posts.display_moderator_tools)?'\n<li role="presentation" class="dropdown-header">[[topic:tools]]</li>\n<li role="presentation">\n\t<a component="post/edit" role="menuitem" tabindex="-1" href="#">\n\t\t<span class="menu-icon"><i class="fa fa-pencil"></i></span> [[topic:edit]]\n\t</a>\n</li>\n<li role="presentation">\n\t<a component="post/delete" role="menuitem" tabindex="-1" href="#" class="'+(n(o&&o.posts&&o.posts.deleted)?"hidden":"")+'">\n\t\t<div class="inline menu-icon"><i class="fa fa-trash-o"></i></div> <span>[[topic:delete]]</span>\n\t</a>\n</li>\n<li role="presentation">\n\t<a component="post/restore" role="menuitem" tabindex="-1" href="#" class="'+(n(o&&o.posts&&o.posts.deleted)?"":"hidden")+'">\n\t\t<div class="inline menu-icon"><i class="fa fa-history"></i></div> <span>[[topic:restore]]</span>\n\t</a>\n</li>\n'+(n(o&&o.posts&&o.posts.display_purge_tools)?'\n<li role="presentation">\n\t<a component="post/purge" role="menuitem" tabindex="-1" href="#" class="'+(n(o&&o.posts&&o.posts.deleted)?"":"hidden")+'">\n\t\t<span class="menu-icon"><i class="fa fa-eraser"></i></span> [[topic:purge]]\n\t</a>\n</li>\n':"")+"\n\n"+(n(o&&o.posts&&o.posts.display_history)?'\n<li role="presentation">\n\t<a component="post/view-history" role="menuitem" tabindex="-1" href="#">\n\t\t<span class="menu-icon"><i class="fa fa-history"></i></span> [[topic:view-history]]\n\t</a>\n</li>\n':"")+"\n\n"+(n(o&&o.posts&&o.posts.display_move_tools)?'\n<li role="presentation">\n\t<a component="post/move" role="menuitem" tabindex="-1" href="#">\n\t\t<span class="menu-icon"><i class="fa fa-arrows"></i></span> [[topic:move]]\n\t</a>\n</li>\n':"")+"\n\n"+(n(o&&o.posts&&o.posts.ip)?'\n<li role="presentation">\n\t<a component="post/copy-ip" role="menuitem" tabindex="-1" href="#" data-clipboard-text="'+s.__escape(n(o&&o.posts&&o.posts.ip))+'">\n\t\t<span class="menu-icon" ><i class="fa fa-copy"></i></span> [[topic:copy-ip]] '+s.__escape(n(o&&o.posts&&o.posts.ip))+"\n\t</a>\n</li>\n"+(n(o&&o.posts&&o.posts.display_ip_ban)?'\n<li role="presentation">\n\t<a component="post/ban-ip" role="menuitem" tabindex="-1" href="#" data-ip="'+s.__escape(n(o&&o.posts&&o.posts.ip))+'">\n\t\t<span class="menu-icon"><i class="fa fa-ban"></i></span> [[topic:ban-ip]] '+s.__escape(n(o&&o.posts&&o.posts.ip))+"\n\t</a>\n</li>\n":"")+"\n":"")+"\n":"")+"\n\n"+a.blocks["posts.tools"](s,o,n,t,e)+"\n"+(n(o&&o.posts&&o.posts.toolsVisible)?'\n<li role="presentation" class="divider"></li>\n':"")+"\n\n"+(n(o&&o.posts&&o.posts.deleted)?"":"\n"+(n(o&&o.config&&o.config.loggedIn)?'\n<li role="presentation">\n\t<a component="post/bookmark" role="menuitem" tabindex="-1" href="#" data-bookmarked="'+s.__escape(n(o&&o.posts&&o.posts.bookmarked))+'">\n\n\t\t<span class="bookmark-text">[[topic:bookmark]]</span>\n\t\t<span component="post/bookmark-count" class="bookmarkCount" data-bookmarks="'+s.__escape(n(o&&o.posts&&o.posts.bookmarks))+'">'+s.__escape(n(o&&o.posts&&o.posts.bookmarks))+'</span>&nbsp;\n\n\t\t<i component="post/bookmark/on" class="fa fa-heart '+(n(o&&o.posts&&o.posts.bookmarked)?"":"hidden")+'"></i>\n\t\t<i component="post/bookmark/off" class="fa fa-heart-o '+(n(o&&o.posts&&o.posts.bookmarked)?"hidden":"")+'"></i>\n\t</a>\n</li>\n':"")+"\n\n"+(n(o&&o.postSharing&&o.postSharing.length)?'\n<li role="presentation" class="divider"></li>\n<li role="presentation" class="dropdown-header">[[topic:share_this_post]]</li>\n':"")+"\n"+a.blocks.postSharing(s,o,n,t,e)+"\n\n"+(n(o&&o.posts&&o.posts.display_flag_tools)?'\n<li role="presentation" class="divider"></li>\n<li role="presentation">\n\t<a component="post/flag" role="menuitem" tabindex="-1" href="#">\n\t\t[[topic:flag_title]]\n\t</a>\n</li>\n':"")+"\n")}return a.blocks={postSharing:function(t,e,a,s,o){return s(a(e&&e.postSharing),function(s,o,n){return'\n\t<li role="presentation">\n\t\t<a role="menuitem" component="share/'+t.__escape(a(e&&e.postSharing&&e.postSharing[s]&&e.postSharing[s].id))+'" tabindex="-1" href="#"><span class="menu-icon"><i class="fa '+t.__escape(a(e&&e.postSharing&&e.postSharing[s]&&e.postSharing[s].class))+'"></i></span> '+t.__escape(a(e&&e.postSharing&&e.postSharing[s]&&e.postSharing[s].name))+"</a>\n\t</li>\n"})},"posts.tools":function(t,e,a,s,o){return s(a(e&&e.posts&&e.posts.tools),function(s,o,n){return'\n<li role="presentation">\n\t<a component="'+t.__escape(a(e&&e.posts&&e.posts.tools&&e.posts.tools[s]&&e.posts.tools[s].action))+'" role="menuitem" tabindex="-1" href="#">\n\t\t<span class="menu-icon"><i class="fa '+t.__escape(a(e&&e.posts&&e.posts.tools&&e.posts.tools[s]&&e.posts.tools[s].icon))+'"></i></span> '+a(e&&e.posts&&e.posts.tools&&e.posts.tools[s]&&e.posts.tools[s].html)+"\n\t</a>\n</li>\n"})}},a});