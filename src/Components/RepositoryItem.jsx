export function RepositoryItem(props){
    return(
        <li className="item-list">
            <strong className="title-repository" >{props.repository.name} </strong>
            <p className="description-repository">{props.repository.description}</p>
            <a href={props.repository.html_url} className="link-repository" >Link</a>
        </li>
    )
}