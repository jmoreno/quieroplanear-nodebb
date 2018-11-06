"use strict";define("forum/chats",["components","translator","mousetrap","forum/chats/recent","forum/chats/search","forum/chats/messages","benchpress"],function(a,t,e,n,o,i,r){var s={initialised:false};var c=false;s.init=function(){var t=utils.findBootstrapEnvironment();if(!s.initialised){s.addSocketListeners();s.addGlobalEventListeners()}n.init();s.addEventListeners();s.createAutoComplete($('[component="chat/input"]'));s.resizeMainWindow();if(t==="md"||t==="lg"){s.addHotkeys()}$(document).ready(function(){$(window).trigger("action:chat.loaded",$(".chats-full"))});s.initialised=true;i.scrollToBottom($(".expanded-chat ul.chat-content"));o.init();if(ajaxify.data.hasOwnProperty("roomId")){a.get("chat/input").focus()}};s.addEventListeners=function(){s.addSendHandlers(ajaxify.data.roomId,$(".chat-input"),$('.expanded-chat button[data-action="send"]'));s.addPopoutHandler();s.addActionHandlers(a.get("chat/messages"),ajaxify.data.roomId);s.addMemberHandler(ajaxify.data.roomId,a.get("chat/controls").find('[data-action="members"]'));s.addRenameHandler(ajaxify.data.roomId,a.get("chat/controls").find('[data-action="rename"]'));s.addLeaveHandler(ajaxify.data.roomId,a.get("chat/controls").find('[data-action="leave"]'));s.addScrollHandler(ajaxify.data.roomId,ajaxify.data.uid,$(".chat-content"));s.addCharactersLeftHandler($('[component="chat/main-wrapper"]'));s.addIPHandler($('[component="chat/main-wrapper"]'));$('[data-action="close"]').on("click",function(){s.switchChat()})};s.addIPHandler=function(a){a.on("click",".chat-ip-button",function(){var a=$(this).parent();var t=a.parents("[data-mid]").attr("data-mid");socket.emit("modules.chats.getIP",t,function(t,e){if(t){return app.alertError(t)}a.html(e)})})};s.addPopoutHandler=function(){$('[data-action="pop-out"]').on("click",function(){var t=a.get("chat/input").val();var e=ajaxify.data.roomId;if(app.previousUrl&&app.previousUrl.match(/chats/)){ajaxify.go("user/"+ajaxify.data.userslug+"/chats",function(){app.openChat(e,ajaxify.data.uid)},true)}else{window.history.go(-1);app.openChat(e,ajaxify.data.uid)}$(window).one("action:chat.loaded",function(){a.get("chat/input").val(t)})})};s.addScrollHandler=function(a,t,e){var n=false;e.off("scroll").on("scroll",function(){if(n){return}var o=(e[0].scrollHeight-e.height())*.1;if(e.scrollTop()>=o){return}n=true;var r=parseInt(e.children("[data-mid]").length,10);socket.emit("modules.chats.getMessages",{roomId:a,uid:t,start:r},function(a,t){if(a){return app.alertError(a.message)}if(!t){n=false;return}t=t.filter(function(a){return!$('[component="chat/message"][data-mid="'+a.messageId+'"]').length});if(!t.length){n=false;return}i.parseMessage(t,function(a){var t=e.scrollTop();var o=e[0].scrollHeight;a=$(a);e.prepend(a);a.find(".timeago").timeago();a.find("img:not(.not-responsive)").addClass("img-responsive");e.scrollTop(e[0].scrollHeight-o+t);n=false})})})};s.addCharactersLeftHandler=function(a){var t=a.find('[component="chat/input"]');t.on("change keyup paste",function(){i.updateRemainingLength(a)})};s.addActionHandlers=function(a,t){a.on("click","[data-action]",function(){var a=$(this).parents("[data-mid]").attr("data-mid");var e=this.getAttribute("data-action");switch(e){case"edit":var n=$('[data-roomid="'+t+'"] [component="chat/input"]');i.prepEdit(n,a,t);break;case"delete":i.delete(a,t);break;case"restore":i.restore(a,t);break}})};s.addHotkeys=function(){e.bind("ctrl+up",function(){var a=$(".chats-list .bg-info");var t=a.prev();if(t.length){s.switchChat(t.attr("data-roomid"))}});e.bind("ctrl+down",function(){var a=$(".chats-list .bg-info");var t=a.next();if(t.length){s.switchChat(t.attr("data-roomid"))}});e.bind("up",function(t){if(t.target===a.get("chat/input").get(0)){var e=a.get("chat/messages").find('.chat-message[data-self="1"]').last();var n=e.attr("data-mid");var o=a.get("chat/input");i.prepEdit(o,n,ajaxify.data.roomId)}})};s.addMemberHandler=function(a,e){var n;e.on("click",function(){r.parse("partials/modals/manage_room",{},function(e){t.translate(e,function(t){n=bootbox.dialog({title:"[[modules:chat.manage-room]]",message:t});n.attr("component","chat/manage-modal");s.refreshParticipantsList(a,n);s.addKickHandler(a,n);var e=n.find("input");var o=n.find(".text-danger");require(["autocomplete","translator"],function(t,i){t.user(e,function(t,r){o.text("");socket.emit("modules.chats.addUserToRoom",{roomId:a,username:r.item.user.name},function(t){if(t){i.translate(t.message,function(a){o.text(a)})}s.refreshParticipantsList(a,n);e.val("")})})})})})})};s.addKickHandler=function(a,t){t.on("click",'[data-action="kick"]',function(){var e=parseInt(this.getAttribute("data-uid"),10);socket.emit("modules.chats.removeUserFromRoom",{roomId:a,uid:e},function(e){if(e){return app.alertError(e.message)}s.refreshParticipantsList(a,t)})})};s.addLeaveHandler=function(a,t){t.on("click",function(){bootbox.confirm({size:"small",title:"[[modules:chat.leave]]",message:'<p>[[modules:chat.leave-prompt]]</p><p class="help-block">[[modules:chat.leave-help]]</p>',callback:function(e){if(e){socket.emit("modules.chats.leave",a,function(a){if(a){app.alertError(a.message)}var e=t.parents(".chat-modal");if(e.length){require(["chat"],function(a){a.close(e)})}else{ajaxify.go("chats")}})}}})})};s.refreshParticipantsList=function(a,e){socket.emit("modules.chats.getUsersInRoom",{roomId:a},function(a,n){var o=e.find(".list-group");if(a){return t.translate("[[error:invalid-data]]",function(a){o.find("li").text(a)})}app.parseAndTranslate("partials/modals/manage_room_users",{users:n},function(a){o.html(a)})})};s.addRenameHandler=function(a,e,n){var o;e.on("click",function(){r.parse("partials/modals/rename_room",{name:n||ajaxify.data.roomName},function(a){t.translate(a,function(a){o=bootbox.dialog({title:"[[modules:chat.rename-room]]",message:a,buttons:{save:{label:"[[global:save]]",className:"btn-primary",callback:i}}})})})});function i(){socket.emit("modules.chats.renameRoom",{roomId:a,newName:o.find("#roomName").val()},function(a){if(a){return app.alertError(a.message)}})}};s.addSendHandlers=function(a,t,e){t.off("keypress").on("keypress",function(e){if(e.which===13&&!e.shiftKey){i.sendMessage(a,t);return false}});e.off("click").on("click",function(){i.sendMessage(a,t);t.focus();return false})};s.createAutoComplete=function(a){var t={element:a,strategies:[],options:{zIndex:2e4,listPosition:function(a){this.$el.css(this._applyPlacement(a));this.$el.css("position","absolute");return this}}};$(window).trigger("chat:autocomplete:init",t);if(t.strategies.length){t.element.textcomplete(t.strategies,t.options)}};s.leave=function(a){var t=a.attr("data-roomid");socket.emit("modules.chats.leave",t,function(e){if(e){return app.alertError(e.message)}if(parseInt(t,10)===parseInt(ajaxify.data.roomId,10)){ajaxify.go("user/"+ajaxify.data.userslug+"/chats")}else{a.remove()}require(["chat"],function(a){var e=a.getModal(t);if(e.length){a.close(e)}})})};s.switchChat=function(t){if(!t){t=""}var e="user/"+ajaxify.data.userslug+"/chats/"+t;if(self.fetch){fetch(config.relative_path+"/api/"+e,{credentials:"include"}).then(function(t){if(t.ok){t.json().then(function(t){app.parseAndTranslate("partials/chats/message-window",t,function(e){a.get("chat/main-wrapper").html(e);e.find(".timeago").timeago();s.resizeMainWindow();ajaxify.data=t;s.setActive();s.addEventListeners();$(window).trigger("action:chat.loaded",$(".chats-full"));i.scrollToBottom($(".expanded-chat ul.chat-content"));if(history.pushState){history.pushState({url:"user/"+t.userslug+"/chats/"+t.roomId},null,window.location.protocol+"//"+window.location.host+config.relative_path+"/user/"+t.userslug+"/chats/"+t.roomId)}})})}else{console.warn("[search] Received "+t.status)}}).catch(function(a){console.warn("[search] "+a.message)})}else{ajaxify.go(e)}};s.addGlobalEventListeners=function(){$(window).on("resize",s.resizeMainWindow);$(window).on("mousemove keypress click",function(){if(c&&ajaxify.data.roomId){socket.emit("modules.chats.markRead",ajaxify.data.roomId);c=false}})};s.addSocketListeners=function(){socket.on("event:chats.receive",function(e){if(parseInt(e.roomId,10)===parseInt(ajaxify.data.roomId,10)){c=e.self===0;e.message.self=e.self;i.appendChatMessage($(".expanded-chat .chat-content"),e.message)}else if(ajaxify.data.template.chats){var n=$("[data-roomid="+e.roomId+"]");if(n.length>0){n.addClass("unread")}else{var o=a.get("chat/recent");r.parse("partials/chats/recent_room",{rooms:{roomId:e.roomId,lastUser:e.message.fromUser,usernames:e.message.fromUser.username,unread:true}},function(a){t.translate(a,function(a){o.prepend(a)})})}}});socket.on("event:user_status_change",function(a){app.updateUserStatus($('.chats-list [data-uid="'+a.uid+'"] [component="user/status"]'),a.status)});i.onChatMessageEdit();socket.on("event:chats.roomRename",function(t){var e=a.get("chat/recent/room",t.roomId);var n=e.find('[component="chat/title"]');ajaxify.data.roomName=t.newName;n.text(t.newName)})};s.resizeMainWindow=function(){var t=$(window).height();var e=a.get("chat/main-wrapper").offset().top||a.get("chat/nav-wrapper").offset().top;$(".chats-full").height(t-e-1);s.setActive()};s.setActive=function(){if(ajaxify.data.roomId){socket.emit("modules.chats.markRead",ajaxify.data.roomId);$('[data-roomid="'+ajaxify.data.roomId+'"]').toggleClass("unread",false);$('.expanded-chat [component="chat/input"]').focus()}$(".chats-list li").removeClass("bg-info");$('.chats-list li[data-roomid="'+ajaxify.data.roomId+'"]').addClass("bg-info");a.get("chat/nav-wrapper").attr("data-loaded",ajaxify.data.roomId?"1":"0")};return s});
//# sourceMappingURL=public/src/client/chats.js.map