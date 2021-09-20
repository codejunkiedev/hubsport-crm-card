import Hubspot from 'hubspot';

const hubspot = new Hubspot({
    clientId: '6b7cd4dc-9a35-413f-9242-90ab7dd07ef7',
    clientSecret: 'c0b64240-a75b-4bd9-be4e-0110b2e9ad94',
    redirectUri: 'https://hubspotcrm-653b7.web.app/callback'
});


export const getHubSpotContacts = async () => {
    const contacts = fetch("https://hubspot-crm.herokuapp.com/hubspot/contacts", {
        method: "GET",
    })
    .then(res => res.json())
    .then(data => {
        return data
    })
    .catch((err) => {
        console.log('Error is ', err);
        return err;
    })
    return contacts
}

export const getHubspotAccessToken = async (code) => {
    console.log('API CALL CODE IS ', code)
    var obj = {
        code: code
    }
    const contacts = fetch("https://hubspot-crm.herokuapp.com/hubspot/code", {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify(obj)
    })
    .then(res => res.json())
    .then(data => {
        return data
    })
    .catch((err) => {
        console.log('Error is ', err);
        return err;
    })
    return contacts
}