import React,{useState,useEffect} from 'react'
import axios from "../../axios";
import './Card.css';
import { Card, Button } from 'react-bootstrap';

function CategoryCard({ match }) {
    useEffect(()=>{
        fetchItem()
        .then(res => {
            setItems(res.data)
            console.log(res );
          });
    })

    const [items,setItems]=useState([]);
    const fetchItem = async()=>{
        const course = await axios.get(`/category/${match.params.id}`)
        console.log(course);
        return course
    };
    return (
        <div className="hi">
      {
        items.map(item => {
          return <div className="h">
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src={item.C_img} style={{ height: 230 }} />
              <Card.Body>
                <Card.Title>{item.C_name}</Card.Title>
                <Card.Subtitle>Duration of this Course is{item.C_duration}</Card.Subtitle>
                <Card.Text>
                  {item.C_desc}
                </Card.Text>
                <Button variant="primary">Buy Course At {item.C_price}</Button>
              </Card.Body>
            </Card>
          </div>
        })
      }
    </div>
    )
}

export default CategoryCard
