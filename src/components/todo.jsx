/* eslint-disable react/prop-types */
export default function Todo({title, description, completed}) {
    return (
        <div>
            <h1>{title}</h1>
            <p>{description}</p>
            <p>{completed ? 'Completed' : 'Not completed'}</p>
        </div>
    )
}