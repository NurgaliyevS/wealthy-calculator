import InvestmentScenarioPage from "../../components/InvestmentScenarioPage";

export default InvestmentScenarioPage;

export async function getServerSideProps(context) {
  const { params } = context;
  const [amount, rate, years] = params.params;
  return {
    props: { amount, rate, years },
  };
}
