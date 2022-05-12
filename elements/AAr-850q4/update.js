function(instance, properties, context) {
  window.column1name = properties.col1name
  window.column2name = properties.col1name
  window.column3name = properties.col1name
  window.column4name = properties.col1name
  window.column5name = properties.col1name
  window.column6name = properties.col1name
  window.column7name = properties.col1name
  window.column8name = properties.col1name
  window.column9name = properties.col1name
  window.column10name = properties.col1name

  function JSON2CSV(objArray) {
    var array = typeof objArray != 'object' ? JSON.parse(objArray) : objArray;
    var str = '';
    var line = '';

    if (true) {
      var head = array[0];
      if (true) {
        for (var index in array[0]) {
          var value = index + "";
          line += '"' + value.replace(/"/g, '""') + '",';
        }
      }
      line = line.slice(0, -1);
      str += line + '\r\n';
    }

    for (var i = 0; i < array.length; i++) {
      var line = '';

      if (true) {
        for (var index in array[i]) {
          var value = array[i][index] + "";
          line += '"' + value.replace(/"/g, '""') + '",';
        }
      } else {
        for (var index in array[i]) {
          line += array[i][index] + ',';
        }
      }

      line = line.slice(0, -1);
      str += line + '\r\n';
    }
    return str;
  }

  if (!instance.data.registered) {
    window.addRvarInstance(properties.list_name, instance);
    instance.data.registered = true;
	
      function loop(){
          if (document.querySelector("#somebutton")){
              let a = document.querySelector("#somebutton")
    a.addEventListener('click', function(e) {
      var json_pre = window.jsonfile;
      var json = window.jsonfile;

      var csv = JSON2CSV(json);
      var downloadLink = document.createElement("a");
      var blob = new Blob(["\ufeff", csv]);
      var url = URL.createObjectURL(blob);
      downloadLink.href = url;
      downloadLink.download = `${properties.csv_file_name}.csv`;

      document.body.appendChild(downloadLink);
      downloadLink.click();
      document.body.removeChild(downloadLink);

    })
              } else {
                  setTimeout(loop,500)
              }
      }
    loop()
    
      
      
      
  };

  if (properties.maxlength) {
    window['rvar'][properties.list_name]['maxlength'] = properties.maxlength;
    window.publishRvarValue(properties.list_name, properties.maxlength);
  }

  instance.data.maxlength = properties.maxlength


}
