"use client";

import { usePathname } from "next/navigation";
import React from "react";
import {
    Sidebar,
    SidebarContent,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    useSidebar,
} from "./ui/sidebar";
import {
    PanelLeftClose,
    PanelRightClose,
} from "lucide-react";
import { NAV_LINKS, NAVBAR_HEIGHT } from "@/lib/constants";
import { cn } from "@/lib/utils";
import Link from "next/link";


// Sidebar Header Component
const SidebarHeaderContent = ({
    userType,
    open,
    toggleSidebar,
}: AppSidebarProps & { open: boolean; toggleSidebar: () => void }) => (
    <SidebarHeader className="bg-primary-700/20 rounded-tr-md transition-all duration-300 ease-in-out">
        <SidebarMenu>
            <SidebarMenuItem>
                <div
                    className={cn(
                        "flex min-h-[56px] w-full items-center pt-3 mb-3 transition-all duration-300 ease-in-out",
                        open ? "px-6" : "justify-center"
                    )}
                >
                    {open ? (
                        <>
                            <h1
                                className={cn(
                                    "text-xl font-bold text-gray-800 transition-all duration-200 ease-in-out",
                                    open ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-5"
                                )}
                            >
                                {userType === "manager" ? "Manager" : "Tenant"}
                            </h1>
                            <button
                                className="ml-auto p-2 rounded-md hover:bg-gray-100 transition-colors duration-200 ease-in-out"
                                onClick={toggleSidebar}
                                aria-label="Collapse sidebar"
                            >
                                <PanelLeftClose className="h-8 w-8 text-gray-600 hover:text-red-600 transition-transform duration-200 hover:scale-110" />
                            </button>
                        </>
                    ) : (
                        <button
                            className="p-2 rounded-md hover:bg-gray-100 transition-colors duration-200 ease-in-out"
                            onClick={toggleSidebar}
                            aria-label="Expand sidebar"
                        >
                            <PanelRightClose className="h-8 w-8 text-gray-600 hover:text-red-600 transition-transform duration-200 hover:scale-110" />
                        </button>
                    )}
                </div>
            </SidebarMenuItem>
        </SidebarMenu>
    </SidebarHeader>
);

const AppSidebar = ({ userType }: AppSidebarProps) => {
    const pathname = usePathname();
    const { toggleSidebar, open } = useSidebar();

    const navLinks = NAV_LINKS[userType];

    return (
        <Sidebar
            collapsible="icon"
            className="fixed left-0 bg-white shadow-xl transition-all duration-300 ease-in-out"
            style={{
                top: `${NAVBAR_HEIGHT}px`,
                height: `calc(100vh - ${NAVBAR_HEIGHT}px)`,
                width: open ? "240px" : "80px",
            }}
        >
            <SidebarHeaderContent
                userType={userType}
                open={open}
                toggleSidebar={toggleSidebar}
            />
            <SidebarContent className="bg-primary-700/20 transition-all duration-300 ease-in-out">
                <SidebarMenu>
                    {navLinks.map((link) => {
                        const isActive = pathname === link.href;
                        return (
                            <SidebarMenuItem key={link.href}>
                                <SidebarMenuButton
                                    asChild
                                    size={open ? "lg" : "sm"}
                                    className={cn(
                                        "flex items-center transition-all duration-300 ease-in-out",
                                        open
                                            ? "px-3 py-3 mx-5 rounded-3xl"
                                            : "px-3 py-3 mx-5 rounded-[48px_24px_24px_96px] place-items-center",
                                        isActive
                                            ? "bg-white text-gray-700"
                                            : open
                                                ? "text-white"
                                                : "ml-3"
                                    )}
                                    style={{
                                        transitionProperty: "padding, margin, border-radius, place-items",
                                        ...(open
                                            ? {
                                                padding: "10px",
                                                margin: "20px",
                                                borderRadius: "48px 48px 48px 48px",
                                            }
                                            : {
                                                padding: "10px",
                                                margin: "20px",
                                                borderRadius: "48px 24px 24px 96px",
                                                placeItems: "center",
                                            }),
                                    }}
                                >
                                    <Link href={link.href} className="w-full" scroll={false}>
                                        <div className="flex items-center gap-3">
                                            <link.icon
                                                className={cn(
                                                    "h-6 w-6",
                                                    isActive
                                                        ? "text-secondary-500"
                                                        : "text-gray-600"
                                                )}
                                            />
                                            <span
                                                className={cn(
                                                    "font-medium",
                                                    isActive
                                                        ? "text-black font-bold"
                                                        : "text-gray-600 font-semibold"
                                                )}
                                            >
                                                {link.label}
                                            </span>
                                        </div>
                                    </Link>
                                </SidebarMenuButton>
                            </SidebarMenuItem>
                        );
                    })}
                </SidebarMenu>
            </SidebarContent>
        </Sidebar>
    );
};

export default AppSidebar;
