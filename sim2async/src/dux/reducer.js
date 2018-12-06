const intitialState={
    propertyName:'',
    propertyDescription:'',
    address:'',
    city:'',
    province:'',
    zip:'',
    image:'',
    loanAmount:0,
    monthlyMortgage:0,
    desiredRent:0
}

const UPDATE_USER = 'UPDATE_USER';
const UPDATE_PROPERTY_NAME = 'UPDATE_PROPERTY_NAME';
const UPDATE_PROPERTY_DESCRIPTION = 'UPDATE_PROPERTY_DESCRIPTION';
const UPDATE_ADDRESS = 'UPDATE_ADDRESS';
const UPDATE_CITY = 'UPDATE_CITY';
const UPDATE_PROVINCE = 'UPDATE_PROVINCE';
const UPDATE_ZIP = 'UPDATE_ZIP';
const UPDATE_IMAGE = 'UPDATE_IMAGE';
const UPDATE_LOAN_AMOUNT = 'UPDATE_LOAN_AMOUNT';
const UPDATE_MONTHLY_MORTGAGE = 'UPDATE_MONTHLY_MORTGAGE';
const UPDATE_DESIRED_RENT = 'UPDATE_DESIRED_RENT';
const CLEAR_STATE = 'CLEAR_STATE';



function reducer(state=intitialState,action){
    switch(action.type){

        case UPDATE_PROPERTY_NAME:
            return Object.assign({},state,{propertyName:action.payload});

        case UPDATE_PROPERTY_DESCRIPTION:
            return Object.assign({},state,{propertyDescription:action.payload});

        case UPDATE_ADDRESS:
            return Object.assign({},state,{address:action.payload});

        case UPDATE_CITY:
            return Object.assign({},state,{city:action.payload});

        case UPDATE_PROVINCE:
            return Object.assign({},state,{province:action.payload});

        case UPDATE_ZIP:
            return Object.assign({},state,{zip:action.payload});

        case UPDATE_IMAGE:
            return Object.assign({},state,{image:action.payload});

        case UPDATE_LOAN_AMOUNT:
            return Object.assign({},state,{loanAmount:action.payload});

        case UPDATE_MONTHLY_MORTGAGE:
            return Object.assign({},state,{monthlyMortgage:action.payload});

        case UPDATE_DESIRED_RENT:
            return Object.assign({},state,{desiredRent:action.payload});

        case UPDATE_USER:
            return Object.assign({},state,{user: action.payload})

        case CLEAR_STATE:
            return (intitialState)


        default: return state;
    }
}

export function updatePropertyName(propName){
    return{
        type: UPDATE_PROPERTY_NAME,
        payload: propName
    }
}

export function updatePropertyDescription(propDesc){
    return{
        type: UPDATE_PROPERTY_DESCRIPTION,
        payload: propDesc
    }
}

export function updateAddress(address){
    return{
        type: UPDATE_ADDRESS,
        payload: address
    }
}

export function updateCity(city){
    return{
        type: UPDATE_CITY,
        payload: city
    }
}

export function updateProvince(province){
    return{
        type: UPDATE_PROVINCE,
        payload: province
    }
}

export function updateZip(zip){
    return{
        type: UPDATE_ZIP,
        payload: zip
    }
}

export function updateImage(image){
    return{
        type: UPDATE_IMAGE,
        payload: image
    }
}

export function updateLoanAmount(amount){
    return{
        type: UPDATE_LOAN_AMOUNT,
        payload: amount
    }
}

export function updateMonthlyMortgage(mortgage){
    return{
        type: UPDATE_MONTHLY_MORTGAGE,
        payload: mortgage
    }
}

export function updateDesiredRent(rent){
    return{
        type: UPDATE_DESIRED_RENT,
        payload: rent
    }
}

export function updateUser(user){
    return{
        type: UPDATE_USER,
        payload: user
    }
}

export function clearState(){
    return{
        type: CLEAR_STATE,
    }
}




export default reducer;





















// const GET_PROPERTY = 'GET PROPERTY';
// const UPDATE_PROPERTY = 'UPDATE PROPERTY';

// export function getProperty({propertyName,propertyDescription,address,city,state,zip,image,loanAmount,monthlyMortgage,desiredRent}){
//     return{
//         type: GET_PROPERTY,
//         payload: {propertyName,propertyDescription,address,city,state,zip,image,loanAmount,monthlyMortgage,desiredRent}
//     }
// }

// export function updateProperty({propertyName,propertyDescription,address,city,state,zip,image,loanAmount,monthlyMortgage,desiredRent}){
//     return{
//         type: UPDATE_PROPERTY,
//         payload: {propertyName,propertyDescription,address,city,state,zip,image,loanAmount,monthlyMortgage,desiredRent}
//     }
// }


// export default function reducer(state=intitialState,action){
//     switch(action.type){
//         case GET_PROPERTY:
//         return Object.assign({},state,{
//             propertyName: action.payload.propertyName,
//             propertyDescription: action.payload.propertyDescription,
//             address: action.payload.address,
//             city: action.payload.city,
//             state: action.payload.state,
//             zip: action.payload.zip,
//             image: action.payload.image,
//             loanAmount: action.payload.loanAmount,
//             monthlyMortgage: action.payload.monthlyMortgage,
//             desiredRent: action.payload.desiredRent
//         });

//         case UPDATE_PROPERTY:
//         return Object.assign({},state,{
//             propertyName: action.payload.propertyName,
//             propertyDescription: action.payload.propertyDescription,
//             address: action.payload.address,
//             city: action.payload.city,
//             state: action.payload.state,
//             zip: action.payload.zip,
//             image: action.payload.image,
//             loanAmount: action.payload.loanAmount,
//             monthlyMortgage: action.payload.monthlyMortgage,
//             desiredRent: action.payload.desiredRent
//         });

//         default:
//             return state;
//     }
// }