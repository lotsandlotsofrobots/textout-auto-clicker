// background.js
/*
// Example function to send a message to the content script
function getPageElementFromTab(tabId) {
    chrome.tabs.sendMessage(tabId, { action: "getPageElement" }, (response) => {
        console.log("Content from page:", response.content);
        // Process the data or perform additional actions here
    });
}

// Example: Get element content from the currently active tab
chrome.action.onClicked.addListener((tab) => {
    console.log("Tab " + tab.id )
    getPageElementFromTab(tab.id);
});


//getPageElementFromTab()
*/

const runtime = typeof browser !== "undefined" ? browser : chrome;

console.log("Runtime is " + runtime);

runtime.runtime.onMessage.addListener((request, sender, sendResponse) => {
    aslkdjfafd
    console.log("Got a message");
    if (request.action === "sayhello") {
        /*const element = document.querySelector("foo"); // Example element
        const elementContent = element ? element.innerText : "Element not found";
        sendResponse({ content: elementContent });
        */
       console.log("Received a " + request.action  + " message!");
    }

    sendResponse({ 'derp' : 'herp'});
    alert('ahhhhh');
});
