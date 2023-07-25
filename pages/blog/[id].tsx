import Link from "next/link";
import { useRouter } from "next/router";

export default function BlogWithId() {
    const router = useRouter();
    return <div>
        <h1>BlogWithId: {router.query.id}</h1>
        <Link href="/">Back to Home</Link>
    </div>;
}