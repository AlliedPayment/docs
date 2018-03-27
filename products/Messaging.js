var Config = { origin: "https://billpay.demo.alliedpayment.com" }; // todo use domain of the FI
var Messaging = (function (config, self) {
    var iframe, options;
    var url = config.origin;

    // Application Constructor
    var initialize = function () {
        iframe = getIframe();
        bindEvents();
    };

    // Bind Event Listeners
    var bindEvents = function () {
        // Announce that we have a camera.
        iframe.addEventListener("load", postMessage, false);
        // Add listener to ifame to allow billpay to send messages to parent cordova app
        window.addEventListener("message", onMessage, false);
    };

    // Get reference to element whose id = "iframe"
    var getIframe = function () {
        return document.getElementById('iframe');
    };

    // Handle message from iframe
    // If the message data equals camera and the message was recieved by the correct origin then
    // activate the camera and send the imageData back to iframe in a message.
    var onMessage = function (event) {
        console.log(event);
        if (event.origin !== url) return;
        if (event.data !== "camera") return;
        iframe = iframe.contentWindow ? iframe : getIframe(); // rebind if refernece to the content window is lost
        navigator.camera.getPicture(onPhoto, onError, );
    };

    var onPhoto = function (imageData) {
        iframe.contentWindow.postMessage({
            image: imageData
        }, url);
    };

    var onError = function (message) {
        iframe.contentWindow.postMessage({
            error: message
        }, url);
    };

    var setOptions = function () {
        return {
            quality: 35,
            destinationType: navigator.camera.DestinationType.DATA_URL,
            targetWidth: 1600,
            targetHeight: 1200
        };
    }
    //Send message to iframe informing iframe of camera availability
    var postMessage = function (event) {
        var cameraEnabled = navigator.camera != null && navigator.camera.getPicture != null;
        options = cameraEnabled ? setOptions() : null;
        console.log(event);
        console.log('Camera enabled: ' + cameraEnabled);
        console.log(options);
        iframe.contentWindow.postMessage({
            cameraEnabled: cameraEnabled,
            options: options
        }, url);
    };

    // Public API
    self.initialize = initialize;
    return self;
}(Config, Messaging || {}));

Messaging.initialize();
