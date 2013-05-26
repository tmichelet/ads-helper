/*
    NEEDED GLOBAL VARIABLES

    detail_page = "www.famillechretienne.fr/dtails_"
    container_selector = '.liste_annonce'
    ads_selector = '.annonce'
*/

function site() {
  console.log()

  if(document.URL.indexOf(detail_page) == -1) {
    // Search page
    console.log('this is the list page')
    // initialization 
    container = new AdsContainer($(container_selector).html())
    ads = $(ads_selector)

    var length = ads.length
    for (var i = 0; i < length; i++) {
      container.ads.push(new Ad($(ads[i]).html(), $(ads[i]).find('a').attr('href'), i))
    }

    
    // remove unwanted ads 
    for (var i = 0; i < length; i++) {
      if(!container.ads[i].shouldBeDisplayed()) {
        $(ads[i]).hide()
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
  for (var i = 0; i < spreadsheet_content.length; i++) {
    if(spreadsheet_content[i][0] == document.URL) {
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
  }
}




function saveDetails() {
  updated_data = []
  updated_data.push(document.URL)
  updated_data.push($('#form_details input')[0].checked)
  updated_data.push($('#form_details input')[2].value)
  updated_data.push($('#form_details input')[3].value)
  updated_data.push($('#form_details input')[4].value)
  updated_data.push($('#form_details input')[5].value)
  updated_data.push($('#form_details input')[6].value)
  updated_data.push($('#form_details input')[7].value)
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
      <input type="submit" value="Save">\
    </form>\
    '
    form.style.color = darkBlueColor;
    admin.appendChild(form);


    document.body.appendChild(admin);
}
