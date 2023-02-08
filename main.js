function ShowAndHide() {
  let buttonDiv = document.getElementById("answer");
  let clsname = buttonDiv.className;

  // show the answers when clicking the button with everything hidden
  do {
    clsname = 'show';
    buttonDiv.classList.toggle(clsname);
}
  while (clsname == 'hide');

  // hide the answers when clicking the button with everything shown
  do {
    clsname = 'hide';
    buttonDiv.classList.toggle(clsname);
  }
  while (clsname == 'show');
}

// documentation:
// by changing the classname in the div whose id is "answer", 
// we can change the style of the div by changing their classname
// to avoid use any styling done in js