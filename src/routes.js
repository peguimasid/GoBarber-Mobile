import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import SignIn from '~/pages/SignIn';
import SignUp from '~/pages/SignUp';

import TabRoutes from '~/BottomTabRoutes/TabRoutes';

export default (isSigned = false) =>
  createAppContainer(
    createSwitchNavigator(
      {
        Sign: createSwitchNavigator({
          SignIn,
          SignUp,
        }),
        App: TabRoutes,
      },
      {
        initialRouteName: isSigned ? 'App' : 'Sign',
      }
    )
  );
