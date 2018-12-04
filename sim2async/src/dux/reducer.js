const intitialState={
    propertyName:'',
    propertyDescription:'',
    address:'',
    city:'',
    state:'',
    zip:'',
    image:'',
    loanAmount:'',
    monthlyMortgage:'',
    desiredRent:''
}

const GET_PROPERTY = 'GET PROPERTY';
const UPDATE_PROPERTY = 'UPDATE PROPERTY';

export function getProperty({propertyName,propertyDescription,address,city,state,zip,image,loanAmount,monthlyMortgage,desiredRent}){
    return{
        type: GET_PROPERTY,
        payload: {propertyName,propertyDescription,address,city,state,zip,image,loanAmount,monthlyMortgage,desiredRent}
    }
}

export function updateProperty({propertyName,propertyDescription,address,city,state,zip,image,loanAmount,monthlyMortgage,desiredRent}){
    return{
        type: UPDATE_PROPERTY,
        payload: {propertyName,propertyDescription,address,city,state,zip,image,loanAmount,monthlyMortgage,desiredRent}
    }
}


export default function reducer(state=intitialState,action){
    switch(action.type){
        case GET_PROPERTY:
        return Object.assign({},state,{
            propertyName: action.payload.propertyName,
            propertyDescription: action.payload.propertyDescription,
            address: action.payload.address,
            city: action.payload.city,
            state: action.payload.state,
            zip: action.payload.zip,
            image: action.payload.image,
            loanAmount: action.payload.loanAmount,
            monthlyMortgage: action.payload.monthlyMortgage,
            desiredRent: action.payload.desiredRent
        });

        case UPDATE_PROPERTY:
        return Object.assign({},state,{
            propertyName: action.payload.propertyName,
            propertyDescription: action.payload.propertyDescription,
            address: action.payload.address,
            city: action.payload.city,
            state: action.payload.state,
            zip: action.payload.zip,
            image: action.payload.image,
            loanAmount: action.payload.loanAmount,
            monthlyMortgage: action.payload.monthlyMortgage,
            desiredRent: action.payload.desiredRent
        });

        default:
            return state;
    }
}