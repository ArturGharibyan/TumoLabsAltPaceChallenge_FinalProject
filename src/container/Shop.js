import { useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"
import * as React from 'react';
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { CircularProgress } from "@mui/material"




export default function Shop() {
    const slector = useSelector(res => res.reducer)
    const params = useParams()
    const navigate = useNavigate()
    const [filter, setFilter] = useState("")
    let [info, setInfo] = useState([])


    useEffect(() => {
        fetch("http://localhost:5000/foods")
            .then((respose) => respose.json())
            .then((response) => setInfo(response))
    }, [])

    const search = (e) => {
        setFilter(e.target.value)
    }


    info = info.filter(e => e.name.toLowerCase().includes(filter.toString().toLowerCase()) || e.name.toLowerCase().includes(filter.toString().toLowerCase()))



    return (

        <>
            <div className="Shop">
                <div style={{
                    width: "100%",
                    height: "220px",
                    background: " black"
                }}>
                    <div style={{
                        position: "absolute",
                        left: "0",
                        right: "0",
                        margin: "0",
                        top: "60px"
                    }}>
                        <h1 style={{
                            color: "white",
                            fontFamily: "font-family: 'Smooch', cursive",
                        }}>Search</h1>
                        <input className="searchInput" onChange={search.bind(this)} placeholder="Search" value={filter}></input>
                    </div>
                </div>
            </div>
            {
                info.length === 0 ? <CircularProgress style={{
                    position: "absolute",
                    left: "0",
                    right: "0",
                    margin: "auto",
                    top: "400px"
                }} /> :
                    <Box sx={{
                        position: "relative",
                        width: 1350,
                        height: "auto",
                        justifyContent: "center",
                        alignItems: "center",
                        background: "white",
                        textAlign: "center",
                    }}>
                        <ImageList variant="masonry" cols={3} gap={15}>
                            {info.map((item) => (
                                <ImageListItem style={{
                                    borderRadius: "10px",
                                    border: "2px solid whitesmoke",
                                    boxShadow: "10px 15px 15px rgba(171, 171, 172, 0.555)"
                                }} key={item.id}>
                                    <img
                                        src={"http://localhost:3000/img/" + `${item.url}`}
                                        srcSet={`${item.name}?w=248&fit=crop&auto=format&dpr=2 2x`}
                                        alt={item.name}
                                        loading="lazy"
                                        style={{ borderRadius: "10px" }}
                                        onClick={() => navigate("/buy/" + item.id + "/" + params.id)} />
                                </ImageListItem>
                            ))}
                        </ImageList>
                    </Box>
            }

        </>
    );
}
