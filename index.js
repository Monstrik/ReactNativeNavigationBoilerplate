import { Navigation } from 'react-native-navigation';
import { pushWellcomeScreen} from 'src/navigation';

Navigation.events().registerAppLaunchedListener(() => pushWellcomeScreen());
