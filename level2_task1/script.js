let display = document.getElementById('display');
    let lastanswer = 0;
    function appendToDisplay(value){
        display.value += value;
    }
    function cleardisplay(){
        display.value = '';
    }
    function deletelast(){
        display.value = display.value.slice(0, -1);
    }
    function calculate(){
        try{
            lastanswer = eval(display.value);
            display.value = lastanswer;
        }catch(error){
            display.value = 'Error';
        }
    }
    function calculateans(){
        display.value += lastanswer;
    }
