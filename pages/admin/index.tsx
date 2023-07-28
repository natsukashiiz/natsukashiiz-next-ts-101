import AdminLayout from "./layout";
import { useEffect, useState } from 'react';

export default function AdminHome() {

    const [profile, setProfile] = useState<TokenPayload | null>(null);


    useEffect(() => {
        const tokenStore = localStorage.getItem("token");
        if (tokenStore) {
            const token = JSON.parse(tokenStore) as TokenResponse;
            const data = JSON.parse(atob(token.access.split(".")[1])) as TokenPayload;
            setProfile(data);
        }
    }, []);

    return (
        <AdminLayout>
            {profile ? <p>{JSON.stringify(profile, null, 4)}</p> : 'Loading...'}
        </AdminLayout>
    );
}