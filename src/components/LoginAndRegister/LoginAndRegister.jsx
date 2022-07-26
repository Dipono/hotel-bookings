
import { useState, useRef } from 'react';
import padlock from '../../assets/padlock.png';
import view from '../../assets/view.png';
import envelope from '../../assets/envelope.png';
import './LoginAndRegister.css'
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from '../config/firebase';
import { addDoc, collection } from 'firebase/firestore';
import { useEffect } from 'react';
import {AiFillCloseCircle} from 'react-icons/ai'

function LoginAndRegister(props) {

    const userCollectionRef = collection(db, 'client');
    const [Email, setEmail] = useState('')
    const [Password, setPassword] = useState('')
    const [VerifyPassword, setVerifyPassword] = useState('')
    const [Surname, setSurname] = useState('')
    const [Name, setName] = useState('')
    const [PhoneNo, setPhoneNo] = useState('')

    const refLog = useRef('login');
    const refReg = useRef('register');
    const refBtn = useRef('btn');

    function register() {
        refLog.current.style.left = "-400px"
        refReg.current.style.left = "30px"
        refReg.current.style.hidden = false
        refBtn.current.style.left = "50px"

    }

    function login() {
        refLog.current.style.left = "25px"
        refReg.current.style.left = "450px"
        refBtn.current.style.left = "0"

    }

    function Login() {
        if (!Email || !Password) return alert('Please enter all the fields')

        signInWithEmailAndPassword(auth, Email, Password)
            .then((userCredential) => {
                localStorage.setItem('userId', userCredential.user.uid)
                localStorage.setItem('userEmail', userCredential.user.email)
                props.setTrigger(false)
                alert('Successfully')
            })
            .catch((error) => {
                alert('wrong username or password')
            });
    }
    async function Rgister() {

        if (!Email) return alert('Please Enter Email')
        if (!Password) return alert('Please Enter Password')
        if (!VerifyPassword) return alert('Please verify your password')
        if (!Surname) return alert('Please enter your lastname')
        if (!Name) return alert('Please enter your firstname')
        if (!PhoneNo) return alert('Please enter your phone number')

        if (VerifyPassword !== Password) return alert('Password do not match!')



        await createUserWithEmailAndPassword(auth, Email, Password)
            .then((respond) => {
                console.log(respond.user.uid)
                addDoc(userCollectionRef, { surname: Surname, name: Name, phone_number: PhoneNo, id_ref: respond.user.uid, role: 'tenant' })
                    .then((data) => {
                        refLog.current.style.left = "25px"
                        refReg.current.style.left = "450px"
                        refBtn.current.style.left = "0"
                        console.log(data)
                    },
                        (err) => { console.log(err) });

                //navigate('/')
            }).catch((err) => {
                console.log(err);
            });
    }

    let loginAndRegister = (
        <div className="loginAndRegister">
            <div className="loginAndRegister-heading" id='btn' ref={refBtn}>
                <button className="toggle-btn btn-login" onClick={login}>Login</button>
                <button className="toggle-btn btn-register" onClick={register}>Register</button>
            </div>

            <div className="loginAndRegister-body">
                <div id='login' ref={refLog} className="input-group">
                    <div className='form-group'>
                        <img src={envelope} alt="envelope" className='icon' />
                        <input type="text" name="email" className='control-form' placeholder="E-mail"
                            onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div className='form-group'>
                        <img src={padlock} alt="padlock" className='icon' />
                        <input type="password" name="password" className='control-form' placeholder="Password"
                            onChange={(e) => setPassword(e.target.value)} />
                        <img src={view} alt="View" id='view' className='icon' />
                    </div>

                    <div className='form-group-btn'>
                        <button className='login-btn' onClick={Login} >Login </button>
                    </div>
                </div>

                <div id='register' ref={refReg} className="input-group reg-group">
                    <div className='form-group'>
                        <img src={envelope} alt="envelope" className='icon' />
                        <input type="text" name="email" className='control-form' placeholder="E-mail"
                            onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div className='form-group'>
                        <input type="text" name="lastname" className='control-form' placeholder="Lastname"
                            onChange={(e) => setSurname(e.target.value)} />
                    </div>
                    <div className='form-group'>
                        <input type="text" name="firstname" className='control-form' placeholder="FirstName"
                            onChange={(e) => setName(e.target.value)} />
                    </div>
                    <div className='form-group'>
                        <input type="text" name="phoneNumber" className='control-form' placeholder="Phone Number"
                            onChange={(e) => setPhoneNo(e.target.value)} />
                    </div>
                    <div className='form-group'>
                        <img src={padlock} alt="padlock" className='icon' />
                        <input type="password" name="password" className='control-form' placeholder="Password"
                            onChange={(e) => setPassword(e.target.value)} />
                        <img src={view} alt="View" id='view' className='icon' />
                    </div>
                    <div className='form-group'>
                        <img src={padlock} alt="padlock" className='icon' />
                        <input type="password" name="VerifyPassword" className='control-form' placeholder="Password"
                            onChange={(e) => setVerifyPassword(e.target.value)} />
                        <img src={view} alt="View" id='view' className='icon' />
                    </div>

                    <div className='form-group-btn'>
                        <button className='login-btn' onClick={Rgister} >Register </button>
                    </div>
                </div>

            </div>

        </div>
    )
    return  (props.trigger) ? (
        <div className="login_register">
            <button className='cancel-popup' onClick={() => props.setTrigger(false)}>< AiFillCloseCircle /></button>
            {loginAndRegister}
        </div>
    ) : "";
}

export default LoginAndRegister;