import { Metadata } from 'next';
import Link from 'next/link';

export const metadata:Metadata={
  title:"kee",
  description:"y"
}

export default function Home() {
  return (
    <>
    <h1>Home</h1>
    <Link href={"/contact"}>About</Link>
    
    </>
  );
}
