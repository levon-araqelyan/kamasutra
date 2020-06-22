import profileReduser, {addPostActionCreator, deletePost} from "./profileRedusers";

const state = {
    postData: [
        {id: 1, message: "my first post", likeCount: 1},
        {id: 2, message: "yes", likeCount: 11},
    ],
};


it("lengt of post should bi added",()=>{

  let action = addPostActionCreator("Levon Araqelyan");
    let newState = profileReduser(state,action);
    expect(newState.postData.length).toBe(3)
});

it("delete post",()=>{

    let action = deletePost(1);

    let newState = profileReduser(state,action);
    expect(newState.postData.length).toBe(1)
});