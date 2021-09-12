import { createContext, useState } from 'react';
import './App.css';
import Product from './components/data/Product';
import MainComponents from './components/MainComponents';
export const UserContext = createContext();
export const authContext = createContext();
export const productContest = createContext();
export const cardAddedDetails = createContext();
function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [products, setProducts] = useState(Product);
  const [card, setCard] = useState([])
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    photo: "",
    success: false,
    error: false,
  });
  return (
    <>
      <UserContext.Provider value={[loggedIn, setLoggedIn]}>
        <authContext.Provider value={[user, setUser]}>
          <productContest.Provider value={[products, setProducts]}>
            <cardAddedDetails.Provider value={[card, setCard]} >
              <MainComponents />
            </cardAddedDetails.Provider>
          </productContest.Provider>
        </authContext.Provider>
      </UserContext.Provider>

    </>
  );
}

export default App;
