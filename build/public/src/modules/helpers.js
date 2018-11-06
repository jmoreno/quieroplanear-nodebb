"use strict";(function(e){if(typeof module==="object"&&module.exports){var a=require("nconf").get("relative_path");module.exports=e(require("../utils"),require("benchpressjs"),a)}else if(typeof define==="function"&&define.amd){define("helpers",["benchpress"],function(a){return e(utils,a,config.relative_path)})}})(function(e,a,i){var r={displayMenuItem:n,buildMetaTag:s,buildLinkTag:o,stringify:c,escape:l,stripTags:u,generateCategoryBackground:f,generateChildrenCategories:p,generateTopicClass:d,membershipBtn:g,spawnPrivilegeStates:m,localeToHTML:b,renderTopicImage:h,renderDigestAvatar:v,userAgentIcons:k,register:w,__escape:t};function t(e){return e}function n(e,a){var i=e.navigation[a];if(!i){return false}var r=i.properties;var t=e.config?e.config.loggedIn:false;if(r){if(r.loggedIn&&!t||r.guestOnly&&t||r.globalMod&&!e.isGlobalMod&&!e.isAdmin||r.adminOnly&&!e.isAdmin){return false}}if(i.route.match("/users")&&e.privateUserInfo&&!t){return false}if(i.route.match("/tags")&&e.privateTagListing&&!t){return false}return true}function s(e){var a=e.name?'name="'+e.name+'" ':"";var i=e.property?'property="'+e.property+'" ':"";var r=e.content?'content="'+e.content.replace(/\n/g," ")+'" ':"";return"<meta "+a+i+r+"/>\n\t"}function o(e){var a=e.link?'link="'+e.link+'" ':"";var i=e.rel?'rel="'+e.rel+'" ':"";var r=e.type?'type="'+e.type+'" ':"";var t=e.href?'href="'+e.href+'" ':"";var n=e.sizes?'sizes="'+e.sizes+'" ':"";var s=e.title?'title="'+e.title+'" ':"";return"<link "+a+i+r+n+s+t+"/>\n\t"}function c(e){return JSON.stringify(e).replace(/&/gm,"&amp;").replace(/</gm,"&lt;").replace(/>/gm,"&gt;").replace(/"/g,"&quot;")}function l(a){return e.escapeHTML(a)}function u(a){return e.stripHTMLTags(a)}function f(e){if(!e){return""}var a=[];if(e.bgColor){a.push("background-color: "+e.bgColor)}if(e.color){a.push("color: "+e.color)}if(e.backgroundImage){a.push("background-image: url("+e.backgroundImage+")");if(e.imageClass){a.push("background-size: "+e.imageClass)}}return a.join("; ")+";"}function p(e){var a="";if(!e||!e.children||!e.children.length){return a}e.children.forEach(function(e){if(e&&!e.isSection){var r=e.link?e.link:i+"/category/"+e.slug;a+='<span class="category-children-item pull-left">'+'<div class="icon pull-left" style="'+f(e)+'">'+'<i class="fa fa-fw '+e.icon+'"></i>'+"</div>"+'<a href="'+r+'"><small>'+e.name+"</small></a></span>"}});a=a?'<span class="category-children">'+a+"</span>":a;return a}function d(e){var a=[];if(e.locked){a.push("locked")}if(e.pinned){a.push("pinned")}if(e.deleted){a.push("deleted")}if(e.unread){a.push("unread")}return a.join(" ")}function g(e){if(e.isMember&&e.name!=="administrators"){return'<button class="btn btn-danger" data-action="leave" data-group="'+e.displayName+'"><i class="fa fa-times"></i> [[groups:membership.leave-group]]</button>'}if(e.isPending&&e.name!=="administrators"){return'<button class="btn btn-warning disabled"><i class="fa fa-clock-o"></i> [[groups:membership.invitation-pending]]</button>'}else if(e.isInvited){return'<button class="btn btn-link" data-action="rejectInvite" data-group="'+e.displayName+'">[[groups:membership.reject]]</button><button class="btn btn-success" data-action="acceptInvite" data-group="'+e.name+'"><i class="fa fa-plus"></i> [[groups:membership.accept-invitation]]</button>'}else if(!e.disableJoinRequests&&e.name!=="administrators"){return'<button class="btn btn-success" data-action="join" data-group="'+e.displayName+'"><i class="fa fa-plus"></i> [[groups:membership.join-group]]</button>'}return""}function m(e,a){var i=[];for(var r in a){if(a.hasOwnProperty(r)){i.push({name:r,state:a[r]})}}return i.map(function(a){var i=["groups:moderate","groups:posts:upvote","groups:posts:downvote"];var r=e==="guests"&&i.includes(a.name);return'<td class="text-center" data-privilege="'+a.name+'"><input type="checkbox"'+(a.state?" checked":"")+(r?' disabled="disabled"':"")+" /></td>"}).join("")}function b(e,a){e=e||a||"en-GB";return e.replace("_","-")}function h(e){if(e.thumb){return'<img src="'+e.thumb+'" class="img-circle user-img" title="'+e.user.username+'" />'}return'<img component="user/picture" data-uid="'+e.user.uid+'" src="'+e.user.picture+'" class="user-img" title="'+e.user.username+'" />'}function v(e){if(e.teaser){if(e.teaser.user.picture){return'<img style="vertical-align: middle; width: 16px; height: 16px; padding-right: 8px;" src="'+e.teaser.user.picture+'" title="'+e.teaser.user.username+'" />'}return'<div style="vertical-align: middle; width: 16px; height: 16px; line-height: 16px; font-size: 10px; margin-right: 8px; background-color: '+e.teaser.user["icon:bgColor"]+'; color: white; text-align: center; display: inline-block;">'+e.teaser.user["icon:text"]+"</div>"}if(e.user.picture){return'<img style="vertical-align: middle; width: 16px; height: 16px; padding-right: 8px;" src="'+e.user.picture+'" title="'+e.user.username+'" />'}return'<div style="vertical-align: middle; width: 16px; height: 16px; line-height: 16px; font-size: 10px; margin-right: 8px; background-color: '+e.user["icon:bgColor"]+'; color: white; text-align: center; display: inline-block;">'+e.user["icon:text"]+"</div>"}function k(e){var a="";switch(e.platform){case"Linux":a+='<i class="fa fa-fw fa-linux"></i>';break;case"Microsoft Windows":a+='<i class="fa fa-fw fa-windows"></i>';break;case"Apple Mac":a+='<i class="fa fa-fw fa-apple"></i>';break;case"Android":a+='<i class="fa fa-fw fa-android"></i>';break;case"iPad":a+='<i class="fa fa-fw fa-tablet"></i>';break;case"iPod":case"iPhone":a+='<i class="fa fa-fw fa-mobile"></i>';break;default:a+='<i class="fa fa-fw fa-question-circle"></i>';break}switch(e.browser){case"Chrome":a+='<i class="fa fa-fw fa-chrome"></i>';break;case"Firefox":a+='<i class="fa fa-fw fa-firefox"></i>';break;case"Safari":a+='<i class="fa fa-fw fa-safari"></i>';break;case"IE":a+='<i class="fa fa-fw fa-internet-explorer"></i>';break;case"Edge":a+='<i class="fa fa-fw fa-edge"></i>';break;default:a+='<i class="fa fa-fw fa-question-circle"></i>';break}return a}function w(){Object.keys(r).forEach(function(e){a.registerHelper(e,r[e])})}return r});
//# sourceMappingURL=public/src/modules/helpers.js.map