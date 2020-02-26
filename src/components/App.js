import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import NavigationBar from './NavigationBar';
import MainNews from './MainNews';
import NewsStory from './NewsStory';
import Footer from './Footer';

class App extends React.Component {
    
    render() {
        return (
            <BrowserRouter>
                <div>
                    <NavigationBar />
                    <Switch>
                        <Route path='/Newscast' exact component={MainNews} />
                        <Route path='/Newscast/news/:id' exact component={NewsStory} />
                    </Switch>
                    <Footer />
                </div>
            </BrowserRouter>
       );
    }
}

export default App;