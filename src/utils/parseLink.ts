export function extractYoutubeId(url: string): string {
  const match = url.match(/(?:v=|\/)([0-9A-Za-z_-]{11})/);
  return match ? match[1] : '';
}

export function getSongMetaFromUrl(url: string) {
  if (url.includes('youtube.com') || url.includes('youtu.be')) {
    return {
      image: `https://img.youtube.com/vi/${extractYoutubeId(url)}/hqdefault.jpg`,
      title: 'YouTube Song',
    };
  }
  if (url.includes('spotify.com')) {
    return {
      image: '/default-spotify.jpg',
      title: 'Spotify Song',
    };
  }
  return {
    image: '/default.jpg',
    title: 'Unknown',
  };
}