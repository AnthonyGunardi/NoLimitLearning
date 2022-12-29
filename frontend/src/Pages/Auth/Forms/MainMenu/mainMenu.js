import React, {Component} from 'react';
import {Link, Redirect } from 'react-router-dom';
//import Login from '../Login/Login';
import Layout from '../../../../components/Layout/Layout';
import AuthService from "../../../../ApiServices/auth.service";
import '../Form.css';
import Input from '../../../../components/UI/Input/FormInput';
import MainPage from '../../../../components/UI/MainPage/MainPage';
import SpinnerButton from '../../../../components/UI/Spinners/SpinnerButton';
import SumbitButton from '../../../../components/UI/Buttons/SumbitButton';
import Alert from '../alert';
class MainMenu extends Component {
    state = { 
            Form:{
                 name: {
                    placeholder: 'First Name',
                    value: "",
                    valid: false,
                    type: 'text',
                    error: " ",
                    msg: '',
                    validation: {
                        required: true,
                        minLength:5,
                        maxLength:15
                    },
                    touched: false,
                
            },
                email: {
                    placeholder: 'Email',
                    value: "",
                    valid: false,
                    type: 'email',
                    error: " ",
                    msg: '',
                    
                    validation: {
                        required: true,
                        regex:/^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/
                    },
                    touched: false,
                
            },
                password: {
                    placeholder: 'Password',
                    value: "",
                    valid: false,
                    type: 'password',
                    error: " ",
                    msg: '',
                    validation: {
                        required: true,
                        minLength:5,
                        maxLength:18
                    },
                    touched: false,
                
            },
            
            confirmPassword: {
                placeholder: 'Confirm Password',
                value: "",
                valid: false,
                type: 'password',
                error: " ",
                msg: '',
                validation: {
                    required: true,
                    match: true,
                   
                },
                touched: false,
            }
        },
        loading:false,
        redirect:null,
        
        alert: {
            valid:false,
            msg:"",
            alertType:" ",
        },
        alertPressed:false,
       
    }

    render() {
        
        let alertContent = null;
        
  
        if(this.state.alert.valid){
            alertContent = ( <Alert value={this.state.alertPressed} 
                alertMsg ={this.state.alert.msg} 
                alertType={this.state.alert.alertType} /> )
        }
        
        
        if (this.state.redirect) {
            return <Redirect to={this.state.redirect} />
          }
        const formElementsArray =[];
        for(let key in this.state.Form ){
            formElementsArray.push({
                id:key,
                config:this.state.Form[key]
            });
        };
        let Menu1Button= <a className={"Sumbit-btn"} role="button" Label={"Learning"} href="/home/all">Learning</a> ;
        let Menu2Button= <a className={"Sumbit-btn"} role="button" Label={"Challenge"} href="/challenge">Challenge</a> ;
        let Menu3Button= <a className={"Sumbit-btn"} role="button" Label={"Assesment"} href="/home/all">Assesment</a> ;
        
   
        if(this.state.loading){
            Menu1Button= <SpinnerButton spinnerclass={"Sumbit-btn"}/>;
            Menu2Button= <SpinnerButton spinnerclass={"Sumbit-btn"}/>;
            Menu3Button= <SpinnerButton spinnerclass={"Sumbit-btn"}/>;
    }
        let form = (
          <div className="mainMenu">             
                {Menu1Button}
                {Menu2Button}
                {Menu3Button}
            </div>
        );
        return (
          <Layout>
                {alertContent}
                <div className="SideContent">
                        <MainPage 
                            oup={true}
                            heading1={"Be A Better You"}
                            heading2={"with"}/>
                            {form}
                </div>
          </Layout>
        );
    }
  
}
export default MainMenu;