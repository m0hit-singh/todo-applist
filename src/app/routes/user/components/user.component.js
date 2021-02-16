import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import * as Actions from '../../../store/actions';
// import reducer from '../../store/reducers';

function UserComponent(props) {

  const dispatch = useDispatch();
  const pageState = useSelector(state => state.list);

  useEffect(() => {
      dispatch(Actions.getUsers());
  }, [dispatch]);

  return (
    <div>
      <table border="1" cellPadding="14">
        <thead>
          <tr>
            <td>First Name</td>
            <td>Last Name</td>
            <td>Gender</td>
            <td>DOB</td>
            <td>Email</td>
          </tr>
        </thead>
        {pageState.users &&
          pageState.users.map((item) => (
            <tr id={item.id}>
              <td>{item.first_name}</td>
              <td>{item.last_name}</td>
              <td>{item.gender}</td>
              <td>{item.date_of_birth}</td>
              <td>{item.email}</td>
            </tr>
          ))}
      </table>
    </div>
  );
}

export default UserComponent;
