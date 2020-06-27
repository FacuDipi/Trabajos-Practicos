$(w).resize(function(){ //Update dimensions on resize
    sw = document.documentElement.clientWidth;
    sh = document.documentElement.clientHeight;
    checkMobile();
  });
    
  //Check if Mobile
  function checkMobile() {
    mobile = (sw > breakpoint) ? false : true;
  
    if (!mobile) { //If Not Mobile
      $('[role="tabpanel"],#nav,#search').show(); //Show full navigation and search
    } else { //Hide 
      if(!$('#nav-anchors a').hasClass('active')) {
        $('#nav,#search').hide(); //Hide full navigation and search
      }
    }
  }

  const scrollToTop = () => {
    const c = document.documentElement.scrollTop || document.body.scrollTop;
    if (c > 0) {
      window.requestAnimationFrame(scrollToTop);
      window.scrollTo(0, c - c / 8);
    }
  };