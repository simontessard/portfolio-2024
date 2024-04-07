"use client"
import { useParams } from "next/navigation";

export default function ProjectPage() {
    const params = useParams();
    return (
        <section className="container py-4 text-white">
            <h1>Project Page</h1>
            <span>ID : {params.id}</span>
            <p>En construction</p>
        </section>
    );
}