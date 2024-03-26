import { Grid, Button } from "@mui/material";
import { SearchResult } from "../models/SearchResult";

interface Props {
    page: number;
    setPage: (page: number) => void;
    searchResults: SearchResult[];
    setSearchResults: (searchResults: any) => void;
    searchTerms: string;
}

export default function LoadMoreButton({ page, setPage, searchResults, setSearchResults, searchTerms}: Props) {
    const handleLoadMore = () => {
        var startIndex = (page * 10) + 1;

        fetch("https://sitecolonreddit-backend.onrender.com/search", {
            method: 'put',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                searchTerms: searchTerms,
                start: startIndex.toString()
            })
        })
        .then(res => res.json())
        .then(data => {
            setSearchResults(searchResults.concat(data));
            setPage(page + 1);
        });
    }

    return (
        <Grid container spacing={2} justifyContent="center" mb={6}>
            <Button variant="contained" color="primary" onClick={handleLoadMore}>
                Load More
            </Button>
        </Grid>
    )
}