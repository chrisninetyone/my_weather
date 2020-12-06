import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from '../components/Home';


class App extends React.Component {
    render () {
        return (
            <div className="App">
                <BrowserRouter>
                    <Switch>
                        <Route path="/" exact component={Home}/>
                        {/* <Route path="/weather" component={Weather} /> */}
                    </Switch>
                </BrowserRouter>
            </div>
        )
    }
}

export default App;