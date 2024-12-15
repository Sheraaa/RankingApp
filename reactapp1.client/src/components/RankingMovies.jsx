import RankGrid from "./RankingGrid"
import MovieImages from "./MovieImages.jsx"
import { useState, useEffect } from 'react';
import ranksAPI from "../services/ranks";


const RankingMovies = () => {

    const [items, setItems] = useState([]);

    const initialLoad = () => {
        ranksAPI.getByType(1)
            .then((items) => setItems(items))
            .catch((error) => console.warn("Error fetching data:", error));
    };

    useEffect(initialLoad, []);


    function drag(ev) {
        const draggedId = ev.target.id; // récupère l'id
        if (!draggedId) {
            console.warn("Drag event triggered but target ID is missing.");
            return;
        }

        ev.dataTransfer.setData("text", draggedId);
        console.log("Dragging item with ID:", draggedId);
    }

    function allowDrop(ev) {
        ev.preventDefault();
        ev.target.style.border = "2px solid red"; // Indique visuellement la zone ciblée
        setTimeout(() => (ev.target.style.border = ""), 200); // Retire après 200ms
    }


    function drop(ev) {
        ev.preventDefault();
        ev.target.style.backgroundColor = "green"; // Indique la réussite
        setTimeout(() => (ev.target.style.backgroundColor = ""), 200);
        console.log("Dropped on:", ev.target.id || ev.target.className);

        const targetElm = ev.target;
        if (targetElm.nodeName === "IMG") {
            return false;
        }

        if (targetElm.childNodes.length === 0) {
            console.log("targetElm.childNodes.length: ", targetElm.childNodes.length);

            const data = ev.dataTransfer.getData("text"); // Récupère les données transférées
            const draggedItemId = parseInt(data.substring(5)); // Extrait l'ID de l'élément

            // Met à jour les rankings
            const transformedCollection = items.map((item) =>
                item.id === draggedItemId
                    ? { ...item, ranking: parseInt(targetElm.id.substring(5)) }
                    : item
            );

            setItems(transformedCollection);
        }
    }

    return (
        <main>
            <RankGrid items={items} imgArr={MovieImages} drag={drag} allowDrop={allowDrop} drop={drop} />
            <div className="items-not-ranked">
                {
                    (items.length > 0) ? items.map((item) =>
                        (item.ranking === 0) ?
                            <div className="unranked-cell" key={`item-${item.id}`}>
                                {/*id dans image important!!*/}
                                <img id={`item-${item.id}`} alt={item.title} src={MovieImages.find(o => o.id === item.imageId)?.image}
                                    style={{ cursor: "pointer" }} draggable="true" onDragStart={drag}
                                />
                            </div> : null
                    ) : <div>Loading...</div>
                }
            </div>
        </main>
    );
}

export default RankingMovies;