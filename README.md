# sitecolonreddit - An improved Reddit search using the power of Google.

To view the live site: [click here](https://sitecolonreddit.onrender.com/)

> [!NOTE]  
> The backend server is currently on a free plan and may take up to a minute to respond to the first request.

## FAQ
**What is sitecolonreddit?**

sitecolonreddit is an improved search for Reddit that uses Google search to find Reddit posts related to a search query. If you've ever added "site:reddit.com" to the end of a Google search, that's exactly what this does.

**How does it work?**

This repository contains the frontend code (React + Typescript) that simply displays the search results for a query. Search queries are sent to the [search backend](https://github.com/cbrown4652/sitecolonreddit-backend-go) (Golang) which routes search queries to a Custom Google Search limited to only reddit.com.
