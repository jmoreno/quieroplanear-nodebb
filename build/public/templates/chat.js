!function(t){"object"==typeof module&&module.exports?module.exports=t():"function"==typeof define&&define.amd&&define(t)}(function(){function o(t,s,e,a,n){var r=t.__escape;return'\n<div id="chat-modal" class="chat-modal hide" tabindex="-1" role="dialog" aria-labelledby="Chat" aria-hidden="true" data-backdrop="none">\n\t<div class="modal-dialog">\n\t\t<div class="modal-content">\n\t\t\t<div class="modal-header">\n\t\t\t\t<button id="chat-close-btn" type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>\n\t\t\t\t<button type="button" class="close hidden-xs hidden-sm" data-action="maximize"><span aria-hidden="true"><i class="fa fa-expand"></i></span><span class="sr-only">[[modules:chat.maximize]]</span></button>\n\t\t\t\t<button type="button" class="close hidden-xs hidden-sm" data-action="minimize"><span aria-hidden="true"><i class="fa fa-minus"></i></span><span class="sr-only">[[modules:chat.minimize]]</span></button>\n\t\t\t\t<div class="dropdown pull-right">\n\t\t\t\t\t<button class="close" data-toggle="dropdown" component="chat/controlsToggle"><i class="fa fa-gear"></i></button>\n\t\t\t\t\t<ul class="dropdown-menu dropdown-menu-right pull-right" component="chat/controls">\n\t\t\t\t\t\t'+(e(s&&s.users&&s.users.length)?'\n\t\t\t\t\t\t<li class="dropdown-header">[[modules:chat.in-room]]</li>\n\t\t\t\t\t\t'+o.blocks.users(t,s,e,a,n)+'\n\t\t\t\t\t\t<li role="separator" class="divider"></li>\n\t\t\t\t\t\t':"")+'\n\t\t\t\t\t\t<li class="dropdown-header">[[modules:chat.options]]</li>\n\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t<a href="#" data-action="members"><i class="fa fa-fw fa-cog"></i> [[modules:chat.manage-room]]</a>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t<a href="#" data-action="rename"><i class="fa fa-fw fa-edit"></i> [[modules:chat.rename-room]]</a>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t<a href="#" data-action="leave"><i class="fa fa-fw fa-sign-out"></i> [[modules:chat.leave]]</a>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t</ul>\n\t\t\t\t</div>\n\n\t\t\t\t<h4 component="chat/room/name">'+(e(s&&s.roomName)?r(e(s&&s.roomName)):r(e(s&&s.usernames)))+'</h4>\n\t\t\t</div>\n\n\t\t\t<div class="modal-body">\n\t\t\t\t<ul class="chat-content" component="chat/messages">\n\t\t\t\t\t'+o.blocks.messages(t,s,e,a,n)+'\n\t\t\t\t</ul>\n\n\t\t\t\t<div component="chat/composer">\n\t\t\t\t\t<textarea component="chat/input" placeholder="[[modules:chat.placeholder]]" class="form-control chat-input mousetrap" rows="1"></textarea>\n\t\t\t\t\t<button class="btn btn-primary" type="button" data-action="send"><i class="fa fa-fw fa-2x fa-paper-plane"></i></button>\n\t\t\t\t\t<span component="chat/message/remaining">'+r(e(s&&s.maximumChatMessageLength))+"</span>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>"}return o.blocks={users:function(t,n,r,s,e){var o=t.__escape;return s(r(n&&n.users),function(t,s,e,a){return'\n\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t<a href="'+o(r(n&&n.config&&n.config.relative_path))+"/uid/"+o(r(n&&n.users&&n.users[t]&&n.users[t].uid))+'">\n\t\t\t\t\t\t\t\t'+(r(n&&n.users&&n.users[t]&&n.users[t].picture)?'\n\t\t\t\t\t\t\t\t<img class="avatar avatar-sm" component="user/picture" src="'+o(r(n&&n.users&&n.users[t]&&n.users[t].picture))+'" itemprop="image" />\n\t\t\t\t\t\t\t\t':'\n\t\t\t\t\t\t\t\t<div class="avatar avatar-sm" component="user/picture" style="background-color: '+o(r(n&&n.users&&n.users[t]&&n.users[t]["icon:bgColor"]))+';">'+o(r(n&&n.users&&n.users[t]&&n.users[t]["icon:text"]))+"</div>")+o(r(n&&n.users&&n.users[t]&&n.users[t].username))+"\n\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t\t"},function(){return""})},messages:function(t,n,r,s,e){var o=t.__escape;return s(r(n&&n.messages),function(t,s,e,a){return'\n<li component="chat/message" class="chat-message clear'+(r(n&&n.messages&&n.messages[t]&&n.messages[t].deleted)?" deleted":"")+'" data-index="'+o(r(n&&n.messages&&n.messages[t]&&n.messages[t].index))+'" data-mid="'+o(r(n&&n.messages&&n.messages[t]&&n.messages[t].messageId))+'" data-uid="'+o(r(n&&n.messages&&n.messages[t]&&n.messages[t].fromuid))+'" data-self="'+o(r(n&&n.messages&&n.messages[t]&&n.messages[t].self))+'" data-break="'+o(r(n&&n.messages&&n.messages[t]&&n.messages[t].newSet))+'" data-timestamp="'+o(r(n&&n.messages&&n.messages[t]&&n.messages[t].timestamp))+'">\r\n\t<div class="message-header">\r\n\t\t<a href="'+o(r(n&&n.config&&n.config.relative_path))+"/user/"+o(r(n&&n.messages&&n.messages[t]&&n.messages[t].fromUser&&n.messages[t].fromUser.userslug))+'">\r\n\t\t\t'+(r(n&&n.messages&&n.messages[t]&&n.messages[t].fromUser&&n.messages[t].fromUser.picture)?'\r\n\t\t\t<img class="chat-user-image not-responsive" src="'+o(r(n&&n.messages&&n.messages[t]&&n.messages[t].fromUser&&n.messages[t].fromUser.picture))+'">\r\n\t\t\t':'\r\n\t\t\t<div class="user-icon chat-user-image" style="background-color: '+o(r(n&&n.messages&&n.messages[t]&&n.messages[t].fromUser&&n.messages[t].fromUser["icon:bgColor"]))+';">'+o(r(n&&n.messages&&n.messages[t]&&n.messages[t].fromUser&&n.messages[t].fromUser["icon:text"]))+"</div>\r\n\t\t\t")+'\r\n\t\t</a>\r\n\t\t<strong><span class="chat-user"><a href="'+o(r(n&&n.config&&n.config.relative_path))+"/user/"+o(r(n&&n.messages&&n.messages[t]&&n.messages[t].fromUser&&n.messages[t].fromUser.userslug))+'">'+o(r(n&&n.messages&&n.messages[t]&&n.messages[t].fromUser&&n.messages[t].fromUser.username))+"</a></span></strong>\r\n\t\t"+(r(n&&n.messages&&n.messages[t]&&n.messages[t].fromUser&&n.messages[t].fromUser.banned)?'\r\n\t\t<span class="label label-danger">[[user:banned]]</span>\r\n\t\t':"")+"\r\n\t\t"+(r(n&&n.messages&&n.messages[t]&&n.messages[t].fromUser&&n.messages[t].fromUser.deleted)?'\r\n\t\t<span class="label label-danger">[[user:deleted]]</span>\r\n\t\t':"")+'\r\n\t\t<span class="chat-timestamp timeago" title="'+o(r(n&&n.messages&&n.messages[t]&&n.messages[t].timestampISO))+'"></span>\r\n\t\t'+(r(n&&n.isAdminOrGlobalMod)?'\r\n\t\t<small class="chat-ip pull-right" title="[[modules:chat.show-ip]]"><i class="fa fa-info-circle chat-ip-button"></i></small>\r\n\t\t':"")+'\r\n\t</div>\r\n\t<div component="chat/message/body" class="message-body">\r\n\t\t'+(r(n&&n.messages&&n.messages[t]&&n.messages[t].edited)?'\r\n\t\t<small class="text-muted pull-right" title="[[global:edited]] '+o(r(n&&n.messages&&n.messages[t]&&n.messages[t].editedISO))+'"><i class="fa fa-edit"></i></span></small>\r\n\t\t':"")+"\r\n\t\t"+(r(n&&n.config&&n.config.disableChatMessageEditing)?"":"\r\n\t\t"+(r(n&&n.messages&&n.messages[t]&&n.messages[t].self)?'\r\n\t\t<div class="pull-right btn-group controls">\r\n\t\t\t<button class="btn btn-xs btn-link" data-action="edit"><i class="fa fa-pencil"></i></button>\r\n\t\t\t<button class="btn btn-xs btn-link" data-action="delete"><i class="fa fa-times"></i></button>\r\n\t\t\t<button class="btn btn-xs btn-link" data-action="restore"><i class="fa fa-repeat"></i></button>\r\n\t\t</div>\r\n\t\t':"")+"\r\n\t\t")+"\r\n\t\t"+o(r(n&&n.messages&&n.messages[t]&&n.messages[t].content))+"\r\n\t</div>\r\n</li>\n"},function(){return""})}},o});