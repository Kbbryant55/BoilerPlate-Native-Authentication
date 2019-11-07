import React, { Component } from 'react';
import { View, Text, ActivityIndicator} from 'react-native';
import { Button, Input} from 'react-native-elements';
import InnerSection from './inner-section';
import firebase from 'firebase';
import { authInputChange, login } from "../actions/index";
import { connect } from 'react-redux';

class LoginForm extends Component {

    componentDidMount(){
        const firebaseConfig = {
            apiKey: "AIzaSyB3KmL8T5kvbHISRLcJvh7yiC7UO3P9IhE",
            authDomain: "boilerplateauthentication.firebaseapp.com",
            databaseURL: "https://boilerplateauthentication.firebaseio.com",
            projectId: "boilerplateauthentication",
            storageBucket: "boilerplateauthentication.appspot.com",
            messagingSenderId: "495658951361",
            appId: "1:495658951361:web:8291947c97b12b4776aa40",
            measurementId: "G-JVBKQ6BV6N"
          };
          firebase.initializeApp(firebaseConfig);
    }

    login(){
        console.log("Logging in.....")
        const { email , password } = this.props;
        this.props.login({email, password});
    }

    showButton(){
        if(this.props.loading){
            return(
                <View>
                    <ActivityIndicator size={'small'} />
                </View>
            )
        }
       return <Button title='Login' onPress={this.login.bind(this)} />
    }
    showError(){
        if(!!this.props.error){
            return(
                this.props.error
            )
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <InnerSection>
                <Input  placeholder='Username'
                 value={this.props.email}
                 onChangeText={text=> this.props.authInputChange({'field': 'email', 'value': text})} />
                </InnerSection>
                <InnerSection>
                <Input  placeholder='Password' 
                value={this.props.password}
                onChangeText={text=> this.props.authInputChange({'field': 'password', 'value': text})} 
                secureTextEntry 
                errorMessage={this.showError()}/>
                </InnerSection>
                <InnerSection>
                {this.showButton()}
                </InnerSection>
            </View>
        );
    }
}

const mapStateToProps = state => {
    return {
        email : state.auth.email,
        password: state.auth.password,
        user: state.auth.user,
        error: state.auth.error,
        loading: state.auth.loading
    }
}

export default connect(mapStateToProps, { authInputChange, login })(LoginForm)

const styles = {
    container: {
      alignContent: 'center',
      marginTop: 25
    }
}
  