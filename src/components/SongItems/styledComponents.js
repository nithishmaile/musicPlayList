import styled from 'styled-components'

export const CardContainer = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
`

export const TitleAndImageContainer = styled.div`
  display: flex;
  align-items: center;
`

export const Image = styled.img`
  height: 80px;
  width: 110px;
`

export const NameAndGenreContainer = styled.div`
  margin-left: 15px;
`

export const DurationAndDeleteIcon = styled.div`
  display: flex;
  align-items: center;
`

export const Name = styled.h1`
  color: #ffffff;
  font-family: 'Roboto';
  font-size: 20px;
`

export const Genre = styled.p`
  color: #3b82f6;
  font-family: 'Roboto';
  font-size: 15px;
`

export const Duration = styled.p`
  color: #ffffff;
  font-family: 'Roboto';
  font-size: 14px;
  margin-right: 20px;
`
