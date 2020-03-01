import React from 'react';
import Header from './header.js';
import Footer from './footer.js';
import Todo from './todo.js';

function App(){
  return(
    <React.Fragment>
      <Header />
      <Todo />
      <Footer />
    </React.Fragment>

  );
}
export default App;