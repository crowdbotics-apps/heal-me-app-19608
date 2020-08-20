import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import UserProfile92451Navigator from '../features/UserProfile92451/navigator';
import Settings92450Navigator from '../features/Settings92450/navigator';
import Settings92448Navigator from '../features/Settings92448/navigator';
import SignIn292446Navigator from '../features/SignIn292446/navigator';
import ArticleList91097Navigator from '../features/ArticleList91097/navigator';
import Maps91084Navigator from '../features/Maps91084/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
UserProfile92451: { screen: UserProfile92451Navigator },
Settings92450: { screen: Settings92450Navigator },
Settings92448: { screen: Settings92448Navigator },
SignIn292446: { screen: SignIn292446Navigator },
ArticleList91097: { screen: ArticleList91097Navigator },
Maps91084: { screen: Maps91084Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
