function toggleshow(){
  const menu = document.getElementById('menu_box')

  menu.style.display="block"

}
function togglehide(){
  const menu = document.getElementById('menu_box')

  menu.style.display="none"

}
$('#banner_carousel').owlCarousel({
loop:true,
nav:false,
margin:0,
dots:false,
autoplay:true,
autoplayTimeout:5000,
 autoHeight:true,
responsive:{
    0:{
        items:1
    },
    600:{
        items:1
    },
    1000:{
        items:1
    }
}
});
$('#slid_carousel').owlCarousel({
loop:true,
nav:false,
margin:5,
dots:true,
autoplay:true,
autoplayTimeout:2000,
autoHeight:true,
responsive:{
    0:{
      items:1
    },
    450:{
        items:2
    },
    650:{
        items:3
    },
    1000:{
        items:3
    }
}
});
