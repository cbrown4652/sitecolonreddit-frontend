import { Grid } from "@mui/material";
import SearchResultCard from "./SearchResultCard";
import { SearchResult } from "../models/SearchResult"

interface Props {
    searchResults: SearchResult[];
}

export default function SearchResultsList({ searchResults }: Props) {
    return (
        <Grid container spacing={2} mb={6}>
            {searchResults.map((searchResult) => (
                <Grid item xs={12}>
                    <SearchResultCard searchResult={searchResult} />
                </Grid>
            ))}
        </Grid>
    )
}