function(properties, context) {
function convertSeconds(input) {
      //convert the string to a number
      let seconds = Number(input);
      //create a date object
      let date = new Date(seconds * 1000);
      //return the date object
      return date;
      }

   function checkNull(){
       if (properties.seconds){
           return convertSeconds(properties.seconds)
       } else {
           return convertSeconds(0)
       }
   }

return {
    "date": convertSeconds(properties.seconds)
}


}