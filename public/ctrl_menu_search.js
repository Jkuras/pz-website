$(document).ready(function(){
  $('.parallax').parallax();
  $('select').material_select();
  $('.carousel.carousel-slider').carousel({fullWidth: true});
  $('.menu_height').matchHeight()
  $('.modal').modal();
  var database = firebase.database()

  var slider = document.getElementById('thc_potency_range');
    noUiSlider.create(slider, {
     start: [1, 30],
     connect: true,
     step: 1,
     orientation: 'horizontal', // 'horizontal' or 'vertical'
     range: {
       'min': 0,
       'max': 100
     },
     format: wNumb({
       decimals: 0
     })
    });
  var slider = document.getElementById('cbd_potency_range');
    noUiSlider.create(slider, {
     start: [1, 30],
     connect: true,
     step: 1,
     orientation: 'horizontal', // 'horizontal' or 'vertical'
     range: {
       'min': 0,
       'max': 100
     },
     format: wNumb({
       decimals: 0
     })
    });

  $('#home').click(function(){
    $('#edit_menu_div').toggle(false)
    $('#menu_results').toggle(false)
    $('#menu_carousel').toggle(false)
    $('#home_find_us').toggle(true)
    $('#home_div').toggle(true)
    $('#home_about').toggle(true)
    $('#faq_main').toggle(false)
    $('#lax_0').toggle(true)
    $('#lax_1').toggle(true)
    $('.carousel.carousel-slider').carousel({fullWidth: true});
  })

  $('#menu').click(function(){
    $('#edit_menu_div').toggle(true)
    $('#menu_results').toggle(true)
    $('#menu_carousel').toggle(true)
    $('#home_find_us').toggle(false)
    $('#home_div').toggle(false)
    $('#home_about').toggle(false)
    $('#faq_main').toggle(false)
    $('#lax_1').toggle(false)
    $('#lax_0').toggle(true)
    $('.carousel.carousel-slider').carousel({fullWidth: true});
  })

  $('#faq').click(function(){
    $('#edit_menu_div').toggle(false)
    $('#menu_results').toggle(false)
    $('#menu_carousel').toggle(false)
    $('#home_find_us').toggle(true)
    $('#home_div').toggle(false)
    $('#home_about').toggle(false)
    $('#faq_main').toggle(true)
    $('#lax_0').toggle(false)
    $('#lax_1').toggle(true)
    $('.carousel.carousel-slider').carousel({fullWidth: true});
  })

  /////////////////////////////////////////////////////////////////////////////////////////
  //START MENU LOGIC///////////////////////////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////////////////////////////////
  var tacoma_menu={}
  var po_menu={}

  function menuItem(strain, brand, farm, type, cbd, thc, form, imgurl){
    if(strain){
      this.strain=strain
    } else {
      this.strain="no_strain"
    }
    if(brand){
      this.brand=brand
    } else {
      this.brand="no_brand"
    }
    if(farm){
      this.farm=farm
    } else {
      this.farm="no_farm"
    }
    if(form){
      this.form=form
    }
    if(type){
      this.type=type
    } else {
      this.type="no_type"
    }
    if(cbd){
      this.cbd=cbd
    } else {
      this.cbd=0
    }
    if(thc){
      this.thc=thc
    } else {
      this.thc=0
    }
    if(imgurl){
      this.imgurl=imgurl
    } else {
      this.imgurl="gs://potzone-website.appspot.com/weed_img_1.jpg"
    }
  }

  $('#flower_form_input').change(function(){
    if($('#flower_form_input').val().includes("1")){
      $('#1g_price_div').toggle(true)
    } else {
      $('#1g_price_div').toggle(false)
    }
    if($('#flower_form_input').val().includes("2")){
      $('#2g_price_div').toggle(true)
    } else {
      $('#2g_price_div').toggle(false)
    }
    if($('#flower_form_input').val().includes("3")){
      $('#35g_price_div').toggle(true)
    } else {
      $('#35g_price_div').toggle(false)
    }
    if($('#flower_form_input').val().includes("4")){
      $('#4g_price_div').toggle(true)
    } else {
      $('#4g_price_div').toggle(false)
    }
    if($('#flower_form_input').val().includes("5")){
      $('#7g_price_div').toggle(true)
    } else {
      $('#7g_price_div').toggle(false)
    }
    if($('#flower_form_input').val().includes("6")){
      $('#14g_price_div').toggle(true)
    } else {
      $('#14g_price_div').toggle(false)
    }
    if($('#flower_form_input').val().includes("7")){
      $('#28g_price_div').toggle(true)
    } else {
      $('#28g_price_div').toggle(false)
    }
  })

  $('#concentrate_form_input').change(function(){
    if($('#concentrate_form_input').val().includes("1")){
      $('#shatter_price_div').toggle(true)
    } else {
      $('#shatter_price_div').toggle(false)
    }
    if($('#concentrate_form_input').val().includes("2")){
      $('#crumble_price_div').toggle(true)
    } else {
      $('#crumble_price_div').toggle(false)
    }
    if($('#concentrate_form_input').val().includes("3")){
      $('#wax_price_div').toggle(true)
    } else {
      $('#wax_price_div').toggle(false)
    }
    if($('#concentrate_form_input').val().includes("4")){
      $('#distillate_5_price_div').toggle(true)
    } else {
      $('#distillate_5_price_div').toggle(false)
    }
    if($('#concentrate_form_input').val().includes("5")){
      $('#distillate_1_price_div').toggle(true)
    } else {
      $('#distillate_1_price_div').toggle(false)
    }
    if($('#concentrate_form_input').val().includes("6")){
      $('#resin_price_div').toggle(true)
    } else {
      $('#resin_price_div').toggle(false)
    }
    if($('#concentrate_form_input').val().includes("7")){
      $('#cart_5_price_div').toggle(true)
    } else {
      $('#cart_5_price_div').toggle(false)
    }
    if($('#concentrate_form_input').val().includes("8")){
      $('#cart_1_price_div').toggle(true)
    } else {
      $('#cart_1_price_div').toggle(false)
    }
  })

  $('#edible_form_input').change(function(){
    if($('#edible_form_input').val().includes("1")){
      $('#thc_10_price_div').toggle(true)
    } else {
      $('#thc_10_price_div').toggle(false)
    }
    if($('#edible_form_input').val().includes("2")){
      $('#thc_1_price_div').toggle(true)
    } else {
      $('#thc_1_price_div').toggle(false)
    }
    if($('#edible_form_input').val().includes("3")){
      $('#cbd_10_price_div').toggle(true)
    } else {
      $('#cbd_10_price_div').toggle(false)
    }
    if($('#edible_form_input').val().includes("4")){
      $('#cbd_1_price_div').toggle(true)
    } else {
      $('#cbd_1_price_div').toggle(false)
    }
    if($('#edible_form_input').val().includes("5")){
      $('#1t1_10_price_div').toggle(true)
    } else {
      $('#1t1_10_price_div').toggle(false)
    }
    if($('#edible_form_input').val().includes("6")){
      $('#1t1_1_price_div').toggle(true)
    } else {
      $('#1t1_1_price_div').toggle(false)
    }
    if($('#edible_form_input').val().includes("7")){
      $('#tinc_thc_price_div').toggle(true)
    } else {
      $('#tinc_thc_price_div').toggle(false)
    }
    if($('#edible_form_input').val().includes("8")){
      $('#tinc_cbd_price_div').toggle(true)
    } else {
      $('#tinc_cbd_price_div').toggle(false)
    }
    if($('#edible_form_input').val().includes("9")){
      $('#tinc_1t1_price_div').toggle(true)
    } else {
      $('#tinc_1t1_price_div').toggle(false)
    }
    if($('#edible_form_input').val().includes("10")){
      $('#mela_price_div').toggle(true)
    } else {
      $('#mela_price_div').toggle(false)
    }
  })

  $('#sativa_input').click(function(){
    $('#sativa_input').prop('checked', true)
    $('#indica_input').prop('checked', false)
    $('#hybrid_input').prop('checked', false)
  })

  $('#hybrid_input').click(function(){
    $('#sativa_input').prop('checked', false)
    $('#indica_input').prop('checked', false)
    $('#hybrid_input').prop('checked', true)
  })

  $('#indica_input').click(function(){
    $('#sativa_input').prop('checked', false)
    $('#indica_input').prop('checked', true)
    $('#hybrid_input').prop('checked', false)
  })

  $('#add_item_button').click(function(){
    var strain, brand, farm, type, thc, cbd, imgurl
    var form = {
      'flower':{},
      'concentrate':{},
      'edible':{},
      'preroll':{}
    }
    strain = $('#edit_strain_input').val()
    brand = $('#edit_brand_input').val()
    farm = $('#edit_farm_input').val()
    cbd = parseFloat($('#cbd_input').val())
    thc = parseFloat($('#thc_input').val())
    if($('#sativa_input').is(':checked')){
      type='S'
    } else if ($('#indica_input').is(':checked')){
      type='I'
    } else if ($('#hybrid_input').is(':checked')){
      type='H'
    } else {
      type='O'
    }
    if($('#concentrate_form_input').val().includes("1")){
      form['concentrate'].shatter=$('#shatter_price').val()
    }
    if($('#concentrate_form_input').val().includes("2")){
      form['concentrate'].crumble=$('#crumble_price').val()
    }
    if($('#concentrate_form_input').val().includes("3")){
      form['concentrate'].wax=$('#wax_price').val()
    }
    if($('#concentrate_form_input').val().includes("4")){
      form['concentrate'].distillate5=$('#distillate_5_price').val()
    }
    if($('#concentrate_form_input').val().includes("5")){
      form['concentrate'].distiallate1=$('#distillate_1_price').val()
    }
    if($('#concentrate_form_input').val().includes("6")){
      form['concentrate'].resin=$('#resin_price').val()
    }
    if($('#concentrate_form_input').val().includes("7")){
      form['concentrate'].cart5=$('#cart_5_price').val()
    }
    if($('#concentrate_form_input').val().includes("8")){
      form['concentrate'].cart1=$('#cart_1_price').val()
    }

    if($('#flower_form_input').val().includes("1")){
      form['flower']['1g']=$('#1g_price').val()
    }
    if($('#flower_form_input').val().includes("2")){
      form['flower']['2g']=$('#2g_price').val()
    }
    if($('#flower_form_input').val().includes("3")){
      form['flower']['8th']=$('#35g_price').val()
    }
    if($('#flower_form_input').val().includes("4")){
      form['flower']['4g']=$('#4g_price').val()
    }
    if($('#flower_form_input').val().includes("5")){
      form['flower']['7g']=$('#7g_price').val()
    }
    if($('#flower_form_input').val().includes("6")){
      form['flower']['14g']=$('#14g_price').val()
    }
    if($('#flower_form_input').val().includes("7")){
      form['flower']['28g']=$('#28g_price').val()
    }

    if($('#edible_form_input').val().includes("1")){
      form['edible']['thc_10']=$('#thc_10_price').val()
    }
    if($('#edible_form_input').val().includes("2")){
      form['edible']['thc_1']=$('#thc_1_price').val()
    }
    if($('#edible_form_input').val().includes("3")){
      form['edible']['cbd_10']=$('#cbd_10_price').val()
    }
    if($('#edible_form_input').val().includes("4")){
      form['edible']['cbd_1']=$('#cbd_1_price').val()
    }
    if($('#edible_form_input').val().includes("5")){
      form['edible']['1t1_10']=$('#1t1_10_price').val()
    }
    if($('#edible_form_input').val().includes("6")){
      form['edible']['1t1_1']=$('#1t1_1_price').val()
    }
    if($('#edible_form_input').val().includes("7")){
      form['edible']['tinc_thc']=$('#tinc_thc_price').val()
    }
    if($('#edible_form_input').val().includes("8")){
      form['edible']['tinc_cbd']=$('#tinc_cbd_price').val()
    }
    if($('#edible_form_input').val().includes("9")){
      form['edible']['tinc_1t1']=$('#tinc_1t1_price').val()
    }
    if($('#edible_form_input').val().includes("10")){
      form['edible']['mela']=$('#mela_price').val()
    }

    //TODO: handle image uploads
    imgurl = "gs://potzone-website.appspot.com/weed_img_1.jpg"

    new_item = new menuItem(strain, brand, farm, type, cbd, thc, form, imgurl)


  })

  $('#tacoma_menu').click(function(){
    $('#tacoma_menu').css('background-color', '#c0ffad' )
    $('#port_orchard_menu').css('background-color', '#ffffff')
  })
  $('#port_orchard_menu').click(function(){
    $('#port_orchard_menu').css('background-color', '#c0ffad' )
    $('#tacoma_menu').css('background-color', '#ffffff')
  })
  $('#toggle_filter').click(function(){
    $('#quick_search').toggle()
    $('#advanced_search').toggle()
  })


  /////////////////////////////////////////////////////////////////////////////////////////
  //END MENU LOGIC/////////////////////////////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////////////////////////////////
})
