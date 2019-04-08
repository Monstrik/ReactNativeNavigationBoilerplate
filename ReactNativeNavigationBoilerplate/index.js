import { Navigation } from 'react-native-navigation';
import { pushWellcomeScreen} from 'ReactNativeNavigationBoilerplate/src/navigation';

Navigation.events().registerAppLaunchedListener(() => pushWellcomeScreen());
