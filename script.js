$(function() {
  // 各部署のチームを表示する
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
  // 各部署のチームを表示する

  //マーケ部署のModal
  $('#mkt-sd').click(function() {
    $('#sd-team').fadeIn();
  });
  $('#mkt-dm').click(function() {
    $('#dm-team').fadeIn();
  });
  $('#mkt-design').click(function() {
    $('#design-team').fadeIn();
  });
  $('#mkt-pr').click(function() {
    $('#pr-team').fadeIn();
  });
  // マーケ部署のModal

  // CCS部署のModal
  $('#ccs-store-support').click(function() {
    $('#store-support-team').fadeIn();
  });
  $('#ccs-risk-management').click(function() {
    $('#risk-management-team').fadeIn();
  });
  $('#ccs-payment-management').click(function() {
    $('#payment-management-team').fadeIn();
  });
  $('#ccs-customer-support').click(function() {
    $('#customer-support-team').fadeIn();
  });
  // CCS部署のModal

  // 人事総務部署のModal
  $('#hr-recruitment').click(function() {
    $('#recruitment-team').fadeIn();
  });
  $('#hr-labor').click(function() {
    $('#labor-team').fadeIn();
  });
  $('#hr-director').click(function() {
    $('#director-team').fadeIn();
  });
  $('#hr-other').click(function() {
    $('#other-team').fadeIn();
  });
  // 人事総務部署のModal

  //B-Sales部署のModal
  $('#b-salses-inside').click(function() {
    $('#b-inside-team').fadeIn();
  });
  $('#b-salses-field').click(function() {
    $('#b-field-team').fadeIn();
  });
  $('#b-salses-customer-success').click(function() {
    $('#customer-success-team').fadeIn();
  });
  // B-Sales部署のModal

  //B-CS部署のModal
  $('#b-cs-func-design').click(function() {
    $('#b-cs-func-design-team').fadeIn();
  });
  $('#b-cs-infra-management').click(function() {
    $('#b-cs-infra-management-team').fadeIn();
  });
  $('#b-cs-service-growth').click(function() {
    $('#b-cs-service-growth-team').fadeIn();
  });
  // B-CS部署のModal

  // modalを閉じる
  $('.close-modal').click(function() {
    deleteDisplayWork();
  });

  // 他の部署に繋がることを作成する
  $('.link-to-ba').click(function() {
    deleteDisplayWork();
    $('#team-name').find('p').text('BAのチーム');
    deleteDisplayTeam();
    $('.department-ba').fadeIn('3s');
  });
  $('.link-to-b-sales').click(function() {
    deleteDisplayWork();
    $('#team-name').find('p').text('B-Salesのチーム');
    deleteDisplayTeam();
    $('.department-b-sales').fadeIn('3s');
  });
  $('.link-to-c-sales').click(function() {
    deleteDisplayWork();
    $('#team-name').find('p').text('C-Salesのチーム');
    deleteDisplayTeam();
    $('.department-c-sales').fadeIn('3s');
  });
  $('.link-to-c-cs').click(function() {
    deleteDisplayWork();
    $('#team-name').find('p').text('C-CSのチーム');
    deleteDisplayTeam();
    $('.department-c-cs').fadeIn('3s');
  });
  $('.link-to-b-cs').click(function() {
    deleteDisplayWork();
    $('#team-name').find('p').text('B-CSのチーム');
    deleteDisplayTeam();
    $('.department-b-cs').fadeIn('3s');
  });
  $('.link-to-finances').click(function() {
    deleteDisplayWork();
    $('#team-name').find('p').text('財経');
    deleteDisplayTeam();
    $('.department-finances').fadeIn('3s');
  });
  $('.link-to-mkt').click(function() {
    deleteDisplayWork();
    $('#team-name').find('p').text('Marketing');
    deleteDisplayTeam();
    $('.department-mkt').fadeIn('3s');
  });
  // 他の部署に繋がることを作成する

  // マーケのチームは繋がることを作成する
  $('.link-to-dm').click(function() {
    deleteDisplayWork();
    $('#dm-team').fadeIn();
  });
  $('.link-to-sd').click(function() {
    deleteDisplayWork();
    $('#sd-team').fadeIn();
  });
  $('.link-to-design').click(function() {
    deleteDisplayWork();
    $('#design-team').fadeIn();
  });
  $('.link-to-pr').click(function() {
    deleteDisplayWork();
    $('#pr-team').fadeIn();
  });
  // マーケのチームは繋がることを作成する

  // C-CSのチームは繋がることを作成する
  $('.link-to-customer-support').click(function() {
    deleteDisplayWork();
    $('#customer-support-team').fadeIn();
  });
  $('.link-to-payment-management').click(function() {
    deleteDisplayWork();
    $('#payment-management-team').fadeIn();
  });
  $('.link-to-store-support').click(function() {
    deleteDisplayWork();
    $('#store-support-team').fadeIn();
  });
  $('.link-to-risk-management').click(function() {
    deleteDisplayWork();
    $('#risk-management-team').fadeIn();
  });
  // C-CSのチームは繋がることを作成する

  // 人事総務のチームは繋がることを作成する
  $('.link-to-director').click(function() {
    deleteDisplayWork();
    $('#director-team').fadeIn();
  });
  $('.link-to-labor').click(function() {
    deleteDisplayWork();
    $('#labor-team').fadeIn();
  });
  $('.link-to-other').click(function() {
    deleteDisplayWork();
    $('#other-team').fadeIn();
  });
  $('.link-to-recruitment').click(function() {
    deleteDisplayWork();
    $('#recruitment-team').fadeIn();
  });
  // 人事総務のチームは繋がることを作成する

  // B-Salesのチームは繋がることを作成する
  $('.link-to-b-inside').click(function() {
    deleteDisplayWork();
    $('#b-inside-team').fadeIn();
  });
  $('.link-to-b-field').click(function() {
    deleteDisplayWork();
    $('#b-field-team').fadeIn();
  });
  $('.link-to-customer-success').click(function() {
    deleteDisplayWork();
    $('#customer-success-team').fadeIn();
  });
  // B-Salesのチームは繋がることを作成する

  // B-CSのチームは繋がることを作成する
  $('.link-to-b-cs-func-design').click(function() {
    deleteDisplayWork();
    $('#b-cs-func-design-team').fadeIn();
  });
  $('.link-to-b-cs-infra-management').click(function() {
    deleteDisplayWork();
    $('#b-cs-infra-management-team').fadeIn();
  });
  $('.link-to-b-cs-service-growth').click(function() {
    deleteDisplayWork();
    $('#b-cs-service-growth-team').fadeIn();
  });
  // B-CSのチームは繋がることを作成する

  // 部署の各チームの連携することは表す
  // $('#mkt-button').click(function() {
  //   $('#mkt-link-team').fadeIn();
  // });
  // $('#c-sales-button').click(function() {
  //   $('#c-sales-link-team').fadeIn();
  // });

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
    //マーケ部署のModal
    $('#sd-team').fadeOut();
    $('#dm-team').fadeOut();
    $('#pr-team').fadeOut();
    $('#design-team').fadeOut();

    // CCS部署のModal
    $('#store-support-team').fadeOut();
    $('#risk-management-team').fadeOut();
    $('#payment-management-team').fadeOut();
    $('#customer-support-team').fadeOut();

    // 人事総務部署のModal
    $('#director-team').fadeOut();
    $('#labor-team').fadeOut();
    $('#other-team').fadeOut();
    $('#recruitment-team').fadeOut();

    //B-Sales部署のModal
    $('#b-inside-team').fadeOut();
    $('#b-field-team').fadeOut();
    $('#customer-success-team').fadeOut();

    //B-CS部署のModal
    $('#b-cs-func-design-team').fadeOut();
    $('#b-cs-infra-management-team').fadeOut();
    $('#b-cs-service-growth-team').fadeOut();

    // $('#mkt-link-team').fadeOut();
    // $('#c-sales-link-team').fadeOut();
  };

  // Modalは外にClickするとModalを閉じる
  var modal_sd = document.getElementById('sd-team');
  var modal_dm = document.getElementById('dm-team');
  var modal_pr = document.getElementById('pr-team');
  var modal_design = document.getElementById('design-team');
  var modal_store_support = document.getElementById('store-support-team');
  var modal_risk_management = document.getElementById('risk-management-team');
  var modal_payment_management = document.getElementById('payment-management-team');
  var modal_customer_support = document.getElementById('customer-support-team');
  var modal_director = document.getElementById('director-team');
  var modal_labor = document.getElementById('labor-team');
  var modal_other = document.getElementById('other-team');
  var modal_recruitment = document.getElementById('recruitment-team');
  var modal_b_inside = document.getElementById('b-inside-team');
  var modal_b_field = document.getElementById('b-field-team');
  var modal_customer_success = document.getElementById('customer-success-team');
  var modal_b_cs_func_design = document.getElementById('b-cs-func-design-team');
  var modal_b_cs_infra_management = document.getElementById('b-cs-infra-management-team');
  var modal_b_cs_service_growth = document.getElementById('b-cs-service-growth-team');
  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function(event) {
    if (event.target == modal_sd) {
      modal_sd.style.display = "none";
    }
    if (event.target == modal_dm) {
      modal_dm.style.display = "none";
    }
    if (event.target == modal_pr) {
      modal_pr.style.display = "none";
    }
    if (event.target == modal_design) {
      modal_design.style.display = "none";
    }
    if (event.target == modal_store_support) {
      modal_store_support.style.display = "none";
    }
    if (event.target == modal_risk_management) {
      modal_risk_management.style.display = "none";
    }
    if (event.target == modal_payment_management) {
      modal_payment_management.style.display = "none";
    }
    if (event.target == modal_customer_support) {
      modal_customer_support.style.display = "none";
    }
    if (event.target == modal_director) {
      modal_director.style.display = "none";
    }
    if (event.target == modal_labor) {
      modal_labor.style.display = "none";
    }
    if (event.target == modal_other) {
      modal_other.style.display = "none";
    }
    if (event.target == modal_recruitment) {
      modal_recruitment.style.display = "none";
    }
    if (event.target == modal_b_inside) {
      modal_b_inside.style.display = "none";
    }
    if (event.target == modal_b_field) {
      modal_b_field.style.display = "none";
    }
    if (event.target == modal_customer_success) {
      modal_customer_success.style.display = "none";
    }
    if (event.target == modal_b_cs_func_design) {
      modal_b_cs_func_design.style.display = "none";
    }
    if (event.target == modal_b_cs_infra_management) {
      modal_b_cs_infra_management.style.display = "none";
    }
    if (event.target == modal_b_cs_service_growth) {
      modal_b_cs_service_growth.style.display = "none";
    }
  }
});
