import { UserOutlined, FileOutlined, TeamOutlined, SettingOutlined, FileImageOutlined } from '@ant-design/icons';
import { Layout, Menu } from 'antd';
import React, { useState } from 'react';
import { Route, Routes, Link, useNavigate } from "react-router-dom";
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';

const { Header, Content, Footer, Sider } = Layout;

function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}
const items = [
  getItem('File', 'sub1', <FileOutlined />, [
    getItem('About', 'about'),
    getItem('Contact', 'contact'),
  ]),
  getItem('User', 'sub2', <UserOutlined />, [
    getItem('User 1', 'user1'),
    getItem('User 2', 'user2'),
    getItem('User 3', 'user3'),
  ]),
  getItem('Notifications', 'notifications', <FileImageOutlined />),
  getItem('Teams', 'team', <TeamOutlined />, [
    getItem('Team 1', 'team1'),
    getItem('Team 2', 'team2')]),
  getItem('Dashboard', 'dashboard', <SettingOutlined />),
];

const HomePage = () => {

  const [collapsed, setCollapsed] = useState(false);

  const navigate = useNavigate();

  const onClick = e => {
    navigate(e.key);
  }

  return (
    <Layout style={{ minHeight: '100vh', }}>
      <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
        <div className="logo" >
          <img src={require('./../src/react.png')} width="200px" height="50px" alt="Logo" />
        </div>
        
        <Menu theme="dark" defaultSelectedKeys={['sub1']} mode="inline" onClick={onClick} items={items} />

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
export default HomePage;