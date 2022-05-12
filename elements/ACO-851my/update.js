function(instance, properties, context) {
    
    const valueChanged = instance.data.valueChanged,
          setListeners = instance.data.setListeners;
    
    if (!instance.data.initialized) {
        
        instance.data.initialized = true;
        
        // console.log(instance.data.initialized)
    
        let el = document.getElementById(properties.input_id);

        if (el) {

            setListeners(el, properties.disable_autocomplete);
            
        } else {

            // console.log('observer')

            const observer = new MutationObserver(() => {

                let el = document.getElementById(properties.input_id)

                if (el) {

                    setListeners(el, properties.disable_autocomplete);

                    observer.disconnect();

                }
            });

            observer.observe(document.body, { subtree: true, childList: true });
        }
    }

}