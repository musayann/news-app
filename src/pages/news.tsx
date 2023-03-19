import { ArticleGrid } from '@/components/ArticleGrid';
import { Inter } from 'next/font/google'
import { useEffect, useState } from 'react';

const inter = Inter({ subsets: ['latin'] })

export default function News() {
    const [articles, setArticles] = useState([]);
    const fetchNews = async () => {
        const res = await fetch(" https://newsapi.org/v2/top-headlines?country=us&apiKey=" + process.env.NEXT_PUBLIC_NEWS_API_KEY);
        const json = await res.json();
        setArticles(json.articles);
    }
    useEffect(() => {
        fetchNews();
    }, []);
    return (
        <ArticleGrid articles={articles} title="Client rendered" />
    );
}
