"use strict";define("admin/manage/tags",["forum/infinitescroll","admin/modules/selectable","admin/modules/colorpicker"],function(a,e,t){var n={};var r=0;n.init=function(){e.enable(".tag-management",".tag-row");i();o();c();s();l()};function i(){var a=$("#create-modal");var e=$("#create-tag-name");var t=$("#create-modal-go");a.on("keypress",function(a){if(a.keyCode===13){t.click()}});$("#create").on("click",function(){a.modal("show");setTimeout(function(){e.focus()},250)});t.on("click",function(){socket.emit("admin.tags.create",{tag:e.val()},function(t){if(t){return app.alertError(t.message)}e.val("");a.on("hidden.bs.modal",function(){ajaxify.refresh()});a.modal("hide")})})}function o(){$("#tag-search").on("input propertychange",function(){if(r){clearTimeout(r);r=0}r=setTimeout(function(){socket.emit("topics.searchAndLoadTags",{query:$("#tag-search").val()},function(a,t){if(a){return app.alertError(a.message)}app.parseAndTranslate("admin/manage/tags","tags",{tags:t.tags},function(a){$(".tag-list").html(a);utils.makeNumbersHumanReadable(a.find(".human-readable-number"));r=0;e.enable(".tag-management",".tag-row")})})},100)})}function c(){$("#modify").on("click",function(){var a=$(".tag-row.ui-selected");if(!a.length){return}var e=$(a[0]);var t=a.length>1?"[[admin/manage/tags:alerts.editing-multiple]]":"[[admin/manage/tags:alerts.editing-x, "+e.find(".tag-item").attr("data-tag")+"]]";var n=bootbox.dialog({title:t,message:e.find(".tag-modal").html(),buttons:{success:{label:"Save",className:"btn-primary save",callback:function(){var e=$(".bootbox");var t=e.find('[data-name="bgColor"]').val();var n=e.find('[data-name="color"]').val();var r=[];a.each(function(a,i){i=$(i);r.push({value:i.attr("data-tag"),color:e.find('[data-name="color"]').val(),bgColor:e.find('[data-name="bgColor"]').val()});i.find('[data-name="bgColor"]').val(t);i.find('[data-name="color"]').val(n);i.find(".tag-item").css("background-color",t).css("color",n)});socket.emit("admin.tags.update",r,function(a){if(a){return app.alertError(a.message)}app.alertSuccess("[[admin/manage/tags:alerts.update-success]]")})}}}});m(n)})}function s(){$("#rename").on("click",function(){var a=$(".tag-row.ui-selected");if(!a.length){return}var e=$(a[0]);var t=a.length>1?"[[admin/manage/tags:alerts.editing-multiple]]":"[[admin/manage/tags:alerts.editing-x, "+e.find(".tag-item").attr("data-tag")+"]]";var n=bootbox.dialog({title:t,message:$(".rename-modal").html(),buttons:{success:{label:"Save",className:"btn-primary save",callback:function(){var e=[];a.each(function(a,t){t=$(t);e.push({value:t.attr("data-tag"),newName:n.find('[data-name="value"]').val()})});socket.emit("admin.tags.rename",e,function(a){if(a){return app.alertError(a.message)}app.alertSuccess("[[admin/manage/tags:alerts.update-success]]")})}}}})})}function l(){$("#deleteSelected").on("click",function(){var a=$(".tag-row.ui-selected");if(!a.length){return}bootbox.confirm("[[admin/manage/tags:alerts.confirm-delete]]",function(e){if(!e){return}var t=[];a.each(function(a,e){t.push($(e).attr("data-tag"))});socket.emit("admin.tags.deleteTags",{tags:t},function(e){if(e){return app.alertError(e.message)}a.remove()})})})}function m(a){function e(a,e){var n=$(e);t.enable(n)}a.find('[data-name="bgColor"], [data-name="color"]').each(e)}return n});
//# sourceMappingURL=public/src/admin/manage/tags.js.map