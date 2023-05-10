import './cliche.css'
import Button from './Button'
import Winning from './winning'
import WinningButton from './WinningButton'
import styled from 'styled-components'

function ActiveButtons({ cardArray }) {

  const buttons = cardArray.map((clicheStr) => {
    return <Button cliche={clicheStr}/>
  })

  return (
    <>
       <Wrapper>
        {buttons}
      </Wrapper>
      {/* <Winning /> */}
      <WinningButton />
    </>
  )

}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-wrap: true;
  margin: 20px;
`

export default ActiveButtons