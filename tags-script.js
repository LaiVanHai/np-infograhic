$(function() {
  // マーケのTags
  $('#tag-mkt-ads').click(function(){
    $('#mkt-sd').fadeIn();
    $('#mkt-dm').fadeIn();
    $('#mkt-pr').fadeOut();
    $('#mkt-design').fadeOut();

    $('#tag-ads').addClass('clicked-color');
    $('#tag-design').removeClass('clicked-color');
    $('#tag-service-show').removeClass('clicked-color');
  });
  $('#tag-mkt-design').click(function(){
    $('#mkt-sd').fadeOut();
    $('#mkt-dm').fadeOut();
    $('#mkt-pr').fadeOut();
    $('#mkt-design').fadeIn();

    $('#tag-ads').removeClass('clicked-color');
    $('#tag-design').addClass('clicked-color');
    $('#tag-service-show').removeClass('clicked-color');
  });
  $('#tag-mkt-service-show').click(function(){
    $('#mkt-sd').fadeIn();
    $('#mkt-dm').fadeIn();
    $('#mkt-pr').fadeIn();
    $('#mkt-design').fadeOut();

    $('#tag-ads').removeClass('clicked-color');
    $('#tag-design').removeClass('clicked-color');
    $('#tag-service-show').addClass('clicked-color');
  });
  $('#tag-mkt').click(function(){
    $('#mkt-sd').fadeIn();
    $('#mkt-dm').fadeIn();
    $('#mkt-pr').fadeIn();
    $('#mkt-design').fadeIn();

    $('#tag-ads').removeClass('clicked-color');
    $('#tag-design').removeClass('clicked-color');
    $('#tag-service-show').removeClass('clicked-color');
  });
  // マーケのTags

  // BCSのTags
  $('#tag-b-cs-dev').click(function(){
    $('#b-cs-infra-management').fadeIn();
    $('#b-cs-func-design').fadeIn();
    $('#b-cs-service-growth').fadeOut();

    $('#tag-b-cs-dev').addClass('clicked-color');
    $('#tag-b-cs-efficient').removeClass('clicked-color');
    $('#tag-b-cs-policy').removeClass('clicked-color');
  });
  $('#tag-b-cs-efficient').click(function(){
    $('#b-cs-infra-management').fadeIn();
    $('#b-cs-func-design').fadeOut();
    $('#b-cs-service-growth').fadeIn();

    $('#tag-b-cs-dev').removeClass('clicked-color');
    $('#tag-b-cs-efficient').addClass('clicked-color');
    $('#tag-b-cs-policy').removeClass('clicked-color');
  });
  $('#tag-b-cs-policy').click(function(){
    $('#b-cs-infra-management').fadeOut();
    $('#b-cs-func-design').fadeIn();
    $('#b-cs-service-growth').fadeIn();

    $('#tag-b-cs-dev').removeClass('clicked-color');
    $('#tag-b-cs-efficient').removeClass('clicked-color');
    $('#tag-b-cs-policy').addClass('clicked-color');
  });
  $('#tag-b-cs').click(function(){
    $('#b-cs-infra-management').fadeIn();
    $('#b-cs-func-design').fadeIn();
    $('#b-cs-service-growth').fadeIn();

    $('#tag-b-cs-dev').removeClass('clicked-color');
    $('#tag-b-cs-efficient').removeClass('clicked-color');
    $('#tag-b-cs-policy').removeClass('clicked-color');
  });
  // BCSのTags
});
