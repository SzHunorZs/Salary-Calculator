import FamilyMemberBruttoIncomeInput from "./FamilyMemberBruttoIncomeInput";
const GrossIncome = ({familyMemberData, familyMemberDataChange, tabIndex}) => {
  //console.log(familyMemberData[tabIndex]);
  const buttons = ["-5%", "-1%", "+1%", "+5%"];
  const MAX = 1000000; 
const getBackgroundSize = () => { 
return { 
  backgroundSize: `${(familyMemberData[tabIndex].grossIncome * 100) / MAX}% 100%` };

}; 

  function changeGrossIncome(percent) {
    let newGross;
    switch (percent) {

      case "-5%":
        newGross = (parseInt((familyMemberData[tabIndex].grossIncome * 0.95).toFixed(0)));
        break;
      case "-1%":
        newGross = (parseInt((familyMemberData[tabIndex].grossIncome * 0.99).toFixed(0)));
        break;
      case "+1%":
        newGross = (parseInt((familyMemberData[tabIndex].grossIncome * 1.01).toFixed(0)));
        break;
      case "+5%":
        newGross = (parseInt((familyMemberData[tabIndex].grossIncome * 1.05).toFixed(0)));
        break;
    }

    familyMemberDataChange(tabIndex, familyMemberData[tabIndex].name , newGross , familyMemberData[tabIndex].under25, familyMemberData[tabIndex].pDiscount, familyMemberData[tabIndex].newlyWedDiscount, familyMemberData[tabIndex].familyDiscount, familyMemberData[tabIndex].netIncome)
  }
  return (
    <>
      <FamilyMemberBruttoIncomeInput
      label={"Brutto bér:"}
      tabIndex ={tabIndex}
      familyMemberData = {familyMemberData}
      familyMemberDataChange ={familyMemberDataChange}
      
      />
      <input
        type="range"
        min="0"
        max={MAX}
        style={getBackgroundSize()}
        onChange={(e) => { getBackgroundSize(e); familyMemberDataChange(tabIndex, familyMemberData[tabIndex].name , e.target.value , familyMemberData[tabIndex].under25, familyMemberData[tabIndex].pDiscount, familyMemberData[tabIndex].newlyWedDiscount, familyMemberData[tabIndex].familyDiscount, familyMemberData[tabIndex].netIncome);
        }}
        value={familyMemberData[tabIndex].grossIncome}
      />
      <div className="flex flex-row justify-evenly gap-2">
      {buttons.map((b, index) => (
        <input
        className="flex w-20 text-center justify-center rounded border-2 gap-3 border-green-950  hover:bg-green-500 hover:text-white"
        key={index}
        onClick={(e) => changeGrossIncome(e.target.value)}
        type="button" 
        value={b}
        ></input>
      ))}
      </div>
    </>
  );
};

export default GrossIncome;
