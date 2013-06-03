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
      link = $(ads[i]).find('a')[0].href
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
    $('#form_details input')[2].value = current_location[2]
    $('#form_details input')[3].value = current_location[3]
    $('#form_details input')[4].value = current_location[4]
    $('#form_details input')[5].value = current_location[5]
    $('#form_details input')[6].value = current_location[6]
    $('#form_details input')[7].value = current_location[7]
    $('#form_details input')[8].value = current_location[8]
  }
}




function saveDetails() {
  updated_data = []
  updated_data.push(ad_id(document.URL))
  updated_data.push($('#form_details input')[0].checked)
  updated_data.push($('#form_details input')[2].value)
  updated_data.push($('#form_details input')[3].value)
  updated_data.push($('#form_details input')[4].value)
  updated_data.push($('#form_details input')[5].value)
  updated_data.push($('#form_details input')[6].value)
  updated_data.push($('#form_details input')[7].value)
  updated_data.push($('#form_details input')[8].value)
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
      Interessant:<br>\
      <input type="radio" name="keep" value="true"> oui<br>\
      <input type="radio" name="keep" value="false"> non<br>\
      Loyer: <input type="text" name="Loyer"><br>\
      Superficie: <input type="text" name="Superficie"><br>\
      Meuble: <input type="text" name="Meuble"><br>\
      Metro: <input type="text" name="Metro"><br>\
      Soleil: <input type="text" name="Soleil"><br>\
      Electro menage: <input type="text" name="Electro"><br>\
      Balcon: <input type="text" name="Balcon"><br>\
      <input type="submit" value="Save">\
    </form>\
    '
    form.style.color = darkBlueColor;
    admin.appendChild(form);


    document.body.appendChild(admin);
}
