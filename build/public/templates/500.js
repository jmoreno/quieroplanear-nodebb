!function(e){"object"==typeof module&&module.exports?module.exports=e():"function"==typeof define&&define.amd&&define(e)}(function(){return function(e,n,t,r,o){return'<div class="alert alert-danger">\n\t<strong>[[global:500.title]]</strong>\n\t<p>[[global:500.message]]</p>\n\t<p>'+e.__escape(t(n&&n.path))+"</p>\n\t"+(t(n&&n.error)?"<p>"+e.__escape(t(n&&n.error))+"</p>":"")+"\n\n\t"+(t(n&&n.returnLink)?"\n\t<p>[[error:goback]]</p>\n\t":"")+"\n</div>\n"}});