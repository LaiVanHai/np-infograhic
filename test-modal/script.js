$(function() {

  $('#login-show').click(function() {
    $('#login-modal').fadeIn('10000ms');
    var $mail = $('this').find('#mail');
    var $password = $('this').find('#password');
    $mail.fadeOut('1000ms');
    $password.fadeOut('1000ms');
  });

  $('.signup-show').click(function() {
    $('#signup-modal').fadeIn();
  });

  $('.close-modal').click(function() {
    $('#login-modal').fadeOut();
    $('#signup-modal').fadeOut();
  });

  $('.lesson-hover').hover(
    function() {
      $(this).find('.text-contents').addClass('text-active');
    },
    function() {
      $(this).find('.text-contents').removeClass('text-active');
    }
  );

  // FAQのアコーディオン
  $('.faq-list-item').click(function() {
    var $answer = $(this).find('.answer');
    if($answer.hasClass('open')) {
      $answer.removeClass('open');
      // slideUpメソッドを用いて、$answerを隠してください
      $answer.slideUp();
      $(this).find('span').text('+');
      // 子要素のspanタグの中身をtextメソッドを用いて書き換えてください

    } else {
      $answer.addClass('open');
      // slideDownメソッドを用いて、$answerを表示してください
      $answer.slideDown();
      $(this).find('span').text('-');
      // 子要素のspanタグの中身をtextメソッドを用いて書き換えてください

    }
  });
});