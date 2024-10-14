import { Grid, Button } from "@mui/material";
import { SearchResult } from "../models/SearchResult";
import { useTheme } from '@mui/material/styles';

interface Props {
    page: number;
    setPage: (page: number) => void;
    searchResults: SearchResult[];
    setSearchResults: (searchResults: any) => void;
    searchTerms: string;
}

export default function LoadMoreButton({ page, setPage, searchResults, setSearchResults, searchTerms}: Props) {
    const theme = useTheme();

    const handleLoadMore = () => {
        var startIndex = (page * 10) + 1;

        fetch("https://sitecolonreddit-backend-go.onrender.com/search", {
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
        })
        .catch(err => console.error(err));
    }

    return (
        <Grid container spacing={2} justifyContent="center" mb={6}>
            <Button
                variant="contained"
                sx={{
                    backgroundColor: theme.palette.primary.main,
                    borderRadius: '10px',
                    fontSize: '1.1rem',
                    '&:hover': {
                        backgroundColor: theme.palette.primary.main,
                    },
                }}
                onClick={handleLoadMore}
            >
                Load More
            </Button>
        </Grid>
    )
}