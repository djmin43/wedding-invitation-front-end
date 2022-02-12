import React from 'react'
import * as S from '@styled'
// import Accordion from '@mui/material/Accordion'
// import AccordionSummary from '@mui/material/AccordionSummary'
// import AccordionDetails from '@mui/material/AccordionDetails'
// import ExpandMoreIcon from '@mui/icons-material/ExpandMore'

const GiftMoney = () => {
  return (
    <S.WhiteCardContainer>
      <S.SubHeader>마음 전하실 곳</S.SubHeader>
      <S.ParagraphWrapper>
        <p>참석이 어려우신 분들은</p>
        <p>축하의 마음을 전달해주세요.</p>
      </S.ParagraphWrapper>
      {/* <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          asjdkflajsdfl
        </AccordionSummary>
        <AccordionDetails>백만원</AccordionDetails>
      </Accordion> */}
    </S.WhiteCardContainer>
  )
}

export default GiftMoney
