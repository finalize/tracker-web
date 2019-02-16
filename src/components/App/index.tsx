import * as React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from '../Header';

const app = () => (
  <BrowserRouter>
    <div>
      <Route exact path="/" component={home} />
      <Route path="/about" component={about} />
      <Route path="/friends" component={friends} />
    </div>
  </BrowserRouter>
);

const home = () => (
  <div>
    <Header />
    <h2>Home</h2>
    <p>Welcome to ようこそ</p>
  </div>
);
const about = () => (
  <div>
    <h2>About</h2>
    <p>フレンズに投票するページです</p>
  </div>
);
const friends = () => (
  <div>
    <h2>Friends</h2>
    <p>ここにフレンズのリストを書きます</p>
  </div>
);

export default app;
