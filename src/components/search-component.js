import React, { Component } from 'react';
import { 
	Text, 
	View,
	TouchableHighlight, 
	TextInput, 
	StyleSheet 
} from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import onSubmit from '../actions/index-action';
import Request from '../request';

export default class SearchComponent extends Component {
    constructor(props) {
        super(props);
        this.state={
            url: ''
        };
        this.onButtonPress = this.onButtonPress.bind(this);
    }

    onButtonPress() {
        Request(this.state.url, this.props.onSubmit);
        this.setState({url: ''});
    }

	render() {
		return (
			<View style={styles.main}>
    		<TextInput style={styles.input} 
                placeholder='url of video' 
                onChangeText={(url) => this.setState({url})}
                value={this.state.url}
            />
    		<TouchableHighlight style={styles.button} onPress={this.onButtonPress}>
    			<Text style={styles.buttonText}>Preview</Text>
    		</TouchableHighlight>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	main: {
    flex: 2,
    marginTop: 40,
    marginBottom: 40
  },
  input: {
    height: 36,
    padding: 4,
    margin: 20,
    fontSize: 18,
    borderWidth: 1,
    borderColor: '#48BBEC',
    borderRadius: 8,
    color: '#48BBEC'
  },
  button: {
    height: 36,
    marginTop: 10,
    flexDirection: 'row',
    backgroundColor: '#48BBEC',
    borderColor: '#48BBEC',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 10,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center'
  },
  buttonText: {
    fontSize: 18,
    color: 'white'
  }
});

function mapDispatchToProps(dispatch) {
    return bindActionCreators({onSubmit: onSubmit}, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchComponent);