const qrVideo = document.getElementById('qr-video');
const qrResult = document.getElementById('qr-result');
const generateQRButton = document.getElementById('generate-qr');
const generatedQRImage = document.getElementById('generated-qr-image');

function startQRScanner() {
  navigator.mediaDevices.getUserMedia({ video: { facingMode: 'environment' } })
    .then(function (stream) {
      qrVideo.srcObject = stream;
      const qrCodeScanner = new window.QRCodeScanner(qrVideo, resultCallback);
      qrCodeScanner.start();
    })
    .catch(function (error) {
      console.error('Error accessing camera:', error);
    });
}

function resultCallback(result) {
  qrResult.textContent = result;
}

function generateQRCode() {
  const qrText = qrResult.textContent;
  const qr = new QRCode(0, 'L');
  qr.addData(qrText);
  qr.make();
  const qrImage = qr.createImgTag(5);
  generatedQRImage.innerHTML = qrImage;
}

document.addEventListener('DOMContentLoaded', function () {
  startQRScanner();
  generateQRButton.addEventListener('click', generateQRCode);
});

// ...
function generateQRCode() {
    const qrText = qrResult.textContent;
    if (!qrText) {
      setStatusMessage('Nema QR koda za generiranje.');
      return;
    }
  
    setStatusMessage('Generiranje QR koda...');
    const qr = new QRCode(0, 'L');
    qr.addData(qrText);
    qr.make();
    const qrImage = qr.createImgTag(5);
    generatedQRImage.innerHTML = qrImage;
    setStatusMessage('');
  }
  
  function setStatusMessage(message) {
    const statusMessage = document.getElementById('status-message');
    statusMessage.textContent = message;
  }
  
  document.addEventListener('DOMContentLoaded', function () {
    startQRScanner();
    generateQRButton.addEventListener('click', generateQRCode);
  });
  // ...