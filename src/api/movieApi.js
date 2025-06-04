export async function fetchMovieByTitle(title) {
    if (!title.trim()) return null;

    try {
        const res = await fetch(`https://api.tvmaze.com/search/shows?q=${title}`);
        const data = await res.json();

        if (data.length > 0) {
            const show = data[0].show;
            return {
                title: show.name,
                description: show.summary?.replace(/<[^>]+>/g, '') || 'No description available.',
                image: show.image?.medium || 'https://via.placeholder.com/300x400?text=No+Image',
            };
        } else {
            return null;
        }
    } catch (error) {
        console.error('API error:', error);
        return null;
    }
  }