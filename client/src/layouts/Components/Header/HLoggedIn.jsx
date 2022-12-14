import { useState } from 'react';
import { useSelector } from 'react-redux';
import Tippy from '@tippyjs/react/headless';

import classNames from 'classnames/bind';

import SearchBar from '../../../Components/SearchBar/SearchBar';
import Popper from './Popper';
import Interaction from '../../../Components/Interaction/Interation';
import styles from './HLoggedIn.module.scss'
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles)

const HLoggedIn = () => {
    const user = useSelector(state => state.auth.login?.currentUser)
    const [popper, setPopper] = useState(false)
    // const [value, setValue] = useState();
    
    // const refresh = ()=>{
    //     // it re-renders the component
    //    setValue({});
    // }
    // console.log('rerender');
    return (
        <div className={cx("bar")}>
            <div className={cx("logo")}>
                <Link to="/" className={cx("logo-link")} style={{letterSpacing: '3px'}}>Home</Link>
            </div>

            <SearchBar />

           <div className={cx('user-wrapper')}>
                <div className={cx("interact-box")} style={{ marginRight:'10px'}}>
                    <Interaction /> 
                </div>  
    
               <Tippy 
                visible = {popper}
                placement="bottom-end"
                interactive
                render={(attrs) =><Popper setPopper={setPopper}/>}
                onClickOutside={() => setPopper(false)}
               >
                    <div className={cx("bar-avatar-wrapper")}>
                        <img 
                            src={user.info?.avatarUrl} 
                            className={cx("bar-avatar")} alt="" 
                            onClick={() => setPopper(!popper)} />
                    </div>
               </Tippy>
           </div>



        </div>
    );
}
 
export default HLoggedIn;