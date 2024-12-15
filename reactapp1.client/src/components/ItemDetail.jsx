import { useLocation, Link, useParams } from 'react-router-dom';
import AlbumImages from "./AlbumImages"
import MovieImages from "./MovieImages.jsx"
import React, { useState, useEffect } from 'react';
import ranksAPI from "../services/ranks";


// version useLocation()
//utilisation useLocation pour envoyer le param item depuis RankItems à ici
// car le component parent fait déjà la query GetAll() alors pk refaire une query ici , autant récupérer
//const ItemDetail = () => {
//    const location = useLocation();
//    const item = location.state?.item;

//    return (
//        <main style={{ textAlign: "center" }}>
//            <Link to="/" style={{ textDecoration: "none", color: "blue" }}>Back to Home</Link>
//            {item != null ? (
//                <>
//                    <h1>{item.title}</h1>
//                    <img
//                        alt={item.title}
//                        src={MovieImages.find(o => o.id === item.imageId)?.image}
//                        style={{ width: "500px", height: "500px", objectFit: "contain" }}
//                    />
//                    <p>ranking: {item.ranking}</p>
//                    <p>item type: {item.itemType}</p>
//                </>
//            ) : <p>No item found.</p>}

//        </main>
//    );
//}

//version appel à l'API dans ranksAPI
const ItemDetail = () => {
    const { id } = useParams();
    const [item, setItem] = useState(null);


    useEffect(() => {
        ranksAPI.getById(id)
            .then((data) => setItem(data))
            .catch((err) => console.error("error ", err))
    }, [id]);


    return (
        <main>
            {/*<Link to="/" style={{ textDecoration: "none", color: "blue" }}>Back to Home</Link>*/}
            {item != null ?
                (
                    <>
                        <h1>{item.title}</h1>
                        <img
                            alt={item.title}
                            src={item.itemType == 1 ? MovieImages.find(o => o.id === item.imageId)?.image : AlbumImages.find(o => o.id === item.imageId)?.image}
                            style={{ width: "500px", height: "500px", objectFit: "contain" }}
                        />
                        <p>ranking: {item.ranking}</p>
                        <p>item type: {item.itemType}</p>
                    </>
                ) : <p>No item found.</p>
            }
        </main>
    )
}

export default ItemDetail;