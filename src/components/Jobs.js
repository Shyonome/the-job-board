import H1 from "./H1"
import H2 from "./H2"
import Paragraph from "./Paragraph";

const Jobs = (props) => {
    return (
        <div>

        <div class="item">
            <H2 h2={props.h2} />
            <Paragraph paragraph={props.paragraph} />
        </div>

      </div>
    );
};

export default Jobs;