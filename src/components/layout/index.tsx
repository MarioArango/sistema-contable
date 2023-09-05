import { IChildren } from "@/interfaces/IChildren"
import Header from "./header"

export default function Layout({ children } : IChildren): JSX.Element{
    return (
        <>
            <Header/>
            <main className='gx-container-center'>
                {children}
            </main>
        </>
    )
}