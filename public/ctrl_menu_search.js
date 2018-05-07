$(document).ready(function(){
  var config = {
    apiKey: "AIzaSyB8fBptlI8H7f3-HKj2TekFKEQp60-3wuM",
    authDomain: "potzone-website.firebaseapp.com",
    projectId: 'potzone-website',
    databaseURL: "https://potzone-website.firebaseio.com"
  };
  firebase.initializeApp(config);
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
    $('#menu_div').toggle(false)
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
    $('#menu_div').toggle(true)
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
    $('#menu_div').toggle(false)
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
  var whole_menu = {}
  var menu_state = 0
  getMenu()
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

  $('#preroll_form_input').change(function(){
    if($('#preroll_form_input').val().includes('1')){
      $('#single_price_div').toggle(true)
    } else {
      $('#single_price_div').toggle(false)
    }
    if($('#preroll_form_input').val().includes('2')){
      $('#multi_price_div').toggle(true)
    } else {
      $('#multi_price_div').toggle(false)
    }
    if($('#preroll_form_input').val().includes('3')){
      $('#infused_price_div').toggle(true)
    } else {
      $('#infused_price_div').toggle(false)
    }
    if($('#preroll_form_input').val().includes('4')){
      $('#blunt_price_div').toggle(true)
    } else {
      $('#blunt_price_div').toggle(false)
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

    if($('#preroll_form_input').val().includes('1')){
      form['preroll']['single']=$('#single_price').val()
    } if($('#preroll_form_input').val().includes('2')){
      form['preroll']['multi']=$('#multi_price').val()
    } if($('#preroll_form_input').val().includes('3')){
      form['preroll']['infused']=$('#infused_price').val()
    } if($('#preroll_form_input').val().includes('4')){
      form['preroll']['blunt']=$('#blunt_price').val()
    }

    //TODO: handle image uploads
    imgurl = "gs://potzone-website.appspot.com/weed_img_1.jpg"

    new_item = new menuItem(strain, brand, farm, type, cbd, thc, form, imgurl)
    console.log(new_item)
    var refString="menu/" + makeUUID(strain, brand, type)
    saveToDatabase(refString, new_item, true)

  })

  $('#search_menu').click(function(){
    var filtered_menu = []
    if(menu_state==0){
      var search = $('#quick_search_field').val()
      var range = $('#quick_price_range').val()
      var type = $('#quick_type').val()
      var unfiltered_menu=Object.values(whole_menu)
      for(var i = 0; i < unfiltered_menu.length; i++){
        if(checkPrice(range, unfiltered_menu[i]) && checkSearch(search, unfiltered_menu[i]) && checkType(type, unfiltered_menu[i])){
          filtered_menu.push(unfiltered_menu[i])
        }
      }


      console.log(filtered_menu)
    } else if (menu_state==1){

    }
    drawMenu(filtered_menu)
  })

  function checkSearch(search, item){
    if(search){
      if(item.strain.toUpperCase().includes(search.toUpperCase())){
        return true
      } else if(item.brand.toUpperCase().includes(search.toUpperCase())){
        return true
      } else if(item.farm.toUpperCase().includes(search.toUpperCase())){
        return true
      }
    } else {
      return true
    }
    return false
  }

  function checkType(type, item){
    if(type.length==0){
      return true
    }
    if(type.includes("1")){
      if(item.flower){
        return true
      }
    }
    if(type.includes("2")){
      if(item.concentrate){
        return true
      }
    }
    if(type.includes("3")){
      if(item.edible){
        return true
      }
    }
    if(type.includes("4")){
      if(item.concentrate.cart1){
        return true
      }
      if(item.concentrate.cart5){
        return true
      }
    }
    if(type.includes("5")){
      if(item.preroll){
        return true
      }
    }
    if(type.includes("6")){
      return false
    }
    return false
  }

  function checkPrice(range, item){
    if(item.flower){
      if(item.flower['1g']){
        if(range.includes('1') && item.flower['1g']<21){
          return true
        }
        if(range.includes('2') && item.flower['1g']>19 && item.flower['1g']<51){
          return true
        }
        if(range.includes('3') && item.flower['1g']>49 && item.flower['1g']<100){
          return true
        }
        if(range.includes('4') && item.flower['1g']>99 && item.flower['1g']<200){
          return true
        }
        if(range.includes('5') && item.flower['1g']>199){
          return true
        }
      }
      if(item.flower['2g']){
        if(range.includes('1') && item.flower['2g']<21){
          return true
        }
        if(range.includes('2') && item.flower['2g']>19 && item.flower['2g']<51){
          return true
        }
        if(range.includes('3') && item.flower['2g']>49 && item.flower['2g']<100){
          return true
        }
        if(range.includes('4') && item.flower['2g']>99 && item.flower['2g']<200){
          return true
        }
        if(range.includes('5') && item.flower['2g']>199){
          return true
        }
      }
      if(item.flower['8th']){
        if(range.includes('1') && item.flower['8th']<21){
          return true
        }
        if(range.includes('2') && item.flower['8th']>19 && item.flower['8th']<51){
          return true
        }
        if(range.includes('3') && item.flower['8th']>49 && item.flower['8th']<100){
          return true
        }
        if(range.includes('4') && item.flower['8th']>99 && item.flower['8th']<200){
          return true
        }
        if(range.includes('5') && item.flower['8th']>199){
          return true
        }
      }
      if(item.flower['4g']){
        if(range.includes('1') && item.flower['4g']<21){
          return true
        }
        if(range.includes('2') && item.flower['4g']>19 && item.flower['4g']<51){
          return true
        }
        if(range.includes('3') && item.flower['4g']>49 && item.flower['4g']<100){
          return true
        }
        if(range.includes('4') && item.flower['4g']>99 && item.flower['4g']<200){
          return true
        }
        if(range.includes('5') && item.flower['4g']>199){
          return true
        }
      }
      if(item.flower['7g']){
        if(range.includes('1') && item.flower['7g']<21){
          return true
        }
        if(range.includes('2') && item.flower['7g']>19 && item.flower['7g']<51){
          return true
        }
        if(range.includes('3') && item.flower['7g']>49 && item.flower['7g']<100){
          return true
        }
        if(range.includes('4') && item.flower['7g']>99 && item.flower['7g']<200){
          return true
        }
        if(range.includes('5') && item.flower['7g']>199){
          return true
        }
      }
      if(item.flower['14g']){
        if(range.includes('1') && item.flower['14g']<21){
          return true
        }
        if(range.includes('2') && item.flower['14g']>19 && item.flower['14g']<51){
          return true
        }
        if(range.includes('3') && item.flower['14g']>49 && item.flower['14g']<100){
          return true
        }
        if(range.includes('4') && item.flower['14g']>99 && item.flower['14g']<200){
          return true
        }
        if(range.includes('5') && item.flower['14g']>199){
          return true
        }
      }
      if(item.flower['28g']){
        if(range.includes('1') && item.flower['28g']<21){
          return true
        }
        if(range.includes('2') && item.flower['28g']>19 && item.flower['28g']<51){
          return true
        }
        if(range.includes('3') && item.flower['28g']>49 && item.flower['28g']<100){
          return true
        }
        if(range.includes('4') && item.flower['28g']>99 && item.flower['28g']<200){
          return true
        }
        if(range.includes('5') && item.flower['28g']>199){
          return true
        }
      }
    }
    if(item.concentrate){

    }
    if(item.edible){

    }
    if(item.preroll){

    }
    return false
  }

  $('#tacoma_menu').click(function(){
    $('#tacoma_menu').css('background-color', '#c0ffad' )
    $('#port_orchard_menu').css('background-color', '#ffffff')
  })
  $('#port_orchard_menu').click(function(){
    $('#port_orchard_menu').css('background-color', '#c0ffad' )
    $('#tacoma_menu').css('background-color', '#ffffff')
  })
  $('#toggle_filter').click(function(){
    if(menu_state==0){
      menu_state=1
      $('#quick_search').toggle(false)
      $('#advanced_search').toggle(true)
    } else if (menu_state==1){
      menu_state=0
      $('#quick_search').toggle(true)
      $('#advanced_search').toggle(false)
    }

  })


  /////////////////////////////////////////////////////////////////////////////////////////
  //END MENU LOGIC/////////////////////////////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////////////////////////////////

  function saveToDatabase(ref, data, toast){
    if(toast){
      database.ref(ref).set(data).then(function(){
        Materialize.toast('Saved!', 2000)
      })
    } else {
      database.ref(ref).set(data)
    }
  }

  function getMenu(){
    var bakerMenu = firebase.functions().httpsCallable('bakerMenu')
    bakerMenu().then(function(result){
      console.log(result.data)
    })

  }

  function makeUUID(strain, brand, type){
    var res = ""
    var split_strain = strain.split(" ")
    var split_brand = brand.split(" ")
    for(var i = 0; i<split_strain.length; i++){
      res = res + split_strain[i][0]
    }
    for(var i = 0; i<split_brand.length; i++){
      res = res + split_brand[i][0]
    }
    res = res + type
    var val = Math.floor(1000 + Math.random() * 9000);
    res = res+val
    return res
  }

  function drawMenu(menuList){
    $('#menu_results').empty()
    console.log(menuList)
    for(var i = 0; i<menuList.length; i++){
      var card_color = ""
      var token_strings = ""
      var flower_strings = []
      var edible_strings = []
      var concentrate_strings = []
      var preroll_strings = []

      if(menuList[i].type=='S'){
        card_color = "red"
      }
      if(menuList[i].type=='H'){
        card_color = "green"
      }
      if(menuList[i].type=='I'){
        card_color = "blue"
      }

      if(menuList[i].form.flower){
        token_strings = token_strings + "<div class='chip green white-text'>Flower</div>"
        flower_strings[0] = "THC: " + menuList[i].form.flower.thc + " - CBD: "+menuList[i].form.flower.cbd
        flower_strings[1] = ''
        if(menuList[i].form.flower['1g']){
          flower_strings[1] = flower_strings[1] + menuList[i].form.flower['1g'] + "/1g "
        }
        if(menuList[i].form.flower['2g']){
          flower_strings[1] = flower_strings[1] + menuList[i].form.flower['2g'] + "/2g "
        }
        if(menuList[i].form.flower['8th']){
          flower_strings[1] = flower_strings[1] + menuList[i].form.flower['8th'] + "/3.5g "
        }
        if(menuList[i].form.flower['4g']){
          flower_strings[1] = flower_strings[1] + menuList[i].form.flower['4g'] + "/4g "
        }
        if(menuList[i].form.flower['7g']){
          flower_strings[1] = flower_strings[1] + menuList[i].form.flower['7g'] + "/7g "
        }
        if(menuList[i].form.flower['14g']){
          flower_strings[1] = flower_strings[1] + menuList[i].form.flower['14g'] + "/14g "
        }
        if(menuList[i].form.flower['28g']){
          flower_strings[1] = flower_strings[1] + menuList[i].form.flower['28g'] + "/28g "
        }
      }
      if(menuList[i].form.concentrate){
        token_strings = token_strings + "<div class='chip orange white-text'>Concentrate</div>"
        concentrate_strings[0] = "THC: " + menuList[i].form.concentrate.thc + " - CBD: "+menuList[i].form.concentrate.cbd
        concentrate_strings[1] = ''
        if(menuList[i].form.concentrate['shatter']){
          concentrate_strings[1] = concentrate_strings[1] +"Shatter: " + menuList[i].form.concentrate.shatter + " "
        }
        if(menuList[i].form.concentrate['wax']){
          concentrate_strings[1] = concentrate_strings[1] +"Wax: " +menuList[i].form.concentrate.wax + " "
        }
        if(menuList[i].form.concentrate['crumble']){
          concentrate_strings[1] = concentrate_strings[1] +"Crumble: "+ menuList[i].form.concentrate.crumble + " "
        }
        if(menuList[i].form.concentrate['distillate1']){
          concentrate_strings[1] = concentrate_strings[1] +"1g Dist: " +menuList[i].form.concentrate.distiallate1 + " "
        }
        if(menuList[i].form.concentrate['distillate5']){
          concentrate_strings[1] = concentrate_strings[1] +".5g Dist: "+ menuList[i].form.concentrate.distillate5 + " "
        }
        if(menuList[i].form.concentrate['resin']){
          concentrate_strings[1] = concentrate_strings[1] +"Live Resin: "+ menuList[i].form.concentrate.resin + " "
        }
        if(menuList[i].form.concentrate['cart1']){
          concentrate_strings[1] = concentrate_strings[1] +"1g Cart: " +menuList[i].form.concentrate.cart1 + " "
        }
        if(menuList[i].form.concentrate['cart5']){
          concentrate_strings[1] = concentrate_strings[1] +".5g Cart: " +menuList[i].form.concentrate.cart5 + " "
        }
      }
      if(menuList[i].form.edible){
        edible_strings[0] = "THC: " + menuList[i].form.edible.thc + " - CBD: "+menuList[i].form.edible.cbd
        token_strings = token_strings + "<div class='chip blue white-text'>Edible</div>"
        edible_strings[1] = ''
        if(menuList[i].form.edible.thc_10){
          edible_strings[1] = edible_strings[1] + "THC 10pc: " + menuList[i].form.edible.thc_10 + " "
        }
        if(menuList[i].form.edible.thc_1){
          edible_strings[1] = edible_strings[1] + "THC 1pc: " + menuList[i].form.edible.thc_1 + " "
        }
        if(menuList[i].form.edible.cbd_10){
          edible_strings[1] = edible_strings[1] + "CBD 10pc: " + menuList[i].form.edible.cbd_10 + " "
        }
        if(menuList[i].form.edible.cbd_1){
          edible_strings[1] = edible_strings[1] + "CBD 1pc: " + menuList[i].form.edible.cbd_1 + " "
        }
        if(menuList[i].form.edible['1t1_10']){
          edible_strings[1] = edible_strings[1] + "1:1 10pc: " + menuList[i].form.edible['1t1_10'] + " "
        }
        if(menuList[i].form.edible['1t1_1']){
          edible_strings[1] = edible_strings[1] + "1:1 1pc: " + menuList[i].form.edible['1t1_1'] + " "
        }
        if(menuList[i].form.edible.tinc_thc){
          edible_strings[1] = edible_strings[1] + "THC Tincture: " + menuList[i].form.edible[tinc_thc] + " "
        }
        if(menuList[i].form.edible.tinc_cbd){
          edible_strings[1] = edible_strings[1] + "CBD Tincture: " + menuList[i].form.edible[tinc_cbd] + " "
        }
        if(menuList[i].form.edible.tinc_1t1){
          edible_strings[1] = edible_strings[1] + "1:1 Tincture: " + menuList[i].form.edible[tinc_1t1] + " "
        }
        if(menuList[i].form.edible.mela){
          edible_strings[1] = edible_strings[1] + "Melatonin: " + menuList[i].form.edible[mela] + " "
        }
      }
      if(menuList[i].form.preroll){
        token_strings = token_strings + "<div class='chip red white-text'>Pre-Roll</div>"
        preroll_strings[0] = "THC: " + menuList[i].form.preroll.thc + " - CBD: "+menuList[i].form.preroll.cbd
        preroll_strings[1] = ''
        if(menuList[i].form.preroll.single){
          preroll_strings[1] = preroll_strings[1] + 'Single: '+ menuList[i].form.preroll.single + " "
        }
        if(menuList[i].form.preroll.multi){
          preroll_strings[1] = preroll_strings[1] + 'Pack: ' +menuList[i].form.preroll.multi + " "
        }
        if(menuList[i].form.preroll.infused){
          preroll_strings[1] = preroll_strings[1] + 'Infused: '+ menuList[i].form.preroll.infused + " "
        }
        if(menuList[i].form.preroll.blunt){
          preroll_strings[1] = preroll_strings[1] + 'Blunt: '+ menuList[i].form.preroll.blunt + " "
        }
      }
      var e = buildMenuItem(menuList[i].strain, menuList[i].brand, menuList[i].farm, card_color, token_strings, flower_strings, edible_strings, concentrate_strings, preroll_strings)
      $('#menu_results').append(e)

    }
  }

  function buildMenuItem(strain, brand, producer, card_color, token_strings, flower_strings, edible_strings, concentrate_strings, preroll_strings){
    var start = '<div class="col s12"><div class="card horizontal ' +card_color +' lighten-4 menu_height"><div class="card-content" style="width:100%"><div class="row">'
    var end = '</div></div></div></div></div></div>'
    var header = '<h5>'+strain +'</h5><p>'+brand +' - ' +producer+'</p>'
    var flower_info = ''
    var edible_info = ''
    var concentrate_info = ''
    var preroll_info= ''
    var token_info = '<div class="col s12">' +token_strings +'</div>'
    if(flower_strings.length==2){
      var flower_info = '<div class="col s12 m6 white-text green" ><p>' + flower_strings[0] +'</p><p>' + flower_strings[1] +'</p></div>'
    }
    if(edible_strings.length==2){
      var edible_info = '<div class="col s12 m6 white-text blue"><p>' + edible_strings[0] +'</p><p>' + edible_strings[1] +'</p></div>'
    }
    if(concentrate_strings.length==2){
      var concentrate_info = '<div class="col s12 m6 white-text orange"><p>' + concentrate_strings[0] +'</p><p>' + concentrate_strings[1] +'</p></div>'
    }
    if(preroll_strings.length==2){
      var preroll_info = '<div class="col s12 m6 white-text red"><p>' + preroll_strings[0] +'</p><p>' + preroll_strings[1] +'</p></div>'
    }

    var menu_string= start+header+token_info+flower_info+concentrate_info+preroll_info+edible_info+end
    var e = $(menu_string)
    return e
  }
})
