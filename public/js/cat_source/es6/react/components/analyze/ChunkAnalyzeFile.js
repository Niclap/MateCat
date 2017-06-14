
let AnalyzeConstants = require('../../constants/AnalyzeConstants');

class ChunkAnalyzeFile extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidUpdate() {
    }

    componentDidMount() {
    }

    componentWillUnmount() {
    }

    shouldComponentUpdate(nextProps, nextState){
        return true;
    }

    render() {

        return <div className="chunk-detail sixteen wide column shadow-1 pad-right-10">
            <div className="left-box">
                <i className="icon-make-group icon"></i>
                <div className="file-title-details">
                    Job Title detail
                    (<span className="f-details-number">2</span>)
                </div>
            </div>
            <div className="single-analysis">
                <div className="single total">5'434,234</div>
                <div className="single payable-words">235,234</div>
                <div className="single new">456</div>
                <div className="single repetition">256,342</div>
                <div className="single internal-matches">356</div>
                <div className="single p-50-74">5,0403</div>
                <div className="single p-75-84">7,942</div>
                <div className="single p-65-94">6,942</div>
                <div className="single p-95-99">3,942</div>
                <div className="single tm-100">645</div>
                <div className="single tm-public">8,435</div>
                <div className="single tm-context">4,524</div>
                <div className="single machine-translation">6'754,648</div>
            </div>
        </div>;


    }
}

export default ChunkAnalyzeFile;