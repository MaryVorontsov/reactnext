import User from '../components/User.js'
import Company from '../components/Company.js'
import Menu from '../components/Menu.js'
function test(){
return (
	  <div className="App">
      <Menu />
      <h1>Hello</h1>
      <User name="Mike" />
      <User name="John" />
      <Company name="Alpha" textColor ="white" color="black" address="Green str 11-190" />
      <Company name="Beta" color="yellow" address="Brown str bl 5-23" />
    </div>
  );
}

export default test