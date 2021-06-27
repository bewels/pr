export const useSwitch = () => {
    return (arr, elem) => {
        let index;
        arr.forEach((item, i) => {
            if(item === elem){
                index = i;
            }
        });
        console.log(index);
        return index;
    }
    }