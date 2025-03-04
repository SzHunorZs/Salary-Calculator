/* eslint-disable react/prop-types */

const DeleteFamilyMember = ({ tabIndex, setTabIndex, familyMemberData, setFamilyMemberData}) => {
    const removeTab = () => {
        if(Object.keys(familyMemberData).length > 1) {   

            if(tabIndex > 1) {
                setTabIndex(tabIndex - 1);
            } else {
                setTabIndex(0);
            }

            setFamilyMemberData( (prevData) => {
                
                const tempData = { ...prevData};
                //delete tempData[tabIndex];
                const reorderedData = {};
                let i = 0;
                for (const key in tempData) {
                    if(key!=tabIndex)
                    reorderedData[i++] = tempData[key];
                }
                return reorderedData;
            });  
        }
    };
    return ( 
        <>
        {Object.keys(familyMemberData).length > 1 &&
            <button className="absolute bg-slate-100 right-0 rounded-md px-2 outline outline-green-950" onClick={removeTab}>
                Törlés
            </button>
}
        </>
    );
}
 
export default DeleteFamilyMember;