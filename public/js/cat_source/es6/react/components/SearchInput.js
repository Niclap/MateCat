class SearchInput extends React.Component {
    constructor (props) {
        super(props);
        this.onKeyPressEvent = this.onKeyPressEvent.bind(this);
    }

    filterByName(e) {
        e.preventDefault();
        if($(this.textInput).val().length) {
            $(this.closeIcon).show()
        } else {
            $(this.closeIcon).hide();
        }

        this.props.onChange($(this.textInput).val());

        return false;
    }

    closeSearch() {
        $(this.textInput).val('');
        $(this.closeIcon).hide();
        this.props.onChange($(this.textInput).val());
    }

    onKeyPressEvent(e) {
        if(e.which == 27) {
            this.closeSearch();
        } else {
            if (e.which == 13 || e.keyCode == 13) {
                e.preventDefault();
                return false;
            }
        }
    }


    render () {
        return (
                <nav>
                    <div className="nav-wrapper">
                        <form>
                            <div className="input-field">
                                <input id="search" type="search" required="required"
                                    placeholder="Search by project name"
                                    ref={(input) => this.textInput = input}
                                    onChange={this.filterByName.bind(this)}
                                    onKeyPress={this.onKeyPressEvent.bind(this)}/>
                                <i className="icon-search prefix"/>
                                {/*<i className="prefix close-x" style={{display: 'none'}}
                                   ref={(closeIcon) => this.closeIcon = closeIcon}
                                   onClick={this.closeSearch.bind(this)}/>*/}
                            </div>
                        </form>
                    </div>
                </nav>
                  
        );
    }
}

export default SearchInput ;