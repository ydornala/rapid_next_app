import React, { useEffect } from 'react'
import { RootState } from '../store';
import { useDispatch, useSelector } from 'react-redux';
import { setUserData } from '../features/counter/counterSlice';
import { userData } from '../features/user/constants';
import _ from 'lodash';

const XButton = React.lazy(() => import('rapid/XButton'));

function Header() {
    const dispatch = useDispatch();
    const counter = useSelector((state: RootState) => state.counterReducer);
    const user = useSelector((state: RootState) => state.user);

    console.log('user state ==> ', user);

    return (
        <>
            <div className='header'>
                {/* <XButton onClick={() => dispatch(setUserData())}>Initiate</XButton> */}

                {_.isEmpty(user.userDetails.billTo) ?
                    <XButton onClick={() => dispatch({ type: 'USER_DETAILS_FETCHED', payload: { userDetails: userData.userDetails } })}>Login</XButton>
                    : <div>{`Welcome ${user.userDetails.firstName} ${user.userDetails.lastName}`}</div>}
                {counter && counter.user && <span>
                    User:{`${counter?.user?.userDetails?.firstName} ${counter?.user?.userDetails?.lastName}`}
                </span>}
            </div >
        </>
    )
}

export default Header;