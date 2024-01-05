import styled from "@emotion/styled";
import { Search, Tune } from "@mui/icons-material";
import { Box, IconButton, InputBase, Paper } from "@mui/material";

const SearchWrapper = styled(Box)({
    background: "#e9f1fb",
    borderRadius: 25,
    maxWidth: 700
})

export function SearchBar() {
    return (
    <SearchWrapper
      component="form"
      flex={2}
      sx={{ p: '2px', display: 'flex', alignItems: 'center'}}
    >
      <IconButton sx={{ p: '10px' }} aria-label="search">
      <Search />
      </IconButton>
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Search mail"
        inputProps={{ 'aria-label': 'Search mail' }}
      />
      <IconButton color="primary" sx={{ p: '10px' }} aria-label="directions">
        <Tune color="action"/>
      </IconButton>
    </SearchWrapper>
    )
}