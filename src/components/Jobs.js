import Title from "./Title"
import ContractType from "./ContractType";
import Country from "./Country";
import City from "./City";

const Jobs = (props) => {
    return (
        <div className={props.className}>
            <Title title={props.title} />
            <ContractType contractType={props.contractType} />
            <Country country={props.country} />
            <City city={props.city} />
        </div>
    );
};

export default Jobs;