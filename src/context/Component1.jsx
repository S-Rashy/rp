import { useContext } from "react";

const Component1 = () => {
    const colour = useContext(color)
    return ( <div>
        {colour}
    </div> );
}
 
export default Component1;