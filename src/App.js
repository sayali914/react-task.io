import React, { useState } from 'react';
import './App.css';
import { Layout, Avatar, Menu, Icon, Breadcrumb, Button } from 'antd';
import Title from 'antd/lib/typography/Title';
import SubMenu from 'antd/lib/menu/SubMenu';
import { Cricketer,Bowling, TestCareer } from './Cricketer';
import CareerDetails from './CareerDetails';
// import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { ModalHeader } from 'react-bootstrap';

const { Header, Footer, Sider, Content } = Layout;

function App() {
  const [selectedPlayer, setSelectedPlayer] = useState('');
  const [visible, setVisible] = useState(false);

  const [show, setShow] = React.useState(false);

  const onSelect = name => {
    setSelectedPlayer(name);
    setVisible(true);
  }
  const handleShow = ()=>setShow(true)

  const handleClose=()=>setShow(false)

  const ViewProfileButton = ({name}) => {
    return <Button type='dashed' style={{float:'right'}} onClick={()=>onSelect(name)}> View Full Profile >> </Button>
  }

  const onClose = () => setVisible(false);
  return (
    <div className="App">
      <Layout>
        <Header style={{ padding: 10 }}>
          <Avatar style={{ float: 'right' }} src='./dp.png' />
          <Avatar style={{ float: 'right' }} src='./dp.png' />
          <Title style={{ color: 'white'}} level={3}>Geniobits</Title>
          {/* <Title style={{ color: 'white',float:'right'}} level={3}>Geniobits</Title>
          <Title style={{ color: 'white',float:'center' }} level={3}>Geniobits</Title> */}
          
        </Header>
        <Layout>
          <Sider>
            <Menu
              defaultSelectedKeys={['Dashboard']}
              mode="inline"
            >
              <Menu.Item key='Dashboard'>
                Dashboard
            </Menu.Item>
             
              <SubMenu
                title={
                  <span>
                    <Icon type="mail" />
                    <span>My Apps</span>
                  </span>
                }
              >
                {/* <Menu.ItemGroup key='AboutUS' title='Country 1'>
                  <Menu.Item key='location1'> Location 1</Menu.Item>
                  <Menu.Item key='location2'> Location 2</Menu.Item>
                </Menu.ItemGroup> */}
              </SubMenu>
              <SubMenu
                title={
                  <span>
                    <Icon type="mail" />
                    <span>Resources</span>
                  </span>
                }
              ></SubMenu>
              <SubMenu style={{ marginTop: 400 }}
                title={
                  <span>
                    <Icon type="home" />
                    <span>My Organization</span>
                  </span>
                }
              ></SubMenu>
              <SubMenu
                title={
                  <span>
                    <Icon type="setting" />
                    <span>Settings</span>
                  </span>
                }
              ></SubMenu>
              <SubMenu
                title={
                  <span>
                    <Icon type="arrow" />
                    <span>Logout</span>
                  </span>
                }
              ></SubMenu>
            </Menu>
          </Sider>
          <Layout>
            <Content style={{ padding: '0 50px' }}>
              <Breadcrumb style={{ margin: '16px 0' }}>
                <Breadcrumb.Item>Century > divisions</Breadcrumb.Item>
              </Breadcrumb>
              
              <div style={{ background: '#fff', minHeight: 580 }}>
               

                {/* <Cricketer name='Cake Division'>
                  <ODICareer >
                    <Batting Incharge='' score='183' />
                    <br></br>
                    <Bowling wickets='4' bowlingAvg='166.25' />
                  </ODICareer>
                  <TestCareer matches=' 79' >
                    <Batting runs='6,749' score='243' />
                  </TestCareer>
                  <ViewProfileButton name='Virat Kohli'/>
                </Cricketer> */}
                <Cricketer name='Cake Division'>
                  <TestCareer matches='' >
                    <Bowling wickets='' />
                  </TestCareer>
            
                </Cricketer>
                <Cricketer name='Cake Division'>
                  <TestCareer matches='' >
                    <Bowling wickets='' />
                  </TestCareer>
                  
                </Cricketer>
                <Cricketer name='Cake Division'>
                  <TestCareer matches='' >
                    <Bowling wickets='' />
                  </TestCareer>
                  
                </Cricketer>
                <Card>
                <Cricketer name='Cake Division'>
                  <TestCareer matches='' >
                    <Bowling wickets=''/>
                  </TestCareer>
                 
                </Cricketer>
                <Cricketer name='Cake Division'>
                  <TestCareer matches='' >
                    <Bowling wickets='' />
                  </TestCareer>
                  
                </Cricketer>
                <Cricketer name='Cake Division'>
                  <TestCareer matches='' >
                    <Bowling wickets=''/>
                  </TestCareer>
                  {/* <ViewProfileButton name=''/> */}
                </Cricketer>
                
                <Card.Header>
                   <Button onClick={handleShow} style={{ marginTop:40}} variant="secondary"data-toggle="modal">Add New Division</Button>
                      </Card.Header>
                   <Card.Body>
                  <Card.Title>Special title treatment</Card.Title>
                  <Card.Text>
                    With supporting text below as a natural lead-in to additional content.
                  </Card.Text>
                  <Button variant="primary">Apply</Button>
                </Card.Body>
              </Card>
              </div>
            
              
            </Content>
            <CareerDetails player={selectedPlayer} visible={visible} onClose={onClose} />
            <Footer style={{ textAlign: 'center' }}>Ant Design Layout example Created by Sayali</Footer>
          </Layout>
        </Layout>
      </Layout>


       {/* <Modal show={show} onHide={handleClose} closeButton>
        <Modal.Header>
          <Modal.Title>
            add employee
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      
    </Form>
          <Modal.Footer>
              <Button variant="secondary"onClick={handleClose}>
                Close
              </Button>
          </Modal.Footer>
        </Modal.Body>
       </Modal> */}
     
    </div>
  );
}






  



export default App;
