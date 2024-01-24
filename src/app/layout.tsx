import type { ReactNode } from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { SideMenu } from "@/components/side-menu";
import { getArticleIndexes } from "@/libs/get-article-indexes";
import "./globals.css";

export const metadata: Metadata = {
  title: { default: "Frontend Book", template: "%s | Frontend Book" },
  description: "Generated by create next app",
};

export default async function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  const articleIndexes = await getArticleIndexes();

  return (
    <html lang="ja">
      <body>
        <header className="sticky top-0 z-10 flex h-16 items-center border-b border-b-neutral-300 px-24 backdrop-blur md:px-10">
          <Link href="/" className="text-xl font-bold">
            Frontend Book
          </Link>
        </header>
        <main className="">
          <input
            type="checkbox"
            className="peer fixed left-6 top-0 z-10 h-16 w-16 appearance-none before:absolute before:right-5 before:top-8 before:block before:h-0.5 before:w-7 before:-translate-y-1 before:bg-black before:duration-500 after:absolute after:right-5 after:top-8 after:block after:h-0.5 after:w-7 after:translate-y-1 after:bg-black after:duration-500 checked:before:translate-y-0 checked:before:rotate-45 checked:after:translate-y-0 checked:after:-rotate-45 md:hidden"
          />
          <aside className="fixed top-16 h-[calc(100%-4rem)] w-64 -translate-x-64 overflow-y-auto bg-white px-10 py-10 shadow-2xl duration-500 peer-checked:translate-x-0 md:translate-x-0 md:shadow-none">
            <SideMenu articleIndexes={articleIndexes} />
          </aside>
          <article className="prose max-w-none break-all p-10 md:ml-64">
            {children}
          </article>
        </main>
        <footer className="py-10 text-center text-xs">
          &copy; 2024 Frontend Book
        </footer>
      </body>
    </html>
  );
}
