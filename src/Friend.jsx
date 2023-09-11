export default function Friend({ friend }) {
    const { name, email } = friend;

    return (
        <div style={{
            border: '2px solid purple',
            margin: '10px',
            padding: '15px',
            borderRadius: '15px'
        }}>
            <h4>Name:{name} </h4>
            <p>Email:{email} </p>
        </div>
    )


}