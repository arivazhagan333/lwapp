import React, { useRef } from 'react';
import { Download, ShieldCheck, ExternalLink } from 'lucide-react';

export default function CertificatePreview({
  certificate,
  
  redirectUrl = 'https://returning-expanding-soonest-permitted.trycloudflare.com',
}) {
  const certRef = useRef(null);

  // High-Resolution Canvas Download & Redirect
  const handleDownloadAndRedirect = () => {
    const canvas = document.createElement('canvas');
    const width = 1600;
    const height = 1100;
    canvas.width = width;
    canvas.height = height;
    const ctx = canvas.getContext('2d');

    // Load template image
    const img = new Image();
    img.crossOrigin = 'anonymous';
    img.src = '/livewire_certificate_template.jpg';

    img.onload = () => {
      
      // 1. Draw base certificate template
      ctx.drawImage(img, 0, 0, width, height);

      // 2. Clear previous name area with white background matching certificate center
      ctx.fillStyle = '#ffffff';
      ctx.fillRect(width * 0.2, height * 0.40, width * 0.6, height * 0.08);

      // 3. Draw the center underline
      ctx.strokeStyle = '#222222';
      ctx.lineWidth = 2.5;
      ctx.beginPath();
      ctx.moveTo(width * 0.22, height * 0.465);
      ctx.lineTo(width * 0.78, height * 0.465);
      ctx.stroke();

      // 4. Draw Student's Name directly above the line
      ctx.fillStyle = '#111827';
      ctx.font = 'bold 42px "Times New Roman", Times, serif';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'bottom';
      ctx.fillText(certificate.studentName, width / 2, height * 0.458);

      // 5. Trigger download file
      const link = document.createElement('a');
      link.download = `Livewire_Certificate_${certificate.studentName.replace(/[^a-zA-Z0-9]/g, '_')}.png`;
      link.href = canvas.toDataURL('image/png');
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
  // 6. Redirect to specified link after download initiates (1.2 seconds delay)
      if (redirectUrl) {
        setTimeout(() => {
          window.location.href = redirectUrl;
        }, 1000);
      }
      
    };

    img.onerror = () => {
      alert('Unable to load certificate image template.');
    };
  };

  return (
    <div className="space-y-6">
      {/* Top Controls Action Bar */}
      <div className="bg-slate-900 text-white p-4 sm:p-5 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-4 shadow-xl border border-slate-800">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-emerald-950 border border-emerald-500/30 text-emerald-400 flex items-center justify-center shrink-0">
            <ShieldCheck className="w-5 h-5" />
          </div>
          <div>
            <div className="text-sm font-bold text-white flex items-center gap-2">
              <span>Certificate Generated for {certificate.studentName}</span>
              <span className="text-[10px] bg-emerald-500/20 text-emerald-300 px-2 py-0.5 rounded font-mono">
                {certificate.certificateId}
              </span>
            </div>
            <div className="text-xs text-slate-400">
              {certificate.college} &bull; {certificate.location}
            </div>
          </div>
        </div>

        <button
          onClick={handleDownloadAndRedirect}
          className="w-full sm:w-auto bg-livewire-red hover:bg-livewire-darkRed text-white px-6 py-3 rounded-xl text-sm font-black transition flex items-center justify-center gap-2 shadow-lg shadow-red-600/30 hover:scale-105 active:scale-95 cursor-pointer"
        >
          <Download className="w-4 h-4" />
          <span>Download Certificate</span>
        </button>
      </div>

      {/* Visual Certificate Card */}
      <div className="overflow-x-auto pb-6 flex justify-center">
        <div
          ref={certRef}
          className="w-[860px] h-[580px] bg-white relative rounded-lg shadow-2xl overflow-hidden border-2 border-gray-300 select-none text-slate-800 shrink-0 font-sans"
          style={{
            backgroundImage: 'url(/livewire_certificate_template.jpg)',
            backgroundSize: '100% 100%',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
        >
          {/* Overlay to place dynamic name on top of the underline */}
          <div className="absolute inset-0 flex flex-col justify-center items-center pointer-events-none">
            {/* White masking block */}
            <div
              className="absolute bg-white"
              style={{
                top: '40.5%',
                left: '20%',
                width: '60%',
                height: '7.5%',
              }}
            ></div>

            {/* Horizontal Underline */}
            <div
              className="absolute border-b-2 border-slate-800"
              style={{
                top: '47.5%',
                left: '20%',
                width: '60%',
              }}
            ></div>

            {/* Dynamic Student Name centered above the line */}
            <div
              className="absolute w-full text-center"
              style={{
                top: '41.5%',
              }}
            >
              <span
                className="text-3xl sm:text-4xl font-serif font-black text-slate-900 tracking-wide inline-block"
                style={{
                  fontFamily: '"Times New Roman", Times, Georgia, serif',
                }}
              >
                {certificate.studentName}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
