import { useState } from 'react'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/system';
import SearchInput from '../components/SearchInput';
import SearchResultsList from '../components/SearchResultsList';
import { SearchResult } from '../models/SearchResult';
import LoadMoreButton from '../components/LoadMoreButton';

function App() {
  const [searchTerms, setSearchTerms] = useState<string>('')
  const [searchResults, setSearchResults] = useState<SearchResult[]>([])
  const [page, setPage] = useState<number>(0)

  return (
    <Box display='flex' flexDirection='column' alignItems='center' justifyContent='center' minHeight='100vh' mb={6}>
      <Box display='flex' flexDirection='column' alignItems='center' mb={6}>
        <Typography variant='h2' mb={2}>sitecolonreddit</Typography>
        <SearchInput searchTerms={searchTerms} setSearchTerms={setSearchTerms} setSearchResults={setSearchResults} setPage={setPage} />
      </Box>
      <Box width='100%' display='flex' flexDirection='column' alignItems='center'>
        <SearchResultsList searchResults={searchResults}/>
        {page > 0 && <LoadMoreButton page={page} setPage={setPage} searchResults={searchResults} setSearchResults={setSearchResults} searchTerms={searchTerms}/>}
      </Box>
    </Box>
  )
}

export default App
