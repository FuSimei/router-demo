import React, { Component } from 'react';
import { Link, Route, Redirect } from 'react-router-dom';

import UserDetail from './UserDetail';

const userList = [
    {id: '001', name: 'user001'},
    {id: '007', name: 'user007'},
    {id: '008', name: 'user008'},
]

// const addRouter = (props) => {
//     console.log('add', props.history.push(`/user/userdetail/${props}`));
// }

// const User = () => (
    // <div>
    //     <ul>
    //         {userList.map(user => (
    //             <li key={user.id}>
    //                 <Link to={`/user/userdetail/${user.id}`}>{user.name}</Link>
    //                 <button onClick={() => addRouter(user.id)}>添加路由</button>
    //                 <button>取代路由</button>
    //             </li>)
    //         )}
    //     </ul>
    //     <Route path="/user/userdetail/:id" component={UserDetail} />
    //     <Redirect to={`/user/userdetail/${userList[0].id}`} />
    // </div>
// )

class User extends Component {
    addRouter = (id) => {
        this.props.history.push(`/user/userdetail/${id}`)
    }

    handleBack = () => {
        this.props.history.goBack();
    }

    render () {
        return (
            <div>
            <ul>
                {userList.map(user => (
                    <li key={user.id}>
                        <Link to={`/user/userdetail/${user.id}`}>{user.name}</Link>
                        <button onClick={() => this.addRouter(user.id)}>添加路由</button>
                        <button>取代路由</button>
                    </li>)
                )}
            </ul>
            <div>
                <button onClick={this.handleBack}>回退</button>
                <button>取代</button>
            </div>
            <Route path="/user/userdetail/:id" component={UserDetail} />
            <Redirect to={`/user/userdetail/${userList[0].id}`} />
        </div>
        )
    }
}

export default User;