import { useState, useEffect } from 'react';
import firebase from 'firebase/app';
import 'firebase/database';

firebase
.firestore()
.collection('cards')
.where('id', '==', 'rSSMV3DJbwHxo9XnSijn')
.orderBy('id')

export const useCards = () => {
  const cards = useState
  useEffect(() => {
    firebase
      .firestore()
      .collection('cards')
      .where('id', '==', 'rSSMV3DJbwHxo9XnSijn')
      .orderBy('id')
      .get()
      .then(snapshot => {
        const allCards = snapshot.docs.map(card => ({
          ...card.data(),
          docId: card.id,
        }));

        if (JSON.stringify(allCards) !== JSON.stringify(cards)) {
          return(allCards);
        }
      });
  });

  return { cards };
};
