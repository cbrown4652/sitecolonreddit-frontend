import { Card, CardActionArea, CardContent, Typography, Box } from "@mui/material"
import { SearchResult } from "../models/SearchResult"
import { useTheme } from '@mui/material/styles';

interface Props {
    searchResult: SearchResult;
}

export default function SearchResultCard({ searchResult }: Props) {
    const theme = useTheme();

    return (
        <Card
            //variant="outlined"
            sx={{
                //boxShadow: 6,
                backgroundColor: theme.palette.secondary.light,
                '&:hover': {
                    backgroundColor: theme.palette.secondary.main,
                },
                borderRadius: "10px"
            }}>
            <CardActionArea href={searchResult.link} target="_blank">
                <CardContent sx={{ padding: 0 }}>
                    <Box
                        sx={{
                            backgroundColor: theme.palette.secondary.dark,
                            padding: 2,
                        }}
                    >
                        <Typography variant="h6" color="text.primary" align="left" sx={{ fontWeight: 'bold' }}>
                            {searchResult.pagemap.metatags[0]['og:title']}
                        </Typography>
                    </Box>
                    <Box
                        sx={{
                            backgroundColor: theme.palette.secondary.light,
                            padding: 2,
                        }}
                    >
                        <Typography variant="body1" color="text.secondary" align="left" sx={{ fontSize: '1.1rem' }}>
                            {searchResult.snippet}
                        </Typography>
                    </Box>
                </CardContent>
            </CardActionArea>
        </Card>
    )
}