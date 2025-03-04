
import FamilyTax from "./FamilyTax";
import NewlyWedTax from "./NewlyWedTax";
import PersonalTax from "./PersonalTax";
import Under25Tax from "./Under25Tax";

const Discounts = ({ tabIndex, familyMemberData, familyMemberDataChange }) => {
  const handleDateChange = (e) => {
    let newWed = [];
    if (familyMemberData[tabIndex].newlyWedDiscount[0] == true) {
      newWed[0] = true;
      newWed[1] = e.target.value;

      const marriageMonth = new Date(newWed[1]).getMonth();
      const marriageYear = new Date(newWed[1]).getFullYear();
      const nextMonthAfterMarriage = new Date(marriageYear, marriageMonth + 1);

      const twoYearsAgo = new Date();
      twoYearsAgo.setFullYear(twoYearsAgo.getFullYear() - 2);

      if (
        new Date() > nextMonthAfterMarriage &&
        new Date(newWed[1]) > twoYearsAgo
      ) {
        newWed[2] = true;
      } else {
        newWed[2] = false;
      }
    }
    familyMemberDataChange(
      tabIndex,
      familyMemberData[tabIndex].name,
      familyMemberData[tabIndex].grossIncome,
      familyMemberData[tabIndex].under25,
      familyMemberData[tabIndex].pDiscount,
      newWed,
      familyMemberData[tabIndex].familyDiscount,
      familyMemberData[tabIndex].netIncome
    );
  };

  const handleFamilyDiscount = (e) => {
    let familyD=[];
    let id = e.target.id;
    if(familyMemberData[tabIndex].familyDiscount[0] == true){
      familyD[0] = familyMemberData[tabIndex].familyDiscount[0];
      familyD[1] = familyMemberData[tabIndex].familyDiscount[1];
      familyD[2] = familyMemberData[tabIndex].familyDiscount[2];
    switch (id) {
      case "incDep":
        familyD[1]++;
        break;
      case "decDep":
        if(familyD[1]>0)
        {
          
          familyD[1]--;
          if(familyD[1]<familyD[2])
          {familyD[2]--;}
        }
        else
        {
          familyD[1]==0;
        }
        break;
      case "incBen":
        if(familyD[1]>familyD[2])
        {
          if(familyD[2]<3)
          {
          familyD[2]++;
          }
        }
        break;
      case "decBen":
        if(familyD[2]>0)
        {
          familyD[2]--;
        }
        else
        {
          familyD[2]==0;
        }
        break;
    }
  }
    familyMemberDataChange(
      tabIndex,
      familyMemberData[tabIndex].name,
      familyMemberData[tabIndex].grossIncome,
      familyMemberData[tabIndex].under25,
      familyMemberData[tabIndex].pDiscount,
      familyMemberData[tabIndex].newlyWedDiscount,
      familyD,
      familyMemberData[tabIndex].netIncome
    );
  };

  return (
    <>
      <Under25Tax tabIndex={tabIndex} familyMemberData={familyMemberData} familyMemberDataChange={familyMemberDataChange}/>
      
      <PersonalTax tabIndex={tabIndex} familyMemberData={familyMemberData} familyMemberDataChange={familyMemberDataChange}/>

      <NewlyWedTax  tabIndex={tabIndex} familyMemberData={familyMemberData} familyMemberDataChange={familyMemberDataChange} handleDateChange={handleDateChange}/> 

      <FamilyTax tabIndex={tabIndex} familyMemberData={familyMemberData} familyMemberDataChange={familyMemberDataChange} handleFamilyDiscount={handleFamilyDiscount}/>
      
    </>
  );
};

export default Discounts;
