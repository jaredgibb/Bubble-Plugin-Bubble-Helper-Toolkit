function(instance, context) {    
    
    function valueChanged(el) {
        
        let value = el.value;
          
        instance.publishState('value',value);
        instance.publishState('character_count', value.length)
    }
	
    instance.data.valueChanged = valueChanged;
    
    function setListeners(el, autocomplete) {
        
        valueChanged(el);
                        
            el.addEventListener('keyup', function(e){              
                
                valueChanged(el);
        		instance.triggerEvent('value_changed');

            });
            
            el.addEventListener('keydown', function(e){
                
                let keyCode = e.which;  
                
                (keyCode === 13) ? instance.triggerEvent('enter_pressed') : "" ;
                    

            });

            el.addEventListener('change', function() {

                valueChanged(el);

            });

            el.addEventListener('focus', function () {
				
                instance.triggerEvent('input_is_focused');
                valueChanged(el);

            });

            el.addEventListener('blur', function () {
                
				instance.triggerEvent('input_lost_focus');
                valueChanged(el);

          	});
        
        if (autocomplete) {
            el.autocomplete = "off";
        }
    }
    
    instance.data.setListeners = setListeners;


}