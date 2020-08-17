(function() {
  var arrInputs = document.getElementsByTagName("INPUT");
  for(var i = arrInputs.length - 1; i >= 0; i--) {
    (function(input) {
      if(input.type.toUpperCase() == "PASSWORD") {
        var oldOnContextMenu = input.oncontextmenu;
        input.oncontextmenu = function() {
          try {
            clipboardData.setData("Text", input.value);
            alert("Your password has been copied to the clipboard.");
          }
          catch(e) {
            alert("Your password is:\n" + input.value);
          }
          if(oldOnContextMenu)
            oldOnContextMenu.apply(this, arguments);
          return false;
        };
      }
    })(arrInputs[i]);
  }
})();