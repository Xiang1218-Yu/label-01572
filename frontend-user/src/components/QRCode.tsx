import { useEffect, useRef } from 'react';
import QRCodeLib from 'qrcode';

interface QRCodeProps {
  text: string;
  size?: number;
}

export default function QRCode({ text, size = 48 }: QRCodeProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!canvasRef.current) return;
    QRCodeLib.toCanvas(canvasRef.current, text, {
      width: size,
      margin: 1,
      color: { dark: '#000000', light: '#ffffff' },
    });
  }, [text, size]);

  return (
    <canvas
      ref={canvasRef}
      width={size}
      height={size}
      style={{ borderRadius: 4 }}
      role="img"
      aria-label={`二维码: ${text}`}
    />
  );
}
