/*
    NEEDED GLOBAL VARIABLES

    function detail_page() {return document.URL.indexOf("www.famillechretienne.fr/dtails_") != -1}
    function ad_id(url) {return url}
    container_selector = '.liste_annonce'
    ads_selector = '.annonce'
*/

function site() {
  console.log()

  if(!detail_page()) {
    // Search page
    console.log('this is the list page')
    // initialization 
    container = new AdsContainer($(container_selector).html())
    ads = $(ads_selector)

    var length = ads.length
    for (var i = 0; i < length; i++) {
      link = $(ads[i]).find('a')[ads_selector_id].href
      if(link == "") {
        //TODO fix this
        link = $(ads[i]).find('a')[1].href
      }
      container.ads.push(new Ad($(ads[i]).html(), ad_id(link), i))
    }

    
    // remove unwanted ads 
    for (var i = 0; i < length; i++) {
      if(!container.ads[i].shouldBeDisplayed()) {
        $(ads[i]).toggle("slow")
      }
      if(container.ads[i].isNew()) {
        $(ads[i]).prepend('<p style="color:blue">New!</p>');
      }
    }  
  }


  else {
    // Detail page
    console.log('this is a location page')
    add_panel()
    retrieveData()
  }
}





// Related to the panel


function retrieveData() {
  current_location = ""
  spreadsheet_headers = spreadsheet_content[0]
  for (var i = 0; i < spreadsheet_content.length; i++) {
    if(spreadsheet_content[i][0] == ad_id(document.URL)) {
      current_location = spreadsheet_content[i]
    }
  };
  if(current_location == "") {
    $('#form_details input')[0].checked = true
  }
  else {
    $('#form_details input')[0].checked = current_location[1]
    $('#form_details input')[1].checked = !current_location[1]
  }    
    console.log(current_location)
    for(var i = 2; i < spreadsheet_headers.length; i++) {
      if(current_location == "") {
        value = ''
      }
      else {
        value = current_location[i]
      }
      child = spreadsheet_headers[i] + ': <input type="text" value="'+value+'"><br>'
      $('#form_details').children().last().append(child)
    }
    $('#form_details').children().last().append('<input type="submit" value="Save">')
}




function saveDetails() {
  updated_data = []
  updated_data.push(ad_id(document.URL))
  updated_data.push($('#form_details input')[0].checked)
  all_inputs = $('#form_details input')
  for(var i = 2; i < all_inputs.length - 1; i++) {
      updated_data.push(all_inputs[i].value)
  }
  updated_data = updated_data.join('##')
  console.log(updated_data)

  var SCRIPT_URL = "https://script.google.com/macros/s/AKfycbxi8HcVHfRX4EgA6K35KUMSvn1OiJb3RdIDjiU6rLwW2VPnqTOt/exec";
  $.getJSON(SCRIPT_URL+"?callback=?",
              {method:"update_data",
              data:updated_data},
              function (data) { 
                alert(JSON.stringify(data)); 
              });
}

function add_panel() {
      // css variables
    var orangeColor = "#f27b3e";
    var whiteBackground = "#f4f4f4";
    var darkBlueColor = "#2f6587";
    // admin panel 
    admin = document.createElement('div'); 
    admin.style.background = whiteBackground;
    admin.style.position = "fixed";
    admin.style.top = "200px";
    admin.style.opacity = "0.9";
    admin.style.left = "10px";
    admin.style.textAlign = "center";
    admin.style.borderRadius = "0.4em";


    title = document.createElement('div');
    title.innerHTML = "Informations sur le logement";
    title.style.color = orangeColor;
    admin.appendChild(title);


    form = document.createElement('div'); 
    form.setAttribute("id", "form_details");
    form.innerHTML = '\
    <form name="input" onSubmit="saveDetails(); return false;">\
      <input type="radio" name="keep" value="true"> oui<br>\
      <input type="radio" name="keep" value="false"> non<br>\
    </form>\
    '
    form.style.color = darkBlueColor;
    admin.appendChild(form);


    document.body.appendChild(admin);
}
