import React, {useState, useContext} from "react";

export const UserContext = React.createContext();

const UserContextProvider = ({children, defaultLang, translation}) => {
    const [user, setUser] = useState({
        name: "junho-Kim",
        loggedIn: false
    });
    const [lang, setLang] = useState(defaultLang);
    const hyperTranslate = text => {
        if(lang===defaultLang) {
            return text;
        } else {
            return translation[lang][text];
        }
    }
    const logUserIn = () => setUser({...user, loggedIn:true});
    return (
        <UserContext.Provider value={{user, fn:{logUserIn}, setLang, t: hyperTranslate}}>
            {children}
        </UserContext.Provider>
    )
};

export const useUser = () => {
    const {user} = useContext(UserContext);
    return user;
};
export const useFns = () => {
    const {fn} = useContext(UserContext);
    return fn;
};
export const useSetLang = () => {
    const {setLang} = useContext(UserContext);
    return setLang;
};

export const useT = () => {
    const {t} = useContext(UserContext);
    return t;
};

export default UserContextProvider;