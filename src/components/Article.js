import React from 'react';
import "./Article.css"

const Article = () => {
  return (
    <article>
     
      <div className="example">
      <iframe src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_p4TQIkRo8ZLEkrLfT-b3jLTPGPsVRswpMg&s" height="150" width="230"  title="Iframe Example"></iframe>
      <h2>Article Title</h2>
      <p>Qatar's population is a diverse mix of locals and expatriates,
      witha strong emphasis on maintaining culturals traditions alongside modern development.
      the country's infrastructure is state-of-art, featuring iconic structures like the Museum of islamic Art and the futuristic 
      skyline of Doha
      <div></div>
      <p style={{marginLeft:185}}><a href="" target="_blank">Learn More</a></p>
    </p>
      
      </div>
      <div className='para'>
      <p style={{fontSize:12, marginLeft:70}}>Join with us to arrange events in all in one platform</p>
      <button className='button'>register now</button>
      </div> </article>
  );
}

export default Article;