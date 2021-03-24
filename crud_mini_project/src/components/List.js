const List = ({ apiList, removeItem }) => {
    const insertList = () => {
        if (apiList) {
            return apiList.map((e) => {
                return (
                    <div className="four wide column" key={e.id}>
                        <div className="ui link cards" >
                            <div className="card">
                                <div className="image">
                                    <img src={e.img} alt='DL'></img>
                                </div>
                                <div className='content'>
                                    <div className="header">
                                        <p>{e.company}</p>
                                    </div>
                                    <div className="meta">Model: {e.modelName}
                                    </div>
                                    <div className="meta">Price: ${e.price}
                                    </div>
                                    <div className="description">
                                        <button onClick={() => { removeItem(e.id) }}>delete</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            })
        }
    }
    return (
        <div className="ui grid container">{insertList()}</div >
    )
}

export default List;