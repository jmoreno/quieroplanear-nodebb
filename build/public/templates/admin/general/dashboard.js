!function(t){"object"==typeof module&&module.exports?module.exports=t():"function"==typeof define&&define.amd&&define(t)}(function(){function d(t,a,n,e,s){var i=t.__escape;return'<div class="row dashboard">\n\t<div class="col-lg-9">\n\t\t<div class="panel panel-default">\n\t\t\t<div class="panel-heading">[[admin/general/dashboard:forum-traffic]]</div>\n\t\t\t<div class="panel-body">\n\t\t\t\t<div class="graph-container" id="analytics-traffic-container">\n\t\t\t\t\t<i class="fa fa-expand"></i>\n\t\t\t\t\t<ul class="graph-legend">\n\t\t\t\t\t\t<li><div class="page-views"></div><span>[[admin/general/dashboard:page-views]]</span></li>\n\t\t\t\t\t\t<li><div class="unique-visitors"></div><span>[[admin/general/dashboard:unique-visitors]]</span></li>\n\t\t\t\t\t</ul>\n\t\t\t\t\t<canvas id="analytics-traffic" width="100%" height="400"></canvas>\n\t\t\t\t</div>\n\t\t\t\t<hr/>\n\t\t\t\t<div class="row">\n\t\t\t\t\t<div class="col-sm-3 hidden-xs text-center pageview-stats">\n\t\t\t\t\t\t<div><strong id="pageViewsThirty">0</strong></div>\n\t\t\t\t\t\t<div><a href="#" class="updatePageviewsGraph" data-action="updateGraph" data-units="days" data-amount="30">[[admin/general/dashboard:page-views-thirty]]</a></div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class="col-sm-3 text-center pageview-stats">\n\t\t\t\t\t\t<div><strong id="pageViewsSeven">0</strong></div>\n\t\t\t\t\t\t<div><a href="#" class="updatePageviewsGraph" data-action="updateGraph" data-units="days" data-amount="7">[[admin/general/dashboard:page-views-seven]]</a></div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class="col-sm-3 hidden-xs text-center pageview-stats">\n\t\t\t\t\t\t<div><strong id="pageViewsPastDay">0</strong></div>\n\t\t\t\t\t\t<div><a href="#" class="updatePageviewsGraph active" data-action="updateGraph" data-units="hours">[[admin/general/dashboard:page-views-last-day]]</a></div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class="col-sm-3 text-center pageview-stats">\n\t\t\t\t\t\t<div><strong><i class="fa fa-clock-o"></i></strong></div>\n\t\t\t\t\t\t<div><a href="#" class="updatePageviewsGraph" data-action="updateGraph" data-units="custom">[[admin/general/dashboard:page-views-custom]]</a></div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\n\t\t<div class="row">\n\t\t\t'+d.blocks.stats(t,a,n,e,s)+'\n\n\t\t\t<div class="col-lg-6">\n\t\t\t\t<div class="panel panel-default">\n\t\t\t\t\t<div class="panel-heading">[[admin/general/dashboard:updates]]</div>\n\t\t\t\t\t<div class="panel-body">\n\t\t\t\t\t\t<div class="alert '+(n(a&&a.lookupFailed)?"alert-danger":n(a&&a.upgradeAvailable)?"alert-warning":n(a&&a.currentPrerelease)?"alert-info":"alert-success")+' version-check">\n\t\t\t\t\t\t\t<p>[[admin/general/dashboard:running-version, '+i(n(a&&a.version))+"]]</p>\n\t\t\t\t\t\t\t<p>\n\t\t\t\t\t\t\t"+(n(a&&a.lookupFailed)?"\n\t\t\t\t\t\t\t[[admin/general/dashboard:latest-lookup-failed]]\n\t\t\t\t\t\t\t":"\n\t\t\t\t\t\t\t\t"+(n(a&&a.upgradeAvailable)?"\n\t\t\t\t\t\t\t\t\t"+(n(a&&a.currentPrerelease)?"\n\t\t\t\t\t\t\t\t\t[[admin/general/dashboard:prerelease-upgrade-available, "+i(n(a&&a.latestVersion))+"]]\n\t\t\t\t\t\t\t\t\t":"\n\t\t\t\t\t\t\t\t\t[[admin/general/dashboard:upgrade-available, "+i(n(a&&a.latestVersion))+"]]\n\t\t\t\t\t\t\t\t\t")+"\n\t\t\t\t\t\t\t\t":"\n\t\t\t\t\t\t\t\t\t"+(n(a&&a.currentPrerelease)?"\n\t\t\t\t\t\t\t\t\t[[admin/general/dashboard:prerelease-warning]]\n\t\t\t\t\t\t\t\t\t":"\n\t\t\t\t\t\t\t\t\t[[admin/general/dashboard:up-to-date]]\n\t\t\t\t\t\t\t\t\t")+"\n\t\t\t\t\t\t\t\t")+"\n\t\t\t\t\t\t\t")+'\n\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<p>\n\t\t\t\t\t\t\t[[admin/general/dashboard:keep-updated]]\n\t\t\t\t\t\t</p>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\n\t\t\t<div class="col-lg-6">\n\t\t\t\t<div class="panel panel-default">\n\t\t\t\t\t<div class="panel-heading">[[admin/general/dashboard:notices]]</div>\n\t\t\t\t\t<div class="panel-body">\n\t\t\t\t\t'+d.blocks.notices(t,a,n,e,s)+'\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\n\t<div class="col-lg-3">\n\t\t<div class="panel panel-default">\n\t\t\t<div class="panel-heading">[[admin/general/dashboard:control-panel]]</div>\n\t\t\t<div class="panel-body text-center">\n\t\t\t\t<p>\n\t\t\t\t\t<button class="btn btn-block btn-warning restart"'+(n(a&&a.canRestart)?"":" disabled")+'>[[admin/general/dashboard:restart]]</button>\n\t\t\t\t\t<button class="btn btn-block btn-danger rebuild-and-restart"'+(n(a&&a.canRestart)?"":" disabled")+">[[admin/general/dashboard:rebuild-and-restart]]</button>\n\t\t\t\t</p>\n\t\t\t\t"+(n(a&&a.lastrestart)?'\n\t\t\t\t<p>\n\t\t\t\t\t[[admin/general/dashboard:last-restarted-by]]<br />\n\t\t\t\t\t<a href="'+i(n(a&&a.config&&a.config.relative_path))+"/uid/"+i(n(a&&a.lastrestart&&a.lastrestart.uid))+'"><span class="label label-info">'+i(n(a&&a.lastrestart&&a.lastrestart.user&&a.lastrestart.user.username))+'</span></a> <span class="timeago" title="'+i(n(a&&a.lastrestart&&a.lastrestart.timestampISO))+'"></span>\n\t\t\t\t</p>\n\t\t\t\t':"")+'\n\t\t\t\t<p class="'+(n(a&&a.canRestart)?"help-block":"alert alert-warning")+'">\n\t\t\t\t\t'+(n(a&&a.canRestart)?"\n\t\t\t\t\t[[admin/general/dashboard:restart-warning]]\n\t\t\t\t\t":"\n\t\t\t\t\t[[admin/general/dashboard:restart-disabled]]\n\t\t\t\t\t")+'\n\t\t\t\t</p>\n\t\t\t\t<p>\n\t\t\t\t\t<a href="'+i(n(a&&a.config&&a.config.relative_path))+'/admin/settings/advanced" class="btn btn-info btn-block" data-placement="bottom" data-toggle="tooltip" title="[[admin/general/dashboard:maintenance-mode-title]]">[[admin/general/dashboard:maintenance-mode]]</a>\n\t\t\t\t</p>\n\n\t\t\t\t<hr />\n\t\t\t\t<span id="toggle-realtime">[[admin/general/dashboard:realtime-chart-updates]] <strong>OFF</strong> <i class="fa fa fa-toggle-off pointer"></i></span>\n\t\t\t</div>\n\t\t</div>\n\n\t\t<div class="panel panel-default">\n\t\t\t<div class="panel-heading">[[admin/general/dashboard:active-users]]</div>\n\t\t\t<div class="panel-body">\n\t\t\t\t<div id="active-users" class="stats"></div>\n\t\t\t</div>\n\t\t</div>\n\n\t\t<div class="panel panel-default">\n\t\t\t<div class="panel-heading">[[admin/general/dashboard:anonymous-registered-users]]</div>\n\t\t\t<div class="panel-body">\n\t\t\t\t<div class="graph-container pie-chart legend-up">\n\t\t\t\t\t<ul class="graph-legend">\n\t\t\t\t\t\t<li><div class="anonymous"></div><span>[[admin/general/dashboard:anonymous]]</span></li>\n\t\t\t\t\t\t<li><div class="registered"></div><span>[[admin/general/dashboard:registered]]</span></li>\n\t\t\t\t\t</ul>\n\t\t\t\t\t<canvas id="analytics-registered"></canvas>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\n\t\t<div class="panel panel-default">\n\t\t\t<div class="panel-heading">[[admin/general/dashboard:user-presence]]</div>\n\t\t\t<div class="panel-body">\n\t\t\t\t<div class="graph-container pie-chart legend-up">\n\t\t\t\t\t<ul class="graph-legend">\n\t\t\t\t\t\t<li><div class="on-categories"></div><span>[[admin/general/dashboard:on-categories]]</span></li>\n\t\t\t\t\t\t<li><div class="reading-posts"></div><span>[[admin/general/dashboard:reading-posts]]</span></li>\n\t\t\t\t\t\t<li><div class="browsing-topics"></div><span>[[admin/general/dashboard:browsing-topics]]</span></li>\n\t\t\t\t\t\t<li><div class="recent"></div><span>[[admin/general/dashboard:recent]]</span></li>\n\t\t\t\t\t\t<li><div class="unread"></div><span>[[admin/general/dashboard:unread]]</span></li>\n\t\t\t\t\t</ul>\n\t\t\t\t\t<canvas id="analytics-presence"></canvas>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\n\t\t<div class="panel panel-default">\n\t\t\t<div class="panel-heading">[[admin/general/dashboard:high-presence-topics]]</div>\n\t\t\t<div class="panel-body">\n\t\t\t\t<div class="graph-container pie-chart legend-down">\n\t\t\t\t\t<canvas id="analytics-topics"></canvas>\n\t\t\t\t\t<ul class="graph-legend" id="topics-legend"></ul>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\n\t</div>\n</div>'}return d.blocks={stats:function(t,s,i,a,n){var d=t.__escape;return a(i(s&&s.stats),function(t,a,n,e){return'\n\t\t\t<div class="col-lg-6">\n\t\t\t\t<div class="panel panel-default stats">\n\t\t\t\t\t<div class="panel-heading">'+d(i(s&&s.stats&&s.stats[t]&&s.stats[t].name))+'</div>\n\t\t\t\t\t<div class="panel-body">\n\t\t\t\t\t\t<div id="unique-visitors">\n\t\t\t\t\t\t\t<div class="text-center pull-left">\n\t\t\t\t\t\t\t\t<span class="formatted-number">'+d(i(s&&s.stats&&s.stats[t]&&s.stats[t].day))+'</span>\n\t\t\t\t\t\t\t\t<div class="stat">[[admin/general/dashboard:stats.day]]</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class="text-center pull-left">\n\t\t\t\t\t\t\t\t<span class="formatted-number">'+d(i(s&&s.stats&&s.stats[t]&&s.stats[t].week))+'</span>\n\t\t\t\t\t\t\t\t<div class="stat">[[admin/general/dashboard:stats.week]]</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class="text-center pull-left">\n\t\t\t\t\t\t\t\t<span class="formatted-number">'+d(i(s&&s.stats&&s.stats[t]&&s.stats[t].month))+'</span>\n\t\t\t\t\t\t\t\t<div class="stat">[[admin/general/dashboard:stats.month]]</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class="text-center pull-left">\n\t\t\t\t\t\t\t\t<span class="formatted-number">'+d(i(s&&s.stats&&s.stats[t]&&s.stats[t].alltime))+'</span>\n\t\t\t\t\t\t\t\t<div class="stat">[[admin/general/dashboard:stats.all]]</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t'},function(){return""})},notices:function(t,s,i,a,n){var d=t.__escape;return a(i(s&&s.notices),function(t,a,n,e){return"\n\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t"+(i(s&&s.notices&&s.notices[t]&&s.notices[t].done)?'\n\t\t\t\t\t\t\t<i class="fa fa-fw fa-check text-success"></i> '+d(i(s&&s.notices&&s.notices[t]&&s.notices[t].doneText))+"\n\t\t\t\t\t\t\t":"\n\t\t\t\t\t\t\t"+(i(s&&s.notices&&s.notices[t]&&s.notices[t].link)?'<a href="'+d(i(s&&s.notices&&s.notices[t]&&s.notices[t].link))+'" data-toggle="tooltip" title="'+d(i(s&&s.notices&&s.notices[t]&&s.notices[t].tooltip))+'">':"")+'\n\t\t\t\t\t\t\t<i class="fa fa-fw fa-times text-danger"></i> '+d(i(s&&s.notices&&s.notices[t]&&s.notices[t].notDoneText))+"\n\t\t\t\t\t\t\t"+(i(s&&s.notices&&s.notices[t]&&s.notices[t].link)?"</a>":"")+"\n\t\t\t\t\t\t\t")+"\n\t\t\t\t\t\t</div>\n\t\t\t\t\t"},function(){return""})}},d});