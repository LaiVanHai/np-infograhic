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
  // C-CSのチームは繋がることを作成する

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

    // $('#mkt-link-team').fadeOut();
    // $('#c-sales-link-team').fadeOut();
  };

  // Modalは外にClickするとModalを閉じる
  var modal_sd = document.getElementById('sd-team');
  var modal_dm = document.getElementById('dm-team');
  var modal_pr = document.getElementById('pr-team');
  var modal_design = document.getElementById('design-team');
  var modal_store_support = document.getElementById('customer-store-team');
  var modal_risk_management = document.getElementById('risk-management-team');
  var modal_payment_management = document.getElementById('payment-management-team');
  var modal_customer_support = document.getElementById('customer-support-team');
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
  }
});
