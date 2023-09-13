import React, { useState } from 'react';
import QRCode from 'react-qr-code';
import html2canvas from 'html2canvas';

function MyQRCode({ linkedinURL, selectedColor, logoURL }) {
  const [showDownloadButton, setShowDownloadButton] = useState(true);

  const generateQRCode = () => {
    setShowDownloadButton(false);

    const qrCodeContainer = document.getElementById('qrcode-container');

    html2canvas(qrCodeContainer).then((canvas) => {
      const link = document.createElement('a');
      link.href = canvas.toDataURL();
      link.download = 'qrcode.png';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      setShowDownloadButton(true);
    });
  };

  return (
    <div id="qrcode-container">
      <QRCode value={linkedinURL} bgColor={selectedColor} fgColor="#FFFFFF" size={256} />
      {showDownloadButton ? <button onClick={generateQRCode}>Download QR Code</button> : null}
    </div>
  );
}

export default MyQRCode;
