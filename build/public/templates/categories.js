!function(t){"object"==typeof module&&module.exports?module.exports=t():"function"==typeof define&&define.amd&&define(t)}(function(){function i(t,e,s,o,r){t.__escape;return(s(e&&e.breadcrumbs&&e.breadcrumbs.length)?'\n<ol class="breadcrumb">\n\t'+i.blocks.breadcrumbs(t,e,s,o,r)+"\n</ol>\n":"")+'\n<div widget-area="header">\n\t'+i.blocks["widgets.header"](t,e,s,o,r)+'\n</div>\n<div class="row">\n\t<div class="'+(s(e&&e.widgets&&e.widgets.sidebar&&e.widgets.sidebar.length)?"col-lg-9 col-sm-12":"col-lg-12")+'">\n\t\t<h1 class="categories-title">[[pages:categories]]</h1>\n\t\t<ul class="categories" itemscope itemtype="http://www.schema.org/ItemList">\n\t\t\t'+i.blocks.categories(t,e,s,o,r)+'\n\t\t</ul>\n\t</div>\n\t<div widget-area="sidebar" class="col-lg-3 col-sm-12 '+(s(e&&e.widgets&&e.widgets.sidebar&&e.widgets.sidebar.length)?"":"hidden")+'">\n\t\t'+i.blocks["widgets.sidebar"](t,e,s,o,r)+'\n\t</div>\n</div>\n<div widget-area="footer">\n\t'+i.blocks["widgets.footer"](t,e,s,o,r)+"\n</div>\n"}return i.blocks={breadcrumbs:function(t,r,i,e,s){var a=t.__escape;return e(i(r&&r.breadcrumbs),function(t,e,s,o){return"\n\t<li"+(e===s-1?' component="breadcrumb/current"':"")+' itemscope="itemscope" itemtype="http://data-vocabulary.org/Breadcrumb" '+(e===s-1?'class="active"':"")+">\n\t\t"+(e===s-1?"":'<a href="'+a(i(r&&r.breadcrumbs&&r.breadcrumbs[t]&&r.breadcrumbs[t].url))+'" itemprop="url">')+'\n\t\t\t<span itemprop="title">\n\t\t\t\t'+a(i(r&&r.breadcrumbs&&r.breadcrumbs[t]&&r.breadcrumbs[t].text))+"\n\t\t\t\t"+(e===s-1?"\n\t\t\t\t"+(i(r&&r["feeds:disableRSS"])?"":"\n\t\t\t\t"+(i(r&&r.rssFeedUrl)?'<a target="_blank" href="'+a(i(r&&r.rssFeedUrl))+'"><i class="fa fa-rss-square"></i></a>':""))+"\n\t\t\t\t":"")+"\n\t\t\t</span>\n\t\t"+(e===s-1?"":"</a>")+"\n\t</li>\n\t"},function(){return""})},"widgets.header":function(t,r,i,e,s){t.__escape;return e(i(r&&r.widgets&&r.widgets.header),function(t,e,s,o){return"\n\t"+i(r&&r.widgets&&r.widgets.header&&r.widgets.header[t]&&r.widgets.header[t].html)+"\n\t"},function(){return""})},categories:function(o,i,a,c,n){var g=o.__escape;return c(a(i&&i.categories),function(r,t,e,s){return'\n\t\t\t<li component="categories/category" data-cid="'+g(a(i&&i.categories&&i.categories[r]&&i.categories[r].cid))+'" data-numRecentReplies="1" class="row clearfix">\n\t<meta itemprop="name" content="'+g(a(i&&i.categories&&i.categories[r]&&i.categories[r].name))+'">\n\n\t<div class="content col-xs-12 '+(a(i&&i.config&&i.config.hideCategoryLastPost)?"col-md-10 col-sm-12":"col-md-7 col-sm-9")+'">\n\t\t<div class="icon pull-left" style="'+g(n(i,o,"generateCategoryBackground",[a(s)]))+'">\n\t\t\t<i class="fa fa-fw '+g(a(i&&i.categories&&i.categories[r]&&i.categories[r].icon))+'"></i>\n\t\t</div>\n\n\t\t<h2 class="title">\n\t\t\t'+(a(i&&i.categories&&i.categories[r]&&i.categories[r].isSection)?"\n"+g(a(i&&i.categories&&i.categories[r]&&i.categories[r].name))+"\n":"\n"+(a(i&&i.categories&&i.categories[r]&&i.categories[r].link)?'\n<a href="'+g(a(i&&i.categories&&i.categories[r]&&i.categories[r].link))+'" itemprop="url">\n':'\n<a href="'+g(a(i&&i.config&&i.config.relative_path))+"/category/"+g(a(i&&i.categories&&i.categories[r]&&i.categories[r].slug))+'" itemprop="url">\n')+"\n"+g(a(i&&i.categories&&i.categories[r]&&i.categories[r].name))+"\n</a>\n")+"\n\t\t</h2>\n\t\t<div>\n\t\t\t"+(a(i&&i.categories&&i.categories[r]&&i.categories[r].descriptionParsed)?'\n\t\t\t<div class="description">\n\t\t\t\t'+g(a(i&&i.categories&&i.categories[r]&&i.categories[r].descriptionParsed))+"\n\t\t\t</div>\n\t\t\t":"")+"\n\t\t\t"+(a(i&&i.config&&i.config.hideSubCategories)?"":"\n\t\t\t"+g(n(i,o,"generateChildrenCategories",[a(s)]))+"\n\t\t\t")+'\n\t\t</div>\n\t\t<span class="visible-xs pull-right">\n\t\t\t'+(a(i&&i.categories&&i.categories[r]&&i.categories[r].teaser&&i.categories[r].teaser.timestampISO)?'\n\t\t\t<a class="permalink" href="'+g(a(i&&i.categories&&i.categories[r]&&i.categories[r].teaser&&i.categories[r].teaser.url))+'">\n\t\t\t\t<small class="timeago" title="'+g(a(i&&i.categories&&i.categories[r]&&i.categories[r].teaser&&i.categories[r].teaser.timestampISO))+'"></small>\n\t\t\t</a>\n\t\t\t':"")+"\n\t\t</span>\n\t</div>\n\n\t"+(a(i&&i.categories&&i.categories[r]&&i.categories[r].link)?"":'\n\t<div class="col-md-1 hidden-sm hidden-xs stats">\n\t\t<span class="'+g(a(i&&i.categories&&i.categories[r]&&i.categories[r]["unread-class"]))+' human-readable-number" title="'+g(a(i&&i.categories&&i.categories[r]&&i.categories[r].totalTopicCount))+'">'+g(a(i&&i.categories&&i.categories[r]&&i.categories[r].totalTopicCount))+'</span><br />\n\t\t<small>[[global:topics]]</small>\n\t</div>\n\t<div class="col-md-1 hidden-sm hidden-xs stats">\n\t\t<span class="'+g(a(i&&i.categories&&i.categories[r]&&i.categories[r]["unread-class"]))+' human-readable-number" title="'+g(a(i&&i.categories&&i.categories[r]&&i.categories[r].totalPostCount))+'">'+g(a(i&&i.categories&&i.categories[r]&&i.categories[r].totalPostCount))+"</span><br />\n\t\t<small>[[global:posts]]</small>\n\t</div>\n\t"+(a(i&&i.config&&i.config.hideCategoryLastPost)?"":'\n\t<div class="col-md-3 col-sm-3 teaser hidden-xs" component="topic/teaser">\n\t\t<div class="card" style="border-color: '+g(a(i&&i.categories&&i.categories[r]&&i.categories[r].bgColor))+'">\n\t'+(a(i&&i.categories&&i.categories[r]&&i.categories[r].posts)?c(a(i&&i.categories&&i.categories[r]&&i.categories[r].posts),function(t,e,s,o){return"\n\t"+(0===e?'\n\t<div component="category/posts">\n\t\t<p>\n\t\t\t<a href="'+g(a(i&&i.config&&i.config.relative_path))+"/user/"+g(a(i&&i.categories&&i.categories[r]&&i.categories[r].posts&&i.categories[r].posts[t]&&i.categories[r].posts[t].user&&i.categories[r].posts[t].user.userslug))+'">\n\t\t\t\t'+(a(i&&i.categories&&i.categories[r]&&i.categories[r].posts&&i.categories[r].posts[t]&&i.categories[r].posts[t].user&&i.categories[r].posts[t].user.picture)?'\n\t\t\t\t<img class="user-img" title="'+g(a(i&&i.categories&&i.categories[r]&&i.categories[r].posts&&i.categories[r].posts[t]&&i.categories[r].posts[t].user&&i.categories[r].posts[t].user.username))+'" alt="'+g(a(i&&i.categories&&i.categories[r]&&i.categories[r].posts&&i.categories[r].posts[t]&&i.categories[r].posts[t].user&&i.categories[r].posts[t].user.username))+'" src="'+g(a(i&&i.categories&&i.categories[r]&&i.categories[r].posts&&i.categories[r].posts[t]&&i.categories[r].posts[t].user&&i.categories[r].posts[t].user.picture))+'">\n\t\t\t\t':'\n\t\t\t\t<span class="user-icon user-img" title="'+g(a(i&&i.categories&&i.categories[r]&&i.categories[r].posts&&i.categories[r].posts[t]&&i.categories[r].posts[t].user&&i.categories[r].posts[t].user.username))+'" style="background-color: '+g(a(i&&i.categories&&i.categories[r]&&i.categories[r].posts&&i.categories[r].posts[t]&&i.categories[r].posts[t].user&&i.categories[r].posts[t].user["icon:bgColor"]))+';">'+g(a(i&&i.categories&&i.categories[r]&&i.categories[r].posts&&i.categories[r].posts[t]&&i.categories[r].posts[t].user&&i.categories[r].posts[t].user["icon:text"]))+"</span>\n\t\t\t\t")+'\n\t\t\t</a>\n\t\t\t<a class="permalink" href="'+g(a(i&&i.config&&i.config.relative_path))+"/topic/"+g(a(i&&i.categories&&i.categories[r]&&i.categories[r].posts&&i.categories[r].posts[t]&&i.categories[r].posts[t].topic&&i.categories[r].posts[t].topic.slug))+(a(i&&i.categories&&i.categories[r]&&i.categories[r].posts&&i.categories[r].posts[t]&&i.categories[r].posts[t].index)?"/"+g(a(i&&i.categories&&i.categories[r]&&i.categories[r].posts&&i.categories[r].posts[t]&&i.categories[r].posts[t].index)):"")+'">\n\t\t\t\t<small class="timeago" title="'+g(a(i&&i.categories&&i.categories[r]&&i.categories[r].posts&&i.categories[r].posts[t]&&i.categories[r].posts[t].timestampISO))+'"></small>\n\t\t\t</a>\n\t\t</p>\n\t\t<div class="post-content">\n\t\t\t'+g(a(i&&i.categories&&i.categories[r]&&i.categories[r].posts&&i.categories[r].posts[t]&&i.categories[r].posts[t].content))+"\n\t\t</div>\n\t</div>\n\t":"")+"\n\t"},function(){return""}):c(a(i&&i.posts),function(t,e,s,o){return"\n\t"+(0===e?'\n\t<div component="category/posts">\n\t\t<p>\n\t\t\t<a href="'+g(a(i&&i.config&&i.config.relative_path))+"/user/"+g(a(i&&i.posts&&i.posts[t]&&i.posts[t].user&&i.posts[t].user.userslug))+'">\n\t\t\t\t'+(a(i&&i.posts&&i.posts[t]&&i.posts[t].user&&i.posts[t].user.picture)?'\n\t\t\t\t<img class="user-img" title="'+g(a(i&&i.posts&&i.posts[t]&&i.posts[t].user&&i.posts[t].user.username))+'" alt="'+g(a(i&&i.posts&&i.posts[t]&&i.posts[t].user&&i.posts[t].user.username))+'" src="'+g(a(i&&i.posts&&i.posts[t]&&i.posts[t].user&&i.posts[t].user.picture))+'">\n\t\t\t\t':'\n\t\t\t\t<span class="user-icon user-img" title="'+g(a(i&&i.posts&&i.posts[t]&&i.posts[t].user&&i.posts[t].user.username))+'" style="background-color: '+g(a(i&&i.posts&&i.posts[t]&&i.posts[t].user&&i.posts[t].user["icon:bgColor"]))+';">'+g(a(i&&i.posts&&i.posts[t]&&i.posts[t].user&&i.posts[t].user["icon:text"]))+"</span>\n\t\t\t\t")+'\n\t\t\t</a>\n\t\t\t<a class="permalink" href="'+g(a(i&&i.config&&i.config.relative_path))+"/topic/"+g(a(i&&i.posts&&i.posts[t]&&i.posts[t].topic&&i.posts[t].topic.slug))+(a(i&&i.posts&&i.posts[t]&&i.posts[t].index)?"/"+g(a(i&&i.posts&&i.posts[t]&&i.posts[t].index)):"")+'">\n\t\t\t\t<small class="timeago" title="'+g(a(i&&i.posts&&i.posts[t]&&i.posts[t].timestampISO))+'"></small>\n\t\t\t</a>\n\t\t</p>\n\t\t<div class="post-content">\n\t\t\t'+g(a(i&&i.posts&&i.posts[t]&&i.posts[t].content))+"\n\t\t</div>\n\t</div>\n\t":"")+"\n\t"},function(){return""}))+"\n\n\t"+(a(i&&i.categories&&i.categories[r]&&i.categories[r].posts&&i.categories[r].posts.length)?"":'\n\t<div component="category/posts">\n\t\t<div class="post-content">\n\t\t\t[[category:no_new_posts]]\n\t\t</div>\n\t</div>\n\t')+"\n</div>\n\n\t</div>\n\t")+"\n\t")+"\n</li>\n\n\t\t\t"},function(){return""})},"widgets.sidebar":function(t,r,i,e,s){t.__escape;return e(i(r&&r.widgets&&r.widgets.sidebar),function(t,e,s,o){return"\n\t\t"+i(r&&r.widgets&&r.widgets.sidebar&&r.widgets.sidebar[t]&&r.widgets.sidebar[t].html)+"\n\t\t"},function(){return""})},"widgets.footer":function(t,r,i,e,s){t.__escape;return e(i(r&&r.widgets&&r.widgets.footer),function(t,e,s,o){return"\n\t"+i(r&&r.widgets&&r.widgets.footer&&r.widgets.footer[t]&&r.widgets.footer[t].html)+"\n\t"},function(){return""})}},i});