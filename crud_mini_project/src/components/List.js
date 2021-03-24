const List = ({ apiList, removeItem }) => {
    const insertList = () => {
        if (apiList) {
            return apiList.map((e) => {
                return (
                    <li className="item" key={e.id}>
                        <img className="ui avatar image" src="/images/avatar/small/helen.jpg" alt='DL'></img>
                        <div className='content'>
                            <p className="header">{e.artist}</p>
                            <p>{e.songName}</p>
                        </div>
                        <button onClick={removeItem}>delete</button>
                    </li>
                )
            })
        }
    }
    return (
        <ul className="ui celled list">{insertList()}</ul >
    )
}

export default List;