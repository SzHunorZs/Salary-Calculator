const FailymeBruttoIncomeInput = ({label, tabIndex, familyMemberData, familyMemberDataChange}) => {
    return ( 
        <>
        <div className="flex flex-col gap-3">
            <span className=" text-xl font-semibold">{label}</span>
            <input className="rounded h-10 pl-3" onInput={(e) => familyMemberDataChange(tabIndex, familyMemberData[tabIndex].name , e.target.value , familyMemberData[tabIndex].under25, familyMemberData[tabIndex].pDiscount, familyMemberData[tabIndex].newlyWedDiscount, familyMemberData[tabIndex].familyDiscount, familyMemberData[tabIndex].netIncome)} 
            type={"number"} placeholder={"250000 Ft"} 
            value={familyMemberData[tabIndex].grossIncome}/>
        </div>
        <span className=" text-xs">Add meg a bruttó béredet!</span>
            </> 
    );
}
 
export default FailymeBruttoIncomeInput;