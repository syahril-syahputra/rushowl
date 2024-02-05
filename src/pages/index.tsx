// import { useState } from 'react';
import api from '../libs/axios';

export default function HomePage() {
    // const [userName, setuserName] = useState<string>('');

    const buttonLoginHandler = async () => {
        const data = await api.post('/login', {
            email: 'test',
            password: 'test',
        });
        console.log(data);
    };
    return (
        <div>
            <button onClick={buttonLoginHandler}>Testing</button>
        </div>
    );
}
