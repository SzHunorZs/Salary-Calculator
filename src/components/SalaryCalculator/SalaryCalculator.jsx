import GrossIncome from "./components/GrossIncome";
import NettoIncome from "./components/NettoIncome";
import FamilyMemberNameInput from "./components/FamilyMemberNameInput";
import Discounts from "./components/Discounts";
import DeleteFamilyMember from "./components/DeleteFamilyMember";

const SalaryCalculator = ({
  familyMemberData,
  familyMemberDataChange,
  tabIndex,
  setTabIndex,
  setFamilyMemberData
}) => {
  return (
    <>
            <div className="flex w-full  relative justify-end rounded m-auto bg-slate-100">
      <DeleteFamilyMember
      tabIndex={tabIndex}
      setTabIndex={setTabIndex}
      familyMemberData={familyMemberData}
      familyMemberDataChange={familyMemberDataChange}
      setFamilyMemberData={setFamilyMemberData}
      />
      </div>
      <div className="flex flex-col w-full md:w-1/2 gap-3" >

      <FamilyMemberNameInput
        label="Családtag neve:"
        tabIndex={tabIndex}
        familyMemberData={familyMemberData}
        familyMemberDataChange={familyMemberDataChange}
        />
  
      <GrossIncome
        familyMemberData={familyMemberData}
        familyMemberDataChange={familyMemberDataChange}
        tabIndex={tabIndex}
        setTabIndex={setTabIndex}
        />
        
        </div>
      <Discounts
        tabIndex={tabIndex}
        familyMemberData={familyMemberData}
        familyMemberDataChange={familyMemberDataChange}
        ></Discounts>
      <NettoIncome 
        tabIndex={tabIndex}
        familyMemberData={familyMemberData}
        />
    </>
  );
};

export default SalaryCalculator;
