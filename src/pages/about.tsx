import type { NextPage } from "next";
import Head from "next/head";
import React, { useState } from "react";

const About: NextPage = () => {

    return (
        <>
            <Head>
                <title>CEOkoroji | About </title>
            </Head>

            <main className="container flex flex-col mx-auto h-screen">
                <h1 className="text-3xl md:text-[5rem] leading-normal font-extrabold text-gray-900">
                    About Me
                </h1>
            </main>
        </>
    )
}

export default About;