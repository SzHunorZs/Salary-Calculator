const FamilyMemberNameInput = ({label, tabIndex, familyMemberData, familyMemberDataChange}) => {
    return (
        <>
        <div className="flex flex-col gap-3">
            <span className=" text-xl font-semibold">{label}</span>
            <input className="rounded h-10 pl-3" onInput={(e) => familyMemberDataChange(tabIndex, e.target.value, familyMemberData[tabIndex].grossIncome , familyMemberData[tabIndex].under25, familyMemberData[tabIndex].pDiscount, familyMemberData[tabIndex].newlyWedDiscount, familyMemberData[tabIndex].familyDiscount, familyMemberData[tabIndex].netIncome)} 
            type={"text"} placeholder={familyMemberData[tabIndex].name} 
            value={familyMemberData[tabIndex].name}/>
        </div>
        <span className=" text-xs">Add meg a családtag nevét!</span>
            </>  
    );
}
 
export default FamilyMemberNameInput;