export const Reducer = (state: any, action: any): any => {
  switch (action.type) {
    case "GET_QUESTIONS":
      return { ...state, questions: action.payload }
    case "ADD_QUESTION":
      console.log("ADD_QUES",action.payload)
      return { ...state, questions: [...state.questions, action.payload] }
    case "TEXT_SEARCH":
      return { ...state, questions: action.payload }
    case "CATEGORY_SEARCH":
      return { ...state, questions: action.payload }
    case "GET_ANSWERS":
      return { ...state, answers: action.payload }
    case "GET_BY_ID":
      return { ...state, questionById: action.payload }
    case "LOGIN":
      console.log("TOKEN from reducer-->", action.payload.id);

      return {
        ...state, isLoggedIn: true, token: action.payload.token, user_id: action.payload.id,
      }
    case "REGISTER":
      return { ...state };
    case "LOGOUT":
      return {
        ...state, isLoggedIn: false, token: "",
      }
    //         case "DELETE":
    //             return {
    //                 ...state,
    //                 books: [...state.books.filter((book: any) => book._id !== action.deleteBookId)],
    //             };
    //         case "ADD_BOOK":
    //             console.log({ ...state, books: [...state.books, action.addBook] });

    //             return {
    //                 ...state,
    //                 books: [...state.books, action.addBook],
    //             };
    //         case "SEARCH_BOOKS_BY_AUTHOR":
    //             return {
    //                 ...state,
    //                 isSearched: true,
    //                 books: action.searchedBooksByAuthor,
    //             };
    //         case "SEARCH_BOOKS_BY_TITLE":
    //             return {
    //                 ...state,
    //                 isSearched: true,
    //                 books: action.searchedBooksByTitle,
    //             };
    //         case "SEARCH_BOOKS_BY_RATING":
    //             return {
    //                 ...state,
    //                 isSearched: true,
    //                 books: action.searchedBooksByRating,
    //             };
    //         case "SEARCH_BOOKS_BY_PRICE":
    //             return {
    //                 ...state,
    //                 isSearched: true,
    //                 books: action.searchedBooksByPrice,
    //             };
    //             case "REGISTER":
    //       // console.log("user ", action.addUser);

    //       // let existingUser;
    //       // // console.log(action.users.password);
    //       // // eslint-disable-next-line
    //       // state.users.map((user: any) => {
    //       //   if (user.username === action.user.username) {
    //       //     existingUser = user;
    //       //   }
    //       // });
    //       // if (existingUser) {
    //       //   alert("User already exists");
    //       //   return { ...state };
    //       // } else {
    //       //   console.log("new user");
    //       //   // console.log(action.users.username);

    //         // return {
    //         //   ...state,
    //         //   users: [...state.users, action.addUser],
    //         // };
    //       //}
    //       return {...state};
    //     case "LOGIN":
    //         return {
    //             ...state,
    //             isLoggedIn:true,
    //             token: action.payload,
    //           };

    //     case "LOGOUT":
    //       //if (action.isLoggedIn) {
    //       //  return { ...state };
    //      // } else {
    //         return {
    //           ...state,
    //           isLoggedIn:false,
    //           token:"",
    //         };
    //       //}
    //     case "USERS_LIST":
    //       console.log(action.Users, " Users List");

    //       return {
    //         ...state,
    //         users: action.Users,
    //       };
    //     case "GET_USERS":
    //       return{
    //         ...state,users:[action.payload]
    //       }
    default:
      return state;

  }
}