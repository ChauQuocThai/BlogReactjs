// App.js
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import PostList from './PostList';
import PostDetail from './PostDetail';
import PostForm from './PostForm';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={PostList} />
        <Route path="/posts/:id" component={PostDetail} />
        <Route path="/create" component={PostForm} />
        <Route path="/edit/:id" component={PostForm} />
      </Switch>
    </Router>
  );
};

export default App;