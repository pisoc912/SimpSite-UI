import React, { useEffect, useState, createContext, useContext } from 'react';
import Keycloak from 'keycloak-js';

const KeycloakContext = createContext();

export function KeycloakProvider({ children }) {
    const [keycloak, setKeycloak] = useState(null);
    const [authenticated, setAuthenticated] = useState(false);
    const [initialized, setinitialized] = useState(false)

    useEffect(() => {
        if (authenticated) return

        const keycloak = new Keycloak({
            url: 'http://localhost:8080/', // Keycloak server url
            realm: 'simpsiteDev', // Your realm
            clientId: 'TEST',

        });

        keycloak.init({
            onLoad: 'login-required',
            pkceMethod: 'S256',
            redirect_uri: 'http://localhost:3000/',
            checkLoginIframe: false,
        })
            .then((authenticated) => {
                if (authenticated) {
                    // Do something after successful authentication
                    console.log('User is authenticated');
                    setKeycloak(keycloak);
                    setAuthenticated(authenticated);
                    setinitialized(true)
                } else {
                    console.log('User is not authenticated');
                }
                keycloak.onAuthSuccess = () => {
                    console.log('User authenticated');
                };
                keycloak.onAuthError = (error) => {
                    console.error('Error during authentication', error);
                };
            }).catch((error) => {
                // Handle errors during initialization
                console.error('Error initializing Keycloak', error);
            });

        // return () => {
        //     if (keycloak) {
        //         keycloak.logout();
        //     }
        // }
    }, [initialized]);

    if (!keycloak) return null;

    return (
        <KeycloakContext.Provider value={{ keycloak, authenticated }}>
            {children}
        </KeycloakContext.Provider>
    );
}

export function useKeycloak() {
    const context = useContext(KeycloakContext);

    if (context === undefined) {
        throw new Error('useKeycloak must be used within a KeycloakProvider');
    }

    return context;
}
