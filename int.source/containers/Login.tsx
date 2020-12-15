import React from 'react';
import { View } from 'react-native';
import { Button, Input, Text } from 'react-native-elements';
import { ilogin } from '../models/cl_intbas';

interface iprops {

}

class Login extends React.Component<iprops, ilogin> {

    constructor(props: iprops) {
        super(props)
        this.state = {
            ls_usuari: '',
            ls_passwd: ''
        }
    }

    uf_btn_iniciar_sesion = async () => {
        console.log('a')
    }

    render() {

        const { ls_usuari, ls_passwd } = this.state;

        return (
            <View>
                <Text h1>LOGIN</Text>
                <Input nativeID={ 'txt_usuari' } placeholder="Usuario" value={ls_usuari} onChangeText={ (as_newval) => this.setState({ls_usuari: as_newval}) }></Input>
                <Input nativeID={ 'txt_passwd' } placeholder="Password" value={ls_passwd} onChangeText={ (as_newval) => this.setState({ls_passwd: as_newval}) }></Input>
                <Button onPress={ this.uf_btn_iniciar_sesion }>Iniciar sesion</Button>
            </View>
        )
    }
}

export default Login;