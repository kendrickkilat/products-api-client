import React, { useState } from 'react'
import { Link, Route, Switch } from 'react-router-dom';
import { Icon, Menu, MenuItemProps, Segment } from 'semantic-ui-react'
import { IMenuBarProps } from '../models/IMenuBarProps';
import { IMenuItem } from '../models/IMenuItem';
import Home from '../views/home';
import CreateProductForm from './create-product-form';

function MenuBar(props:IMenuBarProps) {
    const [state, setState] = useState({
        activeItem: 'home'
    } as IMenuItem);

    const handleItemClick = (e:React.MouseEvent<HTMLAnchorElement, MouseEvent>, { name }:MenuItemProps) => {
        e.preventDefault();
        setState({
            activeItem: name,
        })
    }

    const handleMenuClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, { name }:MenuItemProps) =>{
        e.preventDefault();
        setState({
            activeItem: name,
        });
        props.handleSideMenu();
    }

    const { activeItem } = state;
    

    return (
        <div>
        <Menu pointing secondary>
          <Menu.Item
            name='menu'
            active={activeItem === 'menu'}
            onClick={handleMenuClick}
          >
            <Icon name='bars' />
            Menu
          </Menu.Item>
          <Link to='/'>
            <Menu.Item
                name='home'
                active={activeItem === 'home'}
                onClick={handleItemClick}
            >
                {/* <Link to='/home'>Home</Link> */}
                Home
            </Menu.Item>
          </Link>
          <Link to='/products'>
            <Menu.Item
                name='products'
                active={activeItem === 'products'}
                onClick={handleItemClick}
            >
                Products
            </Menu.Item>
          </Link>
          <Link to ='/orders'>
            <Menu.Item
                name='orders'
                active={activeItem === 'orders'}
                onClick={handleItemClick}
            >
                Orders
            </Menu.Item>
          </Link>
          <Link to='/login'>              
            <Menu.Menu position='right'>
                <Menu.Item
                name='logout'
                active={activeItem === 'logout'}
                onClick={handleItemClick}
                >
                    Logout
                </Menu.Item>
            </Menu.Menu>
          </Link>
        </Menu>

        <Segment>
          {/* <CreateProductForm /> */}
          <Switch>
              <Route path='/'>
                <Home />
              </Route>
              <Route path='/products'>
                <CreateProductForm />
              </Route>
              <Route path='/orders'>
                <CreateProductForm />
              </Route>
              <Route path='/login'>
                <CreateProductForm />
              </Route>
          </Switch>
        </Segment>
      </div>
    )
}

export default MenuBar
