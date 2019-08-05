$(function() {
  $('.marketing').click(function() {
    deleteDisplayTeam();
    $('.department-mkt').fadeIn('2s');
    $('#team-name').find('p').text('マーケのチーム');
  });

  $('.c-sales').click(function() {
    $('#team-name').find('p').text('C-Salesのチーム');
    deleteDisplayTeam();
    $('.department-c-sales').fadeIn('2s');
  });

  $('.c-cs').click(function() {
    $('#team-name').find('p').text('C-CSのチーム');
    deleteDisplayTeam();
    $('.department-c-cs').fadeIn('2s');
  });

  $('.atone').click(function() {
    $('#team-name').find('p').text('atoneのチーム');
    deleteDisplayTeam();
    $('.department-atone').fadeIn('2s');
  });

  $('.b-sales').click(function() {
    $('#team-name').find('p').text('B-Salesのチーム');
    deleteDisplayTeam();
    $('.department-b-sales').fadeIn('2s');
  });

  $('.b-cs').click(function() {
    $('#team-name').find('p').text('B-CSのチーム');
    deleteDisplayTeam();
    $('.department-b-cs').fadeIn('3s');
  });

  $('.ba').click(function() {
    $('#team-name').find('p').text('BAのチーム');
    deleteDisplayTeam();
    $('.department-ba').fadeIn('3s');
  });

  $('.human-resourses').click(function() {
    $('#team-name').find('p').text('人事総務のチーム');
    deleteDisplayTeam();
    $('.department-hr').fadeIn('3s');
  });

  $('.finances').click(function() {
    $('#team-name').find('p').text('財経のチーム');
    deleteDisplayTeam();
    $('.department-finances').fadeIn('3s');
  });

  $('#mkt-sd').click(function() {
    $('#sd-team').fadeIn();
  });
  $('.close-modal').click(function() {
    deleteDisplayWork();
  });

  $('.link-to-ba').click(function() {
    deleteDisplayWork();
    $('#team-name').find('p').text('BAのチーム');
    deleteDisplayTeam();
    $('.department-ba').fadeIn('3s');
  });
  $('.link-to-dm').click(function() {
    deleteDisplayWork();
    $('#dm-team').fadeIn();
  });


  deleteDisplayTeam = function(){
    $('.department-c-sales').css('display','none');
    $('.department-mkt').css('display','none');
    $('.department-c-cs').css('display','none');
    $('.department-atone').css('display','none');
    $('.department-b-sales').css('display','none');
    $('.department-b-cs').css('display','none');
    $('.department-ba').css('display','none');
    $('.department-hr').css('display','none');
    $('.department-finances').css('display','none');
  };

  deleteDisplayWork = function(){
    $('#sd-team').fadeOut();
    $('#dm-team').fadeOut();
  };
});
