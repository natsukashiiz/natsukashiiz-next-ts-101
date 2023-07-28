import Router from "next/router";
import { useEffect } from "react";

export default function AdminLayout({ children }: { children: React.ReactNode; }) {

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (!token) {
            Router.push("/auth/signin");
        }
    }, []);

    function hanndleSingOut() {
        localStorage.removeItem("token");
        Router.push("/auth/signin");
    }

    return (
        <div>
            <h1>Admin</h1>
            <button onClick={hanndleSingOut}>Sign Out</button>
            <hr />
            {children}
        </div>
    );
}