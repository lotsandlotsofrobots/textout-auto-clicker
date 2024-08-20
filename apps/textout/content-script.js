/*



*/

REQUEST_INITIAL_TEXTS_CLASS = "btn btn-primary btn-lg btn-block w-100 mb-5"



window.shouldFire = false;

CLASS_OF_SEND_BUTTON = 'btn btn-primary btn-lg btn-block w-100 mb-5';
CLASS_OF_TEXT = 'text-white fw-bold fs-4'

//element = document.getElementById(NAME_OF_SEND_BUTTON);

window.sendTextButton = document.getElementsByClassName(CLASS_OF_SEND_BUTTON)[0];
window.sendNextTextButton = document.getElementById('iob-send-button');
window.shouldRun = false;

window.textelement = window.sendTextButton.querySelector('.text-white.fw-bold.fs-4');


function checkForText()
{
    console.log("inside the loop...  should fire?  " + window.shouldFire);
    console.log("window.textelement.innerHTML = " + window.textelement.innerHTML );
    console.log("button for initial texts visible? " + window.sendTextButton.checkVisibility());
    console.log("Button to send text visibility: " + window.sendNextTextButton.checkVisibility());

    if (!window.shouldFire)
    {
        console.log("Returning");
        return;
    }

    //if (window.textelement == "Send Initial Texts" || window.textelement.innerHTML.startsWith("Send"))
    if (window.sendNextTextButton.checkVisibility())
    {
        console.log("Sending text!");
       window.sendNextTextButton.click();
    }
    else if (window.sendTextButton.checkVisibility())
    {
        console.log("Requesting initial texts");
        window.sendTextButton.click();
    }
    else
    {
        console.log("Waiting...");
    }
}


function startRunning()
{
    console.log("Setting to true");
    window.shouldFire = true;
}

function stopRunning()
{
    console.log("Setting to false");
    window.shouldFire = false;
}


function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  
console.log('Hello');
sleep(3000).then(() => { console.log('World!'); });
  



if (window.sendTextButton) {
    console.log("Found button->" + textelement + " inner text: " + textelement.innerHTML);
    
    text = textelement.innerHTML;
    
    // add the buttons:
    button_div = document.getElementsByClassName("d-flex align-items-center gap-2 gap-lg-3 min-w-150px")[0];

    button_div.innerHTML = "<button id='startsending'> Start running </button> <button id='stopsending'> Stop running </button> " + button_div.innerHTML;

    startSendingButton = document.getElementById('startsending');
    stopSendingButton = document.getElementById('stopsending')

    console.log("Start sending: " + startSendingButton);
    console.log("Start sending: " + stopSendingButton);

    startSendingButton.addEventListener('click', startRunning);
    stopSendingButton.addEventListener('click', stopRunning);

    //if (text == "Request Initial Texts")
    //{
    intervalHandler = setInterval(checkForText, 250);
    //}
    console.log("Started timer!");
}




/*
function sayHello()
{
    alert("Hello!");
}

console.log("Finding class:")
element = document.getElementsByClassName('o3j99 LLD4me LS8OJ')[0];
console.log("Did we find it? " + element);
console.log("html: " + element.innerHTML);
element.innerHTML += "<p style=\"position: absolute; z-index: 100\" onclick=\"( function() {  window.shouldRun = !window.shouldRun; console.log('should run? ' + window.shouldRun); } )() \"> Do stuff </p>";
*/