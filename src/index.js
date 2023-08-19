$('.carousel').carousel()
var macyInstance = Macy({
  container:"#macy-container",
  trueOrder:false,
  columns:3,
  margin:{
    x:39,
    y:38
  },
  waitForImages:false,
  useOwnImageLoader:false,
  mobileFirst:false,
  breakAt:{
    1200:{
      columns:3,
      margin:{
        x:30,
        y:20
      }
    },
    940:{
      columns:3,
      margin:{
        y:15
      }
    },
    520:{
      columns:2,
      margin:12
    },
    400:{
      columns:2
    }
  }
  });

  let btnExpand=document.getElementById('btnExpand');
  let overlay=document.getElementById('overlay-fig');

  btnExpand.onclick=function(){
    if(Array.from(overlay.classList).includes('new-pictures')){
      overlay.className="overlay";
      btnExpand.innerHTML="Rozńwi";
    }else{
      overlay.classList.add(" new-picture");
      overlay.innerHTML="Zwiń";
    }  
  }