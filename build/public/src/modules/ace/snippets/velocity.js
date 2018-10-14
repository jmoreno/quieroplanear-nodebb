define("ace/snippets/velocity",["require","exports","module"],function(t,e,n){"use strict";e.snippetText='# macro\nsnippet #macro\n\t#macro ( ${1:macroName} ${2:\\$var1, [\\$var2, ...]} )\n\t\t${3:## macro code}\n\t#end\n# foreach\nsnippet #foreach\n\t#foreach ( ${1:\\$item} in ${2:\\$collection} )\n\t\t${3:## foreach code}\n\t#end\n# if\nsnippet #if\n\t#if ( ${1:true} )\n\t\t${0}\n\t#end\n# if ... else\nsnippet #ife\n\t#if ( ${1:true} )\n\t\t${2}\n\t#else\n\t\t${0}\n\t#end\n#import\nsnippet #import\n\t#import ( "${1:path/to/velocity/format}" )\n# set\nsnippet #set\n\t#set ( $${1:var} = ${0} )\n',e.scope="velocity",e.includeScopes=["html","javascript","css"]});(function(){window.require(["ace/snippets/velocity"],function(t){if(typeof module=="object"&&typeof exports=="object"&&module){module.exports=t}})})();
//# sourceMappingURL=node_modules/ace-builds/src-min/snippets/velocity.js.map