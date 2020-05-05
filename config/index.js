module.exports = {
    PORT: process.env.PORT || 3000,
    NODE_ENV: process.env.NODE_ENV || "development",
    HACKER_NEWS_BASE_URL: process.env.BASE_HACKER_NEWS_URL || "https://hn.algolia.com/api/v1/",
    HACKER_NEWS_ACTION: process.env.HACKER_NEWS_ACTION || "search"
}