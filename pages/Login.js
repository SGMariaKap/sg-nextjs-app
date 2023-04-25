import PageWithJSbasedForm from './js-form';
const Login = () => {
    return (
        <div>
            <h1>Authentification</h1>
            {/*action: where the form data is sent when the form is submitted. It's generally a URL (an absolute URL or a relative URL)
               method: Specifies the HTTP method, i.e., GET or POST used to send data while submitting the form*/}
           <PageWithJSbasedForm/>
            <a href="">Forget your password?</a>
        </div>
    )
  
}

export default Login;
