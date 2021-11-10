/* // todo: 1. create mockup of phonebook app with materalui
      *  1.1 Create HomePage with login or register form on start
      todo  1.2 create main ContactsPage with navbar, main content, footer
      todo  1.2.1 create navbar with logo, filter, userinfo
      todo  1.2.2 create main content with list of contacts
      todo  1.2.3 create footer
      todo  1.3 create addcontact page, with will replace main content
      todo  1.3.1 form with name, phone, mail inputs. filds name and pnone are required
      todo  1.3.2 contact obj: {name,phone, mail: mail && '', isFavorite: false}
      todo  1.3.3 buttons: cancel and addcontact
 */
import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);
