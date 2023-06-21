
$(function() {
  var $speed = 200;
  var $class = 'opened';
  var $class_open = '.faq-answer';

  $(document).ready(function() {
    $('.faq-question').on('click', function() {
      $ul = $(this).closest('ul');
      $answer = $(this).closest('li').find($class_open);

      if (!$(this).closest('li').hasClass($class)) {

        $ul.find('li').each(function() {
          if ($(this).hasClass($class))
            $(this).removeClass($class).find($class_open).slideUp($speed);
        });
      }

      $answer
        .slideToggle($speed)
        .closest('li')
        .toggleClass($class);
    });
  });
});


window.addEventListener('scroll', () => {
  window.rightgear.style.transform = `rotate(-${window.scrollY / 10}deg)`
})

window.addEventListener('scroll', () => {
  window.leftgear.style.transform = `rotate(+${window.scrollY / 10}deg)`
})


window.addEventListener('scroll', () => {
  window.gear_content3.style.transform = `rotate(+${window.scrollY / 10}deg)`
})

window.addEventListener('scroll', () => {
  window.gear_content3_1.style.transform = `rotate(-${window.scrollY / 10}deg)`
})

window.addEventListener('scroll', () => {
  window.gear_our_mech.style.transform = `rotate(-${window.scrollY / 10}deg)`
})

window.addEventListener('scroll', () => {
  window.gear_why_we.style.transform = `rotate(+${window.scrollY / 10}deg)`
})



