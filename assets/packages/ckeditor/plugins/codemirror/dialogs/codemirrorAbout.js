﻿CKEDITOR.dialog.add("codemirrorAboutDialog",function(b){var a=b.lang.codemirror,c=CKEDITOR.getUrl(CKEDITOR.plugins.get("codemirror").path+"dialogs/logo.png");return{title:a.dlgTitle,minWidth:390,minHeight:210,contents:[{id:"tab1",label:"",title:"",expand:!0,padding:0,elements:[{type:"html",html:'\x3cstyle type\x3d"text/css"\x3e.cke_about_container{color:#000 !important;padding:10px 10px 0;margin-top:5px}.cke_about_container p{margin: 0 0 10px;}.cke_about_container .cke_about_logo{height:105px;background-color:#fff;background-image:url('+
c+');background-position:center; background-repeat:no-repeat;margin-bottom:10px;}.cke_about_container a{cursor:pointer !important;color:#00B2CE !important;text-decoration:underline !important;}.cke_about_container \x3e p,.cke_rtl .cke_about_container \x3e p{text-align:center;}\x3c/style\x3e\x3cdiv class\x3d"cke_about_container"\x3e\x3cdiv class\x3d"cke_about_logo"\x3e\x3c/div\x3e\x3cp\x3e'+("undefined"==typeof CodeMirror?"":"CodeMirror "+CodeMirror.version)+" (CKEditor Plugin Version "+b.plugins.codemirror.version+
')\x3cbr\x3e\x3ca target\x3d"_blank" rel\x3d"noopener noreferrer" href\x3d"https://codemirror.net"\x3ehttps://codemirror.net\x3c/a\x3e - \x3ca target\x3d"_blank" rel\x3d"noopener noreferrer" href\x3d"https://github.com/w8tcha/CKEditor-CodeMirror-Plugin"\x3ehttps://github.com/w8tcha/CKEditor-CodeMirror-Plugin\x3c/a\x3e\x3c/p\x3e\x3ch5\x3e'+a.moreInfoShortcuts+"\x3c/h5\x3e\x3cp\x3e\x3cul\x3e\x3cli\x3e"+a.moreInfoShortcuts1+"\x3c/li\x3e\x3cli\x3e"+a.moreInfoShortcuts2+"\x3c/li\x3e\x3cli\x3e"+a.moreInfoShortcuts3+
"\x3c/li\x3e\x3cli\x3e"+a.moreInfoShortcuts4+"\x3c/li\x3e\x3cli\x3e"+a.moreInfoShortcuts5+"\x3c/li\x3e\x3cli\x3e"+a.moreInfoShortcuts6+"\x3c/li\x3e\x3cli\x3e"+a.moreInfoShortcuts7+"\x3c/li\x3e\x3cli\x3e"+a.moreInfoShortcuts8+"\x3c/li\x3e\x3cli\x3e"+a.moreInfoShortcuts9+"\x3c/li\x3e\x3c/ul\x3e\x3c/p\x3e\x3cp\x3e"+a.copyright+"\x3c/p\x3e\x3c/div\x3e"}]}],buttons:[CKEDITOR.dialog.cancelButton]}});