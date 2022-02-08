import React from "react";

class Definitions extends React.Component{

    renderList(){
        const {data} = this.props
        const dt = data.map((item)=>[<dt key={item.id}>{item.dt}</dt>,<dd key={item.id}>{item.dd}</dd>])
        
        return dt

    }
    render(){
        return(
            <dl>
                {this.renderList()}
            </dl>
        )
    }

}



export default Definitions