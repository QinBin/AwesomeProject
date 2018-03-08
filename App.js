import React from 'react';
import { StyleSheet, Text, View, ActivityIndicator, FlatList} from 'react-native';

// export default class App extends React.Component {
//   render() {
//     return (
//       <View style={styles.container}>
//         <Text>Open up App.js to start working on your app!</Text>
//         <Text>Changes you make will automatically reload.</Text>
//         <Text>Shake your phone to open the developer menu.</Text>
//         <Text>{`\n\n\n`}</Text>
//         <View style={styles.secondcon}>
//           <Greeting name='Rexxar' />
//           <Greeting name='Jaina' />
//           <Greeting name='Valeera' />
//         </View>
//       </View>
//     );
//   }
// }
//
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: 'red',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   secondcon: {
//     backgroundColor: 'green',
//     //flex: 0.3
//   },
//  red: {
//    color: 'red',
//  },
// });
//
// class Greeting extends React.Component {
//   render() {
//     return (
//       <Text>Hello {this.props.name}!</Text>
//     );
//   }
// }


export default class FetchExample extends React.Component {

  constructor(props){
    super(props);
    this.state ={ isLoading: true}
  }

  componentDidMount(){
    return fetch('https://randomuser.me/api/?results=5')
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          isLoading: false,
          dataSource: responseJson.results,
        }, function(){
        });
      })
      .catch((error) =>{
        console.error(error);
      });
  }

  render(){
    if(this.state.isLoading){
      return(
        <View style={{flex: 1, padding: 20}}>
          <ActivityIndicator/>
        </View>
      )
    }

    return(
      <View style={{flex: 1, paddingTop:20}}>
        <FlatList
          data={this.state.dataSource}
          renderItem={({item}) => <Text>{item.gender}, {item.email}</Text>}
          keyExtractor={(item, index) => index}
        />
      </View>
    );
  }
}
