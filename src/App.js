import React from 'react';
import NavBar from "./NavBar/NavBar";
import Container from "@material-ui/core/Container";
import AppRouter from "./AppRouter/AppRouter";


const App = (props) => {

    return (
        <div>

            <Container>
                <NavBar/>
            </Container>
        </div>
    )
};


export default App;