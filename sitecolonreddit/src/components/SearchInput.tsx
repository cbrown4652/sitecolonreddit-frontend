import { Paper, InputBase, IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useTheme } from '@mui/material/styles'

interface Props {
    searchTerms: string;
    setSearchTerms: (searchTerms: string) => void;
    setSearchResults: (searchResults: any) => void;
    setPage: (page: number) => void;
}

export default function SearchInput({ searchTerms, setSearchTerms, setSearchResults, setPage }: Props){
    const theme = useTheme();

    const handleSearch = () => {
        fetch("https://sitecolonreddit-backend-go.onrender.com/search", {
        method: 'put',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify({
            searchTerms: searchTerms,
            start: "1"
        })
        })
        .then(res => res.json())
        .then(data => {
            setSearchResults(data);
            setPage(1);
            })
        .catch(err => console.error(err));
    }

    return (
        <Paper
          component="form"
          sx={{ 
            p: '2px 4px', 
            display: 'flex', 
            alignItems: 'center', 
            width: 400, 
            backgroundColor: theme.palette.primary.main,
            boxShadow: 6, 
            borderRadius: '10px'}}
          onSubmit={(e) => {
            e.preventDefault();
            handleSearch();
          }}
        >
          <InputBase
            sx={{ 
              ml: 1, 
              flex: 1, 
              color: 'white',
              fontSize: '1.2rem',
              fontWeight: 'bold',
              '&::placeholder': {
                color: 'rgba(255, 255, 255, 0.7)',
              },
            }}
            placeholder="Search Reddit"
            inputProps={{ 'aria-label': 'search reddit' }}
            onChange={(e) => setSearchTerms(e.target.value)}
          />
          <IconButton
            type="button"
            sx={{ 
              p: '10px', 
              color: 'rgba(255, 255, 255, 0.7)', 
              '&:hover': { 
                color: theme.palette.primary.main,
                backgroundColor: theme.palette.secondary.main 
              },
            }}
            aria-label="search"
            onClick={handleSearch}
          >
            <SearchIcon sx={{ fontSize: 30 }} />
          </IconButton>
        </Paper>
    )
}