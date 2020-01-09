import React from 'react'
import { BackgroundImage } from './layout/BackgroundImage'
import { Layer } from './layout/Layer'
import Title from './layout/Title'
import { TextButton } from './layout/Button'
import
  {
    CardContainer,
    Card,
    Back,
    Front,
    Jp,
    Pt,
    Kana
  }
from './layout/Card';
import { CardsList } from './CardsList';


const Portugues = () => {
  return (
    <BackgroundImage>
      <Layer>
        {//<CardsList />
        }
        <Title />
        <CardContainer>
          <Card>
              <Front>
                  <Jp>jp</Jp>
              </Front>
              <Back>
                  <Pt>Bon dia</Pt>
                  <Kana>おはよう</Kana>
              </Back>
          </Card>
        </CardContainer>
        <TextButton>
          ＜ 前のカード
        </TextButton>
        <TextButton>
          次のカード ＞
        </TextButton>
      </Layer>
    </BackgroundImage>
  )
}

export default Portugues
