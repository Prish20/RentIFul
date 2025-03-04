"use client";

import Navbar from '@/components/Navbar'
import { SidebarProvider } from '@/components/ui/sidebar'
import { NAVBAR_HEIGHT } from '@/lib/constants'
import Sidebar from "@/components/AppSidebar"
import React, { useEffect, useState } from 'react'
import { useGetAuthUserQuery } from '@/state/api'
import { usePathname, useRouter } from 'next/navigation';

const Layout = ({ children }: { children: React.ReactNode }) => {
    const { data: authuser, isLoading: authLoading } = useGetAuthUserQuery();
    const router = useRouter();
    const pathname = usePathname();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (authuser) {
            const userRole = authuser.userRole.toLowerCase();
            if ((userRole === "manager" && pathname.startsWith("/tenants")) || (userRole === "tenant" && pathname.startsWith("/managers"))) {
                router.push(
                    userRole === "manager" ? "/managers/properties" : "/tenants/favorites",
                    { scroll: false }
                );
            } else {
                setLoading(false);
            }
        }
    }, [authuser, pathname, router, setLoading]);

    if (authLoading || loading) return <>Loading....</>

    if (!authuser?.userRole) return null;
    return (
        <SidebarProvider>
            <div className="min-h-screen w-full bg-primary-100">
                <Navbar />
                <div style={{ paddingTop: `${NAVBAR_HEIGHT}px` }}>
                    <main className="flex">
                        <Sidebar userType={authuser.userRole.toLowerCase()} />
                        <div className="flex-grow transition-all duration-1000">
                            {children}
                        </div>
                    </main>
                </div>
            </div>
        </SidebarProvider>
    )
}

export default Layout
