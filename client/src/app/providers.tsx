"use client"

import StoreProvider from "@/state/redux"

const providers = ({ children }: { children: React.ReactNode }) => {
    return (
        <StoreProvider>
            {children}
        </StoreProvider>
    )
}

export default providers
