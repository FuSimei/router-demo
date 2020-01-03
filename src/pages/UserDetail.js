import React from 'react';

const userList = [
    {id: '001', name: 'user001', age: 11, sex: 'female'},
    {id: '007', name: 'user007', age: 17, sex: 'male'},
    {id: '008', name: 'user008', age: 18, sex: 'undefined'},
]
const UserDetail = (props) => {
    console.log('pro', props)
    const getPropsId = props.match.params.id
    
    // const currentUser = userList.filter(item => item.id === props.match.params.id);      返回符合条件的一个新数组
    const currentUser = userList.find(item => item.id === getPropsId);        //find()找到时返回当前元素
    console.log('u', currentUser)
    return (
        <ul>
            <li>name: {currentUser.name}</li>
            <li>age: {currentUser.age}</li>
            <li>sex: {currentUser.sex}</li>
        </ul>
    )
}

export default UserDetail;