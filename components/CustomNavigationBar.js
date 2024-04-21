import React from 'react';
import { Appbar, Menu } from 'react-native-paper';
import { getHeaderTitle } from '@react-navigation/elements';

const CustomNavigationBar = ({navigation, route, options}) => {
  const [visible, setVisible] = React.useState(false);
  const openMenu = () => setVisible(true);
  const closeMenu = () => setVisible(false);
  const title = getHeaderTitle(options, route.name);

  return (
    <Appbar.Header>
      <Appbar.BackAction onPress={navigation.goBack} />
      <Appbar.Content title={title} />
      <Menu
        visible={visible}
        onDismiss={closeMenu}
        anchor={
          <Appbar.Action icon="dots-vertical" onPress={openMenu} />
        }>
        <Menu.Item
          onPress={() => {
            navigation.navigate("Home");
          }}
          title="Home"
        />
        <Menu.Item
          onPress={() => {
            navigation.navigate("Detail");
          }}
          title="Detail"
        />
        <Menu.Item
          onPress={() => {
            console.log('Option 3 was pressed');
          }}
          title="Option 3"
          disabled
        />
      </Menu>
    </Appbar.Header>
  );
};

export default CustomNavigationBar;
