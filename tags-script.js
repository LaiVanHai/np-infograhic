$(function() {
  // マーケのTags
  $('#tag-mkt-ads').click(function(){
    $('#mkt-sd').fadeIn();
    $('#mkt-dm').fadeIn();
    $('#mkt-pr').fadeOut();
    $('#mkt-design').fadeOut();

    $('#tag-mkt-ads').addClass('clicked-color');
    $('#tag-mkt-design').removeClass('clicked-color');
    $('#tag-mkt-service-show').removeClass('clicked-color');
  });
  $('#tag-mkt-design').click(function(){
    $('#mkt-sd').fadeOut();
    $('#mkt-dm').fadeOut();
    $('#mkt-pr').fadeOut();
    $('#mkt-design').fadeIn();

    $('#tag-mkt-ads').removeClass('clicked-color');
    $('#tag-mkt-design').addClass('clicked-color');
    $('#tag-mkt-service-show').removeClass('clicked-color');
  });
  $('#tag-mkt-service-show').click(function(){
    $('#mkt-sd').fadeIn();
    $('#mkt-dm').fadeIn();
    $('#mkt-pr').fadeIn();
    $('#mkt-design').fadeOut();

    $('#tag-mkt-ads').removeClass('clicked-color');
    $('#tag-mkt-design').removeClass('clicked-color');
    $('#tag-mkt-service-show').addClass('clicked-color');
  });
  $('#tag-mkt').click(function(){
    $('#mkt-sd').fadeIn();
    $('#mkt-dm').fadeIn();
    $('#mkt-pr').fadeIn();
    $('#mkt-design').fadeIn();

    $('#tag-mkt-ads').removeClass('clicked-color');
    $('#tag-mkt-design').removeClass('clicked-color');
    $('#tag-mkt-service-show').removeClass('clicked-color');
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

  // B-SalesのTags
  $('#tag-b-sales-strategy-design').click(function(){
    $('#b-salses-inside').fadeIn();
    $('#b-salses-field').fadeIn();
    $('#b-salses-customer-success').fadeOut();

    $('#tag-b-sales-strategy-design').addClass('clicked-color');
    $('#tag-b-sales-stable-operation').removeClass('clicked-color');
    $('#tag-b-sales').removeClass('clicked-color');
  });
  $('#tag-b-sales-stable-operation').click(function(){
    $('#b-salses-inside').fadeOut();
    $('#b-salses-field').fadeIn();
    $('#b-salses-customer-success').fadeIn();

    $('#tag-b-sales-strategy-design').removeClass('clicked-color');
    $('#tag-b-sales-stable-operation').addClass('clicked-color');
    $('#tag-b-sales').removeClass('clicked-color');
  });
  $('#tag-b-sales').click(function(){
    $('#b-salses-inside').fadeIn();
    $('#b-salses-field').fadeIn();
    $('#b-salses-customer-success').fadeIn();

    $('#tag-b-sales-strategy-design').removeClass('clicked-color');
    $('#tag-b-sales-stable-operation').removeClass('clicked-color');
    $('#tag-b-sales').removeClass('clicked-color');
  });
  // B-SalesのTags

  // C-SalesのTags
  $('#tag-c-sales-q-a').click(function(){
    $('#c-sales-inside').fadeIn();
    $('#c-sales-support').fadeIn();
    $('#c-sales-field').fadeOut();

    $('#tag-c-sales-q-a').addClass('clicked-color');
    $('#tag-c-sales-negotiation').removeClass('clicked-color');
  });
  $('#tag-c-sales-negotiation').click(function(){
    $('#c-sales-inside').fadeIn();
    $('#c-sales-support').fadeOut();
    $('#c-sales-field').fadeIn();

    $('#tag-c-sales-negotiation').addClass('clicked-color');
    $('#tag-c-sales-q-a').removeClass('clicked-color');
  });
  $('#tag-c-sales').click(function(){
    $('#c-sales-inside').fadeIn();
    $('#c-sales-support').fadeIn();
    $('#c-sales-field').fadeIn();

    $('#tag-c-sales-q-a').removeClass('clicked-color');
    $('#tag-c-sales-negotiation').removeClass('clicked-color');
  });
  // C-SalesのTags

  // 法務のTags
  $('#tag-legal-hr').click(function(){
    legal_display_all();

    $('#item1').css({"display": "none"})
    $('#item1-1').css({"display": "none"})
    $('#item1-2').css({"display": "none"})
    $('#item1-3').css({"display": "none"})
    $('#item1-4').css({"display": "none"})
    $('.item1').find('.work-item-level1').css({"opacity": 0})
    $('.item1-sub1').find('.work-item-level2').css({"opacity": 0})
    $('.item1-sub2').find('.work-item-level2').css({"opacity": 0})
    $('.item1-sub3').find('.work-item-level2').css({"opacity": 0})
    $('.item1-sub4').find('.work-item-level2').css({"opacity": 0})
    $('#item3').css({"display": "none"})
    $('#item3-1').css({"display": "none"})
    $('#item3-2').css({"display": "none"})
    $('#item3-3').css({"display": "none"})
    $('.item3').find('.work-item-level1').css({"opacity": 0})
    $('.item3-sub1').find('.work-item-level2').css({"opacity": 0})
    $('.item3-sub2').find('.work-item-level2').css({"opacity": 0})
    $('.item3-sub3').find('.work-item-level2').css({"opacity": 0})
    $('#item4').css({"display": "none"})
    $('#item4-1').css({"display": "none"})
    $('#item4-2').css({"display": "none"})
    $('#item4-3').css({"display": "none"})
    $('.item4').find('.work-item-level1').css({"opacity": 0})
    $('.item4-sub1').find('.work-item-level2').css({"opacity": 0})
    $('.item4-sub2').find('.work-item-level2').css({"opacity": 0})
    $('.item4-sub3').find('.work-item-level2').css({"opacity": 0})
    $('.item5').find('.work-item-level2').css({"opacity": 0})
    $('.item6').find('.work-item-level2').css({"opacity": 0})
    $('#item5').css({"display": "none"})
    $('#item6').css({"display": "none"})

    $('#tag-legal-hr').addClass('clicked-color');
    $('#tag-legal-finances').removeClass('clicked-color');
    $('#tag-legal-all-team').removeClass('clicked-color');
    $('#tag-legal-biz-dev').removeClass('clicked-color');
    $('#tag-legal-c-cs').removeClass('clicked-color');
    $('#tag-legal-b-cs').removeClass('clicked-color');
    $('#tag-legal').removeClass('clicked-color');
  });
  $('#tag-legal-finances').click(function(){
    legal_display_all();

    $('#item3').css({"display": "none"})
    $('#item3-1').css({"display": "none"})
    $('#item3-2').css({"display": "none"})
    $('#item3-3').css({"display": "none"})
    $('.item3').find('.work-item-level1').css({"opacity": 0})
    $('.item3-sub1').find('.work-item-level2').css({"opacity": 0})
    $('.item3-sub2').find('.work-item-level2').css({"opacity": 0})
    $('.item3-sub3').find('.work-item-level2').css({"opacity": 0})
    $('#item4').css({"display": "none"})
    $('#item4-1').css({"display": "none"})
    $('#item4-2').css({"display": "none"})
    $('#item4-3').css({"display": "none"})
    $('.item4').find('.work-item-level1').css({"opacity": 0})
    $('.item4-sub1').find('.work-item-level2').css({"opacity": 0})
    $('.item4-sub2').find('.work-item-level2').css({"opacity": 0})
    $('.item4-sub3').find('.work-item-level2').css({"opacity": 0})
    $('.item5').find('.work-item-level2').css({"opacity": 0})
    $('.item6').find('.work-item-level2').css({"opacity": 0})
    $('.item7').find('.work-item-level2').css({"opacity": 0})
    $('#item5').css({"display": "none"})
    $('#item6').css({"display": "none"})
    $('#item7').css({"display": "none"})


    $('#tag-legal-finances').addClass('clicked-color');
    $('#tag-legal-hr').removeClass('clicked-color');
    $('#tag-legal-all-team').removeClass('clicked-color');
    $('#tag-legal-biz-dev').removeClass('clicked-color');
    $('#tag-legal-c-cs').removeClass('clicked-color');
    $('#tag-legal-b-cs').removeClass('clicked-color');
    $('#tag-legal').removeClass('clicked-color');
  });
  $('#tag-legal-all-team').click(function(){
    legal_display_all();
    $('#item1').css({"display": "none"})
    $('#item1-1').css({"display": "none"})
    $('#item1-2').css({"display": "none"})
    $('#item1-3').css({"display": "none"})
    $('#item1-4').css({"display": "none"})
    $('.item1').find('.work-item-level1').css({"opacity": 0})
    $('.item1-sub1').find('.work-item-level2').css({"opacity": 0})
    $('.item1-sub2').find('.work-item-level2').css({"opacity": 0})
    $('.item1-sub3').find('.work-item-level2').css({"opacity": 0})
    $('.item1-sub4').find('.work-item-level2').css({"opacity": 0})
    $('#item2').css({"display": "none"})
    $('#item2-1').css({"display": "none"})
    $('#item2-2').css({"display": "none"})
    $('#item2-3').css({"display": "none"})
    $('.item2').find('.work-item-level1').css({"opacity": 0})
    $('.item2-sub1').find('.work-item-level2').css({"opacity": 0})
    $('.item2-sub2').find('.work-item-level2').css({"opacity": 0})
    $('.item2-sub3').find('.work-item-level2').css({"opacity": 0})
    $('#item4').css({"display": "none"})
    $('#item4-1').css({"display": "none"})
    $('#item4-2').css({"display": "none"})
    $('#item4-3').css({"display": "none"})
    $('.item4').find('.work-item-level1').css({"opacity": 0})
    $('.item4-sub1').find('.work-item-level2').css({"opacity": 0})
    $('.item4-sub2').find('.work-item-level2').css({"opacity": 0})
    $('.item4-sub3').find('.work-item-level2').css({"opacity": 0})
    $('.item5').find('.work-item-level2').css({"opacity": 0})
    $('.item6').find('.work-item-level2').css({"opacity": 0})
    $('#item5').css({"display": "none"})
    $('#item6').css({"display": "none"})
    $('#item7').css({"display": "none"})
    $('.item7').find('.work-item-level2').css({"opacity": 0})

    $('#tag-legal-all-team').addClass('clicked-color');
    $('#tag-legal-hr').removeClass('clicked-color');
    $('#tag-legal-finances').removeClass('clicked-color');
    $('#tag-legal-biz-dev').removeClass('clicked-color');
    $('#tag-legal-c-cs').removeClass('clicked-color');
    $('#tag-legal-b-cs').removeClass('clicked-color');
    $('#tag-legal').removeClass('clicked-color');
  });

  $('#tag-legal-biz-dev').click(function(){
    legal_display_all();

    $('#item1').css({"display": "none"})
    $('#item1-1').css({"display": "none"})
    $('#item1-2').css({"display": "none"})
    $('#item1-3').css({"display": "none"})
    $('#item1-4').css({"display": "none"})
    $('.item1').find('.work-item-level1').css({"opacity": 0})
    $('.item1-sub1').find('.work-item-level2').css({"opacity": 0})
    $('.item1-sub2').find('.work-item-level2').css({"opacity": 0})
    $('.item1-sub3').find('.work-item-level2').css({"opacity": 0})
    $('.item1-sub4').find('.work-item-level2').css({"opacity": 0})
    $('#item2').css({"display": "none"})
    $('#item2-1').css({"display": "none"})
    $('#item2-2').css({"display": "none"})
    $('#item2-3').css({"display": "none"})
    $('.item2').find('.work-item-level1').css({"opacity": 0})
    $('.item2-sub1').find('.work-item-level2').css({"opacity": 0})
    $('.item2-sub2').find('.work-item-level2').css({"opacity": 0})
    $('.item2-sub3').find('.work-item-level2').css({"opacity": 0})
    $('#item3').css({"display": "none"})
    $('#item3-1').css({"display": "none"})
    $('#item3-2').css({"display": "none"})
    $('#item3-3').css({"display": "none"})
    $('.item3').find('.work-item-level1').css({"opacity": 0})
    $('.item3-sub1').find('.work-item-level2').css({"opacity": 0})
    $('.item3-sub2').find('.work-item-level2').css({"opacity": 0})
    $('.item3-sub3').find('.work-item-level2').css({"opacity": 0})
    $('#item4').css({"display": "none"})
    $('#item4-1').css({"display": "none"})
    $('#item4-2').css({"display": "none"})
    $('#item4-3').css({"display": "none"})
    $('.item4').find('.work-item-level1').css({"opacity": 0})
    $('.item4-sub1').find('.work-item-level2').css({"opacity": 0})
    $('.item4-sub2').find('.work-item-level2').css({"opacity": 0})
    $('.item4-sub3').find('.work-item-level2').css({"opacity": 0})
    $('.item5').find('.work-item-level2').css({"opacity": 0})
    $('.item7').find('.work-item-level2').css({"opacity": 0})
    $('#item5').css({"display": "none"})
    $('#item7').css({"display": "none"})

    $('#tag-legal-biz-dev').addClass('clicked-color');
    $('#tag-legal-hr').removeClass('clicked-color');
    $('#tag-legal-finances').removeClass('clicked-color');
    $('#tag-legal-all-team').removeClass('clicked-color');
    $('#tag-legal-c-cs').removeClass('clicked-color');
    $('#tag-legal-b-cs').removeClass('clicked-color');
    $('#tag-legal').removeClass('clicked-color');
  });

  $('#tag-legal-c-cs').click(function(){
    legal_display_all();

    $('#item1').css({"display": "none"})
    $('#item1-1').css({"display": "none"})
    $('#item1-2').css({"display": "none"})
    $('#item1-3').css({"display": "none"})
    $('#item1-4').css({"display": "none"})
    $('.item1').find('.work-item-level1').css({"opacity": 0})
    $('.item1-sub1').find('.work-item-level2').css({"opacity": 0})
    $('.item1-sub2').find('.work-item-level2').css({"opacity": 0})
    $('.item1-sub3').find('.work-item-level2').css({"opacity": 0})
    $('.item1-sub4').find('.work-item-level2').css({"opacity": 0})
    $('#item2').css({"display": "none"})
    $('#item2-1').css({"display": "none"})
    $('#item2-2').css({"display": "none"})
    $('#item2-3').css({"display": "none"})
    $('.item2').find('.work-item-level1').css({"opacity": 0})
    $('.item2-sub1').find('.work-item-level2').css({"opacity": 0})
    $('.item2-sub2').find('.work-item-level2').css({"opacity": 0})
    $('.item2-sub3').find('.work-item-level2').css({"opacity": 0})
    $('#item3').css({"display": "none"})
    $('#item3-1').css({"display": "none"})
    $('#item3-2').css({"display": "none"})
    $('#item3-3').css({"display": "none"})
    $('.item3').find('.work-item-level1').css({"opacity": 0})
    $('.item3-sub1').find('.work-item-level2').css({"opacity": 0})
    $('.item3-sub2').find('.work-item-level2').css({"opacity": 0})
    $('.item3-sub3').find('.work-item-level2').css({"opacity": 0})
    $('#item4').css({"display": "none"})
    $('#item4-1').css({"display": "none"})
    $('#item4-2').css({"display": "none"})
    $('#item4-3').css({"display": "none"})
    $('.item4').find('.work-item-level1').css({"opacity": 0})
    $('.item4-sub1').find('.work-item-level2').css({"opacity": 0})
    $('.item4-sub2').find('.work-item-level2').css({"opacity": 0})
    $('.item4-sub3').find('.work-item-level2').css({"opacity": 0})
    $('.item7').find('.work-item-level2').css({"opacity": 0})
    $('#item7').css({"display": "none"})

    $('#tag-legal-c-cs').addClass('clicked-color');
    $('#tag-legal-hr').removeClass('clicked-color');
    $('#tag-legal-finances').removeClass('clicked-color');
    $('#tag-legal-all-team').removeClass('clicked-color');
    $('#tag-legal-biz-dev').removeClass('clicked-color');
    $('#tag-legal-b-cs').removeClass('clicked-color');
    $('#tag-legal').removeClass('clicked-color');
  });

  $('#tag-legal-b-cs').click(function(){
    legal_display_all();

    $('#item1').css({"display": "none"})
    $('#item1-1').css({"display": "none"})
    $('#item1-2').css({"display": "none"})
    $('#item1-3').css({"display": "none"})
    $('#item1-4').css({"display": "none"})
    $('.item1').find('.work-item-level1').css({"opacity": 0})
    $('.item1-sub1').find('.work-item-level2').css({"opacity": 0})
    $('.item1-sub2').find('.work-item-level2').css({"opacity": 0})
    $('.item1-sub3').find('.work-item-level2').css({"opacity": 0})
    $('.item1-sub4').find('.work-item-level2').css({"opacity": 0})
    $('#item2').css({"display": "none"})
    $('#item2-1').css({"display": "none"})
    $('#item2-2').css({"display": "none"})
    $('#item2-3').css({"display": "none"})
    $('.item2').find('.work-item-level1').css({"opacity": 0})
    $('.item2-sub1').find('.work-item-level2').css({"opacity": 0})
    $('.item2-sub2').find('.work-item-level2').css({"opacity": 0})
    $('.item2-sub3').find('.work-item-level2').css({"opacity": 0})
    $('#item3').css({"display": "none"})
    $('#item3-1').css({"display": "none"})
    $('#item3-2').css({"display": "none"})
    $('#item3-3').css({"display": "none"})
    $('.item3').find('.work-item-level1').css({"opacity": 0})
    $('.item3-sub1').find('.work-item-level2').css({"opacity": 0})
    $('.item3-sub2').find('.work-item-level2').css({"opacity": 0})
    $('.item3-sub3').find('.work-item-level2').css({"opacity": 0})
    $('#item4').css({"display": "none"})
    $('#item4-1').css({"display": "none"})
    $('#item4-2').css({"display": "none"})
    $('#item4-3').css({"display": "none"})
    $('.item4').find('.work-item-level1').css({"opacity": 0})
    $('.item4-sub1').find('.work-item-level2').css({"opacity": 0})
    $('.item4-sub2').find('.work-item-level2').css({"opacity": 0})
    $('.item4-sub3').find('.work-item-level2').css({"opacity": 0})
    $('.item7').find('.work-item-level2').css({"opacity": 0})
    $('#item7').css({"display": "none"})

    $('#tag-legal-b-cs').addClass('clicked-color');
    $('#tag-legal-hr').removeClass('clicked-color');
    $('#tag-legal-finances').removeClass('clicked-color');
    $('#tag-legal-all-team').removeClass('clicked-color');
    $('#tag-legal-biz-dev').removeClass('clicked-color');
    $('#tag-legal-c-cs').removeClass('clicked-color');
    $('#tag-legal').removeClass('clicked-color');
  });

  $('#tag-legal').click(function(){
    legal_display_all();

    $('#tag-legal-hr').removeClass('clicked-color');
    $('#tag-legal-finances').removeClass('clicked-color');
    $('#tag-legal-all-team').removeClass('clicked-color');
    $('#tag-legal-biz-dev').removeClass('clicked-color');
    $('#tag-legal-c-cs').removeClass('clicked-color');
    $('#tag-legal-b-cs').removeClass('clicked-color');
  });

  legal_display_all = function() {
    $('#item1').css({"display": "block"})
    $('#item1-1').css({"display": "block"})
    $('#item1-2').css({"display": "block"})
    $('#item1-3').css({"display": "block"})
    $('#item1-4').css({"display": "block"})
    $('.item1').find('.work-item-level1').css({"opacity": 1})
    $('.item1-sub1').find('.work-item-level2').css({"opacity": 1})
    $('.item1-sub2').find('.work-item-level2').css({"opacity": 1})
    $('.item1-sub3').find('.work-item-level2').css({"opacity": 1})
    $('.item1-sub4').find('.work-item-level2').css({"opacity": 1})
    $('#item2').css({"display": "block"})
    $('#item2-1').css({"display": "block"})
    $('#item2-2').css({"display": "block"})
    $('#item2-3').css({"display": "block"})
    $('.item2').find('.work-item-level1').css({"opacity": 1})
    $('.item2-sub1').find('.work-item-level2').css({"opacity": 1})
    $('.item2-sub2').find('.work-item-level2').css({"opacity": 1})
    $('.item2-sub3').find('.work-item-level2').css({"opacity": 1})
    $('#item3').css({"display": "block"})
    $('#item3-1').css({"display": "block"})
    $('#item3-2').css({"display": "block"})
    $('#item3-3').css({"display": "block"})
    $('.item3').find('.work-item-level1').css({"opacity": 1})
    $('.item3-sub1').find('.work-item-level2').css({"opacity": 1})
    $('.item3-sub2').find('.work-item-level2').css({"opacity": 1})
    $('.item3-sub3').find('.work-item-level2').css({"opacity": 1})
    $('#item4').css({"display": "block"})
    $('#item4-1').css({"display": "block"})
    $('#item4-2').css({"display": "block"})
    $('#item4-3').css({"display": "block"})
    $('.item4').find('.work-item-level1').css({"opacity": 1})
    $('.item4-sub1').find('.work-item-level2').css({"opacity": 1})
    $('.item4-sub2').find('.work-item-level2').css({"opacity": 1})
    $('.item4-sub3').find('.work-item-level2').css({"opacity": 1})
    $('.item5').find('.work-item-level2').css({"opacity": 1})
    $('.item6').find('.work-item-level2').css({"opacity": 1})
    $('.item7').find('.work-item-level2').css({"opacity": 1})
    $('#item5').css({"display": "block"})
    $('#item6').css({"display": "block"})
    $('#item7').css({"display": "block"})
  };
  // 法務のTags
});
