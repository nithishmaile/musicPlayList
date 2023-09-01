import {AiOutlineDelete} from 'react-icons/ai'

import {
  CardContainer,
  TitleAndImageContainer,
  Image,
  NameAndGenreContainer,
  DurationAndDeleteIcon,
  Name,
  Genre,
  Duration,
} from './styledComponents'

const SongItems = props => {
  const {songsDetails, deleteSong} = props

  const {id, imageUrl, name, genre, duration} = songsDetails

  const onClickDeleteButton = () => [deleteSong(id)]

  return (
    <CardContainer>
      <TitleAndImageContainer>
        <Image src={imageUrl} />
        <NameAndGenreContainer>
          <Name>{name}</Name>
          <Genre>{genre}</Genre>
        </NameAndGenreContainer>
      </TitleAndImageContainer>
      <DurationAndDeleteIcon>
        <Duration>{duration}</Duration>
        <AiOutlineDelete color="#ffffff" onClick={onClickDeleteButton} />
      </DurationAndDeleteIcon>
    </CardContainer>
  )
}

export default SongItems
