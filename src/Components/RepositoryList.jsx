import { RepositoryItem } from "./RepositoryItem.jsx";

const repository = {
    title: 'JS Project',
    description: 'Project create with React JS' ,
    link: '#'
}

export function RepositoryList(){
 return(
    <section className="repository-list">
        <ul className="list">
            <RepositoryItem repository={repository}/>
        </ul>
    </section>
 )
}