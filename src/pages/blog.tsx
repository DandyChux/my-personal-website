import type { NextPage } from "next";
import Head from "next/head";
import React, { useState } from "react";

const Blog: NextPage = () => {

    return (
        <>
            <Head>
                <title>CEOkoroji | Blog </title>
            </Head>

            <main className="container flex flex-col mx-auto h-screen">
                <h1 className="text-2xl md:text-[5rem] leading-normal font-extrabold text-gray-900">
                    Blog
                </h1>
            </main>
        </>
    )
}

export default Blog;