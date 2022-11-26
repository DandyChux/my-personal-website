import type { NextPage } from "next";
import Head from "next/head";
import React, { useState } from "react";
import ProjectCard from '@modules/projects/ProjectCard';

const About: NextPage = () => {

    return (
        <>
            <Head>
                <title>CEOkoroji | About </title>
            </Head>

            <main className="container flex flex-col mx-auto h-screen pl-4">
                <h1 className="text-2xl md:text-[5rem] leading-normal font-extrabold text-gray-900">
                    About Me
                </h1>
            </main>
        </>
    )
}

export default About;