import { NextRequest, NextResponse } from 'next/server';
import { getSongMetaFromUrl } from './src/utils/parseLink';

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const url = searchParams.get('url');

  if (!url) {
    return NextResponse.json({ error: 'Missing URL' }, { status: 400 });
  }

  const meta = getSongMetaFromUrl(url);

  return NextResponse.json({
    image: meta.image,
    title: meta.title,
    buttons: [{ label: '▶️ Play', action: 'link', target: url }],
  });
}