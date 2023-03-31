import { useState, useCallback, useEffect } from 'react'; 
import { View, Text, TouchableOpacity } from 'react-native';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';

import { PlayerCard } from '../../components/PlayerCard';
import { MainScore } from '../../components/MainScore';
import { Header } from '../../components/Header';
import { NAMEPLAYER1, NAMEPLAYER2 } from '../Settings';
 
import { styles } from './styles';  



export function Home() {   
  const [newNamePlayer1, setNewNamePlayer1] = useState(NAMEPLAYER1);
  const [newNamePlayer2, setNewNamePlayer2] = useState(NAMEPLAYER2);
  const [parcialScore1, setParcialScore1] = useState(0);
  const [parcialScore2, setParcialScore2] = useState(0);
  const [totalScore1, setTotalScore1] = useState(0);
  const [totalScore2, setTotalScore2] = useState(0);
  

  //Atualiza o score parcial e o total se necessário.
  //Essa função é acionada pelo botão do componente PlayerCard.
  //Nessa função eu uso uma variável (nameTeste) que vem do PlayerCard. 
  function handleUpdateParcialScore(nameTeste: string) {
    if (nameTeste === NAMEPLAYER1) {
      let newParcialScore1 = parcialScore1 + 1;
      setParcialScore1(newParcialScore1);
      setParcialScore2(0);

      if (newParcialScore1 === 3) {  
        let newTotalScore1 = totalScore1 + 1;
        setTotalScore1(newTotalScore1);
        setParcialScore1(0);
      }
    }    
    if (nameTeste === NAMEPLAYER2) {
      let newParcialScore2 = parcialScore2 + 1;
      setParcialScore2(newParcialScore2);
      setParcialScore1(0);

      if (newParcialScore2 === 3) {  
        let newTotalScore2 = totalScore2 + 1;
        setTotalScore2(newTotalScore2);
        setParcialScore2(0);
      }
    }    
 
    //console.log(nameTeste)
  }  

  function handleClearParcialScore() {
    setParcialScore1(0);
    setParcialScore2(0);
  }

  function handleClearTotalScore() {
    setTotalScore1(0);
    setTotalScore2(0);
  }

  //Atualiza o nome dos players. 
  function updateNames() {
    setNewNamePlayer1(NAMEPLAYER1); 
    setNewNamePlayer2(NAMEPLAYER2); 
  }
  

  //Atualiza o nome dos players quando volta para a tela de  Home.
  useFocusEffect(useCallback(() => {
    updateNames();
  }, []));

 

  return ( 
    <GestureHandlerRootView style={styles.container}>
      <Header title="Dominó" />

      <PlayerCard 
        name={newNamePlayer1} 
        player={1} 
        parcialScore1={parcialScore1} 
        changeScores={handleUpdateParcialScore}
        clearParcialScore={handleClearParcialScore}
      />

      <MainScore 
        totalScore1={totalScore1} 
        totalScore2={totalScore2} 
        clearTotalScore={handleClearTotalScore}
      />

      <PlayerCard 
        name={newNamePlayer2} 
        player={2} 
        parcialScore2={parcialScore2} 
        changeScores={handleUpdateParcialScore}
        clearParcialScore={handleClearParcialScore}
      />
    </GestureHandlerRootView>
  ); 
}
