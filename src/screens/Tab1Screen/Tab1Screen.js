// @flow

import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import {
  StyleSheet,
  View,
  Text,
  Alert
} from 'react-native';
import { Navigation } from 'react-native-navigation';
import { get } from 'lodash';

import { LOGIN_SCREEN, pushWellcomeScreen } from 'src/navigation';
import { connectData } from 'src/redux';
import { Button } from 'react-native-elements';

const styles = StyleSheet.create({
  flex: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});

class Tab1Screen extends PureComponent {

  constructor(props) {
    super(props);

    Navigation.events()
      .bindComponent(this);
  }

  navigationButtonPressed({ buttonId }) {
    const { data } = this.props;

    switch (buttonId) {
      case 'nav_logout_btn': {
        pushWellcomeScreen();
        break;
      }
      case 'nav_user_btn': {
        Alert.alert(get(data, 'user.name', 'Unknown User'));
        break;
      }
      default:
        break;
    }
  }

  handleAction(screen) {
    Navigation.push(this.props.componentId, {
      component: {
        name: LOGIN_SCREEN,
        passProps: {
          screen
        },
        options: {
          topBar: {
            title: {
              text: 'LOG-IN'
            }
          }
        }
      }
    });
  }

  render() {
    return (
      <View style={styles.flex}>
        <Text style={{
          fontSize: 18,
          fontWeight: 'bold'
        }}>
          Play top buttons!
        </Text>
        <Button
          onPress={() => this.handleAction('Single')}
          title={'Start Single Screen App 1'}
        />
      </View>
    );
  }
}

Tab1Screen.propTypes = {
  data: PropTypes.shape({}).isRequired
};

export default connectData()(Tab1Screen);
