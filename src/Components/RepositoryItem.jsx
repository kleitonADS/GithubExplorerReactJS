export function RepositoryItem(props){
    return(
        <li className="item-list">
            <strong className="title-repository">{props.repository.title}</strong>
            <p className="description-repository">{props.repository.description}</p>
            <a href={props.repository.link} className="link-repository">Link</a>
        </li>
    )
}