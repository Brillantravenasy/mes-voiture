import React from 'react';
import HeaderComponent from './components/layout/HeaderComponent';
import FooterComponent from './components/layout/FooterComponent';
import ContainerComponent from './components/layout/ContainerComponent';
class App extends React.Component {
   render() {
      return (
         <div>
           <HeaderComponent></HeaderComponent>
           <ContainerComponent></ContainerComponent>
           <FooterComponent></FooterComponent>
         </div>
      );
   }
}
export default App;