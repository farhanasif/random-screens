import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import BillingScreen from '../screens/BillingScreen';
import CallerScreen from '../screens/CallerScreen';
import CallingBalanceScreen from '../screens/CallingBalanceScreen';
import HomeScreen from '../screens/HomeScreen';
import ReceiverScreen from '../screens/ReceiverScreen';
import ReceivingBalanceScreen from '../screens/ReceivingBalanceScreen';

const PrimaryNavigator = createStackNavigator({
    Call: CallerScreen,
    Receving: ReceiverScreen,
    CallingBalance: CallingBalanceScreen,
    RecevingBalance: ReceivingBalanceScreen,
    Home: HomeScreen,
    Bill: BillingScreen,
});

export default createAppContainer(PrimaryNavigator);