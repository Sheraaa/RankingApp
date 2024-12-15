import { useLocation, Link, useParams } from 'react-router-dom';

import MovieImages from "./MovieImages.jsx"
import React, { useState, useEffect } from 'react';
import ranksAPI from "../services/ranks";
import AlbumImages from "./AlbumImages"

function ItemsByType() {
    const { type } = useParams();
    const [items, setItems] = useState([]);


    useEffect(() => {
        ranksAPI.getByType(type)
            .then((data) => setItems(data))
            .catch((err) => console.error("error: ", err))
    }, [type]);

    console.log(items);
  return (
      <main>
          <h1>List by type number {type}</h1>
          {items.map((item) => 
              <ul key={item.id}>
                  <img alt={item.title} src={item.itemType == 1 ? MovieImages.find(o => o.id === item.imageId)?.image : AlbumImages.find(o => o.id === item.imageId)?.image} />
              </ul>
          ) }
      </main>
  );
}

export default ItemsByType;