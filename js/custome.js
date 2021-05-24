window.onload = function () {
    alert("Hey, I'm Nur Mohammad & welcome to my website!")
    const burger = document.querySelector('.burger');
    const burger__component = document.querySelector('.burger__component');
    const simple = document.querySelector('.simple__identity');
    const navbar__wrapper = document.querySelector('.navbar_wrapper');
    let isOpen = false;
    burger.addEventListener('click', function () {
        openMenu();
    });

    function openMenu() {
        if (!isOpen) {
            burger.classList.add('open');
            burger__component.classList.add('open');
            simple.classList.add('open');
            navbar__wrapper.classList.add('open');

            isOpen = true;
        } else {
            burger.classList.remove('open');
            burger__component.classList.remove('open');
            simple.classList.remove('open');
            navbar__wrapper.classList.remove('open');

            isOpen = false;
        }
  }

  //Wow js

  wow = new WOW({
    boxClass: 'wow',
    animateClass: 'animated',
    offset: 0,
    mobile: true,
    live: true 
  });
  wow.init();
}

$(document).ready(function () {

  $(window).scroll(function () {
    if ($(this).scrollTop() > 300) {
      $('#scrollTop').fadeIn(500)
    } else {
      $('#scrollTop').fadeOut(500)
    }
  })
    //   Smooth scrolling effect

    var scrolltoOffset = $('#header').outerHeight() - 25;
    if (window.matchMedia("(max-width: 991px)").matches) {
      scrolltoOffset += 25;
    }
    $(document).on('click', '.roww a, #scrollTop', function(e) {
      if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
        e.preventDefault();
        var target = $(this.hash);
        if (target.length) {
  
          var scrollto = target.offset().top - scrolltoOffset;
  
          if ($(this).attr("href") == '#header') {
            scrollto = 0;
          }
  
          $('html, body').animate({
            scrollTop: scrollto
          }, 1500, 'easeInOutExpo');
            
          if ($(this).parents('.roww').length) {
            $('.roww .active').removeClass('active');
            $(this).closest('li').addClass('active');
          }
            
          return false;
        }
      }
    });

    var nav_sections = $('section');
    var main_nav = $('.roww');
  
    $(window).on('scroll', function() {
      var cur_pos = $(this).scrollTop() + 100;
  
      nav_sections.each(function() {
        var top = $(this).offset().top,
          bottom = top + $(this).outerHeight();
  
        if (cur_pos >= top && cur_pos <= bottom) {
          if (cur_pos <= bottom) {
            main_nav.find('li').removeClass('active');
          }
          main_nav.find('a[href="#' + $(this).attr('id') + '"]').parent('li').addClass('active');
        }
        if (cur_pos < 300) {
          $(".navbar ul:first li:first").addClass('active');
        }
      });
    });
    
    // Inactive all default feature

    $(document).bind("contextmenu", (e) => {
        e.preventDefault()
        alert('You can\'t inspect and see the codes 😎😎😎')
    })

    $(document).keydown(e => {
        if (e.which === 123) {
            alert('You can\'t inspect and see the codes 😎😎😎')
            return false
        }
    })

    $(document).bind('keydown', function (e) {
        if (e.ctrlKey && (e.which == 83)) {
            e.preventDefault()
            alert('Trying to download. Hey, remember that you can\'t 😎😎😎')
            return false
        }
    })

    window.oncontextmenu = function () {
        return false;
    }
    $(document).keydown(function (event) {
        if (event.keyCode == 123) {
            alert('You can\'t inspect and see the codes 😎😎😎')
            return false;
        }
        else if ((event.ctrlKey && event.shiftKey && event.keyCode == 73) || (event.ctrlKey && event.shiftKey && event.keyCode == 74)) {
            alert('Trying to download. Hey, remember that you can\'t 😎😎😎')
            return false;
        }
    });
});

// Preloader

$(window).on('load', function () {
  $('.preloader').fadeOut(500);
});
