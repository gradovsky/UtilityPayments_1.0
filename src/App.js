import React from 'react';
import './App.css';
import {Container} from "@material-ui/core";
import AppRouter from "./AppRouter/AppRouter";


function App() {
    return (
        <Container>
            <AppRouter/>
        </Container>
    )
}

export default App;