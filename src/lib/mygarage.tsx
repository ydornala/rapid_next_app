/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "./hooks";
import { setUserData } from "./features/counter/counterSlice";
import { RootState } from "./store";

const XButton = React.lazy(() => import('rapid/XButton'));
const Mygarage = React.lazy(() => import('rapid/Mygarage'));

export default function Garage() {
    const [loaded, setLoaded] = useState(false);
    const dispatch = useAppDispatch();

    const counter = useAppSelector((state: RootState) => state.counterReducer);

    useEffect(() => {
        setLoaded(true);
    }, [])

    return (
        <>
            {loaded && <>
                <div style={{ padding: '50px', display: 'flex', rowGap: '25px', columnGap: '25px' }}>
                    <XButton variant="contained" onClick={() => dispatch(setUserData())}>Login</XButton>
                    {counter && counter.user && <div className="xl-main-navigation">
                        <Mygarage />
                    </div>}
                </div>
            </>}
        </>
    );
}
