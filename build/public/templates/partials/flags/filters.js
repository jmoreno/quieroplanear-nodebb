!function(t){"object"==typeof module&&module.exports?module.exports=t():"function"==typeof define&&define.amd&&define(t)}(function(){function o(t,e,n,l,i){return'<div class="panel panel-default">\n\t<div class="panel-heading">\n\t\t<h3 class="panel-title">[[flags:quick-filters]]</h3>\n\t</div>\n\t<div class="panel-body">\n\t\t<ul>\n\t\t\t<li><a href="'+t.__escape(n(e&&e.config&&e.config.relative_path))+'/flags?quick=mine">[[flags:filter-quick-mine]]</a></li>\n\t\t</ul>\n\t</div>\n</div>\n\n<div class="panel panel-default">\n\t<div class="panel-heading">\n\t\t<h3 class="panel-title">[[flags:filters]]</h3>\n\t</div>\n\t<div class="panel-body">\n\t\t<form role="form" component="flags/filters">\n\t\t\t<div class="form-group">\n\t\t\t\t<label for="filter-state">[[flags:filter-state]]</label>\n\t\t\t\t<select class="form-control" id="filter-state" name="state">\n\t\t\t\t\t<option value="">[[flags:state-all]]</option>\n\t\t\t\t\t<option value="open">[[flags:state-open]]</option>\n\t\t\t\t\t<option value="wip">[[flags:state-wip]]</option>\n\t\t\t\t\t<option value="resolved">[[flags:state-resolved]]</option>\n\t\t\t\t\t<option value="rejected">[[flags:state-rejected]]</option>\n\t\t\t\t</select>\n\t\t\t</div>\n\n\t\t\t<div class="form-group">\n\t\t\t\t<label for="filter-type">[[flags:filter-type]]</label>\n\t\t\t\t<select class="form-control" id="filter-type" name="type">\n\t\t\t\t\t<option value="">[[flags:filter-type-all]]</option>\n\t\t\t\t\t<option value="post">[[flags:filter-type-post]]</option>\n\t\t\t\t\t<option value="user">[[flags:filter-type-user]]</option>\n\t\t\t\t</select>\n\t\t\t</div>\n\n\t\t\t<div class="form-group">\n\t\t\t\t<label for="filter-assignee">[[flags:filter-assignee]]</label>\n\t\t\t\t<input type="number" class="form-control" id="filter-assignee" name="assignee" min="0" />\n\t\t\t</div>\n\n\t\t\t<div class="form-group">\n\t\t\t\t<label for="filter-cid">[[flags:filter-cid]]</label>\n\t\t\t\t<select class="form-control" id="filter-cid" name="cid" multiple="true">\n\t\t\t\t\t<option value="">[[flags:filter-cid-all]]</option>\n\t\t\t\t\t'+o.blocks.categories(t,e,n,l,i)+'\n\t\t\t\t</select>\n\t\t\t</div>\n\n\t\t\t<div class="form-group">\n\t\t\t\t<label for="filter-targetUid">[[flags:filter-targetUid]]</label>\n\t\t\t\t<input type="number" class="form-control" id="filter-targetUid" name="targetUid" min="0" />\n\t\t\t</div>\n\n\t\t\t<div class="form-group">\n\t\t\t\t<label for="filter-reporterId">[[flags:filter-reporterId]]</label>\n\t\t\t\t<input type="number" class="form-control" id="filter-reporterId" name="reporterId" min="0" />\n\t\t\t</div>\n\n\t\t\t<button type="button" class="btn btn-primary btn-block">[[flags:apply-filters]]</button>\n\t\t</form>\n\t</div>\n</div>'}return o.blocks={categories:function(i,o,a,t,e){return t(a(o&&o.categories),function(t,e,n){var l=t;return'\n\t\t\t\t\t<option value="'+i.__escape(l)+'">'+i.__escape(a(o&&o.categories&&o.categories[t]))+"</option>\n\t\t\t\t\t"})}},o});