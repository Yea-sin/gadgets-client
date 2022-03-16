import React from 'react';
import { Container } from 'react-bootstrap';
import useFirebase from '../Hook/useFirebase';

const Login = () => {
    const {singInUsingGoogle,logOut, user} = useFirebase();
    return (
        <Container>
            <div className="p-5 m-5 border rounded bg-info">
                {
                    user?.email ? <div> <h3>Welcome {user.displayName}</h3> <button onClick={logOut} className="btn btn-outline-success">LogOut</button> </div> : <button onClick={singInUsingGoogle} className="btn btn-outline-success">Sing In With Google</button>
                }
            </div>
        </Container>
    );
};

export default Login;