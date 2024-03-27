import { Paper, InputBase, IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

interface Props {
    searchTerms: string;
    setSearchTerms: (searchTerms: string) => void;
    setSearchResults: (searchResults: any) => void;
    setPage: (page: number) => void;
}

export default function SearchInput({ searchTerms, setSearchTerms, setSearchResults, setPage }: Props){
    const handleSearch = () => {
        fetch("https://sitecolonreddit-backend.onrender.com/search", {
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
          sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400, boxShadow: 6}}
          onSubmit={(e) => {
            e.preventDefault();
            handleSearch();
          }}
        >
          <InputBase
            sx={{ ml: 1, flex: 1 }}
            placeholder="Search Reddit"
            inputProps={{ 'aria-label': 'search reddit' }}
            onChange={(e) => setSearchTerms(e.target.value)}
          />
          <IconButton
            type="button"
            sx={{ p: '10px' }}
            aria-label="search"
            onClick={handleSearch}
          >
            <SearchIcon />
          </IconButton>
        </Paper>
    )
}