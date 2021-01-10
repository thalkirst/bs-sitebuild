$('a[href*="#"]')
  .click(function (event) {
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
      &&
      location.hostname == this.hostname
    ) {

      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');

      if (target.length) {

        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 300, function () {

          let $target = $(target);
          $target.focus();
          if ($target.is(":focus")) {
            return false;
          } else {
            $target.attr('tabindex', '-1');
            $target.focus();
          };
        });
      }
    }
  });

$('.js-scroll-trigger').click(function () {
  $('.navbar-collapse').collapse('hide');
});

const navbarCollapse = () => {
  if ($("#mainNav").offset().top > 100) {
    $("#mainNav").addClass("navbar-shrink");
  } else {
    $("#mainNav").removeClass("navbar-shrink");
  }
};

navbarCollapse();

$(window).scroll(navbarCollapse);

$('[data-toggle="tooltip"]').tooltip()

const privacyButton = document.querySelector('.privacyButton');
privacyButton.addEventListener('click', () => {
  $('#privacyModal').modal('show')
})

const termsButton = document.querySelector('.termsButton');
termsButton.addEventListener('click', () => {
  $('#termsModal').modal('show')
})

const faqButton = document.querySelector('.faqButton');
faqButton.addEventListener('click', () => {
  $('#faqModal').modal('show')
})
