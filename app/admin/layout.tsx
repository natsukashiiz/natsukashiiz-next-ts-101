import Router from "next/router";
import { useEffect } from "react";

export default function AdminLayout({
    children,
}: {
    children: React.ReactNode;
}) {

    console.log('AdminLayout');

    useEffect(() => {
        const token = localStorage.getItem('token');
        console.log('token', token);
        if (!token) {
            Router.push('/auth/signin');
        }
    }, []);

    return (<>{children}</>);
}