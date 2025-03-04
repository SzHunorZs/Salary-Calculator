import { useState } from "react";
import HouseholdSalaryCalculator from "./components/HouseholdSalaryCalculator";

function App() {
  const [tabIndex, setTabIndex] = useState(0);

  const [familyMemberData, setFamilyMemberData] = useState({
    0: {
      name: "Személy 1",
      grossIncome: 0,
      under25: false,
      pDiscount: false,
      newlyWedDiscount: [false, "", false],
      familyDiscount: [false, 0, 0],
      netIncome: 0,
    },
  });

  const familyMemberDataChange = (
    index,
    name,
    grossIncome,
    under25,
    pDiscount,
    newlyWedDiscount,
    familyDiscount,
    netIncome
  ) => {
    setFamilyMemberData((prevData) => {
      return {
        ...prevData,
        [index]: {
          name: name,
          grossIncome: grossIncome,
          under25: under25,
          pDiscount: pDiscount,
          newlyWedDiscount: newlyWedDiscount,
          familyDiscount: familyDiscount,
          netIncome: netIncome,
        },
      };
    });
  };

  return (
    <div>
      <h1 className=" text-4xl font-bold pb-5 pl-5">Bérkalkulátor alkalmazás</h1>
      <HouseholdSalaryCalculator
        familyMemberData={familyMemberData}
        familyMemberDataChange={familyMemberDataChange}
        tabIndex={tabIndex}
        setTabIndex={setTabIndex}
        setFamilyMemberData={setFamilyMemberData}
      />
    </div>
  );
}

export default App;
