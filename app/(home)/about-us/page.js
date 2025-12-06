import { getOnePage } from "@/fetch/pages";
import MarkdownRenderer from "@/helpers/markdown/MarkdwonRenderer";
import NotFound from "@/helpers/NotFound";
import React from "react";

export default async function AboutUs() {

    const pageName = "about"  //  hard Coded page Name 

    const { status, data } = await getOnePage(pageName);

    if (status !== 200 || !data) {
        return <NotFound text={"About page not found!"} />
    }

    return (
        <section className="bg-gradient-to-b from-blue-50 to-white py-16 px-6 md:px-16 w-full ">
            <MarkdownRenderer content={data.pageContent || "About Page Content not found"} />
        </section>
    );
}
