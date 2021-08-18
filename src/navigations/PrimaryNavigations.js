import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import BillingScreen from '../screens/BillingScreen';
import CallerScreen from '../screens/CallerScreen';
import CallingBalanceScreen from '../screens/CallingBalanceScreen';
import HomeScreen from '../screens/HomeScreen';
import LoginScreen from '../screens/LoginScreen';
import ReceiverScreen from '../screens/ReceiverScreen';
import ReceivingBalanceScreen from '../screens/ReceivingBalanceScreen';
import ReportGuestScreen from '../screens/ReportGuestScreen';

const PrimaryNavigator = createStackNavigator({
    LoginScreen: {
        screen: LoginScreen,
        navigationOptions: () => ({ title: 'Login'})
    },
    Home: {
        screen: HomeScreen,
        navigationOptions: () => ({ title: 'Home Page'})
    },
    Call: CallerScreen,
    Receving: ReceiverScreen,
    CallingBalance: CallingBalanceScreen,
    RecevingBalance: ReceivingBalanceScreen,
    Bill: BillingScreen,
    ReportGuest: {
        screen: ReportGuestScreen,
        navigationOptions: () => ({ title: 'Report'})
    }
});

export default createAppContainer(PrimaryNavigator);