const axios = require("axios");
export async function getAllQuestions(dispatch: any) {
  let response = await axios.get('http://localhost:8000/api/questions');
  dispatch({ type: "GET_QUESTIONS", payload: response.data })
}
export async function searchQuestion(searchInput: any, selected: any, dispatch: any){
  if (selected === "text") {
    axios
      .get(`http://localhost:8000/api/questions/${searchInput}/text`)
      .then((response: any) => {
        dispatch({
          type: "TEXT_SEARCH",
          payload: response.data,
        });
      })
      .catch((err: any) => {
        console.log(err.message);
      });
  } else if (selected === "category") {
    axios
      .get(`http://localhost:8000/api/questions/${searchInput}/category`)
      .then((response: any) => {
        dispatch({
          type: "CATEGORY_SEARCH",
          payload: response.data,
        });
      })
      .catch((err: any) => {
        console.log(err.message);
      });
}
}
export const getAnswers=(id:any,dispatch:any)=>{
  axios
  .get(`http://localhost:8000/api/answers/${id}`)
  .then((response: any) => {
    dispatch({
      type: "GET_ANSWERS",
      payload: response.data,
    });
  })
  .catch((err: any) => {
    console.log(err.message);
  });
}
export const getQuestionById=(id:any,dispatch:any)=>{
  axios.get(`http://localhost:8000/api/questions/${id}`)
  .then((response: any) => {
    dispatch({
      type: "GET_BY_ID",
      payload: response.data,
    });
  })
  .catch((err: any) => {
    console.log(err.message);
  });

}
export async function loginUser(dispatch:any,user:any){
  try{
    let response=await axios.post("http://localhost:8000/api/login", user);
  console.log("Response",response.data.id,"token",response.data.token);
  localStorage.setItem("login",response.data.token);
  dispatch({type:"LOGIN",payload:{id:response.data.id,token:response.data.token}});

  }catch(err:any){
    if(err){
      alert("Invalid Credentials");
    }
  }
}
export async function registerUser(user: any, dispatch: any) {  
  let response=await axios.post("http://localhost:8000/api/user", user);
  console.log("Response",response.data);
  
  console.log("Rsponse in resister",response.data);
  dispatch({type:"REGISTER"});
}
export async function addQuestion(dispatch: any, question: any) {
  let check = await axios.post("http://localhost:8000/api/questions", question
  );
  //, Authorization: token //{
  // headers: { "Content-Type": "application/json"}}
  console.log("ADD service res",check);
  
  if (check.status === 200) {
    dispatch({ type: "ADD_QUESTION", payload: question });
  }
}
export async function addAnswer(dispatch:any,user_id:any,ques_id:any,answer:any){
    try{
      let response=await axios.post(`http://localhost:8000/api/answers/${ques_id}/${user_id}`,)
    }catch(err:any){
      
    }
}


// export async function getBook(dispatch: any, id: any) {
//   let response = await axios.get('http://localhost:3000/books/' + id);
//   dispatch({ type: "GET_BOOK", payload: response.data });

// }
// export async function addNewBook(dispatch: any, book: any) {
//   let check = await axios.post("http://localhost:3000/books", book
//   );
//   //, Authorization: token //{
//   // headers: { "Content-Type": "application/json"}}
//   if (check.status === 200) {
//     dispatch({ type: "ADD_BOOK", addBook: book });
//   }
// }
// export async function deleteBook(dispatch: any, id: any) {
//   //let token = "Bearer " + localStorage.getItem("login");
//   console.log(id);

//   let check = await axios.delete("http://localhost:3000/books/" + id, {
//     headers: { "Content-Type": "application/json" },
//   });
//   //, Authorization: token 
//   if (check.status === 200) {
//     dispatch({ type: "DELETE", deleteBookId: id });
//   }
// }
// export async function searchBooks(searchInput: any, selected: any, dispatch: any) {
//   if (selected === "id") {
//     axios
//       .get("http://localhost:3000/books/" + searchInput)
//       .then((response: any) => {
//         dispatch({
//           type: "SEARCH_BOOKS_BY_ID",
//           searchedBookById: response.data,
//         });
//       })
//       .catch((err: any) => {
//         console.log(err.message);
//       });
//   } else if (selected === "author") {
//     axios
//       .get("http://localhost:3000/books/by/author/" + searchInput)
//       .then((response: any) => {
//         dispatch({
//           type: "SEARCH_BOOKS_BY_AUTHOR",
//           searchedBooksByAuthor: response.data,
//         });
//       })
//       .catch((err: any) => {
//         console.log(err.message);
//       });
//   } else if (selected === "title") {
//     axios
//       .get("http://localhost:3000/books/by/title/" + searchInput)
//       .then((response: any) => {
//         dispatch({
//           type: "SEARCH_BOOKS_BY_TITLE",
//           searchedBooksByTitle: response.data,
//         });
//       })
//       .catch((err: any) => {
//         console.log(err.message);
//       });
//   } else if (selected === "rating") {
//     axios
//       .get("http://localhost:3000/books/by/rating/" + searchInput)
//       .then((response: any) => {
//         dispatch({
//           type: "SEARCH_BOOKS_BY_RATING",
//           searchedBooksByRating: response.data,
//         });
//       })
//       .catch((err: any) => {
//         console.log(err.message);
//       });
//   } else if (selected === "price") {
//     axios
//       .get("http://localhost:3000/books/priced/0/" + searchInput)
//       .then((response: any) => {
//         dispatch({
//           type: "SEARCH_BOOKS_BY_PRICE",
//           searchedBooksByPrice: response.data,
//         });
//       })
//       .catch((err: any) => {
//         console.log(err.message);
//       });
//   }
// };
// export async function registerUser(user: any, dispatch: any) {  
//   let response=await axios.post("http://localhost:3000/books/users/register", user);
//   console.log("Response",response.data);
  
//   console.log("Rsponse in resister",response.data);
//   dispatch({type:"REGISTER"});
// }
// export async function loginUser(dispatch:any,user:any){
//   try{
//     let response=await axios.post("http://localhost:3000/books/users/login", user);
//   console.log("Response",response.data);
//   localStorage.setItem("login",response.data);
//   dispatch({type:"LOGIN",payload:response.data});

//   }catch(err:any){
//     if(err){
//       alert("Invalid Credentials");
//     }
//   }
// }
// export async function getAllUsers(dispatch:any){
//   let response=axios.get("http://localhost:3000/books/users/getUsers");
//   dispatch({type:"GET_USERS",payload:response.data});
// }