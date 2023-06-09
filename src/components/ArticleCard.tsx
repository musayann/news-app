
export const ArticleCard = ({ article }: { article: any }) => {

    return (<div className="group relative">
        <div className="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-80">
            <img
                src={article.urlToImage}
                alt={article.title}
                className="h-full w-full object-cover object-center lg:h-full lg:w-full"
            />
        </div>
        <div className="mt-4 flex justify-between">
            <div>
                <h3 className="text-lg text-gray-900 font-bold">
                    <a href={article.url} target="_blank">
                        <span aria-hidden="true" className="absolute inset-0" />
                        {article.title}
                    </a>
                </h3>
                <p className="mt-1 text-sm text-gray-500">{article.description}</p>
            </div>
            {/* <p className="text-sm font-medium text-gray-900">{article.price}</p> */}
        </div>
    </div>)
};