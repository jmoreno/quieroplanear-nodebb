!function(e){"object"==typeof module&&module.exports?module.exports=e():"function"==typeof define&&define.amd&&define(e)}(function(){function e(e,t,n,o,r){var a=e.__escape;return'<div class="alert alert-danger">\n\t<strong>'+a(n(t&&t.path))+" [[global:404.title]]</strong>\n\t"+(n(t&&t.error)?"\n\t<p>"+a(n(t&&t.error))+"</p>\n\t":"\n\t<p>[[global:404.message, "+a(n(t&&t.config&&t.config.relative_path))+"]]</p>\n\t")+"\n</div>"}return e.blocks={},e});