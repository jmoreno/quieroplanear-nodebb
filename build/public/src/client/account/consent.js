"use strict";define("forum/account/consent",["forum/account/header"],function(n){var t={};t.init=function(){n.init();$('[data-action="consent"]').on("click",function(){socket.emit("user.gdpr.consent",{},function(n){if(n){return app.alertError(n.message)}ajaxify.refresh()})})};return t});
//# sourceMappingURL=public/src/client/account/consent.js.map