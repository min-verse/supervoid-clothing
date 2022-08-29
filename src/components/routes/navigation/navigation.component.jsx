import { Fragment } from "react";
import { Outlet, Link } from "react-router-dom";
import {ReactComponent as CrwnLogo} from '../../../assets/crown.svg';
import './navigation.styles.scss';

const Navigation = (props) => {
    return (
        <Fragment>
            <div className="navigation">
                <Link className="logo-container" to="/">
                    <CrwnLogo className="logo"/>
                </Link>
                <div className='links-container'>
                    <Link className="nav-links-container" to='/shop'>
                        Shop
                    </Link>
                    <Link className="nav-links-container" to="sign-in">
                        Sign In
                    </Link>
                </div>
            </div>
            <Outlet />
        </Fragment>
    );
}

export default Navigation;
