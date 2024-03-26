import { Card, CardActionArea, CardContent, Typography } from "@mui/material"
import { SearchResult } from "../models/SearchResult"

interface Props {
    searchResult: SearchResult;
}

export default function SearchResultCard({ searchResult }: Props) {
    return (
        <Card
            variant="outlined"
            sx={{boxShadow: 6}}>
            <CardActionArea href={searchResult.link} target="_blank">
                <CardContent>
                    <Typography variant="h5" color="text.primary" align="left">
                        {searchResult.pagemap.metatags[0]['og:title']}
                    </Typography>
                    <Typography variant="body1" color="text.secondary" align="left">
                        {searchResult.snippet}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    )
}