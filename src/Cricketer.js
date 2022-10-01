import React, { Fragment } from 'react';
import { Card, Avatar } from 'antd';
import Meta from 'antd/lib/card/Meta';
import Title from 'antd/lib/typography/Title';
import Button from 'react-bootstrap/Button';
export const Cricketer = ({ name, team, avatarSrc, children }) =>
	<Card bordered style={{ width: 300, float: 'left', margin: 10 }}>
		{/* <Meta
			avatar={<Avatar src={avatarSrc} />}
			title={name}
		/> */}
		{/* <hr></hr> */}
		{/* Team : {team} */}
		<br></br>
		{children}
	</Card>
export const ODICareer = ({ matches, children }) =>
	<Card.Grid style={{ width: '100%' }}>
		<Title level={4}> ODI Matches : {matches}</Title>
		{children}
	</Card.Grid>
export const TestCareer = ({ matches, children }) =>
	<Card.Grid style={{ width: '100%' }}>
		{/* <Title level={4}> : {matches}</Title> */}
		{children}
	</Card.Grid>

export const Bowling = ({ wickets, bowlingAvg }) =>
	<Fragment>
		<Button variant="primary"style={{backgroundColor:'blue',color:'white'}}>Cake Division</Button>
		<br></br>
		Incharge:ABC {wickets}
		<br></br>
		Email-ID:abc@gmail.com {bowlingAvg}
		<br></br>
		Total Experiance:2 {bowlingAvg}
		

	</Fragment>
