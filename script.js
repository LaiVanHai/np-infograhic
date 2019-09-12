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
  $('#hr-training').click(function() {
    $('#training-team').fadeIn();
  });
  $('#hr-personnel-system').click(function() {
    $('#personnel-system-team').fadeIn();
  });
  // 人事総務部署のModal

  // B-Sales部署のModal
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

  // C-Sales部署のModal
  $('#c-sales-inside').click(function() {
    $('#c-sales-inside-team').fadeIn();
  });
  $('#c-sales-field').click(function() {
    $('#c-sales-field-team').fadeIn();
  });
  $('#c-sales-support').click(function() {
    $('#c-sales-support-team').fadeIn();
  });
  // C-Sales部署のModal

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

  //財経部署のModal
  $('#finance').click(function() {
    $('#finance-team').fadeIn();
  });
  $('#accounting').click(function() {
    $('#accounting-team').fadeIn();
  });
  // 財経部署のModal

  // 法務のModal
  $('.legal').click(function() {
    $('#dpt-legal').fadeIn();
  });
  // 法務のModal

  // Biz DevのModal
  $('.biz-dev').click(function() {
    $('#dpt-biz-dev').fadeIn();
  });
  // Biz DevのModal

  //atone部署のModal
  $('#atone-risk').click(function() {
    $('#atone-risk-team').fadeIn();
  });
  $('#atone-customer-center').click(function() {
    $('#atone-customer-center-team').fadeIn();
  });
  $('#atone-sales').click(function() {
    $('#atone-sales-team').fadeIn();
  });
  $('#atone-b-mkt').click(function() {
    $('#atone-b-mkt-team').fadeIn();
  });
  $('#atone-c-mkt').click(function() {
    $('#atone-c-mkt-team').fadeIn();
  });
  $('#atone-real').click(function() {
    $('#atone-real-team').fadeIn();
  });
  $('#atone-uxd').click(function() {
    $('#atone-uxd-team').fadeIn();
  });
  $('#atone-ba').click(function() {
    $('#atone-ba-team').fadeIn();
  });
  // atone部署のModal

  //BA部署のModal
  $('#ba-nova').click(function() {
    $('#ba-nova-team').fadeIn();
  });
  $('#ba-security').click(function() {
    $('#ba-security-team').fadeIn();
  });
  $('#ba-infra').click(function() {
    $('#ba-infra-team').fadeIn();
  });
  $('#ba-smap').click(function() {
    $('#ba-smap-team').fadeIn();
  });
  $('#ba-cpu').click(function() {
    $('#ba-cpu-team').fadeIn();
  });
  $('#ba-camp').click(function() {
    $('#ba-camp-team').fadeIn();
  });
  $('#ba-i3').click(function() {
    $('#ba-i3-team').fadeIn();
  });
  $('#ba-wsd').click(function() {
    $('#ba-wsd-team').fadeIn();
  });
  $('#ba-b2b').click(function() {
    $('#ba-b2b-team').fadeIn();
  });
  //BA部署のModal

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
  $('.link-to-training').click(function() {
    deleteDisplayWork();
    $('#training-team').fadeIn();
  });
  $('.link-to-personnel-system').click(function() {
    deleteDisplayWork();
    $('#personnel-system-team').fadeIn();
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

  // C-Salesのチームは繋がることを作成する
  $('.link-to-c-sales-inside').click(function() {
    deleteDisplayWork();
    $('#c-sales-inside-team').fadeIn();
  });
  $('.link-to-c-sales-field').click(function() {
    deleteDisplayWork();
    $('#c-sales-field-team').fadeIn();
  });
  $('.link-to-c-sales-support').click(function() {
    deleteDisplayWork();
    $('#c-sales-support-team').fadeIn();
  });
  // C-Salesのチームは繋がることを作成する

  // 財経のチームは繋がることを作成する
  $('.link-to-finance').click(function() {
    deleteDisplayWork();
    $('#finance-team').fadeIn();
  });
  $('.link-to-accounting').click(function() {
    deleteDisplayWork();
    $('#accounting-team').fadeIn();
  });
  // 財経のチームは繋がることを作成する

  // atoneのチームは繋がることを作成する
  $('.link-to-atone-ba').click(function() {
    deleteDisplayWork();
    $('#atone-ba-team').fadeIn();
  });
  $('.link-to-atone-risk').click(function() {
    deleteDisplayWork();
    $('#atone-risk-team').fadeIn();
  });
  $('.link-to-atone-customer-center').click(function() {
    deleteDisplayWork();
    $('#atone-customer-center-team').fadeIn();
  });
  $('.link-to-atone-sales').click(function() {
    deleteDisplayWork();
    $('#atone-sales-team').fadeIn();
  });
  $('.link-to-atone-b-mkt').click(function() {
    deleteDisplayWork();
    $('#atone-b-mkt-team').fadeIn();
  });
  $('.link-to-atone-c-mkt').click(function() {
    deleteDisplayWork();
    $('#atone-c-mkt-team').fadeIn();
  });
  $('.link-to-atone-real').click(function() {
    deleteDisplayWork();
    $('#atone-real-team').fadeIn();
  });
  $('.link-to-atone-uxd').click(function() {
    deleteDisplayWork();
    $('#atone-uxd-team').fadeIn();
  });
  // atoneのチームは繋がることを作成する

  // BAのチームは繋がることを作成する
  $('.link-to-ba-nova').click(function() {
    deleteDisplayWork();
    $('#ba-nova-team').fadeIn();
  });
  $('.link-to-ba-security').click(function() {
    deleteDisplayWork();
    $('#ba-security-team').fadeIn();
  });
  $('.link-to-ba-infra').click(function() {
    deleteDisplayWork();
    $('#ba-infra-team').fadeIn();
  });
  $('.link-to-ba-smap').click(function() {
    deleteDisplayWork();
    $('#ba-smap-team').fadeIn();
  });
  $('.link-to-ba-cpu').click(function() {
    deleteDisplayWork();
    $('#ba-cpu-team').fadeIn();
  });
  $('.link-to-ba-camp').click(function() {
    deleteDisplayWork();
    $('#ba-camp-team').fadeIn();
  });
  $('.link-to-ba-i3').click(function() {
    deleteDisplayWork();
    $('#ba-i3-team').fadeIn();
  });
  $('.link-to-ba-wsd').click(function() {
    deleteDisplayWork();
    $('#ba-wsd-team').fadeIn();
  });
  $('.link-to-ba-b2b').click(function() {
    deleteDisplayWork();
    $('#').fadeIn();
  });
  // BAのチームは繋がることを作成する

  $('.work-item').click(function() {
    var opacity_val = $('.modal-line').css("opacity");
    if (opacity_val == 1) {
      $('.modal-line').css({"opacity": 0});
    } else {
      $('.modal-line').css({"opacity": 1});
    }
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
    $('#personnel-system-team').fadeOut();
    $('#training-team').fadeOut();
    $('#recruitment-team').fadeOut();

    //B-Sales部署のModal
    $('#b-inside-team').fadeOut();
    $('#b-field-team').fadeOut();
    $('#customer-success-team').fadeOut();

    //B-CS部署のModal
    $('#b-cs-func-design-team').fadeOut();
    $('#b-cs-infra-management-team').fadeOut();
    $('#b-cs-service-growth-team').fadeOut();

    //C-Sales部署のModal
    $('#c-sales-support-team').fadeOut();
    $('#c-sales-inside-team').fadeOut();
    $('#c-sales-field-team').fadeOut();

    //　法務のModal
    $('#dpt-legal').fadeOut();

    // atoneのModal
    $('#atone-ba-team').fadeOut();
    $('#atone-risk-team').fadeOut();
    $('#atone-customer-center-team').fadeOut();
    $('#atone-sales-team').fadeOut();
    $('#atone-b-mkt-team').fadeOut();
    $('#atone-c-mkt-team').fadeOut();
    $('#atone-real-team').fadeOut();
    $('#atone-uxd-team').fadeOut();

    //　Biz DevのModal
    $('#dpt-biz-dev').fadeOut();

    // BAのModal
    $('#ba-nova-team').fadeOut();
    $('#ba-security-team').fadeOut();
    $('#ba-infra-team').fadeOut();
    $('#ba-smap-team').fadeOut();
    $('#ba-cpu-team').fadeOut();
    $('#ba-camp-team').fadeOut();
    $('#ba-i3-team').fadeOut();
    $('#ba-wsd-team').fadeOut();
    $('#ba-b2b-team').fadeOut();

    // 財経のModal
    $('#finance-team').fadeOut();
    $('#accounting-team').fadeOut();

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
  var modal_personnel_system = document.getElementById('personnel-system-team');
  var modal_training = document.getElementById('training-team');
  var modal_recruitment = document.getElementById('recruitment-team');
  var modal_b_inside = document.getElementById('b-inside-team');
  var modal_b_field = document.getElementById('b-field-team');
  var modal_customer_success = document.getElementById('customer-success-team');
  var modal_b_cs_func_design = document.getElementById('b-cs-func-design-team');
  var modal_b_cs_infra_management = document.getElementById('b-cs-infra-management-team');
  var modal_b_cs_service_growth = document.getElementById('b-cs-service-growth-team');
  var modal_dpt_legal = document.getElementById('dpt-legal');
  var modal_c_sales_support_team = document.getElementById('c-sales-support-team');
  var modal_c_sales_inside_team = document.getElementById('c-sales-inside-team');
  var modal_c_sales_field_team = document.getElementById('c-sales-field-team');
  var modal_atone_ba_team = document.getElementById('atone-ba-team');
  var modal_atone_risk_team = document.getElementById('atone-risk-team');
  var modal_atone_customer_center_team = document.getElementById('atone-customer-center-team');
  var modal_atone_sales_team = document.getElementById('atone-sales-team');
  var modal_atone_b_mkt_team = document.getElementById('atone-b-mkt-team');
  var modal_atone_c_mkt_team = document.getElementById('atone-c-mkt-team');
  var modal_atone_real_team = document.getElementById('atone-real-team');
  var modal_atone_uxd_team = document.getElementById('atone-uxd-team');
  var modal_dpt_biz_dev = document.getElementById('dpt-biz-dev');
  var modal_nova_ba = document.getElementById('ba-nova-team');
  var modal_security_ba = document.getElementById('ba-security-team');
  var modal_infra_ba = document.getElementById('ba-infra-team');
  var modal_smap_ba = document.getElementById('ba-smap-team');
  var modal_cpu_ba = document.getElementById('ba-cpu-team');
  var modal_camp_ba = document.getElementById('ba-camp-team');
  var modal_i3_ba = document.getElementById('ba-i3-team');
  var modal_wsd_ba = document.getElementById('ba-wsd-team');
  var modal_b2b_ba = document.getElementById('ba-b2b-team');
  var modal_finance = document.getElementById('finance-team');
  var modal_accounting = document.getElementById('accounting-team');

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
    if (event.target == modal_personnel_system) {
      modal_personnel_system.style.display = "none";
    }
    if (event.target == modal_training) {
      modal_training.style.display = "none";
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
    if (event.target == modal_dpt_legal) {
      modal_dpt_legal.style.display = "none";
    }
    if (event.target == modal_c_sales_support_team) {
      modal_c_sales_support_team.style.display = "none";
    }
    if (event.target == modal_c_sales_inside_team) {
      modal_c_sales_inside_team.style.display = "none";
    }
    if (event.target == modal_c_sales_field_team) {
      modal_c_sales_field_team.style.display = "none";
    }
    if (event.target == modal_atone_risk_team) {
      modal_atone_risk_team.style.display = "none";
    }
    if (event.target == modal_atone_customer_center_team) {
      modal_atone_customer_center_team.style.display = "none";
    }
    if (event.target == modal_atone_b_mkt_team) {
      modal_atone_b_mkt_team.style.display = "none";
    }
    if (event.target == modal_atone_c_mkt_team) {
      modal_atone_c_mkt_team.style.display = "none";
    }
    if (event.target == modal_atone_real_team) {
      modal_atone_real_team.style.display = "none";
    }
    if (event.target == modal_atone_uxd_team) {
      modal_atone_uxd_team.style.display = "none";
    }
    if (event.target == modal_atone_sales_team) {
      modal_atone_sales_team.style.display = "none";
    }
    if (event.target == modal_atone_ba_team) {
      modal_atone_ba_team.style.display = "none";
    }
    if (event.target == modal_dpt_biz_dev) {
      modal_dpt_biz_dev.style.display = "none";
    }
    if (event.target == modal_nova_ba) {
      modal_nova_ba.style.display = "none";
    }
    if (event.target == modal_security_ba) {
      modal_security_ba.style.display = "none";
    }
    if (event.target == modal_infra_ba) {
      modal_infra_ba.style.display = "none";
    }
    if (event.target == modal_smap_ba) {
      modal_smap_ba.style.display = "none";
    }
    if (event.target == modal_cpu_ba) {
      modal_cpu_ba.style.display = "none";
    }
    if (event.target == modal_camp_ba) {
      modal_camp_ba.style.display = "none";
    }
    if (event.target == modal_i3_ba) {
      modal_i3_ba.style.display = "none";
    }
    if (event.target == modal_wsd_ba) {
      modal_wsd_ba.style.display = "none";
    }
    if (event.target == modal_b2b_ba) {
      modal_b2b_ba.style.display = "none";
    }
    if (event.target == modal_finance) {
      modal_finance.style.display = "none";
    }
    if (event.target == modal_accounting) {
      modal_accounting.style.display = "none";
    }
  }
});
