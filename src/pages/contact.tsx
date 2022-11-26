import type { NextPage } from "next";
import Head from "next/head";
import React, { useState } from "react";

const Contact: NextPage = () => {

    return (
        <>
            <Head>
                <title>CEOkoroji | Contact Me </title>
            </Head>

            <main className="container flex flex-col mx-auto h-screen">
                <h1 className="text-2xl md:text-[5rem] leading-normal font-extrabold text-gray-900">
                    Contact Me
                </h1>
            </main>
        </>
    )
}

export default Contact;