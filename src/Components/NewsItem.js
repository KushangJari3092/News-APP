import React from 'react'

const NewsItem = ({ back, description, title, image, source, author, Url, date }) => {
  return (
    <div className='cc' > {/*cards*/}
      <div className="card mx-4" style={{ backgroundColor: back }}>
        <img src={!image ? "https://tse2.mm.bing.net/th?id=OIP.EntHChgUyirgbZ9A3zTxkAHaFj&pid=Api&P=0&w=228&h=171" : image} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{title} ...</h5>
          <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger" style={{ color: "white" }}>
            {source}
          </span>
          <p className="card-text">{description} ...</p>
          <p className="card-text" align="center">
            <small className='rext-muted'>By {author}🎭 <br /> {new Date(date).toGMTString()}📅 </small>
          </p>
          <div align="center" className='read'><a href={Url} target="_kushang" className="btn btn-sm btn-primary">Read more</a></div>
        </div>
      </div>
    </div>
  )

}

export default NewsItem