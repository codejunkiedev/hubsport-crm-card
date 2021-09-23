import React, { Component, Suspense, useState, useEffect } from 'react';
import { Button,Card, CardText, CardBody, CardLink, CardTitle, CardSubtitle } from 'reactstrap';
import OauthPopup from "react-oauth-popup";
import { Link } from 'react-router-dom';
import { getHubSpotContacts,getHubspotAccessToken } from './apis/hubspot';
import 'bootstrap/dist/css/bootstrap.min.css';
import CardItem from './components/CardItem';

import logo from './logo.svg';
import './App.css';

function App() {
  const [hubspotAuthURL, setHubspotAuthURL] = useState('');
  const [contacts, setContacts] = useState('');

  const HUBSPOT_CLIENT_ID = '6b7cd4dc-9a35-413f-9242-90ab7dd07ef7';
  const HUBSPOT_CALLBACK_URL = 'https://hubspotcrm-653b7.web.app/callback'

  useEffect(() => {
    const hubspotURL = `https://app.hubspot.com/oauth/authorize?client_id=${HUBSPOT_CLIENT_ID}&redirect_uri=${HUBSPOT_CALLBACK_URL}&scope=crm.objects.contacts.read%20crm.objects.contacts.write`;
    setHubspotAuthURL(hubspotURL);
  }, []);

  const onHubspotCode = async (code, params) => {
    console.log("Hubspot code", code);
    const accessToken = await getHubspotAccessToken(code);
    // const tempContacts = await getHubSpotContacts();
    // console.log('Contacts are ', tempContacts);
    // setContacts(tempContacts.contacts);
  }

  const onClosePopup = () => {
    console.log('Popup is closed');
  }


  return (
    <div className="App">
      <div className="container">
        <div className="row mt-4">
          <OauthPopup
            url={hubspotAuthURL}
            onCode={onHubspotCode}
            onClose={onClosePopup}
          >
            <Button color="danger">
                    Authenticate To Hubspot
              </Button>
          </OauthPopup>
        </div>
        {/* <div className="row">
          <h2 className="justify-content-center d-flex">Europe</h2>
          <div className="col-md-3">
            <CardItem 
              title={'Mohsin'}
              subtitle={'Muneeb'}
              description={'Hassan'}
            />
          </div>
          <div className="col-md-3">
            <CardItem 
              title={'Mohsin'}
              subtitle={'Muneeb'}
              description={'Hassan'}
            />
          </div>
          <div className="col-md-3">
            <CardItem 
              title={'Mohsin'}
              subtitle={'Muneeb'}
              description={'Hassan'}
            />
          </div>
          <div className="col-md-12">
            
          </div>
          <div className="col-md-12">
            
          </div>
        </div> */}
      </div>
    

    </div>
  );
}

export default App;
