import React from 'react';
import { Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Background from '~/components/Background';

// import { Container } from './styles';

export default function Inscriptions() {
  return (
    <Background>
      <Text>Inscriçẽos</Text>
    </Background>
  );
}

Inscriptions.navigationOptions = {
  tabBarLabel: 'Incrições',
  tabBarIcon: ({ tintColor }) => (
    <Icon name="tag" size={20} color={tintColor} />
  ),
};
