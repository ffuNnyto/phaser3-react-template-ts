  
import React from 'react';
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch,Route,Link} from "react-router-dom";
import Play from './React/scripts/play';

export default function App() {
    return (
        <Router>
            <Switch>
                <Route path="/play.html"> 
                    <Play />
                </Route>
            </Switch>
        </Router>
    );
}

ReactDOM.render(<App />,document.getElementById('root'));
