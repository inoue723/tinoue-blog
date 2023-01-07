import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col h-screen bg-slate-700 text-white justify-center items-center">
      <div className="flex flex-col ">
        <Link href="about" className="underline text-xl hover:text-slate-500">
          私について
        </Link>
        <Link href="career" className="underline text-xl hover:text-slate-500">
          経歴
        </Link>
      </div>
    </div>
  );
}
