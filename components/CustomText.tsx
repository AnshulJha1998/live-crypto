import { Text } from 'react-native';
import { CustomTextProps } from '../utils/types';
import { useCallback } from 'react';

/**
 * CustomText component
 *
 * @param {Object} props
 * @param {'small' | 'normal' | 'mid' | 'big'} [props.size] - Optional text size
 * @param {keyof typeof theme} [props.color] - Optional color key from the theme
 */

const CustomText = ({ size, color, children }: CustomTextProps) => {
  const getSize = useCallback(() => {
    switch (size) {
      case 'small':
        return 18;
      case 'normal':
        return 22;
      case 'mid':
        return 30;
      case 'big':
        return 50;
      default:
        return 12;
    }
  }, [size]);

  return (
    <>
      <Text style={{ color: color || '#FFFFFF', fontSize: getSize() }}>
        {children}
      </Text>
    </>
  );
};

export default CustomText;
