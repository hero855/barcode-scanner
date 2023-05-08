// html5-qrcode

function onScanSuccess(decodedText, decodedResult) {
    window.Telegram.WebApp.sendData({ decodedText, decodedResult });
    alert(decodedText);
}

function onScanFailure(error) {
    // handle scan failure
    console.warn(`Code scan error = ${error}`);
}

let html5QrcodeScanner = new Html5QrcodeScanner(
    "reader",
    { fps: 10, qrbox: { width: 250, height: 250 } },
    /* verbose= */ false);
html5QrcodeScanner.render(onScanSuccess, onScanFailure);

// telegram native qr code api

// const scanQrPopupOptions = { text: 'Scan qr code' };

// const handleCodeCatch = (text) => {
//     window.Telegram.WebApp.sendData(text);
//     return true;  // close scanQrPopup
// }

// window.Telegram.WebApp.showScanQrPopup(scanQrPopupOptions, handleCodeCatch);
