import React, { Component } from 'react';
import { 
	Text, 
	StyleSheet,
	View,
	Image
} from 'react-native';
import { connect } from 'react-redux';

class PreviewComponent extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<View style={styles.main}>
        <View style={styles.border}>
  				<View style={styles.part1}>
  					<Image 
              style={styles.img}
  						source={{uri: this.props.data.imgUrl}} 
  					/>
  					<Text style={styles.text}>{this.props.data.title}</Text>
  				</View>
  				<Text style={styles.part2}>{this.props.data.text}</Text>
  			</View>
      </View>
		);
	}
}

const styles = StyleSheet.create({
  main: {
    flex: 5,
    margin: 20
  },
  border: {
    borderWidth: 1,
    borderColor: '#48BBEC'
  },
  part1: {
    margin: 10,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  img: {
    width: 130,
    height: 130,
    marginRight: 10,
  },
  text: {
    flex: 1,
    alignSelf: 'flex-start'
  },
  part2: {
    margin: 10,
  }
});

function mapStateToProps({data}) {
  return { data };
}

export default connect(mapStateToProps)(PreviewComponent);