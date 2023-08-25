import React, { useEffect, useState, createContext, useContext } from 'react';
import Keycloak from 'keycloak-js';

const KeycloakContext = createContext();



const _kc = new Keycloak({
    realm: 'simpsiteDev',
    url: "http://localhost:8080/",
    clientId: 'TEST',
    checkLoginIframe: false
})

const initKeyCloak = (onAuthenticatedCallback) => {
    if (typeof window !== "undefined") {
        _kc.init({
            onLoad: "check-sso",
            silentCheckSsoRedirectUri: window.location.origin + '/silent-check-sso.html',
            pkceMethod: 'S256'
        })
            .then((authenticated) => {
                if (authenticated) {
                    onAuthenticatedCallback();
                } else {
                    console.log("not authenticated");
                    doLogin();
                }
            })
    }
}

const doLogin = _kc.login;
const doLogOut = _kc.logout;
const getToken = () => _kc.token;
const updateToken = (successCallback) => {
    _kc.updateToken(5).then(successCallback).catch(doLogin)
}

const getUsername = () => _kc.tokenParsed?.preferred_username;

const hasRole = (roles) => roles((role) => _kc.hasRealmRole(role));

const UserService = {
    initKeyCloak,
    doLogin,
    doLogOut,
    getToken,
    updateToken,
    getUsername,
    hasRole
}

export default UserService