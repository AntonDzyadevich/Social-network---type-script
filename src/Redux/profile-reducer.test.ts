import profileReducer, {addPostAC, deletePost, ProfilePageType} from "./profile-reducer";


const state: ProfilePageType = {
    posts: [
        {id: 1, message: "Hi, how are you?", likesCount: 12},
        {id: 2, message: "It`s my first post", likesCount: 40},
    ],
    profile: null,
    status: ""
}


test('length of posts should be incremented', () => {

    // 1.test data
    const action = addPostAC("it-kamasutra")

    // 2.action
   const newState = profileReducer(state, action)

    // 3.expectation
    expect(newState.posts.length).toBe(3)
});


test('message of new post should be correct', () => {

    // 1.test data
    const action = addPostAC("it-kamasutra")

    // 2.action
    const newState = profileReducer(state, action)

    // 3.expectation
    expect(newState.posts[2].message).toBe("it-kamasutra")
});

test('after deleting length should be decrement', () => {

    // 1.test data
    const action = deletePost(1)

    // 2.action
    const newState = profileReducer(state, action)

    // 3.expectation
    expect(newState.posts.length).toBe(1)
});


test("after deleting length shouldn't be decrement if id is incorrect", () => {

    // 1.test data
    const action = deletePost(10)

    // 2.action
    const newState = profileReducer(state, action)

    // 3.expectation
    expect(newState.posts.length).toBe(2)
});
