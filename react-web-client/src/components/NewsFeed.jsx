import useCryptoNews from "../hooks/useCryptoNews";

function NewsFeed() {
  const { articles, loading, error } = useCryptoNews();

  return (
    <div className="news-feed">
      <h2>News Feed</h2>

      {loading && <p>Loading...</p>}
      
      {error && <p>{error}</p>}

      {!loading && !error && articles?.length === 0 && (
        <p>Feeds not available</p>
      )}

      {!loading && !error && articles?.length > 0 && (
        articles.map((article, _index) => (
          <div key={_index}>
            <a href={article.url} target="_blank" rel="noopener noreferrer">
              <p>{article.title}</p>
            </a>
          </div>
        ))
      )}
    </div>
  );
}

export default NewsFeed;
