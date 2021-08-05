import { RepositoryItem } from "./RepositoryItem.jsx";
import "../Styles/repositories.scss"
import { useEffect, useState } from "react";



export function RepositoryList(){
 
    const [repositories, setRepositories] = useState([]);
 
    useEffect(() =>{
        fetch('https://api.github.com/users/kleitonADS/repos')
        .then( response => response.json())
        .then(data => setRepositories(data));

    },[])
 
    return(
    <section className="repository-list">
        <h1>Repository Listing</h1>
        <ul className="list">
        { repositories.map(repository => {
            return <RepositoryItem key={repository.name} repository={repository}/>
        })} 
        </ul>
    </section>
 )
}