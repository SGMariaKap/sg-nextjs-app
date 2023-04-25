import Header from './Header';
import Login from './Login';
import Layout from '../components/layout';

function HomePage() {

  return ( 
  <Layout>
    <p><i>Here is the Header received from a JSON file</i> (pages/Header.js, pages/api.js):</p>
    <Header />
    <br/>
    <p><i>Here is the Login form:</i> (pages/Login.js, pages/js-form.js)</p>
    <Login />
    <p><i>As for CSS, there is a global container</i> (pages/components/layout.js)</p>
  </Layout>
  )
}

export default HomePage