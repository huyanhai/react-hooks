import {useStore} from "../../hooks/useStore"
const StoreCom = () => {
    const {count,increase} = useStore()

    return <>
        store state:{count}
        <button onClick={increase}>add state</button>
    </>
}

export default StoreCom