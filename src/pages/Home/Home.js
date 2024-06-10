import React from 'react';
import './Home.css';
import Article from '../../components/Article/Article';
import '../../globalcss/scrollbar.css' // 스크롤 바 css

// dummy articles
const dummy_articles = [
    {
        title: 'Breaking News: Market Hits Record High',
        date: '2024-06-10',
        url: 'https://example.com/news1',
        content: 'The stock market reached an all-time high today, driven by strong earnings reports and positive economic data.'
    },
    {
        title: 'Local Sports Team Wins Championship',
        date: '2024-06-09',
        url: 'https://example.com/news2',
        content: 'In an exciting final match, the local sports team clinched the championship title with a last-minute goal.'
    },
    {
        title: 'New Tech Innovation Revolutionizes Industry',
        date: '2024-06-08',
        url: 'https://example.com/news3',
        content: 'A groundbreaking technology has been unveiled, promising to revolutionize the industry with its innovative features.'
    },
    {
        title: 'Health Officials Announce New Guidelines',
        date: '2024-06-07',
        url: 'https://example.com/news4',
        content: 'Health officials have released new guidelines to help combat the recent surge in health-related issues across the country.'
    },
    {
        title: 'Community Event Brings Neighbors Together',
        date: '2024-06-06',
        url: 'https://example.com/news5',
        content: 'A community event held over the weekend brought neighbors together for a day of fun, food, and festivities.'
    },
    {
        title: 'Economic Growth Forecast for Next Quarter',
        date: '2024-06-05',
        url: 'https://example.com/news6',
        content: 'Experts predict continued economic growth in the next quarter, citing strong consumer spending and investment.'
    },
    {
        title: 'New Movie Release Breaks Box Office Records',
        date: '2024-06-04',
        url: 'https://example.com/news7',
        content: 'The latest blockbuster movie has shattered box office records, drawing large crowds and rave reviews.'
    },
    {
        title: 'Environmental Initiative Gains Momentum',
        date: '2024-06-03',
        url: 'https://example.com/news8',
        content: 'An environmental initiative aimed at reducing carbon emissions has gained significant momentum and public support.'
    },
    {
        title: 'Major Breakthrough in Medical Research',
        date: '2024-06-02',
        url: 'https://example.com/news9',
        content: 'Researchers have announced a major breakthrough in medical science, potentially leading to new treatments and cures.'
    },
    {
        title: 'Education System Undergoes Major Reforms',
        date: '2024-06-01',
        url: 'https://example.com/news10',
        content: 'The education system is set to undergo major reforms, with new policies aimed at improving quality and accessibility.'
    }
];


const Home = () => {
    return (
        <div className="home-container">
            <div style= {{height:15}}/>
            {
                dummy_articles.map(
                    (article, index) => (
                        <Article 
                            key = {index}
                            title = {article.title}
                            date = {article.date}
                            url = {article.url}
                            content= {article.content}
                        />
                    )
                )
            }
        </div>
    );
};

export default Home;
