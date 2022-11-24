import React, { useState } from 'react';
import axios from 'axios'

const AddPtoRequest = (props) => {

async function AddPtoRequest(newPtoRequest){
    const response = await axios.post('http://127.0.0.1:8000/api/music/', newPtoRequest);
    console.log(response.data)
    props.getAllSongs()
}

// setting up hooks a good place to start
const [title, setTitle] = useState('')
const [artist, setArtist] = useState('')
const [album, setAlbum] = useState('')
const [releaseDate, setReleaseDate] = useState('')
const [genre, setGenre] = useState('')

function handleSubmit(event){
    event.preventDefault();
    let newPtoRequest = {
        title: title,
        artist: artist,
        album: album,
        release_date: releaseDate,
        genre: genre
    };
    AddPtoRequest(newPtoRequest)
}

    return ( 
        <div>
            <form className='addData' onSubmit={handleSubmit}>
                <div className='newEntry'>
                <label>Title: </label>
                <input value={title} onChange={(event) => setTitle(event.target.value)}/>
                </div>
                <div className='newEntry'>
                <label>Artist: </label>
                <input value={artist} onChange={(event) => setArtist(event.target.value)}/>
                </div>
                <div className='newEntry'>
                <label>Album: </label>
                <input value={album} onChange={(event) => setAlbum(event.target.value)}/>
                </div>
                <div className='newEntry'>
                <label>Genre: </label>
                <input value={genre} onChange={(event) => setGenre(event.target.value)}/>
                </div>
                <div className='newEntry'>
                <label>Release Date: </label>
                <input type="date" value={releaseDate} onChange={(event) => setReleaseDate(event.target.value)}/>
                </div>
                <div className='addSongButton' >
                <button type='submit'>Submit</button>
                </div>
            </form>
        </div>
     );
}
 
export default AddPtoRequest;