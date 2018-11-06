"use strict";define("forum/search",["search","autocomplete","storage"],function(e,t,a){var r={};r.init=function(){var t=$("#results").attr("data-search-query");var a=$("#search-in");a.on("change",function(){i(a.val())});c(t);$("#advanced-search").off("submit").on("submit",function(t){t.preventDefault();e.query(s(),function(){$("#search-input").val("")});return false});o();l();n()};function s(){var e=$("#advanced-search");var t={in:$("#search-in").val()};t.term=$("#search-input").val();if(t.in==="posts"||t.in==="titlesposts"||t.in==="titles"){t.matchWords=e.find("#match-words-filter").val();t.by=e.find("#posted-by-user").tagsinput("items");t.categories=e.find("#posted-in-categories").val();t.searchChildren=e.find("#search-children").is(":checked");t.hasTags=e.find("#has-tags").tagsinput("items");t.replies=e.find("#reply-count").val();t.repliesFilter=e.find("#reply-count-filter").val();t.timeFilter=e.find("#post-time-filter").val();t.timeRange=e.find("#post-time-range").val();t.sortBy=e.find("#post-sort-by").val();t.sortDirection=e.find("#post-sort-direction").val();t.showAs=e.find("#show-as-topics").is(":checked")?"topics":"posts"}$(window).trigger("action:search.getSearchDataFromDOM",{form:e,data:t});return t}function i(e){var t=e.indexOf("posts")===-1&&e.indexOf("titles")===-1;$(".post-search-item").toggleClass("hide",t)}function n(){var t=utils.params();var a=e.getSearchPreferences();var r=utils.merge(a,t);if(r){if(ajaxify.data.term){$("#search-input").val(ajaxify.data.term)}if(r.in){$("#search-in").val(r.in);i(r.in)}if(r.matchWords){$("#match-words-filter").val(r.matchWords)}if(r.by){r.by=Array.isArray(r.by)?r.by:[r.by];r.by.forEach(function(e){$("#posted-by-user").tagsinput("add",e)})}if(r.categories){$("#posted-in-categories").val(r.categories)}if(r.searchChildren){$("#search-children").prop("checked",true)}if(r.hasTags){r.hasTags=Array.isArray(r.hasTags)?r.hasTags:[r.hasTags];r.hasTags.forEach(function(e){$("#has-tags").tagsinput("add",e)})}if(r.replies){$("#reply-count").val(r.replies);$("#reply-count-filter").val(r.repliesFilter)}if(r.timeRange){$("#post-time-range").val(r.timeRange);$("#post-time-filter").val(r.timeFilter)}if(r.sortBy||ajaxify.data.searchDefaultSortBy){$("#post-sort-by").val(r.sortBy||ajaxify.data.searchDefaultSortBy);$("#post-sort-direction").val(r.sortDirection)}if(r.showAs){var s=r.showAs==="topics";var n=r.showAs==="posts";$("#show-as-topics").prop("checked",s).parent().toggleClass("active",s);$("#show-as-posts").prop("checked",n).parent().toggleClass("active",n)}$(window).trigger("action:search.fillOutForm",{form:r})}}function c(e){if(!e){return}e=utils.escapeHTML(e);var t=e.replace(/^"/,"").replace(/"$/,"").trim().split(" ").join("|");var a=new RegExp("("+t+")","gi");$(".search-result-text p, .search-result-text h4").each(function(){var e=$(this);var t=[];e.find("*").each(function(){$(this).after("\x3c!-- "+t.length+" --\x3e");t.push($("<div />").append($(this)))});e.html(e.html().replace(a,function(e,t){return"<strong>"+t+"</strong>"}));t.forEach(function(t,a){e.html(e.html().replace("\x3c!-- "+a+" --\x3e",function(){return t.html()}))})});$(".search-result-text").find("img:not(.not-responsive)").addClass("img-responsive")}function o(){$("#save-preferences").on("click",function(){a.setItem("search-preferences",JSON.stringify(s()));app.alertSuccess("[[search:search-preferences-saved]]");return false});$("#clear-preferences").on("click",function(){a.removeItem("search-preferences");var e=$("#search-input").val();$("#advanced-search")[0].reset();$("#search-input").val(e);app.alertSuccess("[[search:search-preferences-cleared]]");return false})}function l(){var e=$("#posted-by-user");e.tagsinput({confirmKeys:[13,44],trimValue:true});t.user(e.siblings(".bootstrap-tagsinput").find("input"));var a=$("#has-tags");a.tagsinput({confirmKeys:[13,44],trimValue:true});t.tag(a.siblings(".bootstrap-tagsinput").find("input"))}return r});
//# sourceMappingURL=public/src/client/search.js.map