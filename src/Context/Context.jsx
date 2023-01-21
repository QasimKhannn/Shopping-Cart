import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";
import { reducer } from "./Reducer";
const AppContext = createContext();
// let nam = "Qasim";
// let arr=[1,3,4,5]
// const persons = [
//   {
//     id: 1,
//     name: "Qasim",
//     age: "23",
//     number: "03494471667",
//   },
//   {
//     id: 2,
//     name: "Malik",
//     age: "23",
//     number: "03494471667",
//   },
// ];
const AppProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  let [state, dispatch] = useReducer(reducer, {
    product: [],
    cart: [],
  });

  const fetchDataFromApi = async () => {
    const resp = await fetch("https://api.escuelajs.co/api/v1/products");
    const data = await resp.json();
    console.log(data);
    dispatch({
      type: "Add_Product",
      payload: data,
    });
    setIsLoading(false);
  };
  useEffect(() => {
    fetchDataFromApi();
  }, []);
  return (
    <AppContext.Provider value={{ state, dispatch, isLoading }}>
      {children}
    </AppContext.Provider>
  );
};
export const UseGlobaldata = () => {
  return useContext(AppContext);
};
export { AppContext, AppProvider };
