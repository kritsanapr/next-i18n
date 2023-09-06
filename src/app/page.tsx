"use client";

import Image from "next/image";
import Head from "next/head";
import { useEffect, useState } from "react";

interface News {
  date: string;
  title: string;
  description: string;
}

export default function Home() {
  const [data, setData] = useState<News[]>([]);
  useEffect(() => {
    const fetchAPI = async (locale: string) => {
      const res = await fetch(`http://localhost:3001/${locale}`);
      const data = await res.json();
      setData(data);
    };
  }, []);

  return (
    <div>
      <Head>
        <title>Test Next.JS with i18n</title>
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <h1>Test Next.JS with i18n</h1>
        <div className="flex my-5">
          {data.map((news, index) => (
            <div key={index}>
              <p>{news.date}</p>

              <h3>{news.title}</h3>

              <p>{news.description}</p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
