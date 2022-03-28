import React from 'react';
import {View, Text, TouchableOpacity, Image, ScrollView} from 'react-native';
import XeberCard from '../ortaq/XeberCard';
import XeberCardSection from '../ortaq/XeberCardSection';

const Home = () => {
  return (
    <ScrollView>
      <XeberCard>
        <XeberCardSection>
          <View style={{flex: 1}}>
            <Image
              style={{height: 310, width: '100%'}}
              source={require('../images/texnomart.jpg')}
            />
          </View>
          <View>
            <Text
              style={{fontSize: 21, marginVertical: 22, marginHorizontal: 8}}>
              Texnomart-dan hədiyyəli fürsət!
            </Text>
          </View>
        </XeberCardSection>

        <XeberCardSection>
          <View style={{flex: 1}}>
            <Image
              style={{height: 310, width: '100%'}}
              source={require('../images/texnomart2.png')}
            />
          </View>
          <View>
            <Text
              style={{fontSize: 21, marginVertical: 22, marginHorizontal: 8}}>
              Arzularınız gələn bahara qalmasın
            </Text>
          </View>
        </XeberCardSection>

        <XeberCardSection>
          <View style={{flex: 1}}>
            <Image
              style={{height: 310, width: '100%'}}
              source={require('../images/changan.png')}
            />
          </View>
          <View>
            <Text
              style={{fontSize: 21, marginVertical: 22, marginHorizontal: 8}}>
              Yeni ilə yeni Changan ilə! İl sonu sərfəli barter və endirim
              kampaniyası
            </Text>
          </View>
        </XeberCardSection>
      </XeberCard>
    </ScrollView>
  );
};

export default Home;
