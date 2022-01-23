const initialState =[
    {id:"1",name:"rinkal",age:"25",course:"MERN",batch:"september"},
    {id:"2",name:"praju",age:"22",course:"MERN",batch:"oct"},
    {id:"3",name:"adity",age:"24",course:"MERN",batch:"dec"}
    
];

const studentReducer = (state=initialState,action)=>{
    switch (action.type) {
        case "ADD_STUDENT":
            
            return[...state,action.payload]
        
        case "UPDATE_STUDENT":
            const update = state.map((val)=> val.id===action.payload.id ? action.payload : val)

            return update
        

            
    
        default:
            return state;
    }
}

export default studentReducer