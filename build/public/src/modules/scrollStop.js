"use strict";define("scrollStop",function(){var t={};t.apply=function(t){$(t).on("mousewheel",function(t){var e=this.scrollTop;var n=this.scrollHeight;var i=Math.round(this.getBoundingClientRect().height);if(t.originalEvent.deltaY<0&&e===0||t.originalEvent.deltaY>0&&i+e>=n){return false}})};return t});
//# sourceMappingURL=public/src/modules/scrollStop.js.map