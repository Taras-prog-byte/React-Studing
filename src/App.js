import React, {Component} from 'react';
import UserComponent from "./components/user/UserComponent";

class App extends Component {

    users = [
        {name:'Vasya', age:10, status:false, id:1},
        {name:'Roma', age:12, status:false, id:2},
        {name:'Misha', age:14, status:false, id:3},
        {name:'Artur', age:10, status:false, id:4},
        {name:'Solya', age:22, status:true, id:5},
        {name:'Mary', age:20, status:false, id:6},
        {name:'Taras', age:21, status:true, id:7},
        {name:'Olya', age:18, status:false, id:8},
        {name:'Max', age:17, status:false, id:9},
        {name:'Kokos', age:171, status:true, id:10},
        {name:'Ananas', age:12, status:true, id:11}
    ];

    render() {

        return (//jsx розмітка, !!!не відображає булеві значення!!!
            //!!!map щоб виводити ціді списки не цилом!!!
            <div>
                {
                    this.users.map((value, index) => {
                        let name='target';
                        if(index%2){
                            name='point'
                        }

                        return(<UserComponent item={value} key={index} clsName={name}/>)
                    })
                }
            </div>
        );
    }
}

export default App;