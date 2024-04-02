import { SearchBar } from 'react-native-elements';
import React from 'react';
import {styles} from './Style' ;
import { Appstyles } from '../../config/styles';
import { color } from 'react-native-reanimated';
import { Icon } from 'react-native-elements';
export default class SearchBarComponent extends React.Component {
    constructor(props) {
        super(props);
    }
  state = {
    search: '',
  };

  updateSearch = (search) => {
    this.setState({ search });
  };

  render() {
    const { search } = this.state;

    return (
      <SearchBar
        placeholder={this.props.searchProps.placeholder}
        onChangeText={this.updateSearch}
        value={search}
        platform="default"
        lightTheme={true}
        containerStyle={styles.searchBarContainer}
        inputContainerStyle={styles.inputContainerStyle}
        inputStyle={{color:Appstyles.colors.COLOR_BLACK}}
        placeholderTextColor={Appstyles.colors.COLOR_LIGHT_GREY}
        searchIcon={<Icon name="search" color={Appstyles.colors.PRIMARY_COLOR} size={25} />}
      />
    );
  }
}