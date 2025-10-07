// Never use @iconify/react inside this file.
import { ImageResponse } from 'next/og';

export const size = {
  width: 64,
  height: 64
};
export const contentType = 'image/png';

export default function Icon() {
  return new ImageResponse(

    <div data-editor-id="app/icon.tsx:13:7"
    style={{
      width: '100%',
      height: '100%',
      display: 'flex'
    }}>

        <img data-editor-id="app/icon.tsx:20:9"
      src="/favicon.ico" // Using the local favicon.ico
      style={{
        width: '100%',
        height: '100%',
        objectFit: 'contain'
      }} />

      </div>,

    {
      ...size
    }
  );
}
