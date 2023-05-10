// html5-qrcode

var resultContainer = document.getElementById('qr-reader-results');
var lastResult, countResults = 0;

function onScanSuccess(decodedText, decodedResult) {
    window.Telegram.WebApp.sendData({ decodedText, decodedResult });
}

var html5QrcodeScanner = new Html5QrcodeScanner(
    "qr-reader", { fps: 10, qrbox: 250 });
html5QrcodeScanner.render(onScanSuccess);

// telegram native qr code api

// const scanQrPopupOptions = { text: 'Scan qr code' };

// const handleCodeCatch = (text) => {
//     window.Telegram.WebApp.sendData(text);
//     return true;  // close scanQrPopup
// }

// window.Telegram.WebApp.showScanQrPopup(scanQrPopupOptions, handleCodeCatch);
