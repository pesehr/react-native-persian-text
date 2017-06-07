import React, {  Component } from 'react';
import {Text} from 'react-native';

const latinToPersianMap = ['۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹', '۰'];
const latinNumbers = [/1/g, /2/g, /3/g, /4/g, /5/g, /6/g, /7/g, /8/g, /9/g, /0/g];

class PersianText extends Component {

    string = "";

    constructor(props){
        super(props);
        this.string = props.children;
        for (let i = 0; i < 10; i++) {
            this.string = this.string.replace(latinNumbers[i], latinToPersianMap[i]);
        }

    }

    render(){
        return(
            <Text style={this.props.style}>
                {this.string}
            </Text>
        )
    }


}

export default PersianText;
