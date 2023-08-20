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
  let cont=document.getElementById('container');
  


  btnExpand.onclick=function(){
    Array.from(cont).forEach((el) => {
      
      console.log(el.tagName);
    });/*
    if(cont.className=='hidden-img'){
      cont.className="";
      btnExpand.innerHTML="Zwiń";
      console.log("First if")
    }else{
      cont.classList.add("hidden-img")
      btnExpand.innerHTML="Rozwiń";
      console.log("Else section here")
    }  */
  }