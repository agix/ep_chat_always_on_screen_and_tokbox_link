var chat_always_on_screen_and_tokbox_link = {

  getURLParameter: function(name) {
      return decodeURI(
          (RegExp(name + '=' + '(.+?)(&|$)').exec(location.search)||[,null])[1]
      );
  },

  init: function() {

    chat.stickToScreen(true);
    $("#chatinput").height("90px");
    $("#chattext").css("bottom", "100px");
    

    var tokbox_link = clientVars.tokbox_link;
    if(tokbox_link){
      if (chat_always_on_screen_and_tokbox_link.getURLParameter("av")){  // is it set?

        var link = tokbox_link + "?string="+location.href;
        var markup = '<p id="tokboxStart" style="cursor:pointer; cursor:hand;text-align:center;text-size:10px;font-weight:bold;text-transform:uppercase;padding-bottom:8px;">START VIDEO/AUDIO CHAT</p>';
        $(markup).insertBefore("#chatinput");
        $("#tokboxStart").click(function(){
          window.open(link, 'utilization', 'height=700,width=350,scrollbars=1');
        });

        $("#chattext").css("bottom", "120px");
      }
    }
  }
}
