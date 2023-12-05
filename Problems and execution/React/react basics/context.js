// To avoid Prop drilling
// it allows us to have some state that can be used by all children component
// context pattern ->  context file
// export const UserContext = createContext({
//   user: {
//     name: null,
//     course: null,
//   },
//   toggleUser: null,
// });
// const conner = {
//   name: "conner",
//   course: "fe",
// };
// const clem = {
//   name: "clem",
//   course: "ae",
// };

// export function UserContextProvider({ children }) {
//   const [user, setUser] = useState(conner);
//   const toggleUser = () => {
//     if (user == conner) {
//       setUser(clem);
//     } else {
//       setUser(conner);
//     }
//   };
//   return {
//     <UserContext.Provider value={{toggleUser, user}}>
//     {children}
//     </UserContext.Provider>
//   }
// }
// example of using context, we can check if the user is using dark mode or lite mode and change css based on that info.
