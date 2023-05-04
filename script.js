// function onScanSuccess(decodedText, decodedResult) {
//     // handle the scanned code
//     console.log(`Code matched = ${decodedText}`, decodedResult);
// }

// function onScanFailure(error) {
//     // handle scan failure
//     console.warn(`Code scan error = ${error}`);
// }

// let html5QrcodeScanner = new Html5QrcodeScanner(
//     "reader",
//     { fps: 10, qrbox: { width: 250, height: 250 } },
//     /* verbose= */ false);
// html5QrcodeScanner.render(onScanSuccess, onScanFailure);

window.Telegram.WebApp.showScanQrPopup({ text: 'Scan qr code' });
