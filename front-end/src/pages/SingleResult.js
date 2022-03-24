import "../css/SingleResult.css"
import React, {useEffect, useState, useMemo}  from 'react'; 
import Header from "../components/Header"; 
import Carousel from 'react-material-ui-carousel'
import { Paper, Button } from '@mui/material'
import {useParams} from "react-router-dom"; 
import Data from './Properties.json';
import activityPhoto from "../assets/activity.jpeg"; 
import hotelPhoto from "../assets/hotelExample1.webp"

function SingleResult(){
    let [article, setArticle] = useState({}); 
    let {id} = useParams(); 

    useEffect(() => {
        const dataToSet = Data.find((item) => item.id === id);
        setArticle(dataToSet); 
    }, [id]); 

    const articleImages = useMemo(() => {
        if (!article) return {};
        else {
            return article.images; 
        }
    }, [article])

    const articleActivities = useMemo(() => {
        if (!article) return {};
        else {
            return article.activities; 
        }
    }, [article])

    if (article === {} || articleImages === undefined || articleActivities === undefined) {
        return (<> <h1>Still Loading...</h1></>);
    }
    else{
        return (
            <div>
                <Header/>
                <div style = {{backgroundColor: "white"}}>
                    <div style={{ marginLeft: "100px", marginRight: "100px", height: "400px",backgroundColor: "white"}}>
                        <Carousel>
                            {articleImages.map( (item, i) => <CarouselItem key={i} item={item} /> )}
                        </Carousel>
                    </div>
    
                    <div className="singleContent" style={{marginTop: "30px", marginLeft:"100px", marginRight:"100px"}}>
                        <div className="singleContentLeft">
                            <h2 className="singleName">{article.name}</h2>
                            <h4 className="singleLocation">{article.location}</h4>
                            <p> {article.amenities} </p>
                            <h4 className="singleTagline">{article.tagline}</h4>
                            <p className="singleBlurb">{article.blurb}</p>
    
                            <Button> Book a Room </Button>
                        </div>
                        <div className="singleContentRight">
                            {articleActivities.map( (item, i) => <ActivitiesItem key={i} item={item} /> )}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
        
    function CarouselItem(props)
    {
        return (
            <Paper style={{height: "400px"}}>
                <div>
                    {/* <img alt="hotelPhotos" src={props.item.photo}/> */}
                    <img alt="hotelPhotos" src={hotelPhoto}/>
                </div>  
            </Paper>
        )
    }
        
    function ActivitiesItem(props)
    {
        return (
            <div className="singleActivityContent" style ={{height:"100px"}}>
                <div className="singleActivityLeft">
                    {/* <img alt="activityPhoto" src={props.item.image} style={{width:"100%"}}/> */}
                    <img alt="activityPhoto" src={activityPhoto} style={{width: "100%"}}/>
                </div>
                <div className="singleActivityRight">
                    <h3 style={{margin:"0px"}}>{props.item.name}</h3>
                    <h5 style={{margin:"0px"}}>{props.item.price}</h5>
                    <Button>
                        Add Activity
                    </Button>
                </div>
    
            </div>
        )
    }   
}

export default SingleResult