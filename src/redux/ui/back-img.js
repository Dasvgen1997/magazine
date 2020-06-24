
export default function backImg(state = 1, action){
    switch(action.type){
        case 'BACK_IMG_FIRST':
            return 0;
        case 'BACK_IMG_SECOND':
            return 1;
        case 'BACK_IMG_THIRD':
            return 2;
        default:
            return state
    }
}