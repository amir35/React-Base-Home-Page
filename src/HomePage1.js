import { DatabaseOutlined, FileOutlined, AppstoreOutlined, SettingOutlined, FileImageOutlined } from '@ant-design/icons';
import { Layout, Menu } from 'antd';
import React, { useState } from 'react';
import { Route, Routes, Link } from "react-router-dom";
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';

const { Header, Content, Footer, Sider } = Layout;

const HomePage1 = () => {

  const { SubMenu } = Menu;
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Layout style={{ minHeight: '100vh', }}>
      <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
        <div className="logo" >
          <img src={require('./../src/react.png')} width="200px" height="50px" alt="Logo" />
        </div>
        
        <Menu
        theme='dark'
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        mode="inline"
      >
        <SubMenu key="sub1" icon={<FileImageOutlined />} title="File">
            <Menu.Item key="1" style={{ lineHeight: '20px' }}>
            <Link to="/about"> <DatabaseOutlined /> About</Link>
            </Menu.Item>
            <Menu.Item key="2">
            <Link to="/contact"> <FileOutlined /> Contact</Link>
            </Menu.Item>
        </SubMenu>
        <SubMenu key="sub2" icon={<AppstoreOutlined />} title="User">
          <Menu.Item key="user1">User 1</Menu.Item>
          <Menu.Item key="user2">User 2</Menu.Item>
          <SubMenu key="user3" title="User 3">
            <Menu.Item key="subuser4">User 4</Menu.Item>
            <Menu.Item key="subuser5">User 5</Menu.Item>
          </SubMenu>
        </SubMenu>
        <Menu.Item key="notifications" icon={<FileImageOutlined />}> Notifications</Menu.Item>
        <SubMenu key="team" icon={<DatabaseOutlined />} title="Teams">
          <Menu.Item key="team1">Team 1</Menu.Item>
          <Menu.Item key="team2">Team 2</Menu.Item>
        </SubMenu>
        <Menu.Item key="dashboard" icon={<SettingOutlined />}> Dashboard</Menu.Item>
      </Menu>
      </Sider>

      <Layout className="site-layout">
        <Header style={{ position: 'sticky', top: 0, zIndex: 1, width: '100%' }} >
          <div className='topnav'>
            <Link action active to='/' tag="a">Home</Link>
            <Link action to='/about' tag="a">About</Link>
            <Link action to='/contact' tag="a">Contact</Link>
          </div>
          <div class="topnav-right">
            <Link action to="/logout" >Logout</Link>
            <Link action to="/login" >Login</Link>
          </div>
        </Header>

        <Content style={{ margin: '0 16px', }} >
          <div className="site-layout-background" style={{ padding: 24, minHeight: 360, }} >
            <Routes>
              <Route path="/" element={<Home/>} exact />
              <Route path="/about" element={<About />} exact />
              <Route path="/contact" element={<Contact />} exact />
            </Routes>

          </div>
        </Content>

        <Footer style={{ textAlign: 'center', }} >

        </Footer>

      </Layout>
    </Layout>

  );
};
export default HomePage1;