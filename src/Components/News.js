import React, { useState, useEffect } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';


const News = ({ category, country, setProgress, back }) => {

  //in function based component....to set default values..useState functionality is used instead of constructor
  const [articles, setArticles] = useState([])
  const [loading, setLoading] = useState(false)
  const [page, setPage] = useState(1)
  // const [totalArticles, setTotalArticles] = useState(0)

  const totalArticles = 70;
  var parsedData;

  async function fetchingData(page) {
    setProgress(0);
    const url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=ad608298da5b4740afb84a93fe63c592&page=${page}&pagesize=15`;
    const data = await fetch(url);
    setProgress(40);

    setLoading(true);

    parsedData = await data?.json();
    console.log(parsedData);

    setLoading(false);
    setArticles(parsedData?.articles);
    setProgress(100);
    setPage(page);

  }

  useEffect(async () => {   //in function based component....componentDidMount() replaced by useEffect()
    fetchingData(page);
  }, [])

  const prevClick = async () => { //for previous page
    fetchingData(page - 1);
    console.log("prev");
  }

  const nextClick = async () => { //for next page
    console.log("next");
    fetchingData(page + 1);
  }

  return (
    <div className="container my-4">
      <h1 className='text-center'>NewsAPP - Top {category} Headlines</h1>
      {loading && <Spinner />}
      <div className="row my-4">

        {!loading && articles?.map((e) => {
          return (
            <div className="col-md-4 my-3" key={e.url}>
              <NewsItem title={e.title ? e.title.slice(0, 55) : "not available"} description={e.description ? e.description.slice(0, 107) : "not available"} image={e.urlToImage} Url={e.url} author={e.author ? e.author : "Unknown"} date={e.publishedAt} source={e.source.name} back={back} />
            </div>
          )
        })}

      </div>

      <div className="container d-flex justify-content-between">
        <button type="button" className="btn btn-dark" onClick={prevClick} disabled={page <= 1} >&larr; prev</button>
        <button type="button" className="btn btn-dark" onClick={nextClick} disabled={page + 1 > Math.ceil(totalArticles / 15)}>next &rarr;</button>
      </div>
    </div>


  )
}


export default News