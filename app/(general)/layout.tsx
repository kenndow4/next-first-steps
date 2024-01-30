import Navbar from "@/components/navbar/Navbar";


export default function PublicLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
        <>

        <Navbar/>
        <main className="flex flex-col items-center p-24">

        <h1>hello world</h1>
        {children}

        </main>
        
        </>
    );
  }