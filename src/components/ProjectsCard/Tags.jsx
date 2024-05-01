/* eslint-disable react/prop-types */
import { Badge } from "flowbite-react";


export const Tags = ({badge}) => {

return (
        <> 
            <Badge color="info" theme={{root: {base: 'flex h-fit items-center gap-1 font-semibold border border-borderOpacity text-titleAccent drop-shadow-md', color: 'bg-transparent'}}}>
                {badge}
            </Badge>
        </>
     );
};