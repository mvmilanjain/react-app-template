import React from 'react';

const App = props => {

    return <React.Fragment>
        <h1>React App Template</h1>
        <p>App Version: <strong>{process.env.REACT_APP_VERSION}</strong></p>
        <p>Environment: <strong>{process.env.REACT_APP_ENV}</strong></p>
    </React.Fragment>;

};

export default App;