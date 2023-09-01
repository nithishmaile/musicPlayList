import styled from 'styled-components'

export const MusicPlayListContainer = styled.div`
  background-color: #152850;
  min-height: 100vh;
`

export const SingerName = styled.h1`
  color: #ffffff;
  font-size: 30px;
  font-family: 'Roboto';
`
export const SingerDescription = styled.p`
  color: #ffffff;
  font-size: 25px;
  font-family: 'Roboto';
  margin-top: 0px;
`
export const TopSectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding-left: 40px;
  background-image: url('https://assets.ccbp.in/frontend/react-js/music-playlist/music-playlist-Edsheeran-bg.png');
  width: 100%;
  background-size: cover;
  height: 415px;
`

export const FilterSectionContainer = styled.div`
  padding-top: 10px;
  padding-right: 30px;
  padding-left: 30px;
`

export const HeadingAndSearchInputContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const PlayListHeading = styled.h1`
  color: #ffffff;
  font-size: 30px;
  font-family: 'Roboto';
`

export const SearchInputContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid #ffffff;
  border-radius: 5px;
  padding: 2px;
`

export const SearchInput = styled.input`
  background-color: transparent;
  outline: none;
  color: white;
  border-width: 0px;
`

export const NoSongsFoundContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const NoSongsHeading = styled.h1`
  color: #ffffff;
  font-family: 'Roboto';
  font-size: 40px;
`

export const UnOrderedListContainer = styled.u1`
  list-style: none;
`
