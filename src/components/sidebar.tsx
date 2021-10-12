import React, { useState } from 'react'
import {Icon, Menu, Segment, Sidebar } from 'semantic-ui-react'
import MenuBar from './menu-bar'

function SideMenu() {
    const [visible, setVisible] = useState(false);

    const handleVisibility = () =>{
        setVisible(!visible);
    }

    return (
  <Sidebar.Pushable as={Segment}>
    <Sidebar
      as={Menu}
      animation='overlay'
      icon='labeled'
      inverted
      vertical
      onHide={() => setVisible(false)}
      visible={visible}
      width='thin'
    >
      <Menu.Item as='a'>
        <Icon name='home' />
        Home
      </Menu.Item>
      <Menu.Item as='a'>
        <Icon name='gamepad' />
        Games
      </Menu.Item>
      <Menu.Item as='a'>
        <Icon name='camera' />
        Channels
      </Menu.Item>
    </Sidebar>

    <Sidebar.Pusher>
      <Segment basic>
        <MenuBar handleSideMenu={handleVisibility}/>
      </Segment>
    </Sidebar.Pusher>
  </Sidebar.Pushable>
    )
}

export default SideMenu
