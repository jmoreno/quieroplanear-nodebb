!function(o){"object"==typeof module&&module.exports?module.exports=o():"function"==typeof define&&define.amd&&define(o)}(function(){function a(o,s,r,m,e){return r(s&&s.rooms&&s.rooms.length)?"\n"+a.blocks.rooms(o,s,r,m,e)+"\n":'\n<li class="no_active"><a href="#">[[modules:chat.no_active]]</a></li>\n'}return a.blocks={rooms:function(e,a,t,r,o){return r(t(a&&a.rooms),function(m,o,s){return'\n<li class="'+(t(a&&a.rooms&&a.rooms[m]&&a.rooms[m].unread)?"unread":"")+'" data-roomid="'+e.__escape(t(a&&a.rooms&&a.rooms[m]&&a.rooms[m].roomId))+'">\n\t<strong class="room-name">\n\t\t'+(t(a&&a.rooms&&a.rooms[m]&&a.rooms[m].lastUser&&a.rooms[m].lastUser.uid)?"\n\t\t"+(t(a&&a.rooms&&a.rooms[m]&&a.rooms[m].roomName)?e.__escape(t(a&&a.rooms&&a.rooms[m]&&a.rooms[m].roomName)):e.__escape(t(a&&a.rooms&&a.rooms[m]&&a.rooms[m].usernames)))+"\n\t\t":"\n\t\t<span>[[modules:chat.no-users-in-room]]</span>\n\t\t")+'\n\t</strong>\n\t<div class="avatar-placeholder"></div>\n\t'+(t(a&&a.rooms&&a.rooms[m]&&a.rooms[m].rooms&&a.rooms[m].rooms.users)?r(t(a&&a.rooms&&a.rooms[m]&&a.rooms[m].rooms&&a.rooms[m].rooms.users),function(o,s,r){return"\n\t"+(0===s?'\n\t<div class="main-avatar">\n\t\t<a href="'+e.__escape(t(a&&a.config&&a.config.relative_path))+"/user/"+e.__escape(t(a&&a.rooms&&a.rooms[m]&&a.rooms[m].rooms&&a.rooms[m].rooms.users&&a.rooms[m].rooms.users[o]&&a.rooms[m].rooms.users[o].userslug))+'">\n\t'+(t(a&&a.rooms&&a.rooms[m]&&a.rooms[m].rooms&&a.rooms[m].rooms.users&&a.rooms[m].rooms.users[o]&&a.rooms[m].rooms.users[o].picture)?'\n\t<img class="user-img avatar avatar-sm avatar-rounded" src="'+e.__escape(t(a&&a.rooms&&a.rooms[m]&&a.rooms[m].rooms&&a.rooms[m].rooms.users&&a.rooms[m].rooms.users[o]&&a.rooms[m].rooms.users[o].picture))+'" title="'+e.__escape(t(a&&a.rooms&&a.rooms[m]&&a.rooms[m].rooms&&a.rooms[m].rooms.users&&a.rooms[m].rooms.users[o]&&a.rooms[m].rooms.users[o].username))+'">\n\t':'\n\t<div class="user-img avatar avatar-sm avatar-rounded" title="'+e.__escape(t(a&&a.rooms&&a.rooms[m]&&a.rooms[m].rooms&&a.rooms[m].rooms.users&&a.rooms[m].rooms.users[o]&&a.rooms[m].rooms.users[o].username))+'" style="background-color: '+e.__escape(t(a&&a.rooms&&a.rooms[m]&&a.rooms[m].rooms&&a.rooms[m].rooms.users&&a.rooms[m].rooms.users[o]&&a.rooms[m].rooms.users[o]["icon:bgColor"]))+';">'+e.__escape(t(a&&a.rooms&&a.rooms[m]&&a.rooms[m].rooms&&a.rooms[m].rooms.users&&a.rooms[m].rooms.users[o]&&a.rooms[m].rooms.users[o]["icon:text"]))+"</div>\n\t")+"\n</a>\n\t</div>\n\t":"")+"\n\t"}):r(t(a&&a.rooms&&a.rooms[m]&&a.rooms[m].users),function(o,s,r){return"\n\t"+(0===s?'\n\t<div class="main-avatar">\n\t\t<a href="'+e.__escape(t(a&&a.config&&a.config.relative_path))+"/user/"+e.__escape(t(a&&a.rooms&&a.rooms[m]&&a.rooms[m].users&&a.rooms[m].users[o]&&a.rooms[m].users[o].userslug))+'">\n\t'+(t(a&&a.rooms&&a.rooms[m]&&a.rooms[m].users&&a.rooms[m].users[o]&&a.rooms[m].users[o].picture)?'\n\t<img class="user-img avatar avatar-sm avatar-rounded" src="'+e.__escape(t(a&&a.rooms&&a.rooms[m]&&a.rooms[m].users&&a.rooms[m].users[o]&&a.rooms[m].users[o].picture))+'" title="'+e.__escape(t(a&&a.rooms&&a.rooms[m]&&a.rooms[m].users&&a.rooms[m].users[o]&&a.rooms[m].users[o].username))+'">\n\t':'\n\t<div class="user-img avatar avatar-sm avatar-rounded" title="'+e.__escape(t(a&&a.rooms&&a.rooms[m]&&a.rooms[m].users&&a.rooms[m].users[o]&&a.rooms[m].users[o].username))+'" style="background-color: '+e.__escape(t(a&&a.rooms&&a.rooms[m]&&a.rooms[m].users&&a.rooms[m].users[o]&&a.rooms[m].users[o]["icon:bgColor"]))+';">'+e.__escape(t(a&&a.rooms&&a.rooms[m]&&a.rooms[m].users&&a.rooms[m].users[o]&&a.rooms[m].users[o]["icon:text"]))+"</div>\n\t")+"\n</a>\n\t</div>\n\t":"")+"\n\t"}))+'\n\n\t<ul class="members">\n\t\t'+(t(a&&a.rooms&&a.rooms[m]&&a.rooms[m].rooms&&a.rooms[m].rooms.users)?r(t(a&&a.rooms&&a.rooms[m]&&a.rooms[m].rooms&&a.rooms[m].rooms.users),function(o,s,r){return'\n\t\t<li>\n\t\t\t<a href="'+e.__escape(t(a&&a.config&&a.config.relative_path))+"/user/"+e.__escape(t(a&&a.rooms&&a.rooms[m]&&a.rooms[m].rooms&&a.rooms[m].rooms.users&&a.rooms[m].rooms.users[o]&&a.rooms[m].rooms.users[o].userslug))+'">\n\t'+(t(a&&a.rooms&&a.rooms[m]&&a.rooms[m].rooms&&a.rooms[m].rooms.users&&a.rooms[m].rooms.users[o]&&a.rooms[m].rooms.users[o].picture)?'\n\t<img class="user-img avatar avatar-sm avatar-rounded" src="'+e.__escape(t(a&&a.rooms&&a.rooms[m]&&a.rooms[m].rooms&&a.rooms[m].rooms.users&&a.rooms[m].rooms.users[o]&&a.rooms[m].rooms.users[o].picture))+'" title="'+e.__escape(t(a&&a.rooms&&a.rooms[m]&&a.rooms[m].rooms&&a.rooms[m].rooms.users&&a.rooms[m].rooms.users[o]&&a.rooms[m].rooms.users[o].username))+'">\n\t':'\n\t<div class="user-img avatar avatar-sm avatar-rounded" title="'+e.__escape(t(a&&a.rooms&&a.rooms[m]&&a.rooms[m].rooms&&a.rooms[m].rooms.users&&a.rooms[m].rooms.users[o]&&a.rooms[m].rooms.users[o].username))+'" style="background-color: '+e.__escape(t(a&&a.rooms&&a.rooms[m]&&a.rooms[m].rooms&&a.rooms[m].rooms.users&&a.rooms[m].rooms.users[o]&&a.rooms[m].rooms.users[o]["icon:bgColor"]))+';">'+e.__escape(t(a&&a.rooms&&a.rooms[m]&&a.rooms[m].rooms&&a.rooms[m].rooms.users&&a.rooms[m].rooms.users[o]&&a.rooms[m].rooms.users[o]["icon:text"]))+"</div>\n\t")+"\n</a>\n\t\t</li>\n\t\t"}):r(t(a&&a.rooms&&a.rooms[m]&&a.rooms[m].users),function(o,s,r){return'\n\t\t<li>\n\t\t\t<a href="'+e.__escape(t(a&&a.config&&a.config.relative_path))+"/user/"+e.__escape(t(a&&a.rooms&&a.rooms[m]&&a.rooms[m].users&&a.rooms[m].users[o]&&a.rooms[m].users[o].userslug))+'">\n\t'+(t(a&&a.rooms&&a.rooms[m]&&a.rooms[m].users&&a.rooms[m].users[o]&&a.rooms[m].users[o].picture)?'\n\t<img class="user-img avatar avatar-sm avatar-rounded" src="'+e.__escape(t(a&&a.rooms&&a.rooms[m]&&a.rooms[m].users&&a.rooms[m].users[o]&&a.rooms[m].users[o].picture))+'" title="'+e.__escape(t(a&&a.rooms&&a.rooms[m]&&a.rooms[m].users&&a.rooms[m].users[o]&&a.rooms[m].users[o].username))+'">\n\t':'\n\t<div class="user-img avatar avatar-sm avatar-rounded" title="'+e.__escape(t(a&&a.rooms&&a.rooms[m]&&a.rooms[m].users&&a.rooms[m].users[o]&&a.rooms[m].users[o].username))+'" style="background-color: '+e.__escape(t(a&&a.rooms&&a.rooms[m]&&a.rooms[m].users&&a.rooms[m].users[o]&&a.rooms[m].users[o]["icon:bgColor"]))+';">'+e.__escape(t(a&&a.rooms&&a.rooms[m]&&a.rooms[m].users&&a.rooms[m].users[o]&&a.rooms[m].users[o]["icon:text"]))+"</div>\n\t")+"\n</a>\n\t\t</li>\n\t\t"}))+'\n\t</ul>\n\n\t<span class="teaser-content">'+e.__escape(t(a&&a.rooms&&a.rooms[m]&&a.rooms[m].teaser&&a.rooms[m].teaser.content))+'</span>\n\t<span class="teaser-timestamp timeago pull-right" title="'+e.__escape(t(a&&a.rooms&&a.rooms[m]&&a.rooms[m].teaser&&a.rooms[m].teaser.timestampISO))+'"></span>\n</li>\n'})}},a});