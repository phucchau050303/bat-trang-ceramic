import React from 'react';
import '../../styles/reviews.css';

const ReviewCard = ({ avatar, title, excerpt, fullText, author, date, rating = 5, bgColor }) => {
  return (
    <article className="review-card" style={bgColor ? { backgroundColor: bgColor, color: bgColor ? '#fff' : undefined } : {}}>
      <div className="review-inner">
        <img className="review-avatar" src={avatar} alt={`${author} avatar`} />
        <div className="review-stars">{'★'.repeat(rating)}</div>

        <h3 className="review-title">{title}</h3>
        <p className="review-excerpt"  style={{color:"#fff"}}>{excerpt}</p>

        <div className="review-full" aria-hidden="true">
          <p className="review-full-text">{fullText}</p>
          <div className="review-meta">
            <strong>{author}</strong> • <span>{date}</span>
          </div>
        </div>
      </div>
    </article>
  );
};

export default ReviewCard;