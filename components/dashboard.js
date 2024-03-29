import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { connect } from 'react-redux';
import { getDashboardAction } from '../redux/actions';

class Dashboard extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>We have { this.props.dashboardData } friends!</Text>
        <Button
          title="getDashboard"
          onPress={() =>
            this.props.dispatch(getDashboardAction.get())
          }
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const mapStateToProps = (state) => {
    const { friends } = state
    return { friends }
  };
  
export default connect(mapStateToProps)(Dashboard);