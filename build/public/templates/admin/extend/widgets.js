!function(t){"object"==typeof module&&module.exports?module.exports=t():"function"==typeof define&&define.amd&&define(t)}(function(){function n(t,s,i,e,a){var d=t.__escape;return'<div id="widgets" class="row">\n\t<div class="col-md-7" id="active-widgets">\n\t\t<ul class="nav nav-pills">\n\t\t'+n.blocks.templates(t,s,i,e,a)+'\n\t\t</ul>\n\n\t\t<div class="row">\n\t\t\t<div class="col-xs-12">\n\t\t\t\t<div class="tab-content">\n\t\t\t\t'+e(i(s&&s.templates),function(l,t,a,n){return'\n\t\t\t\t\t<div class="tab-pane '+(0===t?"active":"")+'" data-template="'+d(i(s&&s.templates&&s.templates[l]&&s.templates[l].template))+'">\n\t\t\t\t\t'+(i(s&&s.templates&&s.templates[l]&&s.templates[l].areas)?e(i(s&&s.templates&&s.templates[l]&&s.templates[l].areas),function(t,a,n,e){return'\n\t\t\t\t\t\t<div class="area" data-template="'+d(i(s&&s.templates&&s.templates[l]&&s.templates[l].template))+'" data-location="'+d(i(s&&s.templates&&s.templates[l]&&s.templates[l].areas&&s.templates[l].areas[t]&&s.templates[l].areas[t].location))+'">\n\t\t\t\t\t\t\t<h4>'+d(i(s&&s.templates&&s.templates[l]&&s.templates[l].areas&&s.templates[l].areas[t]&&s.templates[l].areas[t].name))+" <small>"+d(i(s&&s.templates&&s.templates[l]&&s.templates[l].template))+" / "+d(i(s&&s.templates&&s.templates[l]&&s.templates[l].areas&&s.templates[l].areas[t]&&s.templates[l].areas[t].location))+'</small></h4>\n\t\t\t\t\t\t\t<div class="well widget-area">\n\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t'},function(){return""}):e(i(s&&s.areas),function(t,a,n,e){return'\n\t\t\t\t\t\t<div class="area" data-template="'+d(i(s&&s.templates&&s.templates.template))+'" data-location="'+d(i(s&&s.areas&&s.areas[t]&&s.areas[t].location))+'">\n\t\t\t\t\t\t\t<h4>'+d(i(s&&s.areas&&s.areas[t]&&s.areas[t].name))+" <small>"+d(i(s&&s.templates&&s.templates.template))+" / "+d(i(s&&s.areas&&s.areas[t]&&s.areas[t].location))+'</small></h4>\n\t\t\t\t\t\t\t<div class="well widget-area">\n\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t'},function(){return""}))+"\n\t\t\t\t\t</div>\n\t\t\t\t"},function(){return""})+'\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\n\t<div class="col-md-5">\n\t\t<div class="panel panel-default">\n\t\t\t<div class="panel-heading">[[admin/extend/widgets:available]]</div>\n\t\t\t<div class="panel-body">\n\t\t\t\t<div class="available-widgets">\n\t\t\t\t\t<p>[[admin/extend/widgets:explanation]]</p>\n\t\t\t\t\t'+(i(s&&s.availableWidgets&&s.availableWidgets.length)?"":'\n\t\t\t\t\t<div class="alert alert-info">[[none-installed, '+d(i(s&&s.config&&s.config.relative_path))+"/admin/extend/plugins]]</div>\n\t\t\t\t\t")+'\n\t\t\t\t\t<p>\n\t\t\t\t\t\t<select id="widget-selector" class="form-control">\n\t\t\t\t\t\t\t'+n.blocks.availableWidgets(t,s,i,e,a)+'\n\t\t\t\t\t\t</select>\n\t\t\t\t\t</p>\n\t\t\t\t\t<div class="row">\n\t\t\t\t\t\t'+e(i(s&&s.availableWidgets),function(t,a,n,e){return'\n\t\t\t\t\t\t<div class="col-xs-12">\n\t\t\t\t\t\t\t<div data-widget="'+d(i(s&&s.availableWidgets&&s.availableWidgets[t]&&s.availableWidgets[t].widget))+'" class="panel widget-panel panel-default pointer hide">\n\t\t\t\t\t\t\t\t<div class="panel-heading">\n\t\t\t\t\t\t\t\t\t<strong>'+d(i(s&&s.availableWidgets&&s.availableWidgets[t]&&s.availableWidgets[t].name))+"</strong>\n\t\t\t\t\t\t\t\t\t<small><br />"+d(i(s&&s.availableWidgets&&s.availableWidgets[t]&&s.availableWidgets[t].description))+'</small>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class="panel-body hidden">\n\t\t\t\t\t\t\t\t\t<form>\n\t\t\t\t\t\t\t\t\t\t'+d(i(s&&s.availableWidgets&&s.availableWidgets[t]&&s.availableWidgets[t].content))+"\n\t\t\t\t\t\t\t\t\t</form>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t"},function(){return""})+'\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<div class="btn-group" component="clone">\n\t\t\t\t\t\t<button type="button" class="btn btn-primary" component="clone/button">[[admin/extend/widgets:clone-from]] ...</button>\n\t\t\t\t\t\t<button type="button" class="btn btn-primary dropdown-toggle" data-toggle="dropdown">\n\t\t\t\t\t\t\t<span class="caret"></span>\n\t\t\t\t\t\t</button>\n\t\t\t\t\t\t<ul class="dropdown-menu pull-right">\n\t\t\t\t\t\t\t'+e(i(s&&s.templates),function(t,a,n,e){return"\n\t\t\t\t\t\t\t"+(0===a?"":'\n\t\t\t\t\t\t\t<li><a href="#">'+d(i(s&&s.templates&&s.templates[t]&&s.templates[t].template))+"</a></li>\n\t\t\t\t\t\t\t")+"\n\t\t\t\t\t\t\t"},function(){return""})+'\n\t\t\t\t\t\t</ul>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class="panel panel-default">\n\t\t\t<div class="panel-heading">[[admin/extend/widgets:containers.available]]</div>\n\t\t\t<div class="panel-body">\n\t\t\t\t<p>[[admin/extend/widgets:containers.explanation]]</p>\n\t\t\t\t<div class="available-containers">\n\t\t\t\t\t<div class="containers">\n\t\t\t\t\t\t<div class="pointer" style="padding: 20px; border: 1px dotted #dedede; margin-bottom: 20px;" data-container-html=" ">\n\t\t\t\t\t\t\t[[admin/extend/widgets:containers.none]]\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class="well pointer" data-container-html=\'<div class="well">{{body}}</div>\'>\n\t\t\t\t\t\t\t[[admin/extend/widgets:container.well]]\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class="jumbotron pointer" data-container-html=\'<div class="jumbotron">{{body}}</div>\'>\n\t\t\t\t\t\t\t[[admin/extend/widgets:container.jumbotron]]\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class="panel" data-container-html=\'<div class="panel panel-default"><div class="panel-body">{{body}}</div></div>\'>\n\t\t\t\t\t\t\t<div class="panel-body pointer">\n\t\t\t\t\t\t\t\t[[admin/extend/widgets:container.panel]]\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class="panel panel-default pointer" data-container-html=\'<div class="panel panel-default"><div class="panel-heading"><h3 class="panel-title">{{title}}</h3></div><div class="panel-body">{{body}}</div></div>\'>\n\t\t\t\t\t\t\t<div class="panel-heading">\n\t\t\t\t\t\t\t\t[[admin/extend/widgets:container.panel-header]]\n\t\t\t\t\t\t\t\t<div class="pull-right color-selector">\n\t\t\t\t\t\t\t\t\t<button data-class="panel-default" class="btn btn-xs">&nbsp;&nbsp;</button>\n\t\t\t\t\t\t\t\t\t<button data-class="panel-primary" class="btn btn-xs btn-primary">&nbsp;&nbsp;</button>\n\t\t\t\t\t\t\t\t\t<button data-class="panel-success" class="btn btn-xs btn-success">&nbsp;&nbsp;</button>\n\t\t\t\t\t\t\t\t\t<button data-class="panel-info" class="btn btn-xs btn-info">&nbsp;&nbsp;</button>\n\t\t\t\t\t\t\t\t\t<button data-class="panel-warning" class="btn btn-xs btn-warning">&nbsp;&nbsp;</button>\n\t\t\t\t\t\t\t\t\t<button data-class="panel-danger" class="btn btn-xs btn-danger">&nbsp;&nbsp;</button>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class="panel-body">\n\t\t\t\t\t\t\t\t[[admin/extend/widgets:container.panel-body]]\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t<div class="alert alert-info pointer" data-container-html=\'<div class="alert alert-info">{{body}}</div>\'>\n\t\t\t\t\t\t\t[[admin/extend/widgets:container.alert]]\n\t\t\t\t\t\t\t<div class="pull-right color-selector">\n\t\t\t\t\t\t\t\t<button data-class="alert-success" class="btn btn-xs btn-success">&nbsp;&nbsp;</button>\n\t\t\t\t\t\t\t\t<button data-class="alert-info" class="btn btn-xs btn-info">&nbsp;&nbsp;</button>\n\t\t\t\t\t\t\t\t<button data-class="alert-warning" class="btn btn-xs btn-warning">&nbsp;&nbsp;</button>\n\t\t\t\t\t\t\t\t<button data-class="alert-danger" class="btn btn-xs btn-danger">&nbsp;&nbsp;</button>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>\n\n<button id="save" class="floating-button mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect mdl-button--colored">\n\t<i class="material-icons">save</i>\n</button>'}return n.blocks={templates:function(t,l,s,a,n){var i=t.__escape;return a(s(l&&l.templates),function(t,a,n,e){return'\n\t\t\t<li class="'+(0===a?"active":"")+'"><a href="#" data-template="'+i(s(l&&l.templates&&l.templates[t]&&l.templates[t].template))+'" data-toggle="pill">'+i(s(l&&l.templates&&l.templates[t]&&l.templates[t].template))+"</a></li>\n\t\t"},function(){return""})},availableWidgets:function(t,l,s,a,n){var i=t.__escape;return a(s(l&&l.availableWidgets),function(t,a,n,e){return'\n\t\t\t\t\t\t\t<option value="'+i(s(l&&l.availableWidgets&&l.availableWidgets[t]&&l.availableWidgets[t].widget))+'">'+i(s(l&&l.availableWidgets&&l.availableWidgets[t]&&l.availableWidgets[t].name))+"</option>\n\t\t\t\t\t\t\t"},function(){return""})}},n});