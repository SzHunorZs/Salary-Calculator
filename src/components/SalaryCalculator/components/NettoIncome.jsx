
const NettoIncome = ({
  tabIndex,
  familyMemberData,
}) => {

  let gross = familyMemberData[tabIndex].grossIncome;
  let med = gross*0.185;
  let personalTax=0;
  let personalTaxRel=0;
  let newlyWedRel = 0;
  const under25Checked = () => {
    if (familyMemberData[tabIndex].grossIncome < 499953) {
      return 0
    }
    if (familyMemberData[tabIndex].grossIncome > 499952) {
      let diff = familyMemberData[tabIndex].grossIncome - 499952;
      return parseInt(
        (
          diff * 0.15
        ).toFixed(0)
      );
    }
  };

  if (familyMemberData[tabIndex].under25 == true) {
    personalTax = under25Checked();
  }
  else{
    personalTax = familyMemberData[tabIndex].grossIncome * 0.15;
  }
  if (
    familyMemberData[tabIndex].newlyWedDiscount[0] == true &&
    familyMemberData[tabIndex].newlyWedDiscount[2] == true
  ) {
    newlyWedRel += 5000;
  }
  if (familyMemberData[tabIndex].pDiscount == true) {
    personalTaxRel+=77300;
  }
  let familyTaxRel = 0;
  if (familyMemberData[tabIndex].familyDiscount[0] == true) {
    switch (familyMemberData[tabIndex].familyDiscount[2]) {
        case 1:
          familyTaxRel+=parseInt(familyMemberData[tabIndex].familyDiscount[1])*10000;
        break;
        case 2:
          familyTaxRel+=parseInt(familyMemberData[tabIndex].familyDiscount[1])*20000;
        break;
        case 3:
          familyTaxRel+=parseInt(familyMemberData[tabIndex].familyDiscount[1])*33000;
        break;
    }
  }

  let taxes = med+personalTax;
  let relief = personalTaxRel + newlyWedRel + familyTaxRel;

  relief = relief>taxes? taxes:relief;
  let net = gross-taxes+relief;

  if (familyMemberData[tabIndex]) {
    familyMemberData[tabIndex].netIncome = parseInt(net.toFixed(0));
  }
  return (
    <>
    <div className="flex-col w-full">
      <span className="flex justify-center text-2xl font-bold ">Számított nettó bér:</span>
      <p className="flex justify-center w-1/3 h-20 text-center rounded-md text-2xl font-bold bg-green-400 m-auto px-2 py-6">{familyMemberData[tabIndex].netIncome} Ft</p>
    </div>
    </>
  );
};

export default NettoIncome;
