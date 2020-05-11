import React, {useState, useEffect} from 'react';
import {Animated, Dimensions} from 'react-native';
import styled from 'styled-components';
import ETACarouselItem from './item';
import defaultData from './defaultData.json';

const {width} = Dimensions.get('window');

const Root = styled.View``;
const CarouselList = styled.FlatList``;
const DotCarousel = styled.View`
  flexDirection: row;
  justifyContent: center;
`;
const Touchable = styled.TouchableHighlight``;

let flatList;
const infiniteScroll = (dataList) => {
  const numberOfData = dataList.length;
  let scrollValue = 0,
    scrolled = 0;

  setInterval(function () {
    scrolled++;
    if (scrolled < numberOfData) {
      scrollValue = scrollValue + width;
    } else {
      scrollValue = 0;
      scrolled = 0;
    }

    this.flatList.scrollToOffset({animated: true, offset: scrollValue});
  }, 5000);
};

const ETACarousel = ({posts}) => {
  const [dataList, setdataList] = useState([]);
  const scrollX = new Animated.Value(0);
  let position = Animated.divide(scrollX, width);

  useEffect(() => {
    setdataList(defaultData.data);
    infiniteScroll(dataList);
  });

  return (
    <Root>
      {dataList && dataList.length ? (
        <>
          <CarouselList
            ref={(flatList) => {
              this.flatList = flatList;
            }}
            data={posts ? posts : dataList}
            keyExtractor={(item) => item._id.toString()}
            horizontal
            pagingEnabled
            snapToAlignment="center"
            scrollEventThrottle={16}
            decelerationRate="fast"
            showsHorizontalScrollIndicator={false}
            onScroll={Animated.event(
              [
                {
                  nativeEvent: {contentOffset: {x: scrollX}},
                },
              ],
              {
                useNativeDriver: !true,
                // isInteraction: false
              },
            )}
            renderItem={({item}) => (
              <Touchable>
                <ETACarouselItem key={item._id} item={item} />
              </Touchable>
            )}
          />
          <DotCarousel>
            {dataList.map((_, i) => {
              let opacity = position.interpolate({
                inputRange: [i - 1, i, i + 1],
                outputRange: [0.3, 1, 0.3],
                extrapolate: 'clamp',
              });

              return (
                <Animated.View
                  key={i}
                  style={{
                    opacity,
                    width: 7,
                    height: 7,
                    borderRadius: 3.5,
                    backgroundColor: '#595959',
                    margin: 5,
                    bottom: 20,
                  }}
                />
              );
            })}
          </DotCarousel>
        </>
      ) : null}
    </Root>
  );
};

export default ETACarousel;
