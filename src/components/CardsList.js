import React, { useState, useEffect } from 'react';
import firebase from '../config/firebase'

function useCards() {
  const [cards, setCards] = useState([]);

  useEffect (() => {
    firebase
      .firestore()
      .collection('cards')
      .onSnapshot((snapshot) => {
        const newCards = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data()
        }))
        setCards(newCards)
      })
  },[])

  return cards
}

export const CardsList = () => {
  const cards = useCards()
  return (
    <div>
      <ul>
        {cards.map((card) =>
          <li key={card.id}>
            <div>
              {card.jp}
              <code>{card.kana}</code>
            </div>
          </li>
        )}
      </ul>
    </div>
  );
}