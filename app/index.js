import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import ListingPage from './pages/listing_page';
import Details from './pages/details';

ReactDOM.render((
<Router>
    <div>
        <Route exact path="/" component={ListingPage} />
        <Route path="/details" component={Details} />
    </div>
</Router>
), document.getElementById('app'));
