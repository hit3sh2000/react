import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Grommet, Footer,Text,Anchor } from 'grommet'
 function Footer1() {
    return(
        <div>
            <Grommet >
                <Footer background="#333333" pad="medium">
                  <Text>FOOTER</Text>
                  <Anchor label="Links" />
                </Footer>
            </Grommet>
            
        </div>
    )
}


export default Footer1








