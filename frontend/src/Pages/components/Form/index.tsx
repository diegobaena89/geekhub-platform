import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";


import React, { useState } from 'react'
import './styles.css'
import { initializeApp } from 'firebase/app';


function Form() {
    const firebaseConfig = {
        apiKey: "AIzaSyAuxiuc2uVvHJFEjlVKiCMsOaKnieOXMsc",
        authDomain: "geekhub-b48d9.firebaseapp.com",
        projectId: "geekhub-b48d9",
        storageBucket: "geekhub-b48d9.appspot.com",
        messagingSenderId: "560881093848",
        appId: "1:560881093848:web:98b3d269f27f618b965bad",
      };

    const app = initializeApp(firebaseConfig);

    const auth = getAuth(app);

    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');

    //pegando autenticador do app firebase

    function handleLogin() {

        createUserWithEmailAndPassword(auth, login, password)
        .then((userCredential) => {
          const user = userCredential.user;
          console.log(user);
          // Autenticação bem-sucedida, faça o que for necessário aqui
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.error('Erro ao fazer login:', errorCode, errorMessage);
        });
        
      }
    return (
        <div className="login-box">
            <p className='text-custom-green'>Login</p>
            <form>
                <div className="user-box">
                    <input required name="" type="text" value={login} onChange={(event) => setLogin(event.target.value)} />
                    <label>Login</label>
                </div>
                <div className="user-box">
                    <input required name="" type="password" value={password} onChange={(event) => setPassword(event.target.value)} />
                    <label >Senha</label>
                </div>
                    <button type='submit'onClick={() => handleLogin()} className='bg-custom-green text-white p-2 w-40 rounded-lg mb-4'>Entrar</button>
            </form>
            <p>Don't have an account? <a href="" className="a2">Sign up!</a></p>
        </div>
    )
}

export default Form;