"use client";

import Navbar from "@/components/Navbar"
import { NAVBAR_HEIGHT } from "@/lib/constants"
import { useGetAuthUserQuery } from "@/state/api";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";


const Layout = ({ children }: { children: React.ReactNode }) => {
    const { data: authuser, isLoading: authLoading } = useGetAuthUserQuery();
    const router = useRouter();
    const pathname = usePathname();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (authuser) {
            const userRole = authuser.userRole.toLowerCase();
            if ((userRole === "manager" && pathname.startsWith("/search")) || (userRole === "manager" && pathname.startsWith("/"))) {
                router.push(
                    "/managers/properties",
                    { scroll: false }
                );
            } else {
                setLoading(false);
            }
        }
    }, [authuser, pathname, router, setLoading]);

    if (authLoading || loading) return <>Loading....</>

    return (
        <div className="h-full w-full">
            <Navbar />
            <main className={`h-full flex w-full flex-col`} style={{ paddingTop: `${NAVBAR_HEIGHT}px` }}>
                {children}
            </main>
        </div>
    )
}

export default Layout
