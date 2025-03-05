$( function() {
    $( ".draggable" ).draggable();
      appendTo: ".chessboard"
  } );

  const divElement = document.getElementById('instabutton');
  divElement.addEventListener('click', function() {
    window.location.href = 'https://www.instagram.com/freakchessclub/';
  });