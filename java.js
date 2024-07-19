function button1(){
var input = document.getElementById("inputfieldjs").value; 

  var urlRegex = /(https?:\/\/[^\s]+)/g; 

  

  var matches = input.match(urlRegex); 

  

  if (matches) {

    for (var i = 0; i < matches.length; i++) {

      window.open(matches[i], '_blank');

    }

  } else {

    window.open("https://" + input, '_blank')

  }
}

//=================================

document.addEventListener('DOMContentLoaded', () => {
  let textarea = document.getElementById('inputfieldjs');

  if (textarea) {
    textarea.addEventListener('keydown', (e) => {
      if (e.keyCode === 13 && !e.shiftKey) {
        e.preventDefault(); // Prevent the default behavior of the Enter key
        var input22 = textarea.value.trim();
        var urlRegex22 = /(https?:\/\/[^\s]+)/g;
        var matches22 = input22.match(urlRegex22);
        if (matches22) {
          for (var i = 0; i < matches22.length; i++) {
            window.open(matches22[i], '_blank');
          }
        } else {
          window.open("https://" + input22, '_blank');
        }
      }
    });
  }
});

//==========================================

function pastetext() {
    var textarea = document.querySelector('textarea');
    navigator.clipboard.readText()
        .then(text => {
            textarea.value = text;
        })
        .catch(err => {
            prompt("looks like we have encountered an error\nplease copy and search the error below", err)
        });
}

//=================================

function clearthetext(){
    document.getElementById('inputfieldjs').value = ''
}