!function(t){"object"==typeof module&&module.exports?module.exports=t():"function"==typeof define&&define.amd&&define(t)}(function(){function s(t,e,r,n,a){return(r(e&&e.breadcrumbs&&e.breadcrumbs.length)?'\n<ol class="breadcrumb">\n\t'+s.blocks.breadcrumbs(t,e,r,n,a)+"\n</ol>\n":"")+'\n\n<div class="row register">\n\t<div class="'+t.__escape(r(e&&e["register_window:spansize"]))+'">\n\t\t<div class="register-block">\n\t\t\t<div class="alert alert-danger'+(r(e&&e.error)?"":" hidden")+'" id="register-error-notify" >\n\t\t\t\t<strong>[[error:registration-error]]</strong>\n\t\t\t\t<p>'+t.__escape(r(e&&e.error))+'</p>\n\t\t\t</div>\n\t\t\t<form component="register/local" class="form-horizontal" role="form" action="'+t.__escape(r(e&&e.config&&e.config.relative_path))+'/register" method="post">\n\t\t\t\t<div class="form-group">\n\t\t\t\t\t<label for="email" class="col-lg-4 control-label">[[register:email_address]]</label>\n\t\t\t\t\t<div class="col-lg-8">\n\t\t\t\t\t\t<input class="form-control" type="email" placeholder="[[register:email_address_placeholder]]" name="email" id="email" autocorrect="off" autocapitalize="off" />\n\t\t\t\t\t\t<span class="register-feedback" id="email-notify"></span>\n\t\t\t\t\t\t<span class="help-block">[[register:help.email]]</span>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class="form-group">\n\t\t\t\t\t<label for="username" class="col-lg-4 control-label">[[register:username]]</label>\n\t\t\t\t\t<div class="col-lg-8">\n\t\t\t\t\t\t<input class="form-control" type="text" placeholder="[[register:username_placeholder]]" name="username" id="username" autocorrect="off" autocapitalize="off" autocomplete="off" />\n\t\t\t\t\t\t<span class="register-feedback" id="username-notify"></span>\n\t\t\t\t\t\t<span class="help-block">[[register:help.username_restrictions, '+t.__escape(r(e&&e.minimumUsernameLength))+", "+t.__escape(r(e&&e.maximumUsernameLength))+']]</span>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class="form-group">\n\t\t\t\t\t<label for="password" class="col-lg-4 control-label">[[register:password]]</label>\n\t\t\t\t\t<div class="col-lg-8">\n\t\t\t\t\t\t<input class="form-control" type="password" placeholder="[[register:password_placeholder]]" name="password" id="password" />\n\t\t\t\t\t\t<span class="register-feedback" id="password-notify"></span>\n\t\t\t\t\t\t<span class="help-block">[[register:help.minimum_password_length, '+t.__escape(r(e&&e.minimumPasswordLength))+']]</span>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class="form-group">\n\t\t\t\t\t<label for="password-confirm" class="col-lg-4 control-label">[[register:confirm_password]]</label>\n\t\t\t\t\t<div class="col-lg-8">\n\t\t\t\t\t\t<input class="form-control" type="password" placeholder="[[register:confirm_password_placeholder]]" name="password-confirm" id="password-confirm" />\n\t\t\t\t\t\t<span class="register-feedback" id="password-confirm-notify"></span>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\n\t\t\t\t'+s.blocks.regFormEntry(t,e,r,n,a)+'\n\n\t\t\t\t<div class="form-group">\n\t\t\t\t\t<div class="col-lg-offset-4 col-lg-8">\n\t\t\t\t\t\t<button class="btn btn-primary btn-lg btn-block" id="register" type="submit">[[register:register_now_button]]</button>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<input id="referrer" type="hidden" name="referrer" value="" />\n\t\t\t\t<input id="token" type="hidden" name="token" value="" />\n\t\t\t\t<input id="noscript" type="hidden" name="noscript" value="true" />\n\t\t\t\t<input type="hidden" name="_csrf" value="'+t.__escape(r(e&&e.config&&e.config.csrf_token))+'" />\n\t\t\t</form>\n\t\t</div>\n\t</div>\n\n\t'+(r(e&&e.alternate_logins)?'\n\t<div class="col-md-6">\n\t\t<div class="alt-register-block">\n\t\t\t<h4>[[register:alternative_registration]]</h4>\n\t\t\t<ul class="alt-logins">\n\t\t\t\t'+s.blocks.authentication(t,e,r,n,a)+"\n\t\t\t</ul>\n\t\t</div>\n\t</div>\n\t":"")+"\n</div>\n"}return s.blocks={authentication:function(n,a,s,t,e){return t(s(a&&a.authentication),function(t,e,r){return'\n\t\t\t\t<li class="'+n.__escape(s(a&&a.authentication&&a.authentication[t]&&a.authentication[t].name))+'"><a rel="nofollow noopener noreferrer" target="_top" href="'+n.__escape(s(a&&a.config&&a.config.relative_path))+n.__escape(s(a&&a.authentication&&a.authentication[t]&&a.authentication[t].url))+'"><i class="fa '+n.__escape(s(a&&a.authentication&&a.authentication[t]&&a.authentication[t].icon))+' fa-3x"></i></i></a></li>\n\t\t\t\t'})},regFormEntry:function(n,a,s,t,e){return t(s(a&&a.regFormEntry),function(t,e,r){return'\n\t\t\t\t<div class="form-group">\n\t\t\t\t\t<label for="register-'+n.__escape(s(a&&a.regFormEntry&&a.regFormEntry[t]&&a.regFormEntry[t].styleName))+'" class="col-lg-4 control-label">'+n.__escape(s(a&&a.regFormEntry&&a.regFormEntry[t]&&a.regFormEntry[t].label))+'</label>\n\t\t\t\t\t<div id="register-'+n.__escape(s(a&&a.regFormEntry&&a.regFormEntry[t]&&a.regFormEntry[t].styleName))+'" class="col-lg-8">\n\t\t\t\t\t\t'+s(a&&a.regFormEntry&&a.regFormEntry[t]&&a.regFormEntry[t].html)+"\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t"})},breadcrumbs:function(n,a,s,t,e){return t(s(a&&a.breadcrumbs),function(t,e,r){return"\n\t<li"+(e===r-1?' component="breadcrumb/current"':"")+' itemscope="itemscope" itemtype="http://data-vocabulary.org/Breadcrumb" '+(e===r-1?'class="active"':"")+">\n\t\t"+(e!==r-1?'<a href="'+n.__escape(s(a&&a.breadcrumbs&&a.breadcrumbs[t]&&a.breadcrumbs[t].url))+'" itemprop="url">':"")+'\n\t\t\t<span itemprop="title">\n\t\t\t\t'+n.__escape(s(a&&a.breadcrumbs&&a.breadcrumbs[t]&&a.breadcrumbs[t].text))+"\n\t\t\t\t"+(e===r-1?"\n\t\t\t\t"+(s(a&&a["feeds:disableRSS"])?"":"\n\t\t\t\t"+(s(a&&a.rssFeedUrl)?'<a target="_blank" href="'+n.__escape(s(a&&a.rssFeedUrl))+'"><i class="fa fa-rss-square"></i></a>':""))+"\n\t\t\t\t":"")+"\n\t\t\t</span>\n\t\t"+(e!==r-1?"</a>":"")+"\n\t</li>\n\t"})}},s});