import React, {useState} from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';

const COLORS = {
  primary: '#004E89',
  primaryDark: '#003766',
  background: '#F9FAFB',
  borderGray: '#D1D5DB',
  pressGray: '#ecedefff',
  pressRed: '#CC4A4A',
};

const typeStyles = {
  submit: {
    bg: COLORS.primary,
    pressedBg: COLORS.primaryDark,
    border: null,
    textColor: '#FFFFFF',
    pressedTextColor: '#FFFFFF',
  },
  add: {
    bg: COLORS.primary,
    pressedBg: COLORS.primaryDark,
    border: null,
    textColor: '#FFFFFF',
    pressedTextColor: '#FFFFFF',
  },
  edit: {
    bg: COLORS.primary,
    pressedBg: COLORS.primaryDark,
    border: null,
    textColor: '#FFFFFF',
    pressedTextColor: '#FFFFFF',
  },
  moving: {
    bg: COLORS.primary,
    pressedBg: COLORS.primaryDark,
    border: null,
    textColor: '#FFFFFF',
    pressedTextColor: '#FFFFFF',
  },
  delete: {
    bg: COLORS.background,
    pressedBg: COLORS.pressRed,
    border: COLORS.borderGray,
    textColor: COLORS.pressRed, // 기본 빨강 텍스트
    pressedTextColor: '#FFFFFF', // 눌리면 흰색
  },
  cancel: {
    bg: COLORS.background,
    pressedBg: COLORS.pressGray,
    border: COLORS.borderGray,
    textColor: '#000000',
    pressedTextColor: '#b5b9c0ff',
  },
  more: {
    bg: '#FFFFFF',
    pressedBg: COLORS.primary,
    border: COLORS.borderGray,
    textColor: '#000000', // 기본 검정
    pressedTextColor: '#FFFFFF', // 눌리면 흰색
  },
};

const Button = ({
  type = 'submit',
  text,
  width = '100%',
  height = 48,
  onPress,
  disabled = false,
  style,
  textStyle,
}) => {
  const [pressed, setPressed] = useState(false);

  const current = typeStyles[type] ?? typeStyles.submit;

  return (
    <TouchableOpacity
      activeOpacity={1}
      disabled={disabled}
      onPress={onPress}
      onPressIn={() => setPressed(true)}
      onPressOut={() => setPressed(false)}
      style={[
        styles.button,
        {
          width,
          height,
          backgroundColor: pressed ? current.pressedBg : current.bg,
          borderColor: current.border ?? 'transparent',
          borderWidth: current.border ? 1 : 0,
          opacity: disabled ? 0.5 : 1,
        },
        style,
      ]}>
      <Text
        style={[
          styles.text,
          {color: pressed ? current.pressedTextColor : current.textColor},
          textStyle,
        ]}>
        {text}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default Button;
