import React, { useState, useEffect } from 'react';
import firebase from '../config/firebase'
import {
  CardContainer,
  Card,
  Jp,
  Pt,
  Kana,
  Front,
  Back
} from './layout/Card';

const  rrentCards = () => {
  const [ currentCards, setCurrentCards] = useState([]);

  useEffect (() => {
    firebase
      .firestore()
      .collection('cards')
      .onSnapshot((snapshot) => {
        const newCurrentCards = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data()
        }))
        setCurrentCards(newCurrentCards)
        //console.log(currentCards.get(1))
      })
  })
}

const urrentCards = () => {
  const cards = currentCards[1]
  currentCards.push({
    id: currentCards.key,
    jp: currentCards.jp,
    pt: currentCards.pt,
    kana: currentCards.kana,
  })
}

export default function CurrentCards() {
  return (
    <CardContainer>
        {cards.map((card) =>
          <Card key={card.id}>
            <Front>
              <Jp>{card.jp}</Jp>
            </Front>
            {/*<Back>
              <Pt>{currentCard.pt}</Pt>
              <Kana>{currentCard.kana}</Kana>
            </Back>
            */}
          </Card>
        )}
    </CardContainer>
  );
}