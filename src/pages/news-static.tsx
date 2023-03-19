import { ArticleGrid } from '@/components/ArticleGrid';
import { useEffect, useState } from 'react';


export default function NewsStatic({ articles }: { articles: any }) {
    return (
        <>
            <ArticleGrid articles={articles} title="Static rendered"/>
        </>
    );
}


export async function getStaticProps() {
    const res = await fetch(" https://newsapi.org/v2/top-headlines?country=us&apiKey=" + process.env.NEWS_API_KEY);
    const json = await res.json();
    return {
        props: {
            articles: json.articles,
        }, // will be passed to the page component as props
    }
}