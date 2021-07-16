export default function logger (reducer){
    return (previstate , action , args)=> {
        console.group(action);
        console.log('prev state : '+previstate);
        console.log('Action  : '+args);
        const nextState = reducer(previstate,action,args);
        console.log('next state : '+nextState);
        console.groupEnd();
        return nextState;
    }
}