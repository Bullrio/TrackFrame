import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
  return NextResponse.json({
    frames: [
      {
        image: "https://yourdomain.com/image.jpg",
        input: {
          text: "Paste a YouTube or Spotify link",
        },
        buttons: [{ label: "Generate", action: "post" }]
      }
    ]
  });
}
