/*
document.start_automating = function()
{
    console.log("Hello world");
}

function hovering() 
{
    console.log("Hovering...");
}

e = document.getElementsByClassName("gNO89b")[0];

if (e == null)
{
    console.log("No e???");
}
else
{
    console.log("Hello...");
    console.log("E !!!  " +  e.getAttribute("value"));
    console.log("Whats going on here??")
}

e.addEventListener("hover", hovering);
console.log("Running hovering:");
hovering();
*/

/*
function sayhello()
{
    console.log("say hello...");
}

sayhello();


chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === "sayhello") {
        sayhello();
        sendResponse({ content: elementContent });
    }
});
*/

shouldFire = true;

NAME_OF_SEND_BUTTON = 'unknown';

function checkForText()
{
    if (!shouldFire)
    {
        return;
    }

    element = document.getElementById(NAME_OF_SEND_BUTTON);

    if (!element)
        return;

    console.log("Element: " + element.value);

    if (element.value == "do it")
    {
        /*element.focus();
        var evt = new CustomEvent('keyup');
        evt.which = 13;
        evt.keyCode = 13;
        element.dispatchEvent(evt);
        shouldFire = false;
        */
       //element.form.submit();
       element.click();
       shouldFire = False;
    }
}


element = document.getElementById(NAME_OF_SEND_BUTTON);
window.shouldRun = false;

if (element) {
    intervalHandler = setInterval(checkForText, 1000);
}

function sayHello()
{
    alert("Hello!");
}

console.log("Finding class:")
element = document.getElementsByClassName('o3j99 LLD4me LS8OJ')[0];
console.log("Did we find it? " + element);
console.log("html: " + element.innerHTML);
element.innerHTML += "<p style=\"position: absolute; z-index: 100\" onclick=\"( function() {  window.shouldRun = !window.shouldRun; console.log('should run? ' + window.shouldRun); } )() \"> Do stuff </p>";