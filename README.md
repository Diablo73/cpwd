# cpwd
1. Go to the page where your password is saved
2. Copy and paste the following into your address bar:
```js
javascript:(function(){for(var c=document.getElementsByTagName("INPUT"),a=c.length-1;a>=0;a--)(function(b){if(b.type.toUpperCase()=="PASSWORD"){var a=b.oncontextmenu;b.oncontextmenu=function(){try{clipboardData.setData("Text",b.value),alert("Your password has been copied to the clipboard.")}catch(c){alert("Your password is:\n"+b.value)}a&&a.apply(this,arguments);return!1}}})(c[a])})();
```
3. Hit the enter key
4. Right click the password field to get your password
