
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

window.addEventListener('scroll', () => {
  window.gear_bottom.style.transform = `rotate(+${window.scrollY / 10}deg)`
})

window.addEventListener('scroll', () => {
  window.gear_left_content11.style.transform = `rotate(-${window.scrollY / 10}deg)`
})

window.addEventListener('scroll', () => {
  window.gear_right_content11.style.transform = `rotate(+${window.scrollY / 10}deg)`
})

window.addEventListener('scroll', () => {
  window.gear_firsr_lesson.style.transform = `rotate(+${window.scrollY / 10}deg)`
})

window.addEventListener('scroll', () => {
  window.gear_firsr_lesson_right.style.transform = `rotate(-${window.scrollY / 10}deg)`
})


function animateValue(id, start, end, duration) {
  // assumes integer values for start and end
  
  var obj = document.getElementById(id);
  var range = end - start;
  // no timer shorter than 50ms (not really visible any way)
  var minTimer = 50;
  // calc step time to show all interediate values
  var stepTime = Math.abs(Math.floor(duration / range));
  
  // never go below minTimer
  stepTime = Math.max(stepTime, minTimer);
  
  // get current time and calculate desired end time
  var startTime = new Date().getTime();
  var endTime = startTime + duration;
  var timer;

  function run() {
      var now = new Date().getTime();
      var remaining = Math.max((endTime - now) / duration, 0);
      var value = Math.round(end - (remaining * range));
      obj.innerHTML = value;
      if (value == end) {
          clearInterval(timer);
      }
  }
  
  timer = setInterval(run, stepTime);
  run();
}




animateValue("value", 0, 586, 5000);

