$('.popup-image').magnificPopup({
  type: 'image',
  mainClass: 'mfp-with-zoom', 
  gallery:{
      enabled:true
    },

  zoom: {
    enabled: true, 
    duration: 300, 
    easing: 'ease-in-out', 
    opener: function(openerElement) {
      return openerElement.is('img') ? openerElement : openerElement.find('img');
  }
}
});

$('.carousel').carousel()
var macyInstance = Macy({
  container:"#macy-container",
  trueOrder:false,
  columns:3,
  margin:{
    x:39,
    y:38
  },
  waitForImages:true,
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
  let cont=document.getElementsByClassName('demo1');
  let overlay=document.getElementById("overlay")
  


  btnExpand.onclick=function(){
    Array.from(cont).forEach((el) => {
      if(String.toString(el.className).includes('show-img')){
        el.className="demo1";
        macyInstance.recalculate();
      }else{
        overlay.classList.add("new-pictures")
        btnExpand.classList.add("btn-new")
        el.classList.add("show-img")
        macyInstance.recalculate();
      }  
        
    });    
  }


