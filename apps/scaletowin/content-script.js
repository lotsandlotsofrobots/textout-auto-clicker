/*



*/

//REQUEST_INITIAL_TEXTS_CLASS = "btn btn-primary btn-lg btn-block w-100 mb-5"



window.shouldFire = false;

//CLASS_OF_SEND_BUTTON = 'btn btn-primary btn-lg btn-block w-100 mb-5';
//CLASS_OF_TEXT = 'text-white fw-bold fs-4';
CLASS_OF_COUNTER_DIV = '_17b6xfz';
//element = document.getElementById(NAME_OF_SEND_BUTTON);

//window.sendTextButton = document.getElementsByClassName(CLASS_OF_SEND_BUTTON)[0];


//window.shouldRun = false;

//window.textelement = window.sendTextButton.querySelector('.text-white.fw-bold.fs-4');

function findElements()
{
    window.sendNextTextDiv = document.getElementsByClassName('_1xuhilk _1fhp5pb')[0];
    if (window.sendNextTextDiv == false)
    {
        console.log("Couldn't find the send next text div");
    }
    else
    {
        console.log("Found the send next text div");
    }

    window.sendNextTextButton = window.sendNextTextDiv.querySelector('button');
    if (window.sendNextTextButton == false)
    {
        console.log("Couldn't find the send next text button");
    }
    else
    {
        console.log("Found the send next text button");
    }

    window.counterDiv = document.getElementsByClassName(CLASS_OF_COUNTER_DIV)[0];
    if (window.sendNextTextDiv == false)
    {
        console.log("Couldn't find the counter div");
    }
    else
    {
        console.log("Found the counter div");
    }
}

function addButtons()
{
    if (window.sendNextTextButton) {
        console.log("Found button-> inner text: " + counterDiv.innerHTML);
        
        //text = textelement.innerHTML;
        
        // add the buttons:
        //button_div = document.getElementsByClassName("_17b6xfz")[0];

        counterDiv.innerHTML = "<button id='startsending'> Start running </button> <button id='stopsending'> Stop running </button> " + counterDiv.innerHTML;

        startSendingButton = document.getElementById('startsending');
        stopSendingButton = document.getElementById('stopsending')

        console.log("Start sending: " + startSendingButton);
        console.log("Start sending: " + stopSendingButton);

        startSendingButton.addEventListener('click', startRunning);
        stopSendingButton.addEventListener('click', stopRunning);

        //if (text == "Request Initial Texts")
        //{

    }
}

function checkForText()
{
    //console.log("inside the loop...  should fire?  " + window.shouldFire);
    //console.log("window.textelement.innerHTML = " + window.textelement.innerHTML );
    //console.log("button for initial texts visible? " + window.sendTextButton.checkVisibility());
    //console.log("Button to send text visibility: " + window.sendNextTextButton.checkVisibility());

    if (!window.shouldFire)
    {
        console.log("Returning");
        return;
    }


    findElements();

    //if (window.textelement == "Send Initial Texts" || window.textelement.innerHTML.startsWith("Send"))
    if (window.sendNextTextButton.disabled == false)
    {
        console.log("Sending text!");

        addButtons();

        window.sendNextTextButton.click();
    }
    /*
    else if (window.sendTextButton.checkVisibility())
    {
        console.log("Requesting initial texts");
        window.sendTextButton.click();
    }*/
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



function setup()
{    
    findElements();

    addButtons();

    intervalHandler = setInterval(checkForText, 200);
    //}
    console.log("Started timer!");
}

console.log('Hello');
sleep(3000).then(() => { setup(); });
  





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