import React, { useState, useRef, useEffect } from 'react';
import {
    View,
    Text,
    Animated,
    PanResponder,
    StyleSheet,
    Easing,
    PanResponderInstance,
    GestureResponderEvent,
    PanResponderGestureState,
  } from 'react-native';

type UShadowProps = {
    shadowOffsetWidth?: number
    shadowOffsetHeight?: number
    shadowOpacity?: number
    shadowRadius?: number
    elevation?: number
    shadowColor?: string
}

type USliderProps = {
    style?: object
    value?: number
    disabled?: boolean
    min: number
    max: number
    onChange?: (value: number) => void
    onComplete?: (value: number) => void
    width?: number
    height?: number
    borderRadius?: number
    maximumTrackTintColor?: string
    minimumTrackTintColor?: string
    showBallIndicator?: boolean
    step?: number
    ballIndicatorColor?: string
    ballIndicatorWidth?: number
    ballIndicatorHeight?: number
    ballIndicatorPosition?: number
    ballIndicatorTextColor?: string
    animationDuration?: number
    showBackgroundShadow?: boolean
    shadowProps?: {
        shadowOffsetWidth?: number
        shadowOffsetHeight?: number
        shadowOpacity?: number
        shadowRadius?: number
        elevation?: number
        shadowColor?: string
    }
    renderIndicator?: (value: number) => JSX.Element
}


const UniversalSlider = (props: USliderProps) => {
    const [value, setValue] = useState(props.value || props.min);
    const [moveStartValue, setStartValue] = useState(value);
    const sliderHeight = useRef(new Animated.Value(0)).current;
    const ballHeight = useRef(new Animated.Value(0)).current;

    const {
        style = {},
        width = 30,
        height = 200,
        borderRadius = 5,
        maximumTrackTintColor = '#3F2DA5',
        minimumTrackTintColor = '#77ADE6',
        showBallIndicator = true,
        ballIndicatorColor = '#ECECEC',
        ballIndicatorWidth = 48,
        ballIndicatorHeight = 48,
        ballIndicatorPosition = 50,
        ballIndicatorTextColor = '#000000',
        showBackgroundShadow = true,
        // shadowProps: {
        //     shadowOffsetWidth = 0,
        //     shadowOffsetHeight = 1,
        //     shadowOpacity = 0.22,
        //     shadowRadius = 2.22,
        //     elevation = 3,
        //     shadowColor = '#000',
        // },
        renderIndicator = null
    } = props;
    const shadowOffsetWidth = 0;
    const shadowOffsetHeight = 1;
    const shadowOpacity = 0.22;
    const shadowRadius = 2.22;
    const elevation = 3;
    const shadowColor = '#000';
    const shadowStyles = {
        shadowColor,
        shadowOffset: {
          width: shadowOffsetWidth,
          height: shadowOffsetHeight,
        },
        shadowOpacity,
        shadowRadius,
        elevation,
    };

    const _fetchNewValueFromGesture = (gestureState: any): number => {
        const { min, max, step, height = 200 } = props;
        const ratio = -gestureState.dy / height;
        const diff = max - min;
        if (step) {
          return Math.max(
            min,
            Math.min(
              max,
              moveStartValue + Math.round((ratio * diff) / step) * step
            )
          );
        }
        let value = Math.max(min, moveStartValue + ratio * diff);
        return Math.floor(value * 100) / 100;
    };

    const _getSliderHeight = (value: number): number => {
        const { min, max, height = 200 } = props;
        return ((value - min) * height) / (max - min);
    }

    const _changeState = (value: number): void => {
        const {
            height = 200,
            ballIndicatorWidth = 48,
            ballIndicatorHeight = 48,
            renderIndicator = null,
            animationDuration,
        } = props;
        const sliderHeightTemp = _getSliderHeight(value);
        let ballPosition = sliderHeightTemp;
        const ballHeightTemp = renderIndicator
          ? ballIndicatorHeight
          : ballIndicatorWidth;
        if (ballPosition + ballHeightTemp >= height) {
          ballPosition = height - ballHeightTemp;
        } else if (ballPosition - ballHeightTemp <= 0) {
          ballPosition = 0;
        } else {
          ballPosition = ballPosition - ballHeightTemp / 2;
        }
        Animated.parallel([
            Animated.timing(sliderHeight, {
                toValue: sliderHeight,
                easing: Easing.linear,
                duration: animationDuration || 0,
                useNativeDriver: false,
            }),
            Animated.timing(ballHeight, {
                toValue: ballPosition,
                easing: Easing.linear,
                duration: animationDuration || 0,
                useNativeDriver: false,
            }),
        ]).start();
        setValue(value);
      };

    const panResponder = React.useMemo(() => PanResponder.create({
        onStartShouldSetPanResponder: () => true,
        onMoveShouldSetPanResponder: () => false,
        onPanResponderGrant: () => {
            setStartValue(value);
        },
        onPanResponderMove: (_event: GestureResponderEvent, gestureState: PanResponderGestureState) => {
            if (props.disabled) {
                return;
            }
            const value = _fetchNewValueFromGesture(gestureState);
            _changeState(value);
            if (props.onChange) {
                props.onChange(value);
            }
        },
        onPanResponderRelease: (_event: GestureResponderEvent, gestureState: PanResponderGestureState) => {
            if (props.disabled) {
                return;
            }
            const value = _fetchNewValueFromGesture(gestureState);
            _changeState(value);
            if (props.onComplete) {
                props.onComplete(value);
            }
        },
        onPanResponderTerminationRequest: () => false,
        onPanResponderTerminate: (
            _event: GestureResponderEvent,
            gestureState: PanResponderGestureState
        ) => {
            if (props.disabled) {
                return;
            }
            const value = _fetchNewValueFromGesture(gestureState);
            _changeState(value);
            if (props.onComplete) {
                props.onComplete(value);
            }
        },
    }), []);

    useEffect(()=>{
      if (value) {
        _changeState(value);
      }
    },[])

    return(
    <View
    style={[
        showBackgroundShadow ? shadowStyles : {},
        { height, width, borderRadius }, props.style
    ]}
    >
        <View
        style={[
            styles.container,
            {
                height,
                width,
                borderRadius,
                backgroundColor: maximumTrackTintColor,
            },
        ]}
        {...panResponder.panHandlers}>
            <Animated.View
            style={[
                styles.slider,{
                    height: sliderHeight,
                    width,
                    backgroundColor: minimumTrackTintColor,
                },
            ]}
            />
        </View>
        {showBallIndicator ? (
          <Animated.View
            style={[
              styles.ball,
              showBackgroundShadow ? shadowStyles : {},
              {
                height: renderIndicator
                  ? ballIndicatorHeight
                  : ballIndicatorWidth,
                bottom: ballHeight,
                left: ballIndicatorPosition,
                width: ballIndicatorWidth,
              },
              renderIndicator
                ? {}
                : {
                    borderRadius: ballIndicatorWidth,
                    backgroundColor: ballIndicatorColor,
                  },
            ]}
          >
            {renderIndicator ? (
              renderIndicator(value)
            ) : (
            <Text style={[styles.ballText, {color: ballIndicatorTextColor}]}>
                {Math.round(value * 100) / 100}С
            </Text>
            )}
          </Animated.View>
        ) : null}
      </View>
    );
}

const styles = StyleSheet.create({
    ball: {
      position: 'absolute',
      alignItems: 'center',
      justifyContent: 'center',
    },
    ballText: {
      fontWeight: '900',
    },
    container: {
      overflow: 'hidden',
    },
    slider: {
      position: 'absolute',
      bottom: 0,
    },
  });

export default UniversalSlider;