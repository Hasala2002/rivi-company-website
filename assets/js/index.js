function alertmsg(){
  alert('hello!');
}

navdrop =true;

function navbardrop(){
  if (navdrop){
  hiddenav= document.getElementById('navbar2');
  hiddenav.style.height="400px";
  navdrop=false;
  }
  else{
    hiddenav= document.getElementById('navbar2');
    hiddenav.style.height="0px";
    navdrop =true;
  }
}