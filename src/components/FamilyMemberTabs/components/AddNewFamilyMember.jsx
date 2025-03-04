/* eslint-disable react/prop-types */

const AddNewFamilyMember = ({ setTabIndex,
    familyMemberData,
    familyMemberDataChange }) => {
    const addNewTab = () => {
        const numOfPersons = parseInt(Object.keys(familyMemberData).length);
        setTabIndex(numOfPersons);
        familyMemberDataChange(numOfPersons, `Személy ${numOfPersons + 1}`, 0, false, false, [false, "", false], [false, 0, 0], 0);
    };

    return ( 
        <button id="new-tab" className="outline outline-green-950 hover:bg-green-500 hover:outline-green-950 hover:text-white rounded-md border-solid pb-0.5" onClick={addNewTab}>+</button>
     );
}
 
export default AddNewFamilyMember;