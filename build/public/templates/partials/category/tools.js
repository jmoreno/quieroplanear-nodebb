!function(t){"object"==typeof module&&module.exports?module.exports=t():"function"==typeof define&&define.amd&&define(t)}(function(){function i(t,n,o,a,e){t.__escape;return o(n&&n.privileges&&n.privileges.editable)?'\n<div class="btn-group thread-tools bottom-sheet">\n\t<button class="btn btn-default dropdown-toggle" data-toggle="dropdown" type="button">\n\t\t<span class="visible-sm-inline visible-md-inline visible-lg-inline">[[topic:thread_tools.title]]</span>\n\t\t<span class="visible-xs-inline"><i class="fa fa-fw fa-gear"></i></span>\n\t\t<span class="caret"></span>\n\t</button>\n\t<ul class="dropdown-menu pull-right">\n\t\t<li>\n\t\t\t<a component="topic/mark-unread-for-all" href="#">\n\t\t\t\t<i class="fa fa-fw fa-inbox"></i> [[topic:thread_tools.markAsUnreadForAll]]\n\t\t\t</a>\n\t\t</li>\n\t\t<li>\n\t\t\t<a component="topic/pin" href="#">\n\t\t\t\t<i class="fa fa-fw fa-thumb-tack"></i> [[topic:thread_tools.pin]]\n\t\t\t</a>\n\t\t</li>\n\t\t<li>\n\t\t\t<a component="topic/unpin" href="#" class="hidden">\n\t\t\t\t<i class="fa fa-fw fa-thumb-tack fa-rotate-90"></i> [[topic:thread_tools.unpin]]\n\t\t\t</a>\n\t\t</li>\n\n\t\t<li>\n\t\t\t<a component="topic/lock" href="#">\n\t\t\t\t<i class="fa fa-fw fa-lock"></i> [[topic:thread_tools.lock]]\n\t\t\t</a>\n\t\t</li>\n\t\t<li>\n\t\t\t<a component="topic/unlock" href="#" class="hidden">\n\t\t\t\t<i class="fa fa-fw fa-unlock"></i> [[topic:thread_tools.unlock]]\n\t\t\t</a>\n\t\t</li>\n\n\t\t<li class="divider"></li>\n\n\t\t<li>\n\t\t\t<a component="topic/move" href="#">\n\t\t\t\t<i class="fa fa-fw fa-arrows"></i> [[topic:thread_tools.move]]\n\t\t\t</a>\n\t\t</li>\n\t\t<li>\n\t\t\t<a component="topic/move-all" href="#">\n\t\t\t\t<i class="fa fa-fw fa-arrows"></i> [[topic:thread_tools.move_all]]\n\t\t\t</a>\n\t\t</li>\n\t\t<li>\n\t\t\t<a component="topic/merge" href="#">\n\t\t\t\t<i class="fa fa-fw fa-code-fork"></i> [[topic:thread_tools.merge]]\n\t\t\t</a>\n\t\t</li>\n\n\t\t<li class="divider"></li>\n\n\t\t<li>\n\t\t\t<a component="topic/delete" href="#">\n\t\t\t\t<i class="fa fa-fw fa-trash-o"></i> [[topic:thread_tools.delete]]\n\t\t\t</a>\n\t\t</li>\n\t\t<li>\n\t\t\t<a component="topic/restore" href="#" class="hidden">\n\t\t\t\t<i class="fa fa-fw fa-history"></i> [[topic:thread_tools.restore]]\n\t\t\t</a>\n\t\t</li>\n\t\t<li>\n\t\t\t<a component="topic/purge" href="#" class="hidden">\n\t\t\t\t<i class="fa fa-fw fa-eraser"></i> [[topic:thread_tools.purge]]\n\t\t\t</a>\n\t\t</li>\n\n\t\t'+i.blocks.thread_tools(t,n,o,a,e)+"\n\t</ul>\n</div>\n":""}return i.blocks={thread_tools:function(t,e,i,n,o){var l=t.__escape;return n(i(e&&e.thread_tools),function(t,n,o,a){return'\n\t\t<li>\n\t\t\t<a href="#" class="'+l(i(e&&e.thread_tools&&e.thread_tools[t]&&e.thread_tools[t].class))+'"><i class="fa fa-fw '+l(i(e&&e.thread_tools&&e.thread_tools[t]&&e.thread_tools[t].icon))+'"></i> '+l(i(e&&e.thread_tools&&e.thread_tools[t]&&e.thread_tools[t].title))+"</a>\n\t\t</li>\n\t\t"},function(){return""})}},i});