function(instance, properties, context) {


  if(properties.list_name) {
  var index = properties.cell_index-1;
  var list_name = properties.list_name;
  if(!instance.data.listinit) {
    window.addRvarInstance(list_name);  
    instance.data.listinit = true;
  }
  window['rvar'][list_name]['data'][index] = {
    column1: properties.column1,
    column2: properties.column2,
    column3: properties.column3,
    column4: properties.column4,
    column5: properties.column5,
    column6: properties.column6,
    column7: properties.column7,
    column8: properties.column8,
    column9: properties.column9,
    column10: properties.column10,
    
  }
      console.log(properties.column1)
      
 
  if(properties.auto_publish_changes){
    window.publishRvarValue(properties.list_name, properties.maxlength);
  } 
  } 

    
if (properties.key1){
    window['key1']=properties.key1
}
if (properties.key2){
    window['key2']=properties.key2
}
if (properties.key3){
    window['key3']=properties.key3
}
if (properties.key4){
    window['key4']=properties.key4
}
if (properties.key5){
    window['key5']=properties.key5
}
if (properties.key6){
    window['key6']=properties.key6
}
if (properties.key7){
    window['key7']=properties.key7
}
if (properties.key9){
    window['key9']=properties.key9
}
if (properties.key10){
    window['key10']=properties.key10
}
    
    
    
}