import { useState, useEffect } from 'react';
import ranksAPI from "../services/ranks";
import MovieImages from "./MovieImages.jsx"
import AlbumImages from "./AlbumImages"
import { Link } from 'react-router-dom';

const RankItems = () => {

    const [items, setItems] = useState([]);

    const initialLoad = () => {
        ranksAPI.getAll()
            .then((items) => setItems(items))
            .catch((error) => console.warn("Error fetching data:", error));
    };

    useEffect(initialLoad, []);

    return (
        <>
            <main>
                <p>List titles</p>
                <div className="items-not-ranked">
                    {
                        (items.length > 0) ? items.map((item) =>
                            <div className="unranked-cell" key={`item-${item.id}`}>
                                <Link to={`/item/byid/${item.id}`} /*state={{ item }}*/>
                                    <img alt={item.title} src={item.itemType == 1 ? MovieImages.find(o => o.id === item.imageId)?.image : AlbumImages.find(o => o.id === item.imageId)?.image} />
                                </Link>
                            </div>
                        ) : <div>Loading...</div>
                    }
                </div>
            </main>
        </>
    );

}

export default RankItems;