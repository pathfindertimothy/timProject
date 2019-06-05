import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Footer, FooterTab, Button, Icon} from 'native-base';
 
export class AppFooter extends Component {
   render() {
       return(
           <Footer>
               <FooterTab>
                   <Button>
                       <Icon name='egg' />
                       <Text>Home</Text>
                   </Button>
                   <Button>
                       <Icon name='person' />
                       <Text>Payments</Text>
                   </Button>
               </FooterTab>
           </Footer>
       );
   }
}