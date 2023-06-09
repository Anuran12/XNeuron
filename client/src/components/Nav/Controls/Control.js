import './Control.css'
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import Badge from '@mui/material/Badge';
import { Link } from 'react-router-dom';
import Cart from '../../Card/Cart/Cart';
import { useContext } from 'react';
import { WishItemsContext } from '../../../Context/WishItemsContext';
import { useAuth0 } from "@auth0/auth0-react";

const Control = () => {
    const wishItems = useContext(WishItemsContext)
    const { loginWithRedirect, user, isAuthenticated, logout } = useAuth0();

    return ( 
        <div className="control__bar__container">
            <div className="controls__container">

            
                    {isAuthenticated && <p className="user_name">{user.name}</p>}
                
           
                <div className="control">
                    {isAuthenticated ? (
                        <button className="logout-btn" onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
                        Log Out
                      </button>
                    ) : (
                        <button className="login-btn" onClick={() => loginWithRedirect()}>
                        <PersonOutlineIcon color="black" size="large" sx={{ width: '35px'}}/>
                    </button>
                    )}
                    
                </div>
                <div className="control">
                    <Link to="/wishlist">
                        <Badge badgeContent={wishItems.items.length} color="error">
                            <FavoriteBorderIcon color="black" sx={{ width: '35px'}}/>
                        </Badge>
                    </Link>
                </div>
                <div className="control">
                    <Cart />
                </div>
                
            </div>
        </div>
     );
}
 
export default Control;