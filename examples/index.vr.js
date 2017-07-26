import React from 'react';
import { AppRegistry, Text } from 'react-vr';
import CnContainer from '../components/core/container';
import View from '../components/core/view';
import CnButton from '../components/button/button';
import CnIcon from '../components/button/icon';
import CnCardContent from '../components/card/card-content';
import CnCardFooter from '../components/card/card-footer';
import CnCardHeader from '../components/card/card-header';
import CnRow from '../components/core/row';
import CnNavBar from '../components/navbar/navbar';
import CnNavItem from '../components/navbar/nav-item';

export default class Example extends React.Component {
    render() {
        return (
          <View>
            <CnContainer direction="left">
              <CnNavBar>
                <CnNavItem>
                  Navigation bar item tester
                </CnNavItem>
                <CnNavItem>
                  This is the second item
                </CnNavItem>
              </CnNavBar>
                <View row flex>
                    <View vcenter hcenter bg="red" flex>
                        <Text style={{color: '#000'}}>Aaron Website</Text>
                    </View>
                    <View vcenter hcenter bg="green" flex={2}>
                        <Text style={{color: '#000'}}>Aaron Resume</Text>
                    </View>
                    <View vcenter hcenter bg="yellow">
                        <Text style={{color: '#000'}}>Aaron  Favorite pictures</Text>
                    </View>
                </View>
            </CnContainer>
            <CnContainer direction="front">
                <View row flex>
                    <View vcenter flex>
                        <Text style={{color: '#000'}}> Ba-Blam! </Text>
                    </View>
                </View>
            </CnContainer>
            <CnContainer direction="right">
                <View row flex>
                    <View vcenter hcenter bg="blue" flex>
                        <Text style={{color: '#000'}}>Evans' Cool stuff</Text>
                    </View>
                    <View vcenter hcenter bg="white" flex={2}>
                        <Text style={{color: '#000'}}>Another cool component</Text>
                    </View>
                    <View vcenter hcenter bg="pink">
                        <Text style={{color: '#000'}}> I have friends </Text>
                    </View>
                </View>
            </CnContainer>
            </View>
        );
    }
}

AppRegistry.registerComponent('Example', () => Example);
