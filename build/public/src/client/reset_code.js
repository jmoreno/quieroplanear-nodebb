"use strict";define("forum/reset_code",["zxcvbn"],function(r){var a={};a.init=function(){var a=ajaxify.data.code;var e=$("#reset");var s=$("#password");var o=$("#repeat");e.on("click",function(){var t=r(s.val());if(s.val().length<ajaxify.data.minimumPasswordLength){app.alertError("[[reset_password:password_too_short]]")}else if(s.val().length>512){app.alertError("[[error:password-too-long]]")}else if(s.val()!==o.val()){app.alertError("[[reset_password:passwords_do_not_match]]")}else if(t.score<ajaxify.data.minimumPasswordStrength){app.alertError("[[user:weak_password]]")}else{e.prop("disabled",true).html('<i class="fa fa-spin fa-refresh"></i> Changing Password');socket.emit("user.reset.commit",{code:a,password:s.val()},function(r){if(r){ajaxify.refresh();return app.alertError(r.message)}window.location.href=config.relative_path+"/login"})}return false})};return a});
//# sourceMappingURL=public/src/client/reset_code.js.map