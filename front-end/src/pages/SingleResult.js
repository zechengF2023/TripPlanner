import "../css/SingleResult.css"
import React, {useEffect, useState}  from 'react'; 
import Header from "../components/Header"; 
import Carousel from 'react-material-ui-carousel'
import { Paper, Button } from '@mui/material'
import {useParams} from "react-router-dom"; 
import Data from './Properties.json';

function SingleResult(){
    const [article, setArticle ] = useState({}); 
    const [articleImages, setArticleImages] =useState({}); 
    let {id} = useParams(); 

    useEffect(() => {
        //runs code any time anything changes within the array it will perform the function 
        //two parameters: function and array
        const dataToSet = Data.find((item) => item.id === id);
        //setting dataToSet to be equal to whatever is within the article when the article id = the id found in data.json
        setArticle(dataToSet); 
        setArticleImages(dataToSet.images); 
        console.log(article); 
        console.log(articleImages); 
    }, [id]); 

    return (
        <div>
            <Header/>

            <div>
                Carousel goes here
            </div>
            <div className="singleContent" style={{margin:"100px"}}>
                <div className="singleContentLeft">
                    <h2>{article.name}</h2>
                    <h4 style={{fontStyle:"italic"}}>{article.location}</h4>
                    <h4 style={{fontStyle:"italic"}}>{article.tagline}</h4>
                    <p>{article.blurb}</p>
                </div>
                <div className="singleContentRight">
                    <p> {article.amenities} </p>
                </div>

            </div>

            {/* <Carousel>
            {
                articleImages.map( (item, i) => <Item key={i} item={item} /> )
            }
            </Carousel> */}

        </div>
    )
}

// function Item(props)
// {
//     return (
//         <Paper style={{backgroundImage:`../assets/${props}`}}>
//         </Paper>
//     )
// }

export default SingleResult