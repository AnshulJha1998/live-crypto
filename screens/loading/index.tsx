import { View } from 'react-native';
import { Bitex } from '../../assets/icons';
import CustomText from '../../components/CustomText';

const Loading = () => {
  return (
    <View>
      <Bitex width={100} height={100} />
      <CustomText size="big" color="red">
        BITEX
      </CustomText>
    </View>
  );
};

export default Loading;
