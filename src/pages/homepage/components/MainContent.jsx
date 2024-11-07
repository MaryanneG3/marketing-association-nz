import styles from "./MainContent.module.css";
import Searchbar from "../../../common/searchbar/Searchbar";
import ArticleCard from "../../../common/articleCards/ArticleCard";

function MainContent() {
  const news = [
    {
      newsId: 1,
      title:
        "Marketing Association NZ Announces Winners of 'Vogels Toast to the Greatest Campaigns of the Last 50 Years'",
      date: "June 12, 2024",
      imgSrc:
        "../../../src/assets/images/news/Vogels-Toast-Bread-Mixed-Grain.jpg",
    },
    {
      newsId: 2,
      title:
        "Marketing Association NZ Announces Winners of 'YouTube NZ Marketing Awards 2024'",
      date: "July 24, 2024",
      imgSrc: "../../../src/assets/images/news/youtube.jpg",
    },
    {
      newsId: 3,
      title: "Select Committee Approves Privacy Amendment Bill",
      date: "August 28, 2024",
      imgSrc: "../../../src/assets/images/news/committee.jpg",
    },
    {
      newsId: 4,
      title: "AI Overviews - A Mid-2024 Deep Dive",
      date: "October 3, 2024",
      imgSrc: "../../../src/assets/images/news/AI.jpg",
    },
    {
      newsId: 5,
      title:
        "Marketing Leadership Thinker Thomas Barta to Speak at Advanced Marketing Leadership 2025",
      date: "July 24, 2024",
      imgSrc: "../../../src/assets/images/news/Thomas.jpg",
    },
  ];

  return (
    <div className={styles.mainContainer}>
      <Searchbar />
      <div className={styles.contentContainer}>
        {news.map((article) => (
          <ArticleCard
            key={article.newsId}
            newsId={article.newsId}
            title={article.title}
            date={article.date}
            imgSrc={article.imgSrc}
          />
        ))}
      </div>
    </div>
  );
}

export default MainContent;
