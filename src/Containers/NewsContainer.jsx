import { useEffect, useState } from 'react';
import NewItem from '../Components/NewItem';

const news = [
    {
      id: 121,
      title: "Noticia 11",
      summary: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat vel cupiditate maxime dolore obcaecati voluptates ex esse reprehenderit eius est, ipsam laborum exercitationem necessitatibus quia quas! Obcaecati nemo ad a?" 
    },
    {
      id: 122,
      title: "Noticia 2",
      summary: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat vel cupiditate maxime dolore obcaecati voluptates ex esse reprehenderit eius est, ipsam laborum exercitationem necessitatibus quia quas! Obcaecati nemo ad a?" 
    },
    {
      id: 123,
      title: "Noticia 3",
      summary: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat vel cupiditate maxime dolore obcaecati voluptates ex esse reprehenderit eius est, ipsam laborum exercitationem necessitatibus quia quas! Obcaecati nemo ad a?" 
    }
];

function fetchNews() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(news);
        }, 4000);
    });
}

const handleAsync = async (setNews, setLoading) => {
    const news = await fetchNews();
    setNews(news);
    setLoading(false);
}

export default function NewsContainer(){
    const [news, setNews] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        handleAsync(setNews, setLoading);
    }, []);

    return (
      <aside className='news-container'>
        <h2>News</h2>
        {loading? 
        <div style={{ color: 'white' }}>Cargando información ....</div>:
        news.map((newObject, index) => (
            <NewItem key={'news_'+index} title={newObject.title} summary={newObject.summary} />
        ))}
      </aside>
    );
}