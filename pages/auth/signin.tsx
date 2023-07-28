import { useState } from "react";
import Router from "next/router";
import Link from "next/link";
import axios from "axios";

export default function SignIn() {

    const initFrom: SignInBody = {
        username: '',
        password: ''
    };
    const [form, setForm] = useState<SignInBody>(initFrom);

    function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
        const name = event.target.name;
        const value = event.target.value;
        setForm(values => ({ ...values, [name]: value }));
    };

    async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        const api = process.env.NEXT_PUBLIC_API;
        const res = await axios.post(`${api}/v1/auth/signIn`, form);
        if (res.status === 200 && res.data.code === 0) {
            localStorage.setItem('token', JSON.stringify(res.data.result));
            Router.push('/admin');
        }
    }

    return <>
        <h1>Sign In</h1><hr />
        <form onSubmit={handleSubmit}>
            <label htmlFor="username">Username</label>
            <input type="username" name="username" value={form.username} onChange={handleChange} /><br />
            <label htmlFor="password">Password</label>
            <input type="password" name="password" value={form.password} onChange={handleChange} /><br />
            <button type="submit">Sign In</button>
        </form>
        <Link href="/">Back to Home</Link>
    </>;
}