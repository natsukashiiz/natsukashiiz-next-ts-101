import Link from "next/link";

export default function Home() {
    return <div>
        <h1>Home</h1>
        <ul>
            <li><Link href="/blog">Blog</Link></li>
            <li><Link href="/blog/999">Blog[999]</Link></li>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/store">Store</Link></li>
            <li><Link href="/todos">Todos</Link></li>
            <li><Link href="/admin">Admin</Link></li>
            <li><Link href="/auth/signin">SignIn</Link></li>
        </ul>
    </div>;
}